type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
      {eyebrow ? <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-coral">{eyebrow}</p> : null}
      <h2 className="display-font text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[0.95] text-navy">{title} <span className="text-coral" aria-hidden="true">♡</span></h2>
      {description ? <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-navy/70 sm:text-base">{description}</p> : null}
    </div>
  );
}
