import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ScrollEffect from './ScrollEffect'

const Input = ({ label, type, name, value, onChange, ...props }) => (
  <div className="flex flex-col mb-6">
    <label htmlFor={name} className="mb-2 font-semibold text-[#03009b]">{label}</label>
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



// Sign In component
 const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setError("");
  };

  const handleLogin =  async(e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email and password required."); return;
    }
    
     const result = await login(form.email, form.password);
    if (result.success) {
      navigate("/blogs");
    } else {
      setError(result.error);
    }
  };

  return (
    
    <ScrollEffect>
    <section className="max-w-md mx-auto bg-[#e4e9ed] rounded-3xl p-8 shadow-xl font-[font1] mt-20 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-[#03009b]">Sign In</h2>
      <form onSubmit={handleLogin} autoComplete="off">
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} autoFocus />
        <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        {error && <div className="mb-3 text-red-600 font-semibold">{error}</div>}
        <button type="submit" className="w-full bg-[#03009b] text-white font-semibold py-3 rounded-xl hover:bg-[#4284FF] transition">
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center text-base text-[#03009b] font-semibold">
        Don't have an account?{" "}
        <Link to="/register" className="underline hover:text-[#4284FF] transition">
          Sign up
        </Link>
      </div>
    </section>
    </ScrollEffect>
  );
};


export {SignIn}