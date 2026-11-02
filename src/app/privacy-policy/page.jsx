import Privacy from "@/views/Privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy — Style In The City Studio",
  description:
    "How Style In The City Studio collects, uses and protects the information you share when you request a session or contact us.",
  path: "/privacy-policy",
});

export default function Page() {
  return <Privacy />;
}
