import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-content">
        <h2 className="title">About Me</h2>
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <Image
            src="/about.avif"
            alt="A person working at a computer"
            width={720}
            height={720}
            className="mx-auto hidden aspect-square w-full max-w-xs rounded-3xl object-cover md:block"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/60 bg-slate-100 p-5 shadow-sm">
              <h3 className="mb-2 font-semibold text-slate-900">Education</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                I&apos;m a third-year student at the Higher National School of
                Computer Science (ESI) in Algiers, building a strong foundation
                in computer science.
              </p>
            </article>
            <article className="rounded-2xl border border-white/60 bg-slate-100 p-5 shadow-sm">
              <h3 className="mb-2 font-semibold text-slate-900">
                Full-Stack Development
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                I enjoy building complete, user-friendly applications across
                the frontend and backend, using tools such as React, Next.js,
                and Django.
              </p>
            </article>
            <article className="rounded-2xl border border-white/60 bg-slate-100 p-5 shadow-sm sm:col-span-2">
              <h3 className="mb-2 font-semibold text-slate-900">
                Interests &amp; Goals
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                I love turning ideas into practical solutions and learning
                through real projects. I&apos;m open to internships,
                collaborations, and freelance opportunities.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
