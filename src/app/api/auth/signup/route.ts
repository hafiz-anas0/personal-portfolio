import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(request: NextRequest) {
    try {
        // 1. Read data
        const { name, email, password, confirmPassword } =
            await request.json();

        // 2. Validate fields
        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                { status: 400 }
            );
        }

        // 3. Check password match
        if (password !== confirmPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Passwords do not match.",
                },
                { status: 400 }
            );
        }

        // 4. Connect to MongoDB
        await connectDB();

        // 5. Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User already exists.",
                },
                { status: 409 }
            );
        }

        // 6. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 7. Create user 👇 ADD IT HERE
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "7d",
            }
        );

        // 8. Return success
        const response = NextResponse.json(
            {
                success: true,
                message: "Signup successful.",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            {
                status: 201,
            }
        );

        response.cookies.set(
            "token",
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
            }
        );

        return response;

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}