// HomeDatas.js
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const HomeDatas = {
  turkish: {
    header: "ENES YÜCE",
    content: "Ben bir Fronted geliştiriciyim...",
    leftContent:
      "Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir ön uç ürünler üretmeyi seven bir developer'ım",
    buttons: ["Github", "LinkedIn"],
    icons: [<FaGithub />, <FaLinkedin  />],
    urls: ["https://github.com/enes-yuce", "https://www.linkedin.com/in/enes-y%C3%BCce-701532177/"],
    languageButton: "Türkçe'ye Geç",
  },
  english: {
    header: "ENES YUCE",
    content: "I am a Frontend Developer...",
    leftContent:
      "...who likes to craft solid and scalable frontend products with great user experiences.",
    buttons: ["Github", "LinkedIn"],
    icons: [<FaGithub />, <FaLinkedin  />],
    urls: ["https://github.com/enes-yuce", "https://www.linkedin.com/in/enes-yuce/"],
    languageButton: "Switch to English",
  },
};

export default HomeDatas;
