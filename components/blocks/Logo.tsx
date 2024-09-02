import Link from "next/link";
import Image from "next/image";

import { site } from "@/config/site-config";
import { poppins } from "@/components/shared/fonts";

const Logo = () => {
  return (
    <Link href="/" className="flex-start">
      <div
        className={`${poppins.className} flex flex-row items-center space-x-2`}
      >
        <Image src="/logo.svg" width={32} height={32} alt="logo" priority />
        <span className="text-lg">{site.name}</span>
      </div>
    </Link>
  );
};

export default Logo;
