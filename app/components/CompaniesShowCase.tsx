import {cn} from "~/lib/utils";
import {Card, CardContent} from "./ui/card";

interface Company {
  name: string;
  logo: string;
}

interface CompaniesShowcaseProps {
  title: string;
  description: string;
  companies: Company[];
}

export function CompaniesShowcase({
  title,
  description,
  companies,
}: CompaniesShowcaseProps) {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {companies.map((company, index) => (
            <Card
              key={index}
              className={cn(
                "bg-white dark:bg-gray-800"
                // index === 1 && "lg:transform lg:scale-110"
              )}
            >
              <CardContent className="flex items-center justify-center p-6">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={200}
                  height={100}
                  className="max-h-24 w-auto object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
