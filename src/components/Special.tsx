interface Props {
  blurb: string;
  soldOut: boolean;
}

export default function Special({ blurb, soldOut }: Props) {
  return (
    <aside
      aria-label="Today's special"
      className="relative overflow-hidden rounded-2xl bg-[#B45309] p-6 text-amber-50 shadow-sm sm:p-8"
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/15" />
      <div className="absolute -bottom-20 right-16 h-48 w-48 rounded-full border border-white/10" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-amber-100">
            Today's special
          </span>

          {soldOut && (
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
              Sold out
            </span>
          )}
        </div>

        <h2 className="max-w-xl font-serif text-2xl leading-tight sm:text-3xl">
          {soldOut
            ? "Saffron French Toast — sold out for today."
            : "Saffron French Toast"}
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-amber-100 sm:text-base">
          {soldOut
            ? "It was a good one. We're sorry you missed it — check back tomorrow."
            : blurb}
        </p>
      </div>
    </aside>
  );
}
