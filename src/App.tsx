import { useEffect, useMemo, useState } from "react";
import { restaurantData } from "./data/restaurant";
import type { PageState } from "./types/restaurant";

import Header from "./components/Header";
import StatusBanner from "./components/StatusBanner";
import Special from "./components/Special";
import CategoryNav from "./components/CategoryNav";
import MenuSection from "./components/MenuSection";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import DietaryFilter, {
  type DietaryFilter as DietaryFilterType,
} from "./components/DietaryFilter";

const today = "tuesday";

function getPageState(): PageState {
  const value = new URLSearchParams(window.location.search).get("state");

  if (
    value === "closed" ||
    value === "special-sold-out" ||
    value === "open"
  ) {
    return value;
  }

  return "open";
}

function App() {
  const [pageState] = useState<PageState>(getPageState);
  const [activeCategory, setActiveCategory] = useState("brunch");

  const isClosed = pageState === "closed";
  const specialSoldOut = pageState === "special-sold-out";

  const categories = useMemo(
    () =>
      restaurantData.categories.map(({ id, name }) => ({
        id,
        name,
      })),
    [],
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    restaurantData.categories.forEach((category) => {
      const element = document.getElementById(category.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(category.id);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const [dietaryFilter, setDietaryFilter] =
  useState<DietaryFilterType>("all");

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <Header
        isOpen={!isClosed}
        closedState={isClosed}
      />

      <StatusBanner closed={isClosed} />

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
      />

      <main className="">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
         <div className="py-8 sm:py-12">
            <Special
              blurb={restaurantData.today_special.blurb}
              soldOut={specialSoldOut}
            />
          </div>

          

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
            <div className="min-w-0">

              <div className="flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-center sm:justify-between ">
                <div>
                  <p className="font-serif text-xl text-stone-900 dark:text-stone-100">
                    What are you in the mood for?
                  </p>

                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    Filter the menu by dietary preference.
                  </p>
                </div>

                <DietaryFilter
                  value={dietaryFilter}
                  onChange={setDietaryFilter}
                />
              </div>
              {restaurantData.categories.map((category) => (
                <MenuSection
                 key={category.id}
                category={category}
                specialItemId={restaurantData.today_special.item_id}
                soldOut={specialSoldOut}
                dietaryFilter={dietaryFilter}
                />
              ))}
            </div>

            <aside className="lg:pt-14">
              <div className="lg:sticky lg:top-20">
                <Hours
                  hours={restaurantData.restaurant.hours}
                  today={today}
                />

                <div className="mt-8 border-t border-stone-200 pt-6">
                  <p className="text-xs leading-5 text-stone-500 dark:text-stone-400">
                    <strong className="font-semibold text-stone-700 dark:text-stone-100">
                      V
                    </strong>{" "}
                    vegetarian ·{" "}
                    <strong className="font-semibold text-stone-700 dark:text-stone-100">
                      GF
                    </strong>{" "}
                    gluten-free ·{" "}
                    <strong className="font-semibold text-stone-700 dark:text-stone-100">
                      Spicy
                    </strong>{" "}
                    contains spice
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer
        address={restaurantData.restaurant.address}
        phone={restaurantData.restaurant.phone}
        instagram={restaurantData.restaurant.instagram}
      />
    </div>
  );
}

export default App;