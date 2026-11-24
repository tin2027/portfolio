import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-shell gap-10 md:flex-row"
    >
      <div className="flex max-w-2xl flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl md:text-left md:text-6xl text-center">
          Hi, I am Tinhinane
        </h1>
        <p className="text-lg text-slate-300 md:text-left md:text-2xl text-center">
          A junior developer who loves building clean functional web apps
        </p>
      </div>
      <div className="w-56 shrink-0 sm:w-64 md:w-80 lg:w-96">
        <Image
          src="/me.png"
          alt="Profile Picture"
          width={360}
          height={360}
          priority
          className="h-auto w-full rounded-full object-cover"
        />
      </div>
    </section>
  );
}
