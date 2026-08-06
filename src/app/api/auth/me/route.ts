import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";



export async function GET(request: NextRequest) {
    try {
        // 1. Get token from cookie
        const token = request.cookies.get("token")?.value;

        // 2. Check token exists
        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    user: null,
                },
                {
                    status: 401,
                }
            );
        }


        // 3. Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as {
            userId: string;
            email: string;
        };


        // 4. Connect database
        await connectDB();


        // 5. Find user
        const user = await User.findById(decoded.userId)
            .select("-password");


        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    user: null,
                },
                {
                    status: 404,
                }
            );
        }


        // 6. Return user data
        return NextResponse.json(
            {
                success: true,
                user,
            },
            {
                status: 200,
            }
        );


    } catch (error) {
        console.error("Auth Check Error:", error);

        return NextResponse.json(
            {
                success: false,
                user: null,
            },
            {
                status: 500,
            }
        );
    }
}