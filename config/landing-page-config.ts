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

// TESTIMONIALS
export const testimonials = [
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Emily Davis",
    userName: "@emily_d",
    comment:
      "I love this product as it saves me tons of time. It's incredibly easy to use and has quickly become an essential part of my daily routine.",
  },
  {
    image: "https://i.pravatar.cc/150?img=68",
    name: "Michael Brown",
    userName: "@mike_brown",
    comment:
      "This app is a game changer for my daily routine! It streamlines my tasks and helps me stay organized, making my life so much simpler.",
  },

  {
    image: "https://i.pravatar.cc/150?img=38",
    name: "Sophia Johnson",
    userName: "@sophia_j",
    comment:
      "Simply the best investment I've made this year. The efficiency it brings to my workflow is unmatched, and it's worth every penny.",
  },
  {
    image: "https://i.pravatar.cc/150?img=25",
    name: "David Wilson",
    userName: "@david_w",
    comment:
      "Amazing tool—it's made my work so much easier. I can't believe how much more productive I am now, thanks to this fantastic product.",
  },
  {
    image: "https://i.pravatar.cc/150?img=15",
    name: "Olivia Martinez",
    userName: "@olivia_m",
    comment:
      "A must-have for anyone who values their time. This product has transformed the way I manage my schedule and has been a huge time-saver.",
  },
  {
    image: "https://i.pravatar.cc/150?img=29",
    name: "James Taylor",
    userName: "@james_t",
    comment:
      "This product has exceeded all my expectations! It's intuitive, reliable, and has significantly improved my daily workflow and productivity.",
  },
];

// PRICING
export const packages = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Ideal for prototypes and testing as you get started with a site.",
    button: "Get Started",
    services: [
      { support: 1, name: "10 Templates" },
      { support: 1, name: "10 Form submissions" },
      { support: 0, name: "File storage" },
      { support: 0, name: "Email support" },
      { support: 0, name: "Plugin updates" },
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 9,
    description:
      "Designed for simple website that you can share with a client.",
    button: "Get Started",
    services: [
      { support: 1, name: "50 Templates" },
      { support: 1, name: "100 Form submissions" },
      { support: 1, name: "5Gb File storage" },
      { support: 1, name: "Email support" },
      { support: 0, name: "Plugin updates" },
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 79,
    description: "Best for teams and high-traffic business sites.",
    button: "Contact US",
    services: [
      { support: 1, name: "100 Templates" },
      { support: 1, name: "500 Form submissions" },
      { support: 1, name: "20Gb File storage" },
      { support: 1, name: "Professional support" },
      { support: 1, name: "Plugin updates" },
    ],
  },
];
