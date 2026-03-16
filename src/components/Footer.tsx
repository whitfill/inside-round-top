import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2dfd9]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-['Playfair_Display'] text-xl font-medium text-[#1a1815]">
              Inside Round Top
            </p>
            <p className="mt-3 text-sm text-[#8a8578] leading-relaxed">
              Stories, style, and secrets from the people who make Round Top magic.
            </p>
            <p className="mt-4 text-sm text-[#8a8578]">
              A companion to{" "}
              <a
                href="https://roundtopfinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1a1815] transition-colors hover:text-[#c4654a]"
              >
                Round Top Finder
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a8578]">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/episodes" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">Episodes</Link>
              <Link href="/hosts" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">Hosts</Link>
              <Link href="/about" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">About</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a8578]">
              Follow Along
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a href="https://youtube.com/@InsideRoundTop" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">YouTube</a>
              <a href="https://instagram.com/insideroundtop" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">Instagram</a>
              <a href="https://tiktok.com/@insideroundtop" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">TikTok</a>
              <a href="https://roundtopfinder.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4a4640] transition-colors hover:text-[#c4654a]">Round Top Finder</a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-[#e2dfd9] pt-6 text-center text-xs text-[#8a8578] tracking-wide">
          &copy; 2026 Inside Round Top. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
