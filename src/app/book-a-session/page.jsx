import BookSession from "@/views/BookSession";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Session — Style In The City Studio",
  description:
    "Book a closet organization or personal styling session, or request a consultation if you're not sure where to start. We reply personally to confirm every appointment.",
  path: "/book-a-session",
});

export default function Page() {
  return <BookSession />;
}
