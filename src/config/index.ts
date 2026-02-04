import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Katherine Chang",
  author: "Katherine Yuna Chang",
  description:
    "Computer engineering undergradute with specialization in enterprise data management and analytics.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Katherine Chang",
    specialty: "Data Management and Analytics",
    summary:
      "Computer engineering undergradute with specialization in enterprise data management and analytics.",
    email: "kc6107j@gmail.com",
  },
  experience: [
    {
      company: "Citizens Bank",
      position: "Enterprise Data & Analytics Intern",
      startDate: "May 2026",
      endDate: "August 2026",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Georgia Tech Research Insitute (GTRI)",
      position: "Computer Engineering Intern",
      startDate: "May 2025",
      endDate: "August 2025",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Advanced Technology Development Center (ATDC)",
      position: "Operations Student Assistant",
      startDate: "August 2024",
      endDate: "May 2026",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Katherine! I am currently a fourth-year Computer Engineering undergraduate at Georgia Tech with concentrations in Distributed Systems and Information Internetworks. I specialize in database management and data analysis revolving around financial technology.

      Over the years, I’ve honed my skills in building technical projects and worked in diverse environments, from network labs to commercial banking. I thrive in fast-paced environments and enjoy discovering ways in how technology can be integrated in financial institutions or services for optimization. 
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
