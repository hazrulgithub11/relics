import { Outlet } from "react-router-dom";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1440px] flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
