export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export async function login(data: LoginData) {

    const response = await fetch(
        "/api/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );


    return await response.json();
}



export async function signup(data: SignupData) {

    const response = await fetch(
        "/api/auth/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );


    return await response.json();
}