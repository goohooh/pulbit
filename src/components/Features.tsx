export default function Features() {
  const items = [
    {
      title: "토양 중심 분석",
      body: "수분, 유기물, 압축도 동향을 한 눈에 측정하세요.",
    },
    {
      title: "적응형 관개",
      body: "낭비를 줄이고 뿌리 시스템을 보호하는 자동화된 권장사항.",
    },
    {
      title: "추적 가능한 운영",
      body: "투입재, 장비, 수확에 대한 감사 준비된 로그.",
    },
    {
      title: "개방형 데이터 표준",
      body: "CSV, GeoJSON으로 내보내고 협동조합 시스템과 통합하세요.",
    },
  ];

  return (
    <section id="solutions" className="container-px py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">현대 농업을 위한 설계</h2>
            <p className="lead mt-3 max-w-prose">중요한 부분은 간단하게, 핵심은 엄격하게.</p>
          </div>
          <a href="#demo" className="hidden md:inline-flex h-10 px-4 rounded-md bg-brand text-white hover:opacity-95">데모 보기</a>
        </div>
        
        <div className="mt-10 grid grid-cols-12 gap-8 items-center">
          {/* Video Side */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden card">
              <video
                className="w-full h-[300px] md:h-[400px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/greenhouse-and-watering-plants.webm" type="video/webm" />
                <source src="/videos/greenhouse-and-watering-plants.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_50%,_color-mix(in_oklab,var(--color-accent)_15%,transparent),_transparent)] pointer-events-none" />
            </div>
          </div>
          
          {/* Content Side */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              {items.map((it) => (
                <div key={it.title} className="col-span-12 md:col-span-6 card p-5">
                  <div className="h-10 w-10 rounded-md bg-brand/90 mb-4" aria-hidden />
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted mt-1">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
