export type DietaryFilter = "all" | "vegetarian" | "gluten-free";

interface Props {
  value: DietaryFilter;
  onChange: (value: DietaryFilter) => void;
}

const filters: {
  value: DietaryFilter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "vegetarian",
    label: "Vegetarian",
  },
  {
    value: "gluten-free",
    label: "Gluten-free",
  },
];

export default function DietaryFilter({
  value,
  onChange,
}: Props) {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      aria-label="Dietary filters"
    >
      <span className="mr-1 text-xs font-medium text-stone-500">
        Show:
      </span>

      {filters.map((filter) => {
        const active = value === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={[
              "rounded-full border px-3 py-1.5 text-xs font-semibold cursor-pointer" ,
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-amber-700 focus-visible:ring-offset-2",
              active
                ? "border-amber-700 bg-amber-700 text-white"
                : "border-stone-200 bg-white text-stone-600 hover:border-amber-300 hover:text-amber-800",
            ].join(" ")}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}