import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  image: string;
  eyebrow: string;
  title: string;
  titleStyle: "script" | "serif";
  subtitle?: string;
  cta?: { label: string; href: string };
  align?: "center" | "bottom-center";
};

export function HeroSection({
  image,
  eyebrow,
  title,
  titleStyle,
  subtitle,
  cta,
  align = "center",
}: HeroSectionProps) {
  const isExternal = cta?.href.startsWith("http");

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className={cn(
          "absolute inset-0",
          align === "bottom-center"
            ? "bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            : "bg-black/20",
        )}
      />

      <div
        className={cn(
          "relative flex min-h-[85vh] flex-col items-center px-6 text-center text-white",
          align === "bottom-center"
            ? "justify-end pb-16 lg:pb-24"
            : "justify-center",
        )}
      >
        <p className="text-xs tracking-[0.2em] text-white/90 uppercase">
          {eyebrow}
        </p>

        <h2
          className={cn(
            "mt-3 text-white",
            titleStyle === "script"
              ? "font-script text-5xl leading-tight sm:text-6xl lg:text-7xl"
              : "font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl",
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-sm text-white/80">{subtitle}</p>
        )}

        {cta && (
          <Link
            to={isExternal ? "#" : cta.href}
            className="mt-8 inline-block rounded-sm bg-white px-8 py-3 text-xs font-medium tracking-wide text-foreground uppercase transition-opacity hover:opacity-90"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
