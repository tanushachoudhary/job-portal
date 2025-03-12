import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import img2 from "@/assets/image2.png";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
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
      <div className="p-10">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-3">
          {/* Left Side (Image) */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <img
              src={img2}
              alt="Signup Illustration"
              className="w-full object-contain"
            />
          </div>

          {/* Right Side (Form) */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-5 text-center md:text-left">
              Create Your Account
            </h1>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label className="text-base">Full Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                />
              </div>
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
                <Label className="text-base">Phone Number</Label>
                <Input
                  type="text"
                  placeholder="1234567890"
                  value={input.phoneNumber}
                  name="phoneNumber"
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

              {/* Profile Picture Upload */}
              <div>
                <Label className="text-base">Profile Picture</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="cursor-pointer border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              {/* Submit Button */}
              {loading ? (
                <Button className="w-full flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Please Wait...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-blue-700 text-white hover:bg-blue-900"
                >
                  Sign Up
                </Button>
              )}
            </form>

            {/* Login Redirect */}
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
