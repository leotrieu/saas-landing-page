import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import { FAQs } from "@/config/landing-page-config";
import { site } from "@/config/site-config";

const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Questions
            </span>
          </h2>

          <h3 className="font-medium mt-4">
            Still have questions?{" "}
            <Link
              href={`mailto: ${site.email}`}
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Email us
            </Link>
          </h3>
        </div>

        <Accordion type="single" collapsible className="md:w-1/2 AccordionRoot">
          {FAQs.map(({ question, answer, value }, i) => (
            <AccordionItem key={i} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent className="opacity-60">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
