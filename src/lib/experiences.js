import { images } from "@/lib/siteConfig";

// The three storefronts that organise the whole site: each one is a gateway to
// a dedicated experience with its own services and its own booking path.
export const experiences = [
  {
    slug: "love-your-closet",
    number: "01",
    name: "Love Your Closet",
    kicker: "Closet Organization",
    copy:
      "Create a closet that works for your life. Rediscover what you own, simplify your wardrobe, and make getting dressed feel easier.",
    offers: [
      ["Studio Apt Closet", "$495"],
      ["TownHouse Apt Closet", "$1,295"],
      ["Penthouse Suite Closet", "$1,995"],
    ],
    cta: "Explore Your Closet",
    to: "/closet-organization",
    image: images.closetHero,
    alt: "A client holding a folded knit garment in front of her newly organised closet",
  },
  {
    slug: "love-your-style",
    number: "02",
    name: "Love Your Style",
    kicker: "Personal Styling",
    copy:
      "Discover your personal style, explore new outfit possibilities, and find the right look for every occasion.",
    offers: [
      ["New You — Style Debut", "$299"],
      ["Perfect Denim District Fit", "$20"],
      ["Style Session", "from $99/hr"],
      ["Style Party", "call"],
    ],
    cta: "Step Into Your Style",
    to: "/personal-styling",
    image: images.stylingHero,
    alt: "Two stylists and a client smiling together in the studio, surrounded by clothing rails",
  },
  {
    slug: "love-yourself",
    number: "03",
    name: "Love Yourself",
    kicker: "Hair Care & Metabolic Wellness",
    copy:
      "Featuring Egalle Cosmetics Hair Care and Trilivy Metabolic Wellness — sessions for you, and parties for you and your girlfriends.",
    offers: [
      ["Egalle Healthy Hair Session", "$20"],
      ["Trilivy Metabolic Review", "1-on-1"],
      ["Hair Care & Wellness Parties", "$99"],
    ],
    cta: "Explore Self-Care",
    to: "/love-yourself",
    image: images.clientStyled,
    alt: "A client styled in a leather vest and feathered white shawl, standing in the studio",
  },
];
