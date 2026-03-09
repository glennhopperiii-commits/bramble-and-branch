import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-display text-2xl text-cream">
              Bramble <span className="text-sage-400">&amp;</span> Branch
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Trauma-informed counseling rooted in warmth,
              creativity, and the belief that what you feel makes sense.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">Pages</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-stone-400 hover:text-cream transition-colors">About</Link>
              <Link href="/clinical" className="text-sm text-stone-400 hover:text-cream transition-colors">Clinical Work</Link>
              <Link href="/speaking" className="text-sm text-stone-400 hover:text-cream transition-colors">Speaking &amp; Training</Link>
              <Link href="/resources" className="text-sm text-stone-400 hover:text-cream transition-colors">Resources</Link>
              <Link href="/contact" className="text-sm text-stone-400 hover:text-cream transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">Connect</p>
            <div className="flex flex-col gap-2 text-sm text-stone-400">
              <p>Kerith Hopper, LCSW</p>
              <p>Memphis, Tennessee</p>
              <Link href="/contact" className="hover:text-cream transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-700/50">
          <p className="text-xs text-stone-500">
            &copy; 2026 Bramble &amp; Branch Counseling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
