import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "./../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
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
      console.log(error);
      toast.success(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#000428] to-[#004e92] h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto bg-blue-300 mt-24 w-1/3 bg-transparent border-2 border-white/20 backdrop-blur-md shadow-md rounded-lg">
        <form
          onSubmit={submitHandler}
          className="w-full bg-blue-300 rounded-xl p-4 m-5"
        >
          <h1 className="font-bold text-xl mb-5">Log In</h1>
          <div className="my-2">
            <Label className="text-base">Email</Label>
            <Input
              type="email"
              placeholder="mail@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className=" text-base"
            />
          </div>
          <div className="my-4">
            <Label className="text-base">Password</Label>
            <Input
              type="password"
              placeholder="enter password"
              value={input.password}
              name="password"
              className=" text-base"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-3">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1" className="text-base">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2" className="text-base">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-3 text-base bg-[#004e92]"
            >
              Login
            </Button>
          )}

          <span className="text-base">
            Don't have an account?
            <Link to="/signup" className="text-blue-700">
              {" "}
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
