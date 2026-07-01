import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/catalog";
import { cn } from "@/lib/utils";

const filterSections = [
  {
    id: "era",
    label: "Era",
    count: 0,
    options: ["70s", "80s", "90s", "Y2K (2000s)"],
  },
  {
    id: "brand",
    label: "Brand",
    count: 0,
    options: [
      "Champion",
      "Levi's",
      "Ralph Lauren",
      "Tommy Hilfiger",
      "Carhartt",
      "Russell Athletic",
      "Hanes",
      "Starter",
      "FUBU",
      "Reebok",
      "Fila",
      "Kappa",
    ],
  },
  {
    id: "condition",
    label: "Condition",
    count: 0,
    options: ["Mint", "Excellent", "Good", "Fair"],
  },
  {
    id: "price",
    label: "Shop By Price",
    count: 0,
    options: ["Under RM 150", "RM 150 – RM 250", "RM 250 – RM 350", "RM 350+"],
  },
  {
    id: "size",
    label: "Size",
    count: 0,
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "color",
    label: "Color",
    count: 0,
    options: [
      "Black",
      "Blue",
      "Brown",
      "Green",
      "Grey",
      "Orange",
      "Red",
      "White",
      "Yellow",
    ],
  },
];

function FilterSection({
  label,
  count,
  children,
  defaultOpen = false,
}: {
  label: string;
  count: number;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border py-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-sm"
      >
        <span>
          {label}{" "}
          <span className="text-muted-foreground">({count})</span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

type FilterSidebarProps = {
  className?: string;
};

export function FilterSidebar({ className }: FilterSidebarProps) {
  const [activeCategory, setActiveCategory] = useState("All Shirts");

  return (
    <aside
      className={cn(
        "hidden w-60 shrink-0 border-r border-border px-6 py-6 lg:block lg:px-8",
        className,
      )}
    >
      <nav className="mb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "block w-full py-2 text-left text-sm transition-colors hover:text-foreground",
              activeCategory === category
                ? "font-medium text-foreground"
                : "text-muted-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </nav>

      {filterSections.map((section) => (
        <FilterSection
          key={section.id}
          label={section.label}
          count={section.count}
          defaultOpen={section.id === "era"}
        >
          {section.options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground"
            >
              <input
                type="checkbox"
                className="size-4 rounded-sm border border-border"
                defaultChecked={false}
              />
              {option}
            </label>
          ))}
        </FilterSection>
      ))}
    </aside>
  );
}
