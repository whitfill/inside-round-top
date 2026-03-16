import type { Metadata } from "next";
import Link from "next/link";

// Placeholder episode data
const episodes: Record<
  string,
  {
    number: number;
    title: string;
    host: string;
    duration: string;
    date: string;
    category: string;
    description: string;
    showNotes: string[];
    relatedVendors: { name: string; slug: string }[];
  }
> = {
  "the-woman-who-started-it-all": {
    number: 1,
    title: "The Woman Who Started It All",
    host: "The Collector",
    duration: "32 min",
    date: "July 2026",
    category: "Vendors",
    description:
      "A conversation with the legendary dealer who set up the very first tent on the highway outside Round Top fifty years ago. She shares how a small-town tradition became the world's largest antique fair, the changes she has seen, and why she still shows up every season.",
    showNotes: [
      "The origins of the Round Top antique show in the early 1970s",
      "How the show grew from a handful of dealers to thousands",
      "The relationship between Round Top and Warrenton",
      "What has changed — and what has stayed the same — over fifty years",
      "Advice for first-time vendors and collectors",
    ],
    relatedVendors: [],
  },
  "denim-turquoise-and-a-trailer-full-of-vintage": {
    number: 2,
    title: "Denim, Turquoise, and a Trailer Full of Vintage",
    host: "The Tastemaker",
    duration: "28 min",
    date: "July 2026",
    category: "Fashion",
    description:
      "Meet the Texas fashion dealer who drives her Airstream to every show, curating vintage Western wear, handmade jewelry, and one-of-a-kind pieces from across the Southwest.",
    showNotes: [
      "Building a fashion business on the antique show circuit",
      "The art of curating vintage Western wear",
      "Sourcing turquoise and handmade jewelry across the Southwest",
      "Life on the road between shows",
      "How social media changed the vintage fashion market",
    ],
    relatedVendors: [],
  },
  "from-the-field-to-the-living-room": {
    number: 3,
    title: "From the Field to the Living Room",
    host: "The Collector",
    duration: "35 min",
    date: "July 2026",
    category: "Design",
    description:
      "How one designer sources European farmhouse antiques at Round Top and transforms them into the warm, layered interiors her clients love. A behind-the-scenes look at the design process.",
    showNotes: [
      "Sourcing European antiques at Round Top for client projects",
      "The design philosophy of mixing old and new",
      "Tips for buying antiques with a room in mind",
      "How to spot quality in the field",
      "Transporting large pieces from the show to your home",
    ],
    relatedVendors: [],
  },
};

const relatedEpisodes = [
  {
    slug: "the-woman-who-started-it-all",
    title: "The Woman Who Started It All",
    host: "The Collector",
    duration: "32 min",
  },
  {
    slug: "denim-turquoise-and-a-trailer-full-of-vintage",
    title: "Denim, Turquoise, and a Trailer Full of Vintage",
    host: "The Tastemaker",
    duration: "28 min",
  },
  {
    slug: "from-the-field-to-the-living-room",
    title: "From the Field to the Living Room",
    host: "The Collector",
    duration: "35 min",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes[slug];

  if (!episode) {
    return {
      title: "Episode Not Found — Inside Round Top",
    };
  }

  return {
    title: `${episode.title} — Inside Round Top`,
    description: episode.description,
    openGraph: {
      title: `${episode.title} — Inside Round Top`,
      description: episode.description,
      url: `https://insideroundtop.com/episodes/${slug}`,
    },
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodes[slug];

  if (!episode) {
    return (
      <section className="bg-cream px-6 py-32 text-center">
        <div className="mx-auto max-w-xl">
          <h1 className="font-heading text-3xl font-bold text-brown">
            Episode Not Found
          </h1>
          <p className="mt-4 text-muted">
            This episode doesn&apos;t exist yet. Check back when the show
            launches in July 2026.
          </p>
          <Link
            href="/episodes"
            className="mt-6 inline-block text-sm font-medium text-gold transition-colors hover:text-gold-hover"
          >
            &larr; Back to Episodes
          </Link>
        </div>
      </section>
    );
  }

  const otherEpisodes = relatedEpisodes.filter((ep) => ep.slug !== slug);

  return (
    <>
      {/* Coming Soon Banner */}
      <div className="bg-gold/10 px-6 py-3 text-center text-sm font-medium text-gold">
        This episode is a preview. Inside Round Top launches July 2026.
      </div>

      {/* Episode Header */}
      <section className="bg-cream px-6 pb-8 pt-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/episodes"
            className="text-sm text-muted transition-colors hover:text-gold"
          >
            &larr; All Episodes
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-warm-white px-3 py-0.5 font-medium">
              {episode.host}
            </span>
            <span>Episode {episode.number}</span>
            <span className="text-tan">|</span>
            <span>{episode.duration}</span>
            <span className="text-tan">|</span>
            <span>{episode.category}</span>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold text-brown md:text-4xl">
            {episode.title}
          </h1>
          <p className="mt-1 text-sm text-muted">{episode.date}</p>
        </div>
      </section>

      {/* Video Embed Placeholder */}
      <section className="bg-cream px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-tan bg-[#e8e0d5]/50">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                <svg
                  className="h-8 w-8 text-brown/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 font-heading text-lg text-brown/50">
                Video Coming July 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="bg-warm-white px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <div>
            {/* Description */}
            <div>
              <h2 className="font-heading text-xl font-bold text-brown">
                About This Episode
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                {episode.description}
              </p>
            </div>

            {/* Show Notes */}
            <div className="mt-10">
              <h2 className="font-heading text-xl font-bold text-brown">
                Show Notes
              </h2>
              <ul className="mt-4 space-y-3">
                {episode.showNotes.map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured on Round Top Finder */}
            <div className="mt-10 rounded-xl border border-tan bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-brown">
                Featured on Round Top Finder
              </h3>
              <p className="mt-2 text-sm text-muted">
                Vendors and venues mentioned in this episode will be linked here
                when the show launches. Visit{" "}
                <a
                  href="https://roundtopfinder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold-hover"
                >
                  Round Top Finder
                </a>{" "}
                to explore 300+ vendors and 48 venues.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <h3 className="font-heading text-lg font-semibold text-brown">
              More Episodes
            </h3>
            <div className="mt-4 space-y-4">
              {otherEpisodes.map((ep) => (
                <Link
                  key={ep.slug}
                  href={`/episodes/${ep.slug}`}
                  className="block rounded-xl border border-tan bg-cream p-4 transition-shadow hover:shadow-sm"
                >
                  <p className="font-heading text-sm font-semibold leading-snug text-brown">
                    {ep.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                    <span>{ep.host}</span>
                    <span className="text-tan">|</span>
                    <span>{ep.duration}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://youtube.com/@InsideRoundTop"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-gold px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
              >
                Subscribe on YouTube
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
