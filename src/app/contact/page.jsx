import Contact from "@/views/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Style In The City Studio",
  description:
    "Get in touch about closet organization or personal styling. Send a message and we'll reply personally.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
