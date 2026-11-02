import { images } from "@/lib/siteConfig";

// The three storefronts that organise the whole site: each one is a gateway to
// a dedicated experience with its own services and its own booking path.
export const experiences = [
  {
    slug: "love-your-style",
    number: "01",
    name: "Love Your Style",
    kicker: "Personal Styling",
    copy:
      "Discover your personal style, explore new outfit possibilities, and find the right look for every occasion.",
    cta: "Step Into Your Style",
    to: "/personal-styling",
    image: images.stylingHero,
    alt: "Two stylists and a client smiling together in the studio, surrounded by clothing rails",
  },
  {
    slug: "love-your-closet",
    number: "02",
    name: "Love Your Closet",
    kicker: "Closet Organization",
    copy:
      "Create a closet that works for your life. Rediscover what you own, simplify your wardrobe, and make getting dressed feel easier.",
    cta: "Explore Your Closet",
    to: "/closet-organization",
    image: images.closetHero,
    alt: "A client holding a folded knit garment in front of her newly organised closet",
  },
  {
    slug: "love-yourself",
    number: "03",
    name: "Love Yourself",
    kicker: "Wellness & Beauty",
    copy:
      "Make space for yourself with experiences that connect personal well-being, beauty, and everyday confidence.",
    cta: "Explore Self-Care",
    to: "/love-yourself",
    image: images.clientStyled,
    alt: "A client styled in a leather vest and feathered white shawl, standing in the studio",
  },
];
