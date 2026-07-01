import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <p className="mb-3 text-xs tracking-wide text-muted-foreground uppercase">
        Relics
      </p>

      <h1 className="max-w-xl text-5xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
        Your collection, unearthed.
      </h1>

      <p className="mt-6 max-w-md text-base leading-normal text-muted-foreground">
        Frontend is ready — Vite, React, Tailwind, shadcn/ui, React Query, and
        Three.js are wired up.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button size="lg">Get started</Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/men/clothing">Browse relics</Link>
        </Button>
      </div>
    </section>
  );
}
