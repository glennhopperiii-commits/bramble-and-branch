import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Kerith Hopper, LCSW. Therapist, writer, and creative thinker whose work sits at the intersection of healing, story, motherhood, and emotional safety.",
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 lg:pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">About</p>
          <h1 className="text-display-md lg:text-display-lg font-display text-charcoal mb-8">
            Kerith Hopper
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Licensed Clinical Social Worker, trauma-informed therapist, writer,
            and creative thinker whose work lives at the intersection of healing,
            story, motherhood, and emotional safety.
          </p>
        </div>
      </section>

      {/* The person */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Clinical identity */}
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">The Clinician</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                My professional life has been shaped by decades of service-oriented work:
                child welfare, foster care, adoption services, in-home family support,
                mindfulness instruction, crisis intervention, and clinical therapy. I hold
                a Master of Social Work from the University of Denver with a concentration
                in Trauma and Mental Health.
              </p>
              <p>
                Today I work primarily as a therapist focused on trauma, women&apos;s mental
                health, maternal mental health, grief, reproductive stressors, relational
                pain, and healing after difficult life experiences. My approach draws on
                evidence-based modalities including CBT, TF-CBT, ACT, Motivational
                Interviewing, DBT-informed approaches, and mindfulness-based interventions.
              </p>
              <p>
                I have worked closely with families in high-stress systems and carry both
                personal and professional familiarity with military culture, caregiving
                burdens, family strain, and the long arc of survival and adaptation. This
                work is rooted in real clinical experience, lived observation, and deep
                respect for what people endure.
              </p>
            </div>
          </div>

          {/* What makes it distinct */}
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">The Approach</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                The core of my work is helping people feel safer in themselves. Less ashamed.
                More grounded. More able to live with self-trust, self-compassion, and meaning.
              </p>
              <p>
                I believe trauma does not define a person, and that healing is often quieter
                and more human than people expect. It may look like better boundaries, more
                rest, less self-attack, more capacity for joy, more honest relationships,
                more creativity, more tenderness, and a little more room to breathe.
              </p>
              <p className="font-display italic text-xl text-charcoal border-l-2 border-sage-300 pl-6 py-2">
                Healing is not perfection. It is more steadiness, more self-trust,
                and more room to live.
              </p>
            </div>
          </div>

          {/* Creative identity */}
          <div className="space-y-6">
            <div className="w-10 h-px bg-sage-400" />
            <h2 className="text-display-sm font-display text-charcoal">The Larger Work</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Bramble &amp; Branch is being built from two identities: the grounded clinical
                professional and the artist. I am drawn to fiction, symbolic storytelling,
                illustration, handmade comfort objects, and the places where creativity
                and healing meet.
              </p>
              <p>
                Over time, this space will grow to hold writing, creative work, a forthcoming
                book, workshops, and comfort objects made for children and families. The
                brand is a threshold into a larger body of work. For now, the roots are
                going deep.
              </p>
            </div>
          </div>

          {/* Credentials summary */}
          <div className="space-y-6 pt-8 border-t border-stone-200">
            <h2 className="text-display-sm font-display text-charcoal">Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-600">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-sage-600">Education</p>
                <p>MSW, University of Denver<br />Trauma &amp; Mental Health Concentration</p>
                <p>BSW, University of West Florida</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-sage-600">Training</p>
                <p>CBT, TF-CBT, ACT, Motivational Interviewing, DBT-informed approaches,
                   Mindfulness-Based Interventions, CPP-informed work</p>
                <p>Tennessee First Five Training Institute (Infant &amp; Early Childhood Mental Health)</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-sage-600">Affiliations</p>
                <p>NASW &middot; NCTSN &middot; APSAC &middot; PSI</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-sage-600">Location</p>
                <p>Memphis, Tennessee<br />Virtual sessions available statewide</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-sage-400 text-sage-700 text-sm tracking-wide uppercase font-body hover:bg-sage-50 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
