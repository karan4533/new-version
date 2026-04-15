const karthikPhoto = new URL("../../assets/karthik.webp", import.meta.url).href;
const sarathyPhoto = new URL("../../assets/sarathy1.webp", import.meta.url).href;
const rohitPhoto = new URL("../../assets/Rohit.webp", import.meta.url).href;

/* Team Data */
export const TEAM = [
  {
    initial: "G",
    name: "Gauthaam Sarathy",
    role: "CEO and Founder",
    bullets: [
      "IIM Bangalore Alumni",
      "Focus: AI strategy, enterprise adoption, and product commercialisation",
    ],
    linkedin: "https://www.linkedin.com/company/heuristic-labs-ai/",
    photo: sarathyPhoto,
    grad: "linear-gradient(160deg,#C49A70 0%,#967350 30%,#5A4028 70%,#3A2818 100%)",
  },
  {
    initial: "K",
    name: "Dr. Karthikeyan Saminathan",
    role: "CTO and Chief AI Officer (CAIO)",
    bullets: [
      "Doctorate in AI/ML",
      "Focus: Translates cutting-edge research into production-grade enterprise systems",
    ],
    linkedin: "https://www.linkedin.com/company/heuristic-labs-ai/",
    photo: karthikPhoto,
    grad: "linear-gradient(160deg,#9A9070 0%,#7A7055 30%,#4A4030 70%,#302818 100%)",
  },
  {
    initial: "R",
    name: "Rohit M",
    role: "Head of AI",
    bullets: [
      "PhD Researcher, Gen AI",
      "Focus: Leads agentic systems, fine-tuning pipelines, and the Applied Research Lab",
    ],
    linkedin: "https://www.linkedin.com/company/heuristic-labs-ai/",
    photo: rohitPhoto,
    grad: "linear-gradient(160deg,#A89878 0%,#887858 30%,#504030 70%,#342818 100%)",
  },
];
