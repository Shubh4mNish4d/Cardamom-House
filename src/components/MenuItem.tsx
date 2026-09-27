import type { MenuItem as MenuItemType } from "../types/restaurant";

interface Props {
  item: MenuItemType;
  soldOut?: boolean;
}

const tagLabels = {
  V: "Vegetarian",
  GF: "Gluten-free",
  spicy: "Spicy",
} as const;

export default function MenuItem({ item, soldOut = false }: Props) {
  return (
    <article
      className={[
        "group relative py-5 sm:py-6",
        "border-b border-stone-200/80 last:border-b-0 dark:border-stone-800",
        "transition-opacity duration-300",
        soldOut ? "opacity-45" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-5">

       <div className="flex gap-6"> 
           <div className="md:max-w-40 max-w-25 min-w-25 md:max-h-30 min-h-35 md:min-h-30 max-h-35 rounded-sm overflow-hidden">
          <img src={item.image} className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-[1.2rem] leading-tight text-stone-900 sm:text-[1.3rem] dark:text-stone-100">
              {item.name}
            </h3>

            {soldOut && (
              <span className="rounded-full bg-stone-200 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-stone-600">
                Sold out
              </span>
            )}
          </div>

          {item.description && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-500 sm:text-[0.95rem] dark:text-stone-400">
              {item.description}
            </p>
          )}

          {item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  title={tagLabels[tag]}
                  className="rounded-full border border-stone-200 bg-stone-50 px-2 py-1 text-[0.62rem] font-medium uppercase tracking-[0.1em] text-stone-500 dark:text-stone-800 dark:border-stone-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
       </div>

        <span className="shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-stone-900 sm:text-base dark:text-stone-100">
          €{item.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}