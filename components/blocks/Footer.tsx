import Link from "next/link";
import Logo from "./Logo";

import { footer } from "@/config/landing-page-config";

const Footer = () => {
  return (
    <footer id="footer">
      <hr />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Logo />
        </div>

        {footer.map(({ title, links }, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-lg text-primary">{title}</h3>
            {links.map(({ url, name }, i) => (
              <Link
                key={i}
                href={url}
                className="opacity-60 hover:opacity-100 text-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className="container pb-14 text-center text-sm opacity-75 opacity-">
        <h3>
          Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
