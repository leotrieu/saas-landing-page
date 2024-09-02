import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { features } from "@/config/landing-page-config";

const Features = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Great{" "}
        <span className="bg-gradient-to-b from-primary/70 to-primary text-transparent bg-clip-text">
          Features
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Bunch of fully coded & designed section examples like Hero, Features,
        Footers, Auth, Pricing & Landing page, and so on.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-xl">
                <Image src={icon} alt="" />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className=" text-sm">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
