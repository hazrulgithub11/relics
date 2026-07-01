import { Outlet, useLocation } from "react-router-dom";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { cn } from "@/lib/utils";

export function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader variant={isHome ? "overlay" : "solid"} />
      <main
        className={cn(
          "w-full flex-1",
          !isHome && "mx-auto max-w-[1440px]",
        )}
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
