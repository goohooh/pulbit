import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-[color-mix(in_oklab,var(--ring),transparent_60%)]">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-brand" aria-hidden />
          <span className="text-xl font-semibold tracking-tight">Pulbit</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-brand-2 text-white hover:opacity-95">문의하기</a>
        </div>
      </div>
    </header>
  );
}
