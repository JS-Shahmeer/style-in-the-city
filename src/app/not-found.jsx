import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import { BOOK_PATH } from "@/lib/siteConfig";

export const metadata = {
  title: { absolute: "Page Not Found — Style In The City Studio" },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-4xl px-5 py-24 lg:px-10 lg:py-32">
        <SectionLabel>404</SectionLabel>
        <h1 className="display-xl mt-8 text-espresso">This page has been moved — or never existed.</h1>
        <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-espresso/70">
          The link you followed doesn't lead anywhere on our site. Start again from the studio, or
          send us a request directly.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CtaLink to="/">Back To The Studio</CtaLink>
          <CtaLink to={BOOK_PATH} variant="textLink">
            Book a session
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
