import ThemeToggle from "./ThemeToggle";

interface Props {
  isOpen: boolean;
  closedState: boolean;
}

export default function Header({
  isOpen,
  closedState,
}: Props) {
  return (
    <header className="relative overflow-hidden bg-[#f8f5ef] dark:bg-stone-950">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-950/30" />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-500 ">
            Lisbon · Est. 2021
          </span>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <span
              className={[
                "hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] sm:flex",
                isOpen && !closedState
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-stone-200 bg-white/60 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  isOpen && !closedState
                    ? "bg-emerald-500"
                    : "bg-stone-400",
                ].join(" ")}
              />
              {isOpen && !closedState
                ? "Open now"
                : "Closed today"}
            </span>
          </div>
        </div>

         <div className="mt-20 max-w-3xl sm:mt-24 page-enter page-enter-delay-2">
            <p className="mb-5 text-sm font-medium text-stone-500">
              Rua da Boavista · Lisboa
            </p>

            <h1 className="font-serif text-[3.8rem] leading-[0.88] tracking-[-0.04em] text-stone-900 sm:text-7xl lg:text-8xl dark:bg-stone-950 dark:text-stone-100">
              Cardamom
              <br />
              <span className="text-amber-700">House.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-stone-600 dark:text-stone-400 sm:text-lg">
              Slow brunch. Strong coffee.
              <br className="hidden sm:block" /> Lisbon, since 2021.
            </p>
          </div>
      </div> 
    </header>
  );
}