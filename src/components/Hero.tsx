export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-farm.svg"
        >
          <source src="/videos/sunset-and-farm-field.webm" type="video/webm" />
          <source src="/videos/sunset-and-farm-field.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,_color-mix(in_oklab,var(--color-brand)_25%,transparent),_transparent)]" />
      </div>

      {/* Centered overlay text */}
      <div className="relative z-10 flex items-center justify-center h-full container-px">
        <div className="text-center text-white max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            신뢰할 수 있는 비전 • 지속가능한 수익
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            미래의 농업,<br />오늘 시작하세요.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Pulbit는 데이터 기반의 재생 농업으로 비용을 줄이고 수익을 높이며, 환경까지 지키는 농업을 실현합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-started" className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-brand text-white font-semibold shadow-lg hover:opacity-95 transition-opacity text-lg">
              시작하기
            </a>
            <a href="/about" className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 transition-colors text-lg">
              자세히 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
