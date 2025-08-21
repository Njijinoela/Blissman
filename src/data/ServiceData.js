import {
  Palette,
  ShieldCheck,
  Network,
  FileText,
  Laptop,
  Wrench,
  Globe,
} from "lucide-react";

const blissmanServices = [
  {
    id: "web-design",
    icon: Palette,
    title: "Website Design",
    description:
      "We create visually stunning, responsive, and user-friendly websites tailored to your brand...",
    image: "services/webdesign.jpg",
  },
  {
    id: "it-support",
    icon: ShieldCheck,
    title: "IT Support",
    description:
      "Our IT support team provides reliable troubleshooting, system maintenance, and proactive monitoring...",
    image: "/services/itsuppport.webp",
  },
  {
    id: "it-consulting",
    icon: Network,
    title: "IT Consulting",
    description:
      "We offer strategic IT consulting to help businesses align technology with growth...",
    image: "/services/it-consulting.jpg",
  },
  {
    id: "profile-design",
    icon: FileText,
    title: "Company Profile Design",
    description:
      "A well-crafted company profile sets you apart. We design professional and compelling profiles...",
    image: "/services/company-profile.jpg",
  },
  {
    id: "computer-services",
    icon: Laptop,
    title: "Computer Services",
    description:
      "From software installation and system upgrades to virus removal and performance optimization...",
    image: "/services/computer-services.jpg",
  },
  {
    id: "computer-repair",
    icon: Wrench,
    title: "Computer Repair Services",
    description:
      "We specialize in diagnosing and repairing computer issues — whether it’s faulty hardware, broken screens...",
    image: "/services/computer-repair.jpg",
  },
  {
    id: "domains",
    icon: Globe,
    title: "Domains & Hosting",
    description:
      "Secure your online presence with our domain registration and reliable hosting services...",
    image: "/services/domains.jpg",
  },
];

export default blissmanServices;
