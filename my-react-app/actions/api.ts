import { setAuth } from "./cookie";

export const loginUser = async (userName: string, password: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userName: userName,
        password: password,
      },
    });

    const data = await res.json();
    console.log("API Response:", data);

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


// export async function signupUser(body: {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   DOB: string;
//   phone: string;
// }) {
//   const res = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "Signup failed");
//   }

//   return await res.json();
// }