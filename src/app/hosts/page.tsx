import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hosts — Inside Round Top",
  description:
    "Meet the three hosts of Inside Round Top: The Collector, The Tastemaker, and The Stylist. Three perspectives on the world's largest antique fair.",
  openGraph: {
    title: "Hosts — Inside Round Top",
    description:
      "Meet the three hosts of Inside Round Top: The Collector, The Tastemaker, and The Stylist.",
    url: "https://insideroundtop.com/hosts",
  },
};

const hosts = [
  {
    role: "The Collector",
    tagline: "She knows everyone. She's been here forever.",
    bio: [
      "For over two decades, she has been a fixture of the Round Top antique community. Her shop on the corridor is a destination in itself — a carefully curated space where European farmhouse pieces sit alongside Texas primitives, and every item has a story she can tell you from memory.",
      "As a host, she brings the deep knowledge and relationships that only come from decades in the business. Her episodes focus on the tradition of collecting, the history of Round Top, and the dealers and artisans who have shaped the show into what it is today.",
      "If you want to know where to find the best ironwork, who has the finest French linens, or how Round Top has changed over the years, she is your guide.",
    ],
    episodes: "Antiques, history, dealer profiles, collecting guides",
    color: "bg-[#e8ddd0]",
  },
  {
    role: "The Tastemaker",
    tagline: "Energy, style, and an eye for the unexpected.",
    bio: [
      "She runs one of the most talked-about fashion boutiques on the show corridor, blending vintage Western wear, modern accessories, and her own unmistakable sense of style. Her booth is always packed, and her Instagram following has turned her into one of Round Top's most recognizable faces.",
      "As a host, she brings warmth, energy, and a fresh perspective to the show. Her episodes explore the world of vintage fashion, the creative entrepreneurs who call Round Top home, and the culture that makes this community so magnetic.",
      "Whether she is talking to a turquoise dealer from New Mexico or a young designer launching her first collection at the show, her conversations feel like catching up with a friend who always knows what is next.",
    ],
    episodes: "Fashion, style, creative entrepreneurs, culture",
    color: "bg-[#d5dde0]",
  },
  {
    role: "The Stylist",
    tagline: "She shows you how to bring your finds home.",
    badge: "Coming Soon",
    bio: [
      "An interior designer with a devoted client base and a reputation for creating warm, layered spaces that feel both collected and intentional. Round Top is one of her primary sourcing destinations — she returns every season with a trailer and a vision.",
      "As a host, she bridges the gap between the excitement of the hunt and the reality of living with your purchases. Her episodes will show you how designers think about antiques, how to mix old and new, and how to transform a field find into a centerpiece of your home.",
      "Her perspective adds a practical, design-forward lens to the show — perfect for viewers who love Round Top but want guidance on making it all work together.",
    ],
    episodes: "Interior design, styling tips, home tours, sourcing",
    color: "bg-[#dde0d5]",
  },
];

export default function HostsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream px-6 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-brown md:text-5xl">
            Meet Your Hosts
          </h1>
          <p className="mt-4 text-lg text-muted">
            Three women. Three perspectives. One extraordinary place.
          </p>
        </div>
      </section>

      {/* Host Profiles */}
      <section className="bg-warm-white px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {hosts.map((host, index) => (
            <div
              key={host.role}
              className="overflow-hidden rounded-2xl border border-tan bg-white"
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                {/* Photo placeholder */}
                <div
                  className={`flex flex-col items-center justify-center ${host.color} p-10 md:p-12`}
                >
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/60">
                    <span className="font-heading text-5xl text-brown/30">
                      {index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                    Name TBA
                  </p>
                  {host.badge && (
                    <span className="mt-2 rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
                      {host.badge}
                    </span>
                  )}
                </div>

                {/* Bio */}
                <div className="p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-brown md:text-3xl">
                    {host.role}
                  </h2>
                  <p className="mt-1 font-heading text-base italic text-muted">
                    {host.tagline}
                  </p>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                    {host.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 rounded-lg bg-warm-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Episode Topics
                    </p>
                    <p className="mt-1 text-sm text-brown">{host.episodes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-muted">
            Host announcements are coming soon. Follow us to be the first to
            know.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <a
              href="https://youtube.com/@InsideRoundTop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com/insideroundtop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              Instagram
            </a>
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-medium text-muted transition-colors hover:text-gold"
            >
              Learn more about the show &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
