import type { RestaurantHours } from "../types/restaurant";

interface Props {
  hours: RestaurantHours;
  today: keyof RestaurantHours;
}

const days: { key: keyof RestaurantHours; label: string }[] = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" },
];

export default function Hours({ hours, today }: Props) {
  return (
    <section aria-labelledby="hours-heading">
      <div className="mb-5">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-amber-700">
          Visit us
        </p>

        <h2
          id="hours-heading"
          className="mt-2 font-serif text-3xl text-stone-900 dark:text-stone-100"
        >
          Opening hours
        </h2>
      </div>

      <div className="divide-y divide-stone-200 border-y border-stone-200 dark:border-stone-800">
        {days.map(({ key, label }) => {
          const closed = hours[key] === "Closed";
          const isToday = key === today;

          return (
            <div
              key={key}
              className={[
                "flex items-center justify-between gap-4 px-3 py-3.5 text-sm dark:border-stone-800",
                isToday ? "bg-amber-50 font-semibold" : "",
              ].join(" ")}
            >
              <span className="flex items-center gap-2 text-stone-800 dark:text-stone-400">
                {isToday && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-amber-700"
                  />
                )}
                {label}
              </span>

              <span
                className={
                  closed ? "text-stone-400 dark:text-stone-100" : "text-stone-600 dark:text-stone-400"
                }
              >
                {hours[key]}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}