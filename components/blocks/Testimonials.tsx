import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { testimonials } from "@/config/landing-page-config";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        People Share{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Love
        </span>
      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Discover why developers love this SaaS boilerplate
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden drop-shadow-xl shadow-black/10"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt={userName} src={image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="text-sm opacity-75 mt-2">
              {comment}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
