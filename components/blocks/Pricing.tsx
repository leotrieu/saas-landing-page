import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig, CircleX } from "lucide-react";

import { packages } from "@/config/landing-page-config";

const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Start today and turn your vision into reality within days, not months!
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map(
          ({ title, popular, price, description, button, services }, i) => (
            <Card
              key={i}
              className={
                popular
                  ? "bg-muted drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {title}
                  {popular ? (
                    <span className="text-sm text-primary secondary">
                      Most popular
                    </span>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>

                <CardDescription>{description}</CardDescription>
              </CardHeader>

              <CardContent>
                <hr className="w-full m-auto p-4" />
                <div className="flex">
                  <div className="space-y-4">
                    {services.map((service, i) => (
                      <span key={i} className="flex">
                        {service.support ? (
                          <CircleCheckBig className="text-green-500" />
                        ) : (
                          <CircleX className="text-red-500" />
                        )}

                        <h3 className="ml-2">{service.name}</h3>
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full">{button}</Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Pricing;
