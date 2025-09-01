import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrls: string[]; // <-- Menjadi array string
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}
