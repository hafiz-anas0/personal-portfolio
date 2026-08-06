"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";


interface User {
    _id: string;
    name: string;
    email: string;
}


interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);


export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        refreshUser();
    }, []);


    async function refreshUser() {
        try {

            const response = await fetch(
                "/api/auth/me"
            );

            const data = await response.json();


            if (data.success) {
                setUser(data.user);
            }

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    }


    async function logout() {

        await fetch(
            "/api/auth/logout",
            {
                method: "POST",
            }
        );

        setUser(null);
    }


    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {

    const context = useContext(AuthContext);


    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }


    return context;
}