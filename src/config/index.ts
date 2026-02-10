import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Katherine Chang",
  author: "Katherine Yuna Chang",
  description:
    "Computer engineering undergraduate & Minor in FinTech",
  lang: "en",
  siteLogo: "/katherine-mini-pfp.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Resume", href: "/resume_09232025.pdf"},
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Blog", href: "#blog" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/kchang312/" },
    { text: "Github", href: "https://github.com/katc1213" },
  ],
  socialImage: "/kchang-logo.png",
  canonicalURL: "https://kchang-port.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Katherine Chang",
    specialty: "Enterprise Data Management / Analytics",
    summary:
      "Computer Engineering Undergraduate with Minor in FinTech",
    email: "kc6107j@gmail.com",
  },
  about: {
    description: `
      Hi, I'm Katherine! I am currently a fourth-year Computer Engineering undergraduate at Georgia Tech with concentrations in Distributed Systems and Information Internetworks. I specialize in database management and data analysis revolving around financial technology.

      Over the years, I’ve honed my skills in building technical projects and worked in diverse environments, from network labs to commercial banking. I thrive in fast-paced environments and enjoy discovering ways in how technology can be integrated in financial institutions or services for optimization. 
    `,
    image: "/katherine-mini-pfp.jpg", 
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
      company: "Georgia Tech School of Electrical and Computer Engineering",
      position: "ECE 1100 Undergraduate Teaching Assistant",
      startDate: "January 2026",
      endDate: "Present",
      summary: [
        "Held resume review sessions, project presentations, and interact with new or transfer ECE students.",
        "Provide career development resources and support students with guidance in major course scheduling.",
      ],
    },
    {
      company: "Georgia Tech Research Insitute (GTRI)",
      position: "Computer Engineering Intern",
      startDate: "May 2025",
      endDate: "August 2025",
      summary: [
        "Built CLI tool to transmit and receive messages from an off board host to view debug information and control RF board through USB interface, reducing field test setup time by 20%",
        "Managed SQLite-based telemetry database to log 1000+ UAV location and user equipments data points for testing, improving real-time 5G network monitoring and diagnostics",
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
      name: "Crypto-Traditional Market Correlation Analysis",
      summary: "Conducted time-series correlation and stress-period analysis on cryptocurrency and traditional assets using Python, SQL, and financial market data to evaluate diversification benefits and risk behavior.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
      category: "Analysis",
    },
    {
      name: "Emergency Room Management System",
      summary: "Database system with patient, room, and doctor information.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
      category: "Analysis",
    },
    {
      name: "Growth Stock Porfolio",
      summary: "Stock portfolio visualization extracting real-time financial metrics through an automated data pipeline",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
      category: "Engineering",
    },
    {
      name: "Secure Voting Machine VIP",
      summary: 
        "Conducted and presented technical research on AES encryption standards and implemented secure data processing in FPGA-based voting systems",
      linkPreview: "/",
      linkSource: "https://github.gatech.edu/ConfigurableComputing/vip/wiki/Start-Here#our-project",
      image: "/vip-cover.png",
      category: "Research",
    },
    {
      name: "PaceTune App",
      summary: 
        "Developed iOS application that dynamically adjusted audio volume based on user's running pace",
      linkPreview: "https://docs.google.com/presentation/d/14urMT_S4MvroiB6eAHTOOy8TPV9Ai1iCTWsEMKqrIgM/edit?usp=sharing",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/pace-cover.png",
      category: "Research",
    },
  ],
};

// #39703b
