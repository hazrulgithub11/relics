import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as NavChevron,
  CircleHelp,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const utilityLinks = ["Find a Store", "Help", "Join Us", "Sign In"];

const navLinksWithSubmenu = [
  "New & Featured",
  "Men",
  "Women",
  "Kids",
  "Sale",
] as const;

const navLinksFlat = ["Nike Football", "SNKRS", "Download Nike App"] as const;

const desktopNavLinks = [
  "New & Featured",
  "Men",
  "Women",
  "Kids",
  "Nike Football",
  "Sale",
  "SNKRS",
];

type MobileMenuDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function MobileMenuDrawer({ open, onClose }: MobileMenuDrawerProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="absolute top-0 right-0 flex h-full w-[min(100%,22rem)] flex-col bg-background"
      >
        <div className="flex items-center justify-end px-6 pt-5">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="transition-colors hover:text-muted-foreground"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pb-6">
          <ul>
            {navLinksWithSubmenu.map((link) => (
              <li key={link}>
                <Link
                  to={link === "Men" ? "/men/clothing" : "#"}
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-2xl font-medium leading-tight"
                >
                  <span className="flex items-center gap-2">
                    {link}
                    {link === "New & Featured" && (
                      <span className="rounded bg-muted px-2 py-0.5 text-xs font-normal text-muted-foreground">
                        main
                      </span>
                    )}
                  </span>
                  <NavChevron className="size-5" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
            {navLinksFlat.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  className="block w-full py-4 text-left text-2xl font-medium leading-tight"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center gap-2 py-4 text-2xl font-medium">
            <span className="text-xl font-bold">&#x1F3C0;</span>
            <span>Jordan</span>
          </div>
        </nav>

        <div className="border-t border-border px-6 py-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Become a Relics Member for the best products, inspiration and
            stories in sport.{" "}
            <button type="button" className="font-medium text-foreground underline underline-offset-2">
              Learn more
            </button>
          </p>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="h-12 flex-1 rounded-full bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Join Us
            </button>
            <button
              type="button"
              className="h-12 flex-1 rounded-full border border-foreground text-sm font-medium transition-colors hover:bg-muted"
            >
              Sign In
            </button>
          </div>

          <button
            type="button"
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <CircleHelp className="size-4" strokeWidth={1.5} />
            Help
          </button>
        </div>
      </aside>
    </div>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="hidden h-10 items-center justify-end gap-6 px-6 text-xs text-muted-foreground lg:flex lg:px-12">
          {utilityLinks.map((link) => (
            <button
              key={link}
              type="button"
              className="transition-colors hover:text-foreground"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex h-16 items-center gap-4 px-6 lg:gap-6 lg:border-t lg:border-border lg:px-12">
          <Link
            to="/"
            className="shrink-0 text-xl font-bold tracking-tight"
          >
            Relics
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {desktopNavLinks.map((link) => (
              <Link
                key={link}
                to={link === "Men" ? "/men/clothing" : "#"}
                className={cn(
                  "text-base font-medium transition-colors hover:text-muted-foreground",
                  link === "Men" && "text-foreground",
                )}
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search
                className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted-foreground"
                strokeWidth={1.5}
              />
              <input
                type="search"
                placeholder="Search"
                className="h-10 w-40 rounded-full border-0 bg-muted pr-4 pl-10 text-sm outline-none ring-0 focus:ring-1 focus:ring-foreground lg:w-48"
              />
            </div>

            <button
              type="button"
              aria-label="Search"
              className="transition-colors hover:text-muted-foreground sm:hidden"
            >
              <Search className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Account"
              className="transition-colors hover:text-muted-foreground lg:hidden"
            >
              <User className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Wishlist"
              className="hidden transition-colors hover:text-muted-foreground lg:block"
            >
              <Heart className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className="transition-colors hover:text-muted-foreground"
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className="transition-colors hover:text-muted-foreground lg:hidden"
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex h-9 items-center justify-center gap-2 bg-muted px-4 text-xs lg:gap-4 lg:px-12">
          <button
            type="button"
            aria-label="Previous promo"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" strokeWidth={1.5} />
          </button>
          <p className="truncate text-center">
            New Members Enjoy 15% Off On The Relics App. Use APP15{" "}
            <button type="button" className="underline underline-offset-2">
              Download Now
            </button>{" "}
            <button type="button" className="underline underline-offset-2">
              T&amp;Cs
            </button>
          </p>
          <button
            type="button"
            aria-label="Next promo"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <MobileMenuDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
