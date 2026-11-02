// Central content and business settings for Style In The City Studio.
//
// Anything set to `null` below is intentionally unconfirmed. The site shows a
// graceful placeholder instead of an invented detail, and updates everywhere
// the moment a real value is entered here.

export const business = {
  name: "Style In The City Studio",
  shortName: "Style In The City",
  tagline: "Love your style, Love your closet, Love Yourself.",
  philosophy: "Styling with a purpose. From the inside out.",
  supportLine:
    "Personal styling, closet organization, and a more personal approach to feeling good in what you wear.",
  email: "hello@styleinthecityco.com",
  phone: "(303) 505-3753",
  serviceArea:
    "Denver, Parker, Englewood, Lone Tree, Castle Rock, Castle Pines, Highlands Ranch, Centennial and surrounding Colorado communities.",
  hours: null, // e.g. "Monday to Saturday, by appointment"
  appointmentFormats: null, // e.g. ["In home", "Virtual"]
  social: {
    instagram: null,
    facebook: null,
    pinterest: null,
    tiktok: null,
  },
  pricing: {
    closetOrganizationFrom: null, // confirmed per project, never a flat figure
    deposit: null, // e.g. "A 25% deposit confirms your date"
    cancellation: null, // e.g. "Reschedule up to 48 hours before your session"
  },
};

// Confirmed pricing, shown the same way everywhere on the site.
export const pricing = {
  styleDebut: {
    price: "$299",
    duration: "3 hours",
    display: "$299 · 3-Hour Style Session",
    short: "$299",
  },
  additionalSessions: {
    rate: "$99",
    unit: "per hour",
    display: "$99 / hour",
    short: "$99",
  },
  closetOrganization: {
    display: "Priced by project size",
    note:
      "Every closet is a different size, so closet organization is quoted individually once we know your space — with no obligation.",
  },
};

export const announcement = {
  enabled: true,
  message: "Love your style, Love your closet, Love Yourself.",
};

// Analytics integration points. Each loads only when an ID is entered.
export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || null, // Google Tag Manager, e.g. "GTM-XXXXXXX"
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || null, // Google Analytics 4, e.g. "G-XXXXXXXXXX"
};

// Photography currently lives in the Base44 app's public storage. Set
// NEXT_PUBLIC_IMAGE_HOST (e.g. "/images/") once the files are copied into
// /public/images so the site no longer depends on Base44 at all.
const IMAGE_HOST =
  process.env.NEXT_PUBLIC_IMAGE_HOST ||
  "https://media.base44.com/images/public/6ad9183bb5576ddf2ae270e2/";

// Every photograph is Lisa's own — taken from the studio's photography.
// No AI-generated imagery is used.
export const images = {
  heroHome: `${IMAGE_HOST}8dfa049c8_sitc-hero-2124.png`,
  closingPortrait: `${IMAGE_HOST}666e59940_sitc-closing-2123.jpg`,
  styleDebut: `${IMAGE_HOST}310aa5ee0_sitc-style-debut.png`,
  stylingHero: `${IMAGE_HOST}9d27507b5_sitc-styling-hero.png`,
  studioConsult: `${IMAGE_HOST}de5736935_sitc-studio-consult.jpg`,
  closetSystem: `${IMAGE_HOST}44ec764b6_sitc-closet-system.png`,
  closetHero: `${IMAGE_HOST}253681a4c_sitc-closet-hero.jpg`,
  brandStory: `${IMAGE_HOST}95be583b7_sitc-brand-story.png`,
  studioTeam: `${IMAGE_HOST}d132a0c40_sitc-studio-team.png`,
  beltSession: `${IMAGE_HOST}1e328e945_sitc-belt-session.jpg`,
  clientStyled: `${IMAGE_HOST}d6c393a6a_sitc-client-styled.jpg`,
  clientSweater: `${IMAGE_HOST}77da13d39_sitc-client-sweater.png`,
  galleryCardigan: `${IMAGE_HOST}db7e5958a_sitc-gallery-cardigan.jpg`,
  galleryPearls: `${IMAGE_HOST}f5555ca77_sitc-gallery-pearls.jpg`,
  galleryDenim: `${IMAGE_HOST}04f9f8d10_sitc-gallery-denim.jpg`,
  // The six styling closets.
  closetStyle: `${IMAGE_HOST}39e87992c_sitc-closet-style.png`,
  closetEvent: `${IMAGE_HOST}48b299be9_sitc-closet-event.jpg`,
  closetPersonality: `${IMAGE_HOST}7fcb474ae_sitc-closet-personality.jpg`,
  closetGetaway: `${IMAGE_HOST}8bf1cbf1a_sitc-closet-getaway.png`,
  closetDenim: `${IMAGE_HOST}c5e6530db_sitc-closet-denim.jpg`,
  closetSeasonal: `${IMAGE_HOST}6f33e4748_sitc-closet-seasonal.jpg`,
  // The three closet organization suites.
  suiteDowntown: `${IMAGE_HOST}29b96ea0a_sitc-suite-downtown.jpg`,
  suiteManhattan: `${IMAGE_HOST}170f5d59a_sitc-suite-manhattan.jpg`,
  suiteHampton: `${IMAGE_HOST}bb0b7016e_sitc-suite-hampton.jpg`,
};

// The third storefront (Love Yourself) features two independent businesses.
// Their descriptions stay deliberately factual, and a brand only links out
// once its official destination has been confirmed with the studio.
export const loveYourself = {
  intro:
    "Feeling good about yourself goes beyond what you wear. Explore wellness and beauty experiences that complement your personal journey and your own approach to self-care.",
  relationshipNote:
    "Trilivy Health Coach and Egalie Cosmetics are independent businesses. We feature them as recommended destinations — their services, products and terms are their own.",
  brands: [
    {
      slug: "trilivy-health-coach",
      name: "Trilivy Health Coach",
      shortName: "Trilivy",
      discipline: "Health Coaching",
      copy:
        "Metabolic health coaching built around nutrition, daily habits and coach-led support — the inside-out half of the studio's philosophy.",
      detail: "Programs, coaching options and availability are set by Trilivy directly.",
      cta: "Discover Trilivy",
      pendingCta: "Ask About Trilivy",
      // Confirm this is the correct destination for the studio's Trilivy coach.
      url: "https://www.trilivyhealth.com/",
      image: null, // official brand mark or photography, once supplied
    },
    {
      slug: "egalie-cosmetics",
      name: "Egalie Cosmetics",
      shortName: "Egalie",
      discipline: "Beauty",
      copy:
        "Beauty to finish the look — the last few considered minutes of getting ready, and a natural companion to a wardrobe you love.",
      detail: "Products, ingredients and purchasing are provided by Egalie Cosmetics directly.",
      cta: "Explore Egalie",
      pendingCta: "Ask About Egalie",
      url: null, // official destination to be confirmed
      image: null,
    },
  ],
};

export const hasValue = (value) =>
  typeof value === "string" && value.trim().length > 0;

export const socialLinks = () =>
  Object.entries(business.social).filter(([, url]) => hasValue(url));

export const NAV_LINKS = [
  { label: "Love Your Style", to: "/personal-styling" },
  { label: "Love Your Closet", to: "/closet-organization" },
  { label: "Love Yourself", to: "/love-yourself" },
  { label: "Our Purpose", to: "/our-purpose" },
  { label: "Contact", to: "/contact" },
];

export const NAV_SECONDARY = [
  { label: "Home", to: "/" },
  { label: "FAQ", to: "/faq" },
];

export const BOOK_PATH = "/book-a-session";
