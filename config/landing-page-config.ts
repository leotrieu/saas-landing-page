// NAVBAR
export const navbarLinks = [
  {
    title: "Pricing",
    url: "#pricing",
  },
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    title: "FAQ",
    url: "#faq",
  },
];

// HERO
import user1 from "@/public/landing/user_1.jpeg";
import user2 from "@/public/landing/user_2.jpeg";
import user3 from "@/public/landing/user_3.jpeg";
import user4 from "@/public/landing/user_4.jpeg";
import user5 from "@/public/landing/user_5.jpeg";

export const heroUsers = [
  {
    image: user1,
    alt: "user1",
  },
  {
    image: user2,
    alt: "user2",
  },
  {
    image: user3,
    alt: "user3",
  },
  {
    image: user4,
    alt: "user4",
  },
  {
    image: user5,
    alt: "user5",
  },
];

// FEATURES
import authentication from "@/public/landing/authentication.svg";
import database from "@/public/landing/database.svg";
import payment from "@/public/landing/payment.svg";
import email from "@/public/landing/email.svg";

export const features = [
  {
    icon: authentication,
    title: "Authentication",
    description:
      "Leverage Auth.js for secure user authentication with magic links, Google login, and more",
  },
  {
    icon: payment,
    title: "Payments",
    description:
      "Integrate Stripe for easy subscription management, checkout, and payment processing",
  },
  {
    icon: database,
    title: "Database",
    description:
      "Utilize Prisma's free and stable Postgres database for data management",
  },
  {
    icon: email,
    title: "Email",
    description: "Streamline email communication with react-email and Resend",
  },
];
