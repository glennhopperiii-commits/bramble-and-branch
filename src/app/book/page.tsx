import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description: "A forthcoming book on parenting from Kerith Hopper.",
};

export default function Book() {
  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body">Book</p>
        <h1 className="text-display-md lg:text-display-lg font-display text-charcoal">
          Something is being written
        </h1>
        <div className="flex items-center justify-center gap-4 py-2">
          <span className="block w-12 h-px bg-sage-300" />
          <span className="block w-1.5 h-1.5 rounded-full bg-sage-400" />
          <span className="block w-12 h-px bg-sage-300" />
        </div>
        <p className="text-stone-500 leading-relaxed max-w-xl mx-auto">
          A book on parenting, healing, and what it means to raise children
          while still tending to your own story. More details to come.
        </p>
      </div>
    </section>
  );
}
