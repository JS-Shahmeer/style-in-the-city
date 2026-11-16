// Central content and business settings for Style In The City Studio.
//
// Anything set to `null` below is intentionally unconfirmed. The site shows a
// graceful placeholder instead of an invented detail, and updates everywhere
// the moment a real value is entered here.

export const business = {
  name: "Style In The City Studio",
  shortName: "Style In The City",
  tagline: "Love your closet, Love your style, Love Yourself.",
  philosophy: "Styling with a purpose. From the inside out.",
  supportLine:
    "Personal styling, closet organization, and a more personal approach to feeling good in what you wear.",
  email: "hello@styleinthecityco.com",
  phone: "720-703-2046",
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
    closetOrganizationFrom: "$495", // Studio Apt Closet
    deposit: null, // e.g. "A 25% deposit confirms your date"
    cancellation: null, // e.g. "Reschedule up to 48 hours before your session"
  },
};

// Confirmed pricing, shown the same way everywhere on the site.
export const pricing = {
  styleDebut: {
    name: "New You — Style Debut",
    price: "$299",
    duration: "3 hours",
    display: "$299 · 3-Hour Style Debut",
    short: "$299",
  },
  styleSession: {
    studio: "$99",
    home: "$109",
    unit: "per hour",
    display: "$99/hour in studio · $109/hour at home",
  },
  denimFit: {
    fee: "$20",
    display: "$20 booking fee, applied to your denim purchase",
  },
  styleParty: {
    fee: "$99",
    display: "Call for pricing · $99 minimum booking fee",
  },
  closetAddOn: {
    rate: "$79",
    display: "$79 / hour",
    note:
      "Additional styling sessions booked after your closet overhaul are $79 an hour. Any materials needed — hangers, organization tools and so on — are added to the final cost.",
  },
  closetOrganization: {
    display: "Priced by closet size",
    from: "$495",
    note:
      "Every closet is priced by its size. Larger than 64 sq ft? Send us photos or book a quick FaceTime review and we'll put together an estimate.",
  },
};

export const announcement = {
  enabled: true,
  message: "Love your closet, Love your style, Love Yourself.",
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
    "Feeling good about yourself goes beyond what you wear. Featuring Egalle Cosmetics Hair Care and Trilivy Metabolic Wellness — book a session for yourself, or bring your girlfriends for a party.",
  relationshipNote:
    "Egalle Cosmetics and Trilivy are independent businesses featured by the studio. Their products, programs and terms are their own.",
  brands: [
    {
      slug: "egalle-cosmetics",
      name: "Egalle Cosmetics Hair Care",
      shortName: "Egalle",
      discipline: "Hair Care",
      copy:
        "Featuring Egalle Hair Care from Absoluk, Ohanic and ANEA — all vegan or organic based, from the Aragon region of Spain. High-end products from Dr Jackson are available for men, too.",
      offers: [
        {
          name: "Healthy Products — Healthy Hair Session",
          price: "$20 booking fee",
          copy:
            "A hair analysis and product recommendations to fill your hair and scalp with the vitamins and nutrients they need to look and feel their best.",
          service: "hair-session",
        },
        {
          name: "Hair Care Party",
          price: "$99 booking fee",
          copy:
            "Grab your gals for an unbelievable hair party. The booking fee goes toward food and sips.",
          service: "hair-party",
        },
      ],
      url: null, // official destination to be confirmed
      image: null,
    },
    {
      slug: "trilivy-metabolic-wellness",
      name: "Trilivy Metabolic Wellness",
      shortName: "Trilivy",
      discipline: "Metabolic Wellness",
      tagline: "Reset Your Gut. Reset Your Health. Regain Your Life.",
      copy:
        "Metabolic wellness built around your gut, your habits and your health — the inside-out half of the studio's philosophy.",
      offers: [
        {
          name: "1-on-1 Metabolic Review Session",
          price: "Ask for pricing",
          copy: "A one-to-one review of your metabolic health and where to begin.",
          service: "metabolic-review",
        },
        {
          name: "Wellness Party",
          price: "$99 booking fee",
          copy:
            "Bring your gals for a metabolic review and a taste of the Trilivy way of life. The booking fee goes toward food and sips.",
          service: "wellness-party",
        },
      ],
      // Confirm this is the correct destination for the studio's Trilivy coach.
      url: "https://www.trilivyhealth.com/",
      image: null,
    },
  ],
};

export const hasValue = (value) =>
  typeof value === "string" && value.trim().length > 0;

export const socialLinks = () =>
  Object.entries(business.social).filter(([, url]) => hasValue(url));

export const NAV_LINKS = [
  { label: "Love Your Closet", to: "/closet-organization" },
  { label: "Love Your Style", to: "/personal-styling" },
  { label: "Love Yourself", to: "/love-yourself" },
  { label: "Our Purpose", to: "/our-purpose" },
  { label: "Contact", to: "/contact" },
];

export const NAV_SECONDARY = [
  { label: "Home", to: "/" },
  { label: "FAQ", to: "/faq" },
];

export const BOOK_PATH = "/book-a-session";
