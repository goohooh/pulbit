export default function Sustainability() {
  const items = [
    { title: "무경운(No-Till)", body: "연료비 50–80% 절감, 토양 탄소 배출 감소" },
    { title: "피복작물·롤러 크림퍼", body: "천연 멀칭으로 제초 비용 절감" },
    { title: "정밀 농업", body: "드론·AI·로봇으로 자원 효율 극대화" },
    { title: "탄소 크레딧", body: "토양 탄소 격리를 수익으로 전환" },
  ];
  return (
    <section className="container-px py-14 md:py-20" id="about">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Content Side */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">지속 가능성과 수익성, 동시에</h2>
            <p className="lead mt-2 max-w-prose">환경 보호를 비용이 아닌 경쟁력으로 전환합니다.</p>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {items.map((it) => (
                <div key={it.title} className="col-span-12 md:col-span-6 card p-5">
                  <div className="h-10 w-10 rounded-md bg-brand/90 mb-4" aria-hidden />
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted mt-1">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
          
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
                <source src="/videos/soil-and-tractor.webm" type="video/webm" />
                <source src="/videos/soil-and-tractor.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_50%,_color-mix(in_oklab,var(--color-brand)_15%,transparent),_transparent)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
