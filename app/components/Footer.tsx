import {NavLink} from "@remix-run/react";
import {Facebook, Twitter, Linkedin, Mail, Phone, MapPin} from "lucide-react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Separator} from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Thakor Electronics
            </h2>
            <p className="text-sm">
              Your trusted B2B wholesaler for electronic components and
              solutions since 1995.
            </p>
            <div className="flex mt-4 space-x-4">
              <NavLink to="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </NavLink>
              <NavLink to="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </NavLink>
              <NavLink to="#" className="hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </NavLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="#" className="hover:text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-white">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-white">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:text-white">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@thakorelectronics.com"
                  className="hover:text-white"
                >
                  info@thakorelectronics.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>
                  123 Electronics Street, Tech City, Gujarat, India 380001
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest product updates and
              industry news.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Thakor Electronics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
