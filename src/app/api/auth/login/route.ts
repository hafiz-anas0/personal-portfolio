import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: NextRequest) {
    try {
        // Read request body
        const { email, password } = await request.json();

        //  Validate input
        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and password are required.",
                },
                {
                    status: 400,
                }
            );
        }


        //  Connect to MongoDB
        await connectDB();

        // 4. Find user by email
        const user = await User.findOne({ email });
        console.log("Found user:", user);

        //  Check if user exists
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password.",
                },
                {
                    status: 401,
                }
            );
        }

        // Compare entered password with hashed password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        //  Invalid password
        if (!isPasswordCorrect) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password.",
                },
                {
                    status: 401,
                }
            );
        }


        //JWT Token Generation
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


        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful.",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            {
                status: 200,
            }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;
        
    } catch (error) {
        console.error("Login API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}