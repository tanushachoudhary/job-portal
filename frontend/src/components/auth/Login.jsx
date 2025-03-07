import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import img from "@/assets/image.png";

const Login2 = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-12 p-6">
        {/* Left Side (Image) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img src={img} alt="Login Illustration" className="w-full object-contain rounded-xl" />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-2xl font-bold mb-5 text-center md:text-left">Log In</h1>
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <Label className="text-base">Email</Label>
              <Input
                type="email"
                placeholder="mail@example.com"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label className="text-base">Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
              />
            </div>

            {/* Role Selection */}
            <div>
              <Label className="text-base">Role</Label>
              <RadioGroup className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />
                  Student
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  Recruiter
                </label>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            {loading ? (
              <Button className="w-full flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Please Wait...
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-900">
                Login
              </Button>
            )}
          </form>

          {/* Signup Redirect */}
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 font-semibold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login2;
