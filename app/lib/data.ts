// ─── Types ────────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: "earned" | "in-progress" | "planned";
  date?: string;
  badgeColor: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "project" | "certification" | "achievement";
  icon: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Tarek Hamraoui",
  title: "Master's in Networks & Multimedia",
  subtitle: "Network Engineer | Full-Stack Developer",
  bio: "Passionate about networking and software development. Holder of a Bachelor's degree in Information Systems & Software, and a Master's in Networks & Multimedia. I design and secure enterprise networks with Cisco technologies, and I build full-stack web applications with Next.js, TypeScript, and PHP.",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/cv-tarek-hamraoui.pdf",
};

export const contactInfo: ContactInfo = {
  email: "hamraouitarik0@gmail.com",
  linkedin: "https://www.linkedin.com/in/tarik-hamraoui-186a51274/",
  github: "https://github.com/tarik497",
  location: "Algeria",
};

export const aboutPoints = [
  {
    icon: "🎓",
    title: "Academic Background",
    description:
      "Bachelor's degree in Computer Systems & Software Engineering (ISIL, 2024), followed by a Master's degree in Networks & Multimedia (2026).",
  },
  {
    icon: "🌐",
    title: "Network Administration",
    description:
      "Designing and managing enterprise-grade networks with Cisco technologies, VLANs, routing protocols, and access control.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "Implementing security policies, ACLs, and best practices to protect network infrastructure from threats.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Building full-stack web applications with Next.js, TypeScript, and PHP — from e-commerce platforms to admin dashboards.",
  },
  {
    icon: "🖥️",
    title: "System Administration",
    description:
      "Managing Linux and Windows Server environments, Active Directory, DNS, and virtualization platforms.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Networking",
    icon: "network",
    color: "#00d4ff",
    skills: [
      { name: "TCP/IP", level: 90 },
      { name: "VLAN", level: 88 },
      { name: "STP", level: 80 },
      { name: "OSPF", level: 78 },
      { name: "DHCP", level: 92 },
      { name: "NAT", level: 85 },
      { name: "ACL", level: 82 },
      { name: "Subnetting", level: 95 },
      { name: "Routing & Switching", level: 85 },
    ],
  },
  {
    title: "Cisco Technologies",
    icon: "cisco",
    color: "#1d6fa4",
    skills: [
      { name: "Packet Tracer", level: 85 },
      { name: "Network Design", level: 75 },
      { name: "Troubleshooting", level: 70 },
    ],
  },
  {
    title: "System Administration",
    icon: "server",
    color: "#00ff88",
    skills: [
      { name: "Linux", level: 70 },
      { name: "Windows Server", level: 75 },
      { name: "Active Directory", level: 72 },
      { name: "DNS", level: 76 },
    ],
  },
  {
    title: "Programming",
    icon: "code",
    color: "#a78bfa",
    skills: [
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Next.js", level: 76 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    color: "#fb923c",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "Wireshark", level: 30 },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    status: "earned",
    date: "Sept 2025",
    badgeColor: "#0078d4",
    icon: "☁️",
  },
  {
    title: "Journey of a Cloud Project (As a Trainer)",
    issuer: "I.T Research Community (ITRC)",
    status: "earned",
    date: "Nov 2025",
    badgeColor: "#00d4ff",
    icon: "🎤",
  },
  {
    title: "Journey of a Cloud Project (As a Participant)",
    issuer: "I.T Research Community (ITRC)",
    status: "earned",
    date: "Nov 2025",
    badgeColor: "#00d4ff",
    icon: "☁️",
  },
  {
    title: "Network Administration",
    issuer: "Génie Informatique",
    status: "earned",
    date: "June 2025",
    badgeColor: "#00ff88",
    icon: "🌐",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    status: "earned",
    date: "Nov 2024",
    badgeColor: "#76b900",
    icon: "🧠",
  },
  {
    title: "Cybersecurity Awareness: Cybersecurity Terminology",
    issuer: "LinkedIn Learning Community",
    status: "earned",
    date: "Apr 2024",
    badgeColor: "#0a66c2",
    icon: "🔒",
  },
];

export const projects: Project[] = [
  {
    title: "FiscalPay — Tax & Fiscal Management Platform",
    description:
      "Full-stack tax management platform: a Flutter mobile app for taxpayers and a React admin dashboard, backed by a Node.js/Express REST API.",
    longDescription:
      "A complete fiscal management ecosystem composed of a Flutter mobile app and a React admin dashboard, both connected to a Node.js/Express REST API with JWT authentication. Taxpayers can manage tax declarations (including G50 forms), cotisations, payments, business registry (registre de commerce) records, run a tax simulator, book appointments, and receive notifications. Administrators manage users, review and process declarations, and monitor activity through analytics, reports, and security controls.",
    features: [
      "Tax Declarations & G50 Forms",
      "Cotisations & Payments",
      "Business Registry (Registre de Commerce)",
      "Tax Simulator",
      "Appointment Booking",
      "Admin Analytics & Reports",
      "JWT Authentication",
    ],
    technologies: ["Flutter", "Dart", "React", "JavaScript", "Node.js", "Express", "REST API", "JWT"],
    image: "/images/project-fiscalpay.jpg",
    githubUrl: "https://github.com/tarik497/fiscalPay",
    category: "Development",
  },
  {
    title: "Prime Watches",
    description:
      "Full-stack e-commerce web application for selling watches, built with Next.js and TypeScript and deployed on Vercel.",
    longDescription:
      "A modern e-commerce platform for watches built with Next.js and TypeScript. Covers the full shopping experience — product catalog, cart, and a responsive storefront — deployed live on Vercel.",
    features: [
      "Product Catalog",
      "Responsive Storefront",
      "Shopping Cart",
      "TypeScript Codebase",
      "Vercel Deployment",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/project-prime-watches.jpg",
    githubUrl: "https://github.com/tarik497/prime-watches",
    demoUrl: "https://prime-watches-brown.vercel.app",
    category: "Development",
  },
  {
    title: "Fitness Web Site",
    description:
      "A gym/fitness platform with a public-facing site and a dedicated admin panel, built in PHP.",
    longDescription:
      "A full-stack fitness web application built with PHP, composed of a public site where users can explore gym content and a separate admin panel for managing content and users.",
    features: [
      "Public Website",
      "Admin Dashboard",
      "Content Management",
      "User-Facing Pages",
    ],
    technologies: ["PHP", "HTML/CSS", "MySQL"],
    image: "/images/project-fitness.jpg",
    githubUrl: "https://github.com/tarik497/fitness-web-site",
    category: "Development",
  },
  {
    title: "VLAN Lab — Inter-VLAN Routing",
    description:
      "Cisco Packet Tracer lab implementing VLAN segmentation and inter-VLAN routing via router-on-a-stick.",
    longDescription:
      "A Cisco Packet Tracer lab with 3 VLANs spread across 3 switches, routed through a single router using the router-on-a-stick method over an 802.1Q trunk.",
    features: [
      "VLAN Segmentation",
      "802.1Q Trunking",
      "Router-on-a-Stick",
      "Inter-VLAN Routing",
    ],
    technologies: ["Cisco IOS", "Packet Tracer", "VLANs"],
    image: "/images/project-vlan.jpg",
    githubUrl: "https://github.com/tarik497/VLAN-Lab",
    category: "Networking",
  },
  {
    title: "STP Lab — Spanning Tree Protocol",
    description:
      "Three Cisco Packet Tracer topologies demonstrating Spanning Tree Protocol behavior and loop prevention.",
    longDescription:
      "A set of three Packet Tracer topologies — basic, 2-link redundancy, and an advanced 9-switch design — demonstrating Root Bridge election, port states, and Layer 2 loop prevention with STP.",
    features: [
      "Root Bridge Election",
      "Port State Analysis",
      "Redundant Links",
      "Loop Prevention",
    ],
    technologies: ["Cisco IOS", "Packet Tracer", "STP"],
    image: "/images/project-stp.jpg",
    githubUrl: "https://github.com/tarik497/STP-Lab",
    category: "Networking",
  },
  {
    title: "DHCP & Subnetting Lab",
    description:
      "Cisco router configured as a DHCP server across multiple subnetted LANs with automatic address assignment.",
    longDescription:
      "A 130.3.0.0/16 network divided into 4 subnets, each served by its own DHCP pool on a Cisco router, with connectivity verified across all subnets.",
    features: [
      "IPv4 Subnetting",
      "DHCP Pool Configuration",
      "Multi-LAN Design",
      "Connectivity Verification",
    ],
    technologies: ["Cisco IOS", "Packet Tracer", "DHCP", "Subnetting"],
    image: "/images/project-dhcp.jpg",
    githubUrl: "https://github.com/tarik497/DHCP-Lab",
    category: "Networking",
  },
  {
    title: "WAN Lab — Multi-Site Connectivity",
    description:
      "Cisco Packet Tracer WAN labs covering point-to-point serial links and hub-and-spoke topologies.",
    longDescription:
      "WAN labs simulating multi-site connectivity using point-to-point serial links and a hub-and-spoke topology, with static routing configured across all sites.",
    features: [
      "Point-to-Point Links",
      "Hub-and-Spoke Topology",
      "Static Routing",
      "Multi-Site WAN Design",
    ],
    technologies: ["Cisco IOS", "Packet Tracer", "WAN", "Static Routing"],
    image: "/images/project-wan.jpg",
    githubUrl: "https://github.com/tarik497/WAN-Lab",
    category: "Networking",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Bachelor's in Information Systems & Software",
    description:
      "Graduated with a Bachelor's degree (Licence) in Information Systems & Software, building a strong foundation in programming, systems, and software engineering.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "Discovered Networking & CCNA Path",
    description:
      "Began Cisco Networking Academy courses, fell in love with TCP/IP, routing, and the architecture of the internet.",
    type: "education",
    icon: "🌐",
  },
  {
    year: "2024",
    title: "Cybersecurity Awareness Certificate",
    description:
      "Completed a LinkedIn Learning course on cybersecurity terminology, building foundational security vocabulary and concepts.",
    type: "certification",
    icon: "🔒",
  },
  {
    year: "2024",
    title: "Fundamentals of Deep Learning",
    description:
      "Earned NVIDIA's Fundamentals of Deep Learning certification, covering neural networks and applied deep learning techniques.",
    type: "certification",
    icon: "🧠",
  },
  {
    year: "2024",
    title: "Multi-Site Infrastructure Project",
    description:
      "Designed and documented a multi-branch WAN using OSPF, redundant links, and centralized services.",
    type: "project",
    icon: "🗺️",
  },
  {
    year: "2025",
    title: "Network Administration Certificate",
    description:
      "Earned a Network Administration certification from Génie Informatique, validating hands-on network administration skills.",
    type: "certification",
    icon: "🌐",
  },
  {
    year: "2025",
    title: "Fitness Web Site",
    description:
      "Built a full-stack fitness platform in PHP, including a public site and a separate admin panel.",
    type: "project",
    icon: "🏋️",
  },
  {
    year: "2025",
    title: "Microsoft Certified: Azure Fundamentals",
    description:
      "Earned Microsoft's Azure Fundamentals certification, validating core cloud computing and Azure service concepts.",
    type: "certification",
    icon: "☁️",
  },
  {
    year: "2025",
    title: "Journey of a Cloud Project",
    description:
      "Completed the ITRC \"Journey of a Cloud Project\" both as a participant and as a trainer, guiding others through cloud project fundamentals.",
    type: "certification",
    icon: "🎤",
  },
  {
    year: "2026",
    title: "Prime Watches — E-Commerce App",
    description:
      "Developed and deployed a Next.js/TypeScript e-commerce web application for watches, live on Vercel.",
    type: "project",
    icon: "🛒",
  },
  {
    year: "2026",
    title: "Master's in Networks & Multimedia",
    description:
      "Graduated with a Master's degree in Networks & Multimedia, deepening expertise in advanced networking and multimedia systems.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2026",
    title: "FiscalPay — Tax Management Platform",
    description:
      "Built a full-stack fiscal platform: Flutter mobile app + React admin dashboard, powered by a Node.js/Express REST API.",
    type: "project",
    icon: "💰",
  },
  {
    year: "2026",
    title: "Portfolio Website Launched",
    description:
      "Built this portfolio using Next.js 15, TypeScript, and Tailwind CSS to showcase projects and skills.",
    type: "achievement",
    icon: "🚀",
  },
];

export const githubStats = {
  username: "tarik497",
  contributions: 347,
  repositories: 18,
  stars: 24,
  followers: 12,
  languages: [
    { name: "TypeScript", percent: 35, color: "#3178c6" },
    { name: "PHP", percent: 25, color: "#777bb4" },
    { name: "JavaScript", percent: 18, color: "#f7df1e" },
    { name: "CSS", percent: 14, color: "#563d7c" },
    { name: "Other", percent: 8, color: "#64748b" },
  ],
};
