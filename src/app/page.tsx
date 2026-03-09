import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
        {/* Subtle top gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-cream to-cream pointer-events-none" />

        <div className="relative max-w-3xl text-center space-y-8">
          {/* Wordmark */}
          <div className="space-y-3">
            <h1 className="text-display-lg md:text-display-xl font-display text-charcoal">
              Bramble &amp; Branch
            </h1>
            <p className="text-sm md:text-base tracking-[0.25em] uppercase text-stone-500 font-body font-light">
              Counseling
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-2">
            <span className="block w-12 h-px bg-sage-300" />
            <span className="block w-1.5 h-1.5 rounded-full bg-sage-400" />
            <span className="block w-12 h-px bg-sage-300" />
          </div>

          {/* Core message */}
          <p className="text-display-sm md:text-display-md font-display italic text-stone-700 leading-snug">
            What you feel makes sense.
          </p>

          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            Trauma-informed therapy for women and mothers seeking more
            steadiness, more self-trust, and more room to live.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/clinical"
              className="inline-block px-8 py-3 border border-sage-400 text-sage-700 text-sm tracking-wide uppercase font-body hover:bg-sage-50 transition-colors duration-300"
            >
              Begin Here
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">The Heart of the Work</p>
              <h2 className="text-display-sm lg:text-display-md font-display text-charcoal">
                Healing does not erase pain.
              </h2>
            </div>

            {/* Right column */}
            <div className="lg:col-span-8 space-y-6 text-stone-600 leading-relaxed">
              <p>
                It makes life feel livable again. Meaningful. Even, sometimes, joyful.
              </p>
              <p>
                You are a healthy, capable, lovable, worthwhile person who made it through
                some messy, painful things. The feelings you carry are reasonable responses
                to unreasonable experiences. Anyone would feel the way you do.
              </p>
              <p>
                Healing often looks quieter than people expect. It shows up as better
                boundaries, less inner criticism, more self-trust. A little more rest.
                A little more presence with the people who matter. Room, at last, for
                creativity and care.
              </p>
              <p className="font-display italic text-xl text-stone-700 pt-4 border-t border-stone-200">
                You are okay. And you can feel better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-stone-50/50 to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">The Work</p>
            <h2 className="text-display-sm lg:text-display-md font-display text-charcoal">
              Where we can meet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Clinical */}
            <Link href="/clinical" className="group block p-8 bg-cream border border-stone-200/80 hover:border-sage-300 transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-8 h-px bg-sage-400" />
                <h3 className="font-display text-2xl text-charcoal group-hover:text-sage-700 transition-colors">
                  Clinical Work
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Individual therapy for trauma, grief, maternal mental health,
                  and the long work of finding your footing again. Virtual sessions
                  available throughout Tennessee.
                </p>
                <p className="text-xs text-sage-600 uppercase tracking-wider pt-2">
                  Learn more &rarr;
                </p>
              </div>
            </Link>

            {/* Speaking */}
            <Link href="/speaking" className="group block p-8 bg-cream border border-stone-200/80 hover:border-sage-300 transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-8 h-px bg-sage-400" />
                <h3 className="font-display text-2xl text-charcoal group-hover:text-sage-700 transition-colors">
                  Speaking &amp; Training
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Workshops and consultation for clinicians, organizations, and
                  communities on trauma-informed care, maternal mental health,
                  and resilience.
                </p>
                <p className="text-xs text-sage-600 uppercase tracking-wider pt-2">
                  Learn more &rarr;
                </p>
              </div>
            </Link>

            {/* Resources */}
            <Link href="/resources" className="group block p-8 bg-cream border border-stone-200/80 hover:border-sage-300 transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-8 h-px bg-sage-400" />
                <h3 className="font-display text-2xl text-charcoal group-hover:text-sage-700 transition-colors">
                  Resources
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Practical tools, meditations, reflections, and short videos
                  rooted in the belief that small, steady nourishment makes
                  the largest difference.
                </p>
                <p className="text-xs text-sage-600 uppercase tracking-wider pt-2">
                  Coming soon &rarr;
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WORLD ============ */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">The Larger World</p>
          <h2 className="text-display-sm lg:text-display-md font-display text-charcoal italic">
            Something is growing here.
          </h2>
          <p className="text-stone-500 leading-relaxed max-w-xl mx-auto">
            Bramble &amp; Branch is more than a clinical practice. Over time, this space will
            hold writing, creative work, a forthcoming book on parenting, comfort objects,
            and other branches of the work. For now, the roots are going deep.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="block w-12 h-px bg-stone-200" />
            <span className="block w-1.5 h-1.5 rounded-full bg-stone-300" />
            <span className="block w-12 h-px bg-stone-200" />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 lg:py-32 px-6 bg-charcoal text-cream">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-display-sm lg:text-display-md font-display">
            Ready to begin?
          </h2>
          <p className="text-stone-400 leading-relaxed max-w-lg mx-auto">
            If something here resonated, I would be glad to hear from you.
            Reaching out is the hardest part. Everything after that is just
            one step at a time.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-sage-500 text-sage-300 text-sm tracking-wide uppercase font-body hover:bg-sage-900/30 transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <p className="text-xs text-stone-500 pt-4">
            Kerith Hopper, LCSW &middot; Memphis, Tennessee
          </p>
        </div>
      </section>
    </>
  );
}
