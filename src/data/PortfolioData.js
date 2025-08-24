import {
  Wrench,
  ShieldCheck,
  Network,
  Monitor,
  Camera,
  Code,
  Printer,
} from "lucide-react";

export const portfolioItems = [
  {
    id: "repairs",
    title: "Repair of Computers & Printers",
    description:
      "We diagnose hardware & software faults, remove malware & viruses, replace screens & much more.",
    icon: Wrench,
    images: ["/portfolio/repairs-1.jpg", "/portfolio/repairs-2.jpg"],
  },
  {
    id: "maintenance",
    title: "Preventative Maintenance",
    description:
      "Monthly checks to prolong computer & printer life, improve performance, and ensure reliability.",
    icon: ShieldCheck,
    images: ["/portfolio/maintenance-1.jpg"],
  },
  {
    id: "networking",
    title: "Structured Networking Solutions",
    description:
      "We design, sell, install, and support networks for SMEs & enterprises, plus cable management.",
    icon: Network,
    images: ["/portfolio/networking-1.jpg", "/portfolio/networking-2.jpg"],
    extra: ["Meraki", "Ubiquiti", "TP-Link", "Cisco", "Netgear"],
  },
  {
    id: "products",
    title: "Branded IT Products & Accessories",
    description:
      "We stock globally recognized brands — printers, PCs, monitors, servers, networking gear & more.",
    icon: Monitor,
    images: ["/portfolio/products-1.jpg"],
  },
  {
    id: "security",
    title: "Security Surveillance Hardware",
    description:
      "Installation of CCTV/IP cameras, access control & alarm systems, smoke & heat detectors.",
    icon: Camera,
    images: ["/portfolio/security-1.jpg"],
  },
  {
    id: "software",
    title: "Software Solutions",
    description:
      "Custom software & trusted tools to support your business operations.",
    icon: Code,
    images: ["/portfolio/software-1.jpg"],
    extra: ["QuickBooks", "Antivirus", "Office 365"],
  },
  {
    id: "printing",
    title: "Bulk Printing",
    description:
      "We print brochures, flyers, books, magazines, banners, calendars, branding items & more.",
    icon: Printer,
    images: ["/portfolio/printing-1.jpg"],
  },
];
