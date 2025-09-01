import { Project, Skill } from "./types";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLaravel,
  FaGitAlt
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiKotlin,
  SiSupabase,
  SiJavascript
} from "react-icons/si";

export const PROJECTS: Project[] = [
  {
    title: "Platform Tes Mental Integrasi Ai",
    description:
      "Platform berbasis web untuk visualisasi dan analisis data secara real-time. Dibangun dengan tumpukan MERN dan D3.js.",
    tags: ["React", "Node.js", "Supabase", "AI Studio API"],
    imageUrls: ["/image.png"],
    liveUrl: "https://mind-mhirc.my.id/",
    sourceUrl: "#"
  },
  {
    title: "Platform Wedding Invitation",
    description:
      "Situs e-commerce berfitur lengkap dengan otentikasi pengguna, keranjang belanja, dan gateway pembayaran Stripe.",
    tags: ["Laravel", "MySql", "Tailwind CSS"],
    imageUrls: ["/image2.png"],
    liveUrl: "https://sicepat.biz.id/",
    sourceUrl: "#"
  },
  {
    title: "Nama Proyek Anda",
    description:
      "Platform berbasis web untuk visualisasi dan analisis data secara real-time. Dibangun dengan tumpukan MERN dan D3.js.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrls: [
      "/uibarbershop.jpg",
      "/uibarbershop2.jpg",
      "/uibarbershop3.jpg"
    ],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Aplikasi Chat Real-time",
    description:
      "Aplikasi obrolan yang menampilkan komunikasi dua arah instan menggunakan WebSockets dan Redis untuk skalabilitas.",
    tags: ["React", "WebSockets", "Node.js", "Redis"],
    imageUrls: ["https://picsum.photos/seed/project4/600/400"],
    liveUrl: "#",
    sourceUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "SQL", icon: SiPostgresql, color: "#4169E1" }, // Menggunakan ikon Postgres sebagai representasi
  { name: "Git/GitHub", icon: FaGitAlt, color: "#F05032" },
  { name: "Firebase", icon: SiFirebase, color: "#f0a432ff" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/HermawanSutanto",
  linkedin: "https://linkedin.com/in/hermawan-sutanto-9a89b0220",
  instagram: "https://www.instagram.com/hermawanstnto/"
};

export const NAV_LINKS = [
  { name: "Tentang", href: "#about" },
  { name: "Proyek", href: "#projects" },
  { name: "Keahlian", href: "#skills" },
  { name: "Kontak", href: "#contact" }
];
