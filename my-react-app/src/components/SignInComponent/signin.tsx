import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { loginUser } from "../../../actions/api";

interface FormData {
  userId: string;
  password: string;
}

function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Logging in with:", formData);
      const response = await loginUser(formData.userId, formData.password);
      console.log("Login successful:", response);
      alert("Login successful! Check console for details.");
      // You can store the token in localStorage/cookies if needed
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 3, borderRadius: 3, p: 3, bgcolor: "white" }}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
            Login
          </Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField 
              label="User Id" 
              name="userId" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={handleChange} 
              disabled={loading}
            />
            <TextField 
              label="Password" 
              name="password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              onChange={handleChange} 
              disabled={loading}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ py: 1.5, mt: 2 }} 
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <Typography align="center" sx={{ mt: 2, color: "gray" }}>
            Don't have an account?{" "}
            <Link to="/" style={{ color: "#1976D2", textDecoration: "none" }}>
              Sign Up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
