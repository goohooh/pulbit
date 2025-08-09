export default function News() {
  const newsItems = [
    {
      title: "신비롭고 매력적인 채소의 세계",
      description: "충남의 소규모 농장 베지랩이 다양한 채소 품종을 탐구하며 지속가능한 농업을 실천하고 있습니다. 유기농업을 통해 독특한 채소 품종을 소개하고 소비자와 생산자를 직접 연결하는 새로운 농업 모델을 제시합니다.",
      url: "https://groro.co.kr/article/481",
      source: "농업전문지 그로로",
      date: "2022.07.13",
      image: "https://image.groro.co.kr/files/groro_7de2ec0447174d958400828f12a7cbd7.jpg"
    },
    {
      title: "스마트농업 혁신, 농업 기술의 미래",
      description: "농업 분야의 디지털 전환과 혁신 기술 도입을 통해 농업 생산성 향상과 지속가능한 농업 발전 방안을 모색하는 전문가들의 인사이트를 공유합니다.",
      url: "https://blog.naver.com/hsnetwork123/222960011596",
      source: "농업혁신 네트워크",
      date: "2023",
      image: null
    }
  ];

  return (
    <section className="container-px py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold">뉴스 & 소식</h2>
          <p className="lead mt-3">Pulbit의 최신 소식과 농업 기술 혁신 이야기를 확인해보세요.</p>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="col-span-12 md:col-span-6 card p-0 hover:shadow-lg transition-shadow overflow-hidden">
              {item.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-muted">{item.source}</span>
                  <span className="text-sm text-muted ml-2">• {item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand hover:text-brand-2 font-medium text-sm transition-colors"
                >
                  자세히 읽기
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}