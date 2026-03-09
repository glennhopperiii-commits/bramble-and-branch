import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Work",
  description: "Trauma-informed therapy for women and mothers. Individual therapy, consultation, and support for grief, maternal mental health, and healing.",
};

export default function Clinical() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 lg:pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">Clinical Work</p>
          <h1 className="text-display-md lg:text-display-lg font-display text-charcoal mb-8">
            Therapy rooted in trust
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Individual therapy and clinical consultation for adults navigating trauma,
            grief, maternal mental health challenges, and the long work of finding
            steadiness again.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">How I work</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Therapy with me begins with the understanding that your symptoms make
                sense. Whatever you are carrying, whatever patterns feel stuck or
                overwhelming, they developed for real reasons. We start there.
              </p>
              <p>
                I draw from evidence-based and trauma-informed approaches, but the
                foundation is always relational: warmth, honesty, and a willingness to
                sit in the hard places with you until they become less frightening.
                My job is to help you feel safer in your own skin, not to rush you
                toward someone else&apos;s version of wellness.
              </p>
              <p>
                Sessions are available virtually throughout Tennessee.
              </p>
            </div>
          </div>

          {/* Areas of focus */}
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">Areas of focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-stone-600">
              {[
                "Complex trauma and PTSD",
                "Maternal mental health",
                "Perinatal and postpartum mood disorders",
                "Grief and loss",
                "Reproductive stressors",
                "Anxiety and depression",
                "Relational pain and attachment",
                "Identity and self-worth",
                "Caregiver burnout",
                "Military-connected families",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2 border-b border-stone-100">
                  <span className="block w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modalities */}
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">Therapeutic approaches</h2>
            <p className="text-stone-600 leading-relaxed">
              My clinical work integrates several evidence-based frameworks,
              adapted to what each person actually needs: Cognitive Behavioral
              Therapy (CBT), Trauma-Focused CBT, Acceptance and Commitment
              Therapy (ACT), Motivational Interviewing, DBT-informed skills,
              mindfulness-based interventions, and CPP-informed relational work.
            </p>
            <p className="text-stone-600 leading-relaxed">
              I hold training from the Tennessee First Five Institute in infant
              and early childhood mental health, and I bring years of experience
              in child welfare, family systems, and interdisciplinary care
              coordination.
            </p>
          </div>

          {/* Consultation */}
          <div className="space-y-6 p-8 lg:p-10 bg-stone-50/60 border border-stone-200/80">
            <h2 className="text-display-sm font-display text-charcoal">Consultation</h2>
            <p className="text-stone-600 leading-relaxed">
              I also offer clinical consultation for fellow therapists and
              organizations working with trauma, maternal mental health, and
              complex family systems. If you are looking for peer consultation,
              reflective practice support, or training partnerships, I would
              welcome that conversation.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-6 text-center pt-8">
            <p className="font-display italic text-xl text-stone-700">
              Reaching out is the hardest part.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-sage-400 text-sage-700 text-sm tracking-wide uppercase font-body hover:bg-sage-50 transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
