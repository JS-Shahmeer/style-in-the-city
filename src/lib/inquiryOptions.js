export const serviceOptions = [
  { value: "closet-organization", label: "Closet Organization — a suite for my space" },
  { value: "style-debut", label: "Style Debut — $299 three-hour style session" },
  { value: "additional-session", label: "Additional Style Session — $99 per hour" },
  { value: "not-sure", label: "Not sure yet — help me choose" },
];

export const closetScopeOptions = [
  "A single closet",
  "A closet plus dresser or storage",
  "Multiple closets or rooms",
  "Not sure yet",
];

export const formatOptions = [
  { value: "in-home", label: "In my home" },
  { value: "virtual", label: "Virtually" },
  { value: "studio", label: "In a studio space" },
  { value: "unsure", label: "Not sure yet — please advise" },
];

export const emptyInquiry = {
  full_name: "",
  email: "",
  phone: "",
  service: "",
  occasion_type: "",
  season: "",
  closet_scope: "",
  preferred_date: "",
  availability: "",
  session_format: "",
  goals: "",
  notes: "",
  privacy_consent: false,
  marketing_consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function validateInquiry(values, mode) {
  const errors = {};

  if (!values.full_name.trim() || values.full_name.trim().length < 2) {
    errors.full_name = "Please enter your name so we know who we're speaking with.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address so we can reply.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That email address doesn't look quite right — please check it.";
  }

  if (mode !== "contact") {
    if (!values.service) {
      errors.service = "Please choose the service you're interested in.";
    }
    if (!values.goals.trim() || values.goals.trim().length < 10) {
      errors.goals = "A sentence or two about what you'd like help with is all we need.";
    }
  } else if (!values.goals.trim() || values.goals.trim().length < 10) {
    errors.goals = "Please tell us a little about what you'd like to ask.";
  }

  if (!values.privacy_consent) {
    errors.privacy_consent = "Please confirm you've read the privacy policy.";
  }

  return errors;
}
