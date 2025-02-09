import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

interface FormData {
  userId: string;
  password: string;
}

function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 3, borderRadius: 3, p: 3, bgcolor: "white" }}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="User Id" name="userId" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Password" name="password" type="password" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <Button type="submit" variant="contained" color="primary" fullWidth href="/home" sx={{ py: 1.5, mt: 2 }}>
              Sign In
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
