import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes — Inside Round Top",
  description:
    "Watch episodes of Inside Round Top, a video podcast exploring the creators, vendors, and characters behind the world's largest antique fair.",
  openGraph: {
    title: "Episodes — Inside Round Top",
    description:
      "Watch episodes of Inside Round Top, a video podcast about the world's largest antique fair.",
    url: "https://insideroundtop.com/episodes",
  },
};

const filters = ["All", "Vendors", "Design", "Fashion", "Behind the Scenes"];

const episodes = [
  {
    slug: "the-woman-who-started-it-all",
    number: 1,
    title: "The Woman Who Started It All",
    host: "The Collector",
    duration: "32 min",
    date: "July 2026",
    category: "Vendors",
    description:
      "A conversation with the legendary dealer who set up the very first tent on the highway outside Round Top fifty years ago. She shares how a small-town tradition became the world's largest antique fair, the changes she has seen, and why she still shows up every season.",
  },
  {
    slug: "denim-turquoise-and-a-trailer-full-of-vintage",
    number: 2,
    title: "Denim, Turquoise, and a Trailer Full of Vintage",
    host: "The Tastemaker",
    duration: "28 min",
    date: "July 2026",
    category: "Fashion",
    description:
      "Meet the Texas fashion dealer who drives her Airstream to every show, curating vintage Western wear, handmade jewelry, and one-of-a-kind pieces from across the Southwest. A story about style, independence, and the open road.",
  },
  {
    slug: "from-the-field-to-the-living-room",
    number: 3,
    title: "From the Field to the Living Room",
    host: "The Collector",
    duration: "35 min",
    date: "July 2026",
    category: "Design",
    description:
      "How one designer sources European farmhouse antiques at Round Top and transforms them into the warm, layered interiors her clients love. A behind-the-scenes look at the design process, from muddy fields to magazine-worthy rooms.",
  },
];

export default function EpisodesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream px-6 pb-12 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold text-brown md:text-5xl">
                Episodes
              </h1>
              <p className="mt-2 text-muted">
                In-depth conversations from the world&apos;s largest antique
                fair.
              </p>
            </div>
            <div className="rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-sm font-medium text-gold">
              Coming July 2026
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream px-6 pb-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-brown text-cream"
                    : "border border-tan bg-white text-muted hover:border-gold hover:text-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episode Grid */}
      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {episodes.map((ep) => (
              <div
                key={ep.slug}
                className="group overflow-hidden rounded-2xl border border-tan bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-48 items-center justify-center bg-[#e8e0d5]/50">
                  <div className="text-center">
                    <span className="font-heading text-4xl font-bold text-tan">
                      {String(ep.number).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-xs text-muted">Preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span className="rounded-full bg-warm-white px-2.5 py-0.5 font-medium">
                      {ep.host}
                    </span>
                    <span>{ep.duration}</span>
                    <span className="text-tan">|</span>
                    <span>{ep.category}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-lg font-semibold leading-snug text-brown">
                    {ep.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {ep.description}
                  </p>
                  <p className="mt-4 text-xs text-muted">{ep.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More coming */}
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-md rounded-2xl border border-tan bg-warm-white p-10">
              <p className="font-heading text-xl font-semibold text-brown">
                More Episodes Coming Soon
              </p>
              <p className="mt-3 text-sm text-muted">
                Season one launches in July 2026 with new episodes every week.
                Subscribe on YouTube to get notified.
              </p>
              <a
                href="https://youtube.com/@InsideRoundTop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
