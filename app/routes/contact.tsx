import {Mail, MapPin, Phone} from "lucide-react";
import React, {useState} from "react";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import {Button} from "~/components/ui/button";
import {Card} from "~/components/ui/card";
import {Input} from "~/components/ui/input";
import {SidebarSeparator} from "~/components/ui/sidebar";
import {Textarea} from "~/components/ui/textarea";
import {Toaster} from "~/components/ui/toaster";
import {toast} from "~/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", {name, email, message});
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <Toaster />
        <div className="flex container flex-wrap mx-auto justify-center items-center gap-20">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question or want to learn more? Get in touch with our
                team.
              </p>
            </div>
            <div className="mx-auto max-w-[500px] mt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <Card className="p-8 max-w-xl">
            <h3 className="font-bold text-xl mb-4">CORPORATE HEADQUARTERS</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:mktg@thakorelectronics.com" className="">
                  mktg@thakorelectronics.com
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:purchase@thakorelectronics.com" className="">
                  purchase@thakorelectronics.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919673771702" className="">
                  +91 9673771702
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919930867826" className="">
                  +91 9930867826
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={36} className="mr-2" />
                <a
                  href="https://www.google.com/maps/search/thakor+electronics+Neelkanth+Business+Park/@19.0806334,72.8961539,16z?entry=s&sa=X"
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  7th Floor, B Wing, Neelkanth Corporate Park, 08, Kirol
                  Village, W, Vidyavihar, Mumbai, Maharashtra 400086{" "}
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
