import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  message: string;
  linkLabel?: string;
  linkHref?: string;
  className?: string;
};

export function AnnouncementBar({
  message,
  linkLabel,
  linkHref = "#",
  className,
}: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "bg-foreground py-2.5 text-center text-xs text-background",
        className,
      )}
    >
      <p>
        {message}
        {linkLabel && (
          <>
            {" — "}
            <a
              href={linkHref}
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              {linkLabel}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
