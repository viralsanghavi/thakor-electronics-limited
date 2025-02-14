import {NavLink} from "@remix-run/react";
import {Facebook, Linkedin, Twitter} from "lucide-react";
import {Card, CardContent} from "~/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}

interface MeetOurTeamProps {
  title?: string;
  description?: string;
  team?: TeamMember[];
}

export function MeetOurTeam({
  title = "Meet Our Team",
  description = "Get to know the talented individuals behind our success. Our diverse team brings a wealth of experience and passion to every project",
  team = [
    {
      name: "Mr. Dilip Shah",
      position: "Chairman",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://www.facebook.com/wix",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Mr. Viraj Shah",
      position: "Director of Business Development",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      name: "Mr. Dimpal Shah",
      position: "Managing director",
      facebook: "https://facebook.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
    },
    {
      name: "Mr. Kevin Shah",
      position: "Head of Technical Sales",
      twitter: "https://twitter.com/sarahwilliams",
      facebook: "https://facebook.com/sarahwilliams",
      linkedin: "https://linkedin.com/in/sarahwilliams",
    },
  ],
}: MeetOurTeamProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
          {team.map((member) => (
            <Card
              key={member.name}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {member.position}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {member.twitter && (
                      <NavLink
                        to={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                      </NavLink>
                    )}
                    {member.facebook && (
                      <NavLink
                        to={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                        <span className="sr-only">Facebook</span>
                      </NavLink>
                    )}
                    {member.linkedin && (
                      <NavLink
                        to={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </NavLink>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
