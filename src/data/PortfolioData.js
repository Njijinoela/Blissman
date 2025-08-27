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
    faqs: [
      {
        question: "How long does a typical repair take?",
        answer:
          "Most repairs are completed within 1–3 business days depending on parts availability.",
      },
      {
        question: "Do you use original spare parts?",
        answer:
          "Yes, we prioritize using genuine spare parts to ensure durability and performance.",
      },
      {
        question: "Can you fix water-damaged laptops?",
        answer:
          "Yes, we perform diagnostics and can often repair water-damaged devices if brought in quickly.",
      },
      {
        question: "Do you offer warranty on repairs?",
        answer:
          "Yes, all our repairs come with a limited warranty, typically 30–90 days depending on the service.",
      },
      {
        question: "Is there a diagnostic fee?",
        answer:
          "Diagnostics are free if you proceed with the repair, otherwise a small inspection fee applies.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Preventative Maintenance",
    description:
      "Monthly checks to prolong computer & printer life, improve performance, and ensure reliability.",
    icon: ShieldCheck,
    images: ["/portfolio/maintenance-1.jpg"],
    faqs: [
      {
        question: "How often should maintenance be done?",
        answer:
          "We recommend monthly or quarterly maintenance for optimal performance and longevity.",
      },
      {
        question: "What does maintenance include?",
        answer:
          "It includes system updates, cleaning, hardware checks, and performance optimization.",
      },
      {
        question: "Does maintenance prevent hardware failure?",
        answer:
          "It greatly reduces the chances of sudden hardware failure by detecting issues early.",
      },
      {
        question: "Do you provide on-site maintenance?",
        answer: "Yes, we provide both on-site and remote maintenance services.",
      },
      {
        question: "Is preventative maintenance expensive?",
        answer:
          "Not at all. It is cost-effective compared to emergency repairs or replacements.",
      },
    ],
  },
  {
    id: "networking",
    title: "Structured Networking Solutions",
    description:
      "We design, sell, install, and support networks for SMEs & enterprises, plus cable management.",
    icon: Network,
    images: ["/portfolio/networking-1.jpg", "/portfolio/networking-2.jpg"],
    extra: ["Meraki", "Ubiquiti", "TP-Link", "Cisco", "Netgear"],
    faqs: [
      {
        question: "Do you handle both wired and wireless networks?",
        answer:
          "Yes, we install and support both wired LAN and wireless Wi-Fi networks.",
      },
      {
        question: "Can you upgrade existing networks?",
        answer:
          "Absolutely. We assess current infrastructure and recommend modern upgrades.",
      },
      {
        question: "Which brands do you support?",
        answer:
          "We work with Cisco, Ubiquiti, TP-Link, Netgear, and Meraki solutions.",
      },
      {
        question: "Do you provide network security solutions?",
        answer:
          "Yes, we implement firewalls, VPNs, and monitoring for secure connectivity.",
      },
      {
        question: "Do you offer maintenance contracts?",
        answer:
          "Yes, we provide ongoing support and monitoring through service-level agreements.",
      },
    ],
  },
  {
    id: "products",
    title: "Branded IT Products & Accessories",
    description:
      "We stock globally recognized brands — printers, PCs, monitors, servers, networking gear & more.",
    icon: Monitor,
    images: ["/portfolio/products-1.jpg"],
    faqs: [
      {
        question: "Which brands do you supply?",
        answer:
          "We supply top brands like HP, Dell, Lenovo, Canon, Cisco, and more.",
      },
      {
        question: "Do your products come with warranty?",
        answer:
          "Yes, all our products come with manufacturer or store warranty coverage.",
      },
      {
        question: "Do you offer bulk purchase discounts?",
        answer: "Yes, we provide discounts for corporate and bulk purchases.",
      },
      {
        question: "Can I request a specific product model?",
        answer:
          "Yes, we can source specific models upon request, subject to availability.",
      },
      {
        question: "Do you deliver products?",
        answer: "Yes, we provide delivery services within the region.",
      },
    ],
  },
  {
    id: "security",
    title: "Security Surveillance Hardware",
    description:
      "Installation of CCTV/IP cameras, access control & alarm systems, smoke & heat detectors.",
    icon: Camera,
    images: ["/portfolio/security-1.jpg"],
    faqs: [
      {
        question: "Do you provide both indoor and outdoor cameras?",
        answer:
          "Yes, we install weatherproof outdoor and high-resolution indoor cameras.",
      },
      {
        question: "Can I monitor my cameras remotely?",
        answer:
          "Yes, we set up remote monitoring via mobile apps or web dashboards.",
      },
      {
        question: "Do you integrate alarms with CCTV systems?",
        answer:
          "Yes, we can integrate alarms, access control, and cameras into one system.",
      },
      {
        question: "Do you provide maintenance for installed systems?",
        answer:
          "Yes, we offer regular checks and upgrades for security systems.",
      },
      {
        question: "Are your systems scalable?",
        answer:
          "Yes, we design systems that can grow with your security needs.",
      },
    ],
  },
  {
    id: "software",
    title: "Software Solutions",
    description:
      "Custom software & trusted tools to support your business operations.",
    icon: Code,
    images: ["/portfolio/software-1.jpg"],
    extra: ["QuickBooks", "Antivirus", "Office 365"],
    faqs: [
      {
        question: "Do you build custom software?",
        answer:
          "Yes, we design and develop custom software tailored to your business.",
      },
      {
        question: "Do you also sell licensed software?",
        answer:
          "Yes, we sell and install trusted licensed software like Office 365 and antivirus solutions.",
      },
      {
        question: "Can you integrate new software with my existing system?",
        answer:
          "Yes, we ensure smooth integration with your current infrastructure.",
      },
      {
        question: "Do you provide training after installation?",
        answer:
          "Yes, we provide user training to ensure proper use of the software.",
      },
      {
        question: "Do you offer software support?",
        answer: "Yes, we offer ongoing support, troubleshooting, and updates.",
      },
    ],
  },
  {
    id: "printing",
    title: "Bulk Printing",
    description:
      "We print brochures, flyers, books, magazines, banners, calendars, branding items & more.",
    icon: Printer,
    images: ["/portfolio/printing-1.jpg"],
    faqs: [
      {
        question: "What type of printing do you offer?",
        answer:
          "We provide digital, offset, and large-format printing services.",
      },
      {
        question: "Do you design artwork for printing?",
        answer:
          "Yes, our team can design professional artwork for your materials.",
      },
      {
        question: "Can you handle urgent printing requests?",
        answer: "Yes, we offer express printing services for urgent jobs.",
      },
      {
        question: "Do you print in bulk?",
        answer: "Yes, we specialize in bulk printing with competitive pricing.",
      },
      {
        question: "Do you provide delivery after printing?",
        answer: "Yes, we deliver finished products to your preferred location.",
      },
    ],
  },
];
