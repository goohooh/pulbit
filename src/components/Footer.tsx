import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="container-px py-16 mt-12 border-t border-[color-mix(in_oklab,var(--ring),transparent_60%)]" id="contact">
      <div className="mx-auto max-w-6xl">
        {/* Contact Form Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-semibold">연락하기</h2>
            <p className="text-muted mt-2">궁금한 점이 있으시면 언제든지 문의해 주세요.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm compact={true} />
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-brand" aria-hidden />
            <span>Pulbit</span>
          </div>
          {/* <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-foreground">Privacy</a>
            <a href="#terms" className="hover:text-foreground">Terms</a>
            <a href="/contact" className="hover:text-foreground">Contact</a>
          </div> */}
          <div>© {new Date().getFullYear()} Pulbit</div>
        </div>
      </div>
    </footer>
  );
}
