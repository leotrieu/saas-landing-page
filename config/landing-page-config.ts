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

// FAQs
export const FAQs = [
  {
    question: "How is this boilerplate going to help me ship an app faster?",
    answer:
      "This boilerplate covers all the standard, time-consuming tasks so you don’t have to. With the basics taken care of, you can focus on building the unique features that set your app apart.",
    value: "item-1",
  },
  {
    question:
      "Can I customize the boilerplate to fit the unique requirements of my indie project?",
    answer:
      "Yes, definitely! The boilerplate is designed to be highly adaptable. You can easily tweak and modify it to perfectly align with your project’s specific needs and vision.",
    value: "item-2",
  },
  {
    question: "For how long can I get updates?",
    answer:
      "You’ll receive lifetime updates with the source code. This ensures that you always have access to the most up-to-date features and enhancements as they’re released.",
    value: "item-3",
  },
  {
    question: "Which plan is right for me?",
    answer:
      "If you’re an individual developer, the Pro license is your best bet. If you’re part of a team or company, the Enterprise license offers unlimited developer access along with Premium support, making it ideal for collaborative projects.",
    value: "item-4",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Once you gain access, our repo is yours to keep, so refunds aren’t available. However, with our average customers launching in 7 days and lifetime support via Discord, you’ll have everything you need to succeed.",
    value: "item-5",
  },
];

// FOOTER
export const footer = [
  {
    title: "Links",
    links: [
      { url: "/pricing", name: "Pricing" },
      { url: "/documentation", name: "Documentation" },
      { url: "/support", name: "Support" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { url: "#", name: "Github" },
      { url: "#", name: "Instagram" },
      { url: "#", name: "Facebook" },
    ],
  },
  {
    title: "Legal",
    links: [
      { url: "/terms", name: "Terms and conditions" },
      { url: "/policy", name: "Privacy policy" },
    ],
  },
];
