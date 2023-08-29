import { FC } from "react";

import { Button } from "../ui/button";
import { navLinks } from "@/constants/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import UserDropdownMenu from "./UserDropdownMenu";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="p-8 flex items-center justify-between bg-dark-2 border-b-[1px] border-primary h-[100px]">
      <Link to="/" className="flex items-center">
        <img className="w-16" src="/logo.png" />
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.ref;
            return (
              <Button
                onClick={() => navigate(item.ref)}
                key={item.label}
                className={`py-4 px-8 rounded-xl  ${
                  isActive
                    ? "bg-primary-background hover:bg-primary-background"
                    : ""
                }`}
                variant="ghost"
              >
                <Icon className="mr-2 text-sm" />
                <h5 className="text-sm font-semibold">{item.label}</h5>
              </Button>
            );
          })}
        </div>
        <UserDropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
