import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Childhood in Labour
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
