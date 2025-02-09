import Cookies from "js-cookie";

export function getAuth(): string | null {
    return Cookies.get("auth") || null;
}

export function setAuth(token: string, expires: string): void {
    console.log("token", token);

    Cookies.set("auth", token, {
        expires: new Date(expires), 
        secure: true,
        sameSite: "Strict",
    });
}

export function getSignupCookie(): string | null {
    return Cookies.get("signup") || null;
}

export function setSignupCookie(expires: string): void {
    Cookies.set("signup", "true", {
        expires: new Date(expires), 
        secure: true,
        sameSite: "Strict",
    });
}

export function deleteAuth(): void {
    Cookies.remove("auth");
}
