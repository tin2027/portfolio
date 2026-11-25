const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tin2027",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tinhinane-cheballah-23b044452/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-content flex flex-col items-center text-center">
        <h2 className="title">Contact</h2>
        <p className="mb-6 max-w-lg text-slate-300">
          Have an opportunity or a project in mind? I&apos;d be happy to hear
          from you.
        </p>
        <a
          href="mailto:cheballahtinhinane@gmail.com"
          className="btn-primary"
        >
          cheballahtinhinane@gmail.com
        </a>
        <a
          href="tel:+213780136232"
          className="mt-4 font-medium text-primary underline-offset-4 transition-colors hover:text-pink hover:underline"
        >
          +213 780 136 232
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-5">
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 transition-colors hover:text-pink hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
