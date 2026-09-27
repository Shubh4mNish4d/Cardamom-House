interface Props {
  categories: { id: string; name: string }[];
  activeCategory: string;
}

export default function CategoryNav({
  categories,
  activeCategory,
}: Props) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-40 border-y border-stone-200 dark:border-stone-800 bg-[#f8f5ef]/95 backdrop-blur-md dark:bg-stone-950"
    >
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-max">
          {categories.map((category) => {
            const active = category.id === activeCategory;

            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                aria-current={active ? "true" : undefined}
                className={[
                  "relative px-4 py-4 text-xs font-semibold uppercase tracking-[0.12em]",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 ",
                  active
                    ? "text-amber-800"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100",
                ].join(" ")}
              >
                {category.name}

                <span
                  aria-hidden="true"
                  className={[
                    "absolute bottom-0 left-4 right-4 h-0.5 origin-left bg-amber-700 transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}