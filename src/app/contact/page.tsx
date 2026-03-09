import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to Kerith Hopper, LCSW at Bramble & Branch Counseling.",
};

export default function Contact() {
  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">Contact</p>
        <h1 className="text-display-md lg:text-display-lg font-display text-charcoal mb-8">
          Reaching out is the hardest part
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed mb-16">
          If something here resonated, I would be glad to hear from you.
          Whether you are looking for therapy, consultation, or a training
          partnership, the first step is the same: a simple conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-sage-600">Email</p>
              <a href="mailto:kerithhopper@gmail.com" className="text-charcoal hover:text-sage-700 transition-colors">
                kerithhopper@gmail.com
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-sage-600">Phone</p>
              <a href="tel:+16157517655" className="text-charcoal hover:text-sage-700 transition-colors">
                (615) 751-7655
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-sage-600">Location</p>
              <p className="text-stone-600">
                Memphis, Tennessee<br />
                Virtual sessions available statewide
              </p>
            </div>
          </div>

          <div className="p-8 bg-stone-50/60 border border-stone-200/80 space-y-4">
            <p className="font-display text-xl text-charcoal">What to expect</p>
            <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
              <p>
                When you reach out, I will respond within one to two business
                days. We will schedule a brief introductory call to talk about
                what brings you in and whether we might be a good fit.
              </p>
              <p>
                There is no pressure. That first conversation is simply a
                chance to see if this feels right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
