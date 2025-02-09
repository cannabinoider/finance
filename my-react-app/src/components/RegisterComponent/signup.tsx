import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
// import finance from "../../assets/finance.svg";

interface FormData {
  userId : string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    let tempErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!/^[0-9]{10}$/.test(formData.phone)) tempErrors.phone = "Phone must be 10 digits";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gradient-to-r from-blue-500 to-purple-500, m-2">
      {/* <div className="flex items-center mb-2">
        <img className="mr-2" style={{
        position: "relative",
        top: "-8px",
        right: "16px",
        height: "100px",
        width: "80px",
        }} src={finance} alt="Icon" />
        <Typography variant="h3" className="text-white text-xlg font-bold " sx={{ fontWeight: "bold" }}>Financial Management</Typography>
      </div> */}
      <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 3, borderRadius: 3, p: 1, marginTop:4, bgcolor: "white" }}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold",p:1 }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField label="User Id" name="userId" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="First Name" name="firstName" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Last Name" name="lastName" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Date of Birth" name="dob" type="date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Email" name="email" variant="outlined" fullWidth margin="normal" error={!!errors.email} helperText={errors.email} onChange={handleChange} />
            <TextField label="Phone" name="phone" variant="outlined" fullWidth margin="normal" error={!!errors.phone} helperText={errors.phone} onChange={handleChange} />
            <TextField label="Password" name="password" type="password" variant="outlined" fullWidth margin="normal" onChange={handleChange} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1, mt: 2 }}>
              Sign Up
            </Button>
          </form>
          <Typography align="center" sx={{ mt: 2, color: "gray" }}>
            Already have an account?{" "}
            <Link to="/signin" style={{ color: "#1976D2", textDecoration: "none" }}>
                Sign In
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
