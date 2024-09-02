import Image from "next/image";
import { Button } from "../ui/button";

import hero from "@/public/landing/hero.svg";
import { heroUsers } from "@/config/landing-page-config";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-22 gap-10">
      {/* LEFT */}
      <div className="text-center lg:text-start space-y-10">
        <main className="text-5xl md:text-6xl font-bold">
          <h1>
            <span className="inline bg-gradient-to-r from-[#f3e824]  to-[#D247BF] text-transparent bg-clip-text">
              SaaS
            </span>{" "}
            kit & components for{" "}
            <span className="inline bg-gradient-to-r from-[#5eef6d] via-[#03a3d7] to-[#1048c1] text-transparent bg-clip-text">
              developers
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The boilerplate with all the components you need to build and ship
          your startup in days, not weeks.
        </p>

        <Button className="w-full md:w-1/3">Get Started</Button>

        {/* Customers */}
        <div className="flex justify-center lg:justify-start ml-1 mt-6">
          {heroUsers.map((user, i) => (
            <Image
              key={i}
              className="h-8 w-8 h- -ml-1 my-auto object-cover rounded-full ring-1 ring-yellow-600"
              src={user.image}
              alt={user.alt}
            />
          ))}

          <p className="ml-4 my-auto text-sm opacity-75">
            Loved by 1,735 happy users
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden z-10 lg:flex justify-center items-center w-[500px] h-[500px]">
        <Image src={hero} alt="" />
      </div>
    </section>
  );
};
