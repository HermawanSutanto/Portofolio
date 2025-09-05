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
      "Proyek kolaborasi yang dimana merupakan Platform tes mental, terdapat fitur tes, rekap, dashboard, realtime chat, dan integrasi ai yang ditujukan untuk mengatasi masalah mental seseorang.",
    tags: ["React", "Node.js", "Supabase", "AI Studio API"],
    imageUrls: ["/image.png"],
    liveUrl: "https://mind-mhirc.my.id/",
    sourceUrl: "#"
  },
  {
    title: "Platform Wedding Invitation",
    description:
      "Situs Undangan Pernikahan yang dimana pengguna dapat membuat undangannya sendiri berdasarkan template dan paket yang ada. pengguna dapat membagikan undangannya melalui url yang dicustom",
    tags: ["Laravel", "MySql", "Tailwind CSS"],
    imageUrls: ["/image2.png"],
    liveUrl: "https://sicepat.biz.id/",
    sourceUrl: "#"
  },
  {
    title: "Aplikasi POS Barbershop",
    description:
      "Platform berbasis aplikasi untuk pencatatan transaksi, karyawan, stok barang, dan alokasi dana. aplikasi dibuat dengan menggunakan Kotlin dan xml untuk tampilannya ditujukan untuk perangkat lama yang memiliki ram kecil, dan database yang digunakan ialah firestore Firebase.",
    tags: ["Kotlin", "Firebase"],
    imageUrls: ["/barber.png", "/barber2.png", "/barber3.png"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Simdis Kantah Jember",
    description:
      "Sistem Informasi Persuratan disposisi Kantor Tanah Jember. merupakan sistem untuk memantau arus dan prioritas surat di setiap seksi yang diawasi oleh kepala kantor tanah.",
    tags: ["React", "Laravel", "MySql"],
    imageUrls: ["/image3.png"],
    liveUrl:
      "https://fe-pertanahan-1b5bw91rh-hermawansutantos-projects.vercel.app/",
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
