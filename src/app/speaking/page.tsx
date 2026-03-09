import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking & Training",
  description: "Workshops, training, and consultation on trauma-informed care, maternal mental health, and resilience.",
};

export default function Speaking() {
  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-32 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">Speaking &amp; Training</p>
          <h1 className="text-display-md lg:text-display-lg font-display text-charcoal mb-8">
            Workshops &amp; consultation
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Training for clinicians, organizations, and communities on
            trauma-informed care, maternal mental health, resilience,
            and the art of holding complexity in professional settings.
          </p>
        </div>

        <div className="w-10 h-px bg-sage-400" />

        <div className="space-y-5 text-stone-600 leading-relaxed">
          <p>
            I bring decades of clinical and community-based experience to
            workshops, staff trainings, and speaking engagements. My focus
            is on translating clinical insight into language and frameworks
            that are genuinely useful for the people doing the work.
          </p>
          <p>
            Topics include trauma-informed practice, perinatal and maternal
            mental health, reflective supervision, grief in professional
            contexts, and building cultures of care within organizations.
          </p>
        </div>

        <div className="p-8 lg:p-10 bg-stone-50/60 border border-stone-200/80 space-y-4">
          <h2 className="font-display text-xl text-charcoal">Interested in working together?</h2>
          <p className="text-sm text-stone-500 leading-relaxed">
            If you are exploring a training, workshop, or speaking engagement,
            I would welcome the conversation. Each collaboration is shaped to
            fit your community and context.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2.5 border border-sage-400 text-sage-700 text-sm tracking-wide uppercase font-body hover:bg-sage-50 transition-colors duration-300"
          >
            Inquire
          </Link>
        </div>
      </div>
    </section>
  );
}
