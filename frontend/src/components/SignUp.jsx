import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ScrollEffect from './ScrollEffect'


const Input = ({ label, type, name, value, onChange, ...props }) => (
  <div className="flex flex-col mb-6">
    <label htmlFor={name} className="mb-2 font-semibold text-[#03009b]">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={type === "password" ? "new-password" : type}
      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      placeholder={label}
      {...props}
    />
  </div>
);

// Sign Up component
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = await register(form);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.error);
    }
  };

  return (
    
    <ScrollEffect>
    <section className="max-w-sm mx-auto bg-[#e4e9ed] rounded-2xl p-6 shadow-lg font-[font1] mt-16 mb-28">
      <h2 className="text-2xl font-bold mb-4 text-[#03009b]">Sign Up</h2>
      <form onSubmit={handleRegister} autoComplete="off">
        <Input
          label="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoFocus
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {error && (
          <div className="mb-2 text-sm text-red-600 font-medium">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-[#03009b] text-white font-medium py-2.5 rounded-lg hover:bg-[#4284FF] transition"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-[#03009b] font-medium">
        Already registered?{" "}
        <Link to="/login" className="underline hover:text-[#4284FF] transition">
          Login here
        </Link>
      </div>
    </section>
    </ScrollEffect>
  );
};

export { SignUp };
