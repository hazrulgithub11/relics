const footerSections = [
  {
    title: "Resources",
    links: [
      "Find A Store",
      "Become A Member",
      "Running Shoe Finder",
      "Product Advice",
      "Send Us Feedback",
    ],
  },
  {
    title: "Help",
    links: [
      "Get Help",
      "Order Status",
      "Delivery",
      "Returns",
      "Contact Us",
    ],
  },
  {
    title: "Company",
    links: [
      "About Relics",
      "News",
      "Careers",
      "Investors",
      "Sustainability",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-medium">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>&copy; 2026 Relics, Inc. All rights reserved</p>
          <button
            type="button"
            className="transition-colors hover:text-foreground"
          >
            Malaysia
          </button>
        </div>
      </div>
    </footer>
  );
}
