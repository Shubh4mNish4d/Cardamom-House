import type {
  MenuCategory,
  MenuItem as MenuItemType,
} from "../types/restaurant";
import MenuItem from "./MenuItem";
import type { DietaryFilter } from "./DietaryFilter";

interface Props {
  category: MenuCategory;
  specialItemId: string;
  soldOut: boolean;
  dietaryFilter: DietaryFilter;
}

function matchesDietaryFilter(
  item: MenuItemType,
  filter: DietaryFilter,
) {
  if (filter === "all") {
    return true;
  }

  if (filter === "vegetarian") {
    return item.tags.includes("V");
  }

  if (filter === "gluten-free") {
    return item.tags.includes("GF");
  }

  return true;
}

export default function MenuSection({
  category,
  specialItemId,
  soldOut,
  dietaryFilter,
}: Props) {
  const visibleItems = category.items.filter((item) =>
    matchesDietaryFilter(item, dietaryFilter),
  );

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="menu-section scroll-mt-28 pt-10 sm:pt-14 "
    >
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-6">
        <div>
          <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-amber-700">
            Menu
          </p>

          <h2
            id={`${category.id}-heading`}
            className="font-serif text-3xl text-stone-900 dark:text-stone-100"
          >
            {category.name}
          </h2>
        </div>
      </div>

      {category.description && (
        <p className="mb-2 max-w-xl text-sm leading-6 text-stone-500 dark:text-stone-400">
          {category.description}
        </p>
      )}

      <div className="menu-items">
        {visibleItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            soldOut={soldOut && item.id === specialItemId}
          />
        ))}
      </div>
    </section>
  );
}