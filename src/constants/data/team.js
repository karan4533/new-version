const karthikPhoto = new URL("../../assets/karthik.jpeg", import.meta.url).href;
const sarathyPhoto = new URL("../../assets/sarathy.png", import.meta.url).href;
const rohitPhoto = new URL("../../assets/Rohit.png", import.meta.url).href;

/* Team Data */
export const TEAM = [
  {
    initial: "G",
    name: "Gauthaam Sarathy",
    role: "Chief Executive Officer",
    bullets: ["IIM Bangalore Alumni", "20+ years of AI experience"],
    photo: sarathyPhoto,
    grad: "linear-gradient(160deg,#C49A70 0%,#967350 30%,#5A4028 70%,#3A2818 100%)",
  },
  {
    initial: "K",
    name: "Dr. Karthikeyan Saminathan",
    role: " Chief AI Officer & CTO",
    bullets: ["Doctorate in AI / ML", "17+ years OF AI/Gen AI and R&D"],
    photo: karthikPhoto,
    grad: "linear-gradient(160deg,#9A9070 0%,#7A7055 30%,#4A4030 70%,#302818 100%)",
  },
  {
    initial: "R",
    name: "Rohit M",
    role: "Head of AI",
    bullets: [" 13+ years of AI and R&D experience"],
    photo: rohitPhoto,
    grad: "linear-gradient(160deg,#A89878 0%,#887858 30%,#504030 70%,#342818 100%)",
  },
];
