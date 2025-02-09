import { jwtVerify } from "jose";

export function parseJwt(token: string | null) {
    if (!token || token.split(".").length < 3) return null;

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    try {
        const decodedData = atob(base64); // Use atob() instead of Buffer
        return JSON.parse(decodedData);
    } catch (error) {
        console.error("JWT parsing failed:", error);
        return null;
    }
}

export async function validate(token: string | undefined) {
    if (!token) return null;

    try {
        // Use correct env variable access
        const secretKey = new TextEncoder().encode(import.meta.env.VITE_SECRET_KEY);

        const { payload } = await jwtVerify(token, secretKey);
        return payload;
    } catch (err) {
        console.error("Token verification failed:", err);
        return null;
    }
}
