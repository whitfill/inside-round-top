import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Inside Round Top",
  description:
    "The story behind Inside Round Top: why we created it, who it's for, and how three hosts bring distinct perspectives to the world's largest antique fair.",
  openGraph: {
    title: "About — Inside Round Top",
    description:
      "The story behind Inside Round Top: why we created it, who it's for, and how three hosts bring distinct perspectives to the world's largest antique fair.",
    url: "https://insideroundtop.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream px-6 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-brown md:text-5xl">
            About Inside Round Top
          </h1>
          <p className="mt-4 text-lg text-muted">
            The stories behind the world&apos;s largest antique fair deserve
            more than a passing glance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-warm-white px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-muted md:text-lg">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
              Why We Created This
            </h2>
            <p className="mt-4">
              If you have ever driven Highway 237 between Round Top and
              Warrenton during show season, you know the feeling: miles of
              tents, fields filled with treasure, and the unmistakable energy of
              a community that has been gathering here for over fifty years.
            </p>
            <p className="mt-4">
              But most visitors only scratch the surface. They browse, they
              buy, they leave. They never hear the stories behind the booths
              &mdash; the third-generation dealer who can trace the provenance
              of a French armoire, the fashion curator who built a following
              from the back of an Airstream, or the designer who returns every
              season to source pieces for her next project.
            </p>
            <p className="mt-4">
              Inside Round Top exists to tell those stories. It is a video
              podcast that takes you deeper into the people, the craft, and the
              culture that make this place unlike anywhere else in the world.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
              Who It&apos;s For
            </h2>
            <p className="mt-4">
              Inside Round Top is for anyone who loves the hunt &mdash; whether
              you are a seasoned dealer, a first-time visitor, or someone who
              has never been to Round Top but dreams of going. If you care about
              antiques, interior design, vintage fashion, or the stories behind
              beautiful things, this show is for you.
            </p>
            <p className="mt-4">
              Each episode is designed to feel like a conversation over coffee
              in someone&apos;s booth: personal, unhurried, and full of the kind
              of detail you only get when someone truly knows their world.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
              The Three-Host Format
            </h2>
            <p className="mt-4">
              Round Top is not one thing. It is antiques and fashion and design
              and food and community, all woven together. One host could never
              capture all of that. So we built the show around three.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-tan bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-brown">
                  The Collector
                </h3>
                <p className="mt-2 text-sm">
                  An antique store owner who has been part of the Round Top
                  community for decades. She knows the history, the dealers, and
                  the stories behind the pieces. Her episodes focus on the
                  tradition and craft of antiques.
                </p>
              </div>
              <div className="rounded-xl border border-tan bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-brown">
                  The Tastemaker
                </h3>
                <p className="mt-2 text-sm">
                  A fashion boutique owner who brings energy, style, and a
                  modern lens to the show. Her episodes explore the intersection
                  of vintage fashion, personal style, and the creative culture
                  that thrives at Round Top.
                </p>
              </div>
              <div className="rounded-xl border border-tan bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-brown">
                  The Stylist
                </h3>
                <p className="mt-2 text-sm">
                  An interior designer who bridges the gap between the thrill of
                  the hunt and creating spaces you want to live in. Her
                  episodes show you how to take what you find at the show and
                  make it work at home.
                </p>
                <span className="mt-2 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="mt-6">
              Each host brings her own guests, her own questions, and her own
              point of view. Together, they paint a full picture of what makes
              Round Top extraordinary.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
              Connected to Round Top Finder
            </h2>
            <p className="mt-4">
              Inside Round Top is a companion to{" "}
              <a
                href="https://roundtopfinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold transition-colors hover:text-gold-hover"
              >
                Round Top Finder
              </a>
              , the discovery platform for the show. Every vendor and venue
              mentioned in an episode links directly to their profile on Round
              Top Finder, so you can explore their work, save them to your
              favorites, and plan your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Guest CTA */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
            Want to Be a Guest?
          </h2>
          <p className="mt-4 text-muted">
            We are always looking for great stories. If you are a vendor,
            designer, collector, or Round Top regular with a story to tell, we
            would love to hear from you.
          </p>
          <div className="mt-8 rounded-xl border border-tan bg-warm-white p-8">
            <p className="text-sm text-muted">
              Send us a note at{" "}
              <span className="font-medium text-brown">
                hello@insideroundtop.com
              </span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Tell us who you are, what you do at Round Top, and the story
              you&apos;d like to share.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/hosts"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              Meet our hosts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
