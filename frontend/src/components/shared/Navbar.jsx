import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../utils/constant";
import { setUser } from "@/redux/authSlice";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed!");
    }
  };

  return (
    <div className="bg-white shadow-md w-full top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">
          <Link to="/">
            Insider<span className="text-blue-700">Jobs</span>
          </Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex text-lg font-semibold items-center gap-6">
          {user && user.role === "recruiter" ? (
            <>
              <li>
                <Link to="/admin/companies">Companies</Link>
              </li>
              <li>
                <Link to="/admin/jobs">Jobs</Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-blue-700">
                <Link to="/">Home</Link>
              </li>
              <li className="text-blue-700">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="text-blue-700">
                <Link to="/browse">Browse</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link to="/admin/companies">Companies</Link>
                  </li>
                  <li>
                    <Link to="/admin/jobs">Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-blue-700">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-blue-700">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li className="text-blue-700">
                    <Link to="/browse">Browse</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}

        {/* Login / Profile */}
        {!user ? (
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline" className="font-semibold text-base">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-700 text-white font-semibold text-base hover:bg-blue-900">
                Signup
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="flex items-center gap-4 p-4">
                <Avatar>
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{user?.fullname}</h4>
                  <p className="text-sm text-muted-foreground">
                    {user?.profile?.bio}
                  </p>
                </div>
              </div>
              <div className="border-t p-4">
                {user.role === "student" && (
                  <Link to="/profile" className="flex items-center gap-3">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </Link>
                )}
                <div className="flex items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button onClick={logoutHandler} variant="link">
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
