import Image from "next/image";
import Link from "next/link";

const placeholderEpisodes = [
  {
    slug: "27-years-at-the-arbors",
    title: "27 Years at The Arbors",
    host: "The Collector",
    duration: "32 min",
    type: "Interview",
    description: "How one of Round Top's most iconic venues grew from a single tent to 120+ world-class dealers on 20 acres.",
    image: "/images/hero-tents.jpg",
  },
  {
    slug: "first-timers-guide",
    title: "The First Timer's Guide to Round Top",
    host: "All Hosts",
    duration: "24 min",
    type: "Guide",
    description: "Three perspectives on what you actually need to know before your first trip to the world's largest antique fair.",
    image: "/images/hero-fields.jpg",
  },
  {
    slug: "from-france-to-texas",
    title: "From France to Texas",
    host: "The Tastemaker",
    duration: "28 min",
    type: "Interview",
    description: "The incredible logistics of sourcing antiques in French countryside villages and shipping them to a field in Texas.",
    image: "/images/antique-chandelier.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#f9f9f7]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8a8578] mb-6">
                A Video Podcast
              </p>
              <h1 className="text-5xl md:text-7xl font-medium text-[#1a1815] mb-6 leading-[1.05]">
                Inside<br />Round Top
              </h1>
              <div className="w-12 h-[1px] bg-[#1a1815] mb-6" />
              <p className="text-lg md:text-xl text-[#4a4640] leading-relaxed mb-4 max-w-md">
                Stories, style, and secrets from the people who make the world&apos;s largest antique fair.
              </p>
              <p className="inline-block border border-[#c4654a] px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase text-[#c4654a] mb-8">
                Coming July 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://youtube.com/@InsideRoundTop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1a1815] bg-[#1a1815] px-7 py-3 text-[13px] font-medium tracking-wide text-white text-center transition-all hover:bg-white hover:text-[#1a1815]"
                >
                  Subscribe on YouTube
                </a>
                <Link
                  href="/hosts"
                  className="border border-[#1a1815] px-7 py-3 text-[13px] font-medium tracking-wide text-[#1a1815] text-center transition-all hover:bg-[#1a1815] hover:text-white"
                >
                  Meet the Hosts
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-fields.jpg"
                  alt="Warrenton antique fields at Round Top"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-2/3 aspect-[4/3] overflow-hidden border-4 border-white shadow-lg hidden md:block">
                <Image
                  src="/images/hero-fashion.jpg"
                  alt="Fashion at Round Top"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8a8578] mb-4">
            The Podcast
          </p>
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            What is Inside Round Top?
          </h2>
          <div className="w-12 h-[1px] bg-[#1a1815] mx-auto mb-8" />
          <p className="text-lg text-[#4a4640] leading-relaxed mb-6">
            Every spring and fall, approximately 1,500 vendors set up across 48 independently owned venues
            in Round Top, Texas — drawing 100,000 visitors to an 11-mile corridor of antiques, art, fashion, and design.
          </p>
          <p className="text-lg text-[#4a4640] leading-relaxed mb-6">
            Inside Round Top goes behind the scenes. Through 30-minute interviews, we explore the people who make
            it all happen — the dealers who travel the world to source inventory, the designers who furnish
            celebrity homes from a Texas field, and the characters who&apos;ve made Round Top their life.
          </p>
          <p className="text-[#8a8578]">
            Three hosts. Three perspectives. Endless stories.
          </p>
        </div>
      </section>

      {/* HOSTS */}
      <section className="bg-[#f9f9f7] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8a8578] mb-4">
              Your Guides
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">Meet the Hosts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                role: "The Collector",
                title: "Antiques & History",
                bio: "A Round Top veteran who owns one of the corridor's most beloved antique shops. She knows every dealer, every story, and exactly what makes a piece worth collecting.",
                tags: ["Antiques", "Provenance", "Vendor Stories", "History"],
              },
              {
                role: "The Tastemaker",
                title: "Fashion & Style",
                bio: "The owner of a fashion boutique who brings energy, trend awareness, and an eye for what's next. She sees Round Top through the lens of personal style.",
                tags: ["Fashion", "Trends", "Western Chic", "Jewelry"],
              },
              {
                role: "The Stylist",
                title: "Design & Interiors",
                bio: "An interior designer who sources at Round Top for client projects. She shows you how to take your finds home and make them sing.",
                tags: ["Interior Design", "Styling", "Home Decor", "Sourcing"],
                comingSoon: true,
              },
            ].map((host, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 rounded-full bg-[#f0eeeb] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-[#8a8578] text-sm">Photo TBA</span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c4654a] mb-2">
                  {host.role}
                </p>
                <h3 className="text-xl font-medium mb-1">Name TBA</h3>
                <p className="text-sm text-[#8a8578] mb-4">{host.title}</p>
                <p className="text-[#4a4640] text-sm leading-relaxed mb-4">{host.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {host.tags.map((tag) => (
                    <span key={tag} className="text-[11px] tracking-wide text-[#8a8578] border border-[#e2dfd9] px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                {host.comingSoon && (
                  <p className="mt-4 text-[11px] tracking-[0.1em] uppercase text-[#c4654a] font-medium">
                    Coming Soon
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPISODES PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8a8578] mb-4">
              Coming July 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">Preview: Season One</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderEpisodes.map((ep) => (
              <article key={ep.slug} className="group">
                <div className="relative aspect-[16/10] mb-5 overflow-hidden bg-[#f0eeeb]">
                  <Image src={ep.image} alt={ep.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-black/70 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-wider uppercase text-white">{ep.type}</span>
                    <span className="bg-black/70 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-wider uppercase text-white">{ep.duration}</span>
                  </div>
                </div>
                <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#c4654a] mb-2">{ep.host}</p>
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#c4654a] transition-colors">{ep.title}</h3>
                <p className="text-sm text-[#8a8578] leading-relaxed">{ep.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/rt-barn.jpg" alt="Round Top venue barn" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-white/60 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
              48 Venues &middot; 1,500+ Vendors &middot; 11 Miles
            </p>
            <h2 className="text-3xl md:text-5xl font-medium text-white max-w-2xl">
              The world&apos;s largest antique fair, told from the inside.
            </h2>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 md:py-32 bg-[#1a1815] text-white">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">Stay in the Loop</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">Don&apos;t Miss an Episode</h2>
          <p className="text-white/60 mb-8">Subscribe to get notified when new episodes drop. No spam, just stories.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input type="email" placeholder="Your email" className="flex-1 border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50" />
            <button className="border border-white bg-white px-6 py-3 text-[13px] font-medium tracking-wide text-[#1a1815] transition-all hover:bg-transparent hover:text-white whitespace-nowrap">Subscribe</button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://youtube.com/@InsideRoundTop" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">YouTube</a>
            <a href="https://instagram.com/insideroundtop" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</a>
            <a href="https://tiktok.com/@insideroundtop" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">TikTok</a>
          </div>
        </div>
      </section>

      {/* CROSS-PROMO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8a8578] mb-4">Our Companion Platform</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Planning Your Visit?</h2>
              <div className="w-12 h-[1px] bg-[#1a1815] mb-6" />
              <p className="text-[#4a4640] leading-relaxed mb-4">
                Inside Round Top tells the stories. <strong>Round Top Finder</strong> helps you plan the trip.
              </p>
              <p className="text-[#4a4640] leading-relaxed mb-8">
                Browse 300+ vendor profiles, explore all 48 venues on an interactive map, find parking and restrooms,
                and build your day-by-day itinerary. Available on web and as a free mobile app.
              </p>
              <a href="https://roundtopfinder.com" target="_blank" rel="noopener noreferrer"
                className="inline-block border border-[#1a1815] px-7 py-3 text-[13px] font-medium tracking-wide text-[#1a1815] transition-all hover:bg-[#1a1815] hover:text-white">
                Visit Round Top Finder
              </a>
            </div>
            <div className="relative aspect-[4/3] bg-[#f0eeeb] overflow-hidden">
              <Image src="/images/hero-antiques.jpg" alt="Antique furniture at Round Top" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
