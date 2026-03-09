export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">

        {/* Logo area */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-bark">
            Bramble &amp; Branch
          </h1>
          <p className="text-lg text-stone-600 font-light tracking-wide uppercase">
            Counseling
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4">
          <span className="block w-16 h-px bg-sage-300" />
          <span className="block w-2 h-2 rounded-full bg-sage-400" />
          <span className="block w-16 h-px bg-sage-300" />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-serif text-stone-800 italic">
            Something is growing here.
          </p>
          <p className="text-stone-500 leading-relaxed max-w-md mx-auto">
            We&apos;re building a new home for Bramble &amp; Branch Counseling. 
            Check back soon for more.
          </p>
        </div>

        {/* Contact teaser */}
        <div className="pt-4">
          <p className="text-sm text-stone-400">
            Kerith Hopper, LCSW
          </p>
        </div>

      </div>
    </main>
  );
}
