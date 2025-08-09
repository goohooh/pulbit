export default function Hero() {
  return (
    <section className="container-px pt-2 md:pt-4 pb-0 border-b border-[color-mix(in_oklab,var(--ring),transparent_60%)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* Media side */}
          <div className="col-span-12 md:col-span-6 relative rounded-xl overflow-hidden card order-2 md:order-1">
            <video
              className="w-full h-[38vh] md:h-full object-cover block"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-farm.svg"
            >
              <source src="/videos/sunset-and-farm-field.webm" type="video/webm" />
              <source src="/videos/sunset-and-farm-field.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,_color-mix(in_oklab,var(--color-brand)_18%,transparent),_transparent)] pointer-events-none" />
          </div>

          {/* Copy side */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-2 flex items-center">
            <div className="py-6 md:py-10">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-brand px-2.5 py-1 rounded-full">신뢰할 수 있는 비전 • 지속가능한 수익</span>
              <h1 className="h0 font-serif mt-3">미래의 농업, 오늘 시작하세요.</h1>
              <p className="lead mt-3 max-w-prose">
                Pulbit는 데이터 기반의 재생 농업으로 비용을 줄이고 수익을 높이며, 환경까지 지키는 농업을 실현합니다.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#get-started" className="inline-flex h-11 px-5 rounded-md bg-brand-2 text-white font-medium shadow-sm hover:opacity-95">시작하기</a>
                <a href="/about" className="inline-flex h-11 px-5 rounded-md border card text-foreground hover:border-brand">자세히 보기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
