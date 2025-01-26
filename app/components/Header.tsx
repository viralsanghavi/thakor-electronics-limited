import {NavLink} from "@remix-run/react";
import {Phone} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="lg:container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <NavLink to="/">
            <img
              src="/logo.jpg"
              alt="company_logo"
              className="h-16 object-contain"
            />
          </NavLink>
          <NavLink to="/about">
            <img
              src="/collab.png"
              alt="collab"
              className="h-12 w-fit object-contain"
            />
          </NavLink>
          {/* <div className="flex items-center border px-4 py-2">
            <input
              className="outline-none min-w-60 w-full bg-transparent text-white placeholder:text-white placeholder:opacity-55"
              placeholder="Product name.."
            />
            <button className="text-base text-white outline-none">
              Search
            </button>
          </div> */}
        </div>
        <div className="flex gap-8 items-center">
          <NavLink to="/contact">
            <p className="text-white hover:underline-offset-4 hover:underline">
              Contact
            </p>
          </NavLink>
          <NavLink to="/catalogue">
            <p className="text-white hover:underline-offset-4 hover:underline">
              Catalogue
            </p>
          </NavLink>
        </div>
        <div className="z-20 flex items-center gap-4">
          <Phone size={16} className="text-white" />
          <a href="tel:+911234567890" className="text-white">
            +91 123 456 7890
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
