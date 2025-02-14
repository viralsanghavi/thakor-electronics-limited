import {NavLink} from "@remix-run/react";
import {HamIcon, Menu, Phone} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {Button} from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white text-black">
      <div className="lg:container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <NavLink to="/">
            <img
              src="/logo.jpg"
              alt="company_logo"
              className="h-16 w-full object-contain"
            />
          </NavLink>
          <NavLink to="/about">
            <img
              src="/collab.png"
              alt="collab"
              className="h-12 w-fit object-contain"
            />
          </NavLink>
        </div>
        <div className="lg:flex items-center gap-20 hidden">
          <div className="flex gap-8 items-center font-bold text-lg">
            <NavLink to="/">
              <p className="text-black hover:underline-offset-4 hover:underline">
                Home
              </p>
            </NavLink>
            <NavLink to="/about">
              <p className="text-black hover:underline-offset-4 hover:underline">
                About
              </p>
            </NavLink>
            <NavLink to="/contact">
              <p className="text-black hover:underline-offset-4 hover:underline">
                Contact Us
              </p>
            </NavLink>
            <NavLink to="/catalogue">
              <p className="text-black hover:underline-offset-4 hover:underline">
                Products
              </p>
            </NavLink>
          </div>
          <div className="flex gap-4 items-center text-lg">
            <div className="z-20 flex items-center gap-2">
              <Phone size={16} className="text-black" />
              <a href="tel:+919673771702" className="text-black">
                +919673771702
              </a>
            </div>
            /
            <div className="z-20 flex items-center gap-4">
              <Phone size={16} className="text-black" />

              <a href="tel:+919930867826" className="text-black">
                +919930867826
              </a>
            </div>
          </div>
        </div>
        <Drawer direction="right">
          <DrawerTrigger className=" lg:hidden">
            <Menu className="mr-2" />
          </DrawerTrigger>
          <DrawerContent className="h-full max-w-md ml-auto">
            <DrawerHeader>
              <DrawerTitle>Thakor Electronics</DrawerTitle>
              <DrawerDescription>
                <div className="flex gap-4">
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
                </div>
                <div className="flex flex-col gap-8 items-start mt-8 ml-4 font-bold text-lg">
                  <NavLink to="/">
                    <p className="text-black hover:underline-offset-4 hover:underline">
                      Home
                    </p>
                  </NavLink>
                  <NavLink to="/about">
                    <p className="text-black hover:underline-offset-4 hover:underline">
                      About
                    </p>
                  </NavLink>
                  <NavLink to="/contact">
                    <p className="text-black hover:underline-offset-4 hover:underline">
                      Contact Us
                    </p>
                  </NavLink>
                  <NavLink to="/catalogue">
                    <p className="text-black hover:underline-offset-4 hover:underline">
                      Products
                    </p>
                  </NavLink>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex gap-4 items-center">
                <div className="z-20 flex items-center gap-4">
                  <Phone size={16} className="text-black" />
                  <a href="tel:+919673771702" className="text-black">
                    +91 9673771702
                  </a>
                </div>
                /
                <div className="z-20 flex items-center gap-4">
                  <Phone size={16} className="text-black" />

                  <a href="tel:+919930867826" className="text-black">
                    +91 9930867826
                  </a>
                </div>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
