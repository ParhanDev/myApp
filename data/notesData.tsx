import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/kerja2Logo.png"),
    title: "Belajar Mobile App",
    description: "Belajar membuat aplikasi restful api",
    date: "30/10/2025",
  },
  {
    id: 2,
    image: require("@/assets/images/conversationLogo.png"),
    title: "Belajar Backend",
    description: "Belajar membuat aplikasi restful api",
    date: "30/10/2025",
  },
  {
    id: 3,
    image: require("@/assets/images/idekontenLogo.png"),
    title: "Belajar Mobile App",
    description: "Belajar membuat aplikasi restful api",
    date: "30/10/2025",
  },
  {
    id: 4,
    image: require("@/assets/images/maenbolaLogo.png"),
    title: "Belajar Mobile App",
    description: "Belajar membuat aplikasi restful api",
    date: "30/10/2025",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};
