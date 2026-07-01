import { useEffect, useState } from "react";
import {
  ChevronRight as NavChevron,
  CircleHelp,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnnouncementBar } from "@/components/home/announcement-bar";
import { announcement } from "@/data/home-content";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/men/clothing" },
  { label: "New Arrivals", href: "/men/clothing" },
  { label: "About", href: "#" },
  { label: "Rare Finds", href: "/men/clothing" },
  { label: "Rewards", href: "#" },
  { label: "Sustainability", href: "#" },
] as const;

type SiteHeaderProps = {
  variant?: "solid" | "overlay";
};

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
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-2xl font-medium leading-tight"
                >
                  <span>{link.label}</span>
                  <NavChevron className="size-5" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-6 py-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Become a Relics Member for early access to rare vintage drops.{" "}
            <button
              type="button"
              className="font-medium text-foreground underline underline-offset-2"
            >
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

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isOverlayActive = variant === "overlay" && !scrolled;

  useEffect(() => {
    if (variant !== "overlay") {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-300",
        variant === "overlay"
          ? scrolled
            ? "sticky top-0 border-b border-border/60 bg-background/85 backdrop-blur-md"
            : "absolute inset-x-0 top-0"
          : "sticky top-0 border-b border-border/60 bg-background/85 backdrop-blur-md",
      )}
    >
      <AnnouncementBar
        message={announcement.message}
        linkLabel={announcement.linkLabel}
        linkHref={announcement.linkHref}
      />

      <div className="mx-auto w-full max-w-[1440px]">
        <div
          className={cn(
            "flex h-16 items-center gap-4 px-6 transition-colors duration-300 lg:gap-6 lg:px-12",
            isOverlayActive && "text-white",
          )}
        >
          <Link
            to="/"
            className="shrink-0 text-xl font-bold tracking-tight"
          >
            Relics
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-sm font-normal transition-colors",
                  isOverlayActive
                    ? "hover:text-white/70"
                    : "hover:text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <button
              type="button"
              aria-label="Account"
              className={cn(
                "hidden transition-colors lg:block",
                isOverlayActive
                  ? "hover:text-white/70"
                  : "hover:text-muted-foreground",
              )}
            >
              <User className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Search"
              className={cn(
                "transition-colors",
                isOverlayActive
                  ? "hover:text-white/70"
                  : "hover:text-muted-foreground",
              )}
            >
              <Search className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className={cn(
                "relative transition-colors",
                isOverlayActive
                  ? "hover:text-white/70"
                  : "hover:text-muted-foreground",
              )}
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              <span
                className={cn(
                  "absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center text-[10px] font-medium",
                  isOverlayActive
                    ? "text-white"
                    : "text-foreground",
                )}
              >
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "transition-colors lg:hidden",
                isOverlayActive
                  ? "hover:text-white/70"
                  : "hover:text-muted-foreground",
              )}
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenuDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
