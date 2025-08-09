import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-px py-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="h0 font-serif">About Pulbit</h1>
            <p className="lead mt-2 max-w-prose">
              Farm-as-a-Service(FaaS) 구독형 농장 모델과 재생 스택(템플릿·프로토콜·서사)으로 검증된 성공 사례를 확산합니다.
            </p>
            
            {/* Gadaruda Model Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-serif font-semibold mb-6">Gadaruda 모델</h2>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 card p-6">
                  <h3 className="text-lg font-semibold">FaaS</h3>
                  <p className="text-sm text-muted mt-1">기술·장비·운영 노하우를 패키지로 제공하여 진입 장벽을 낮춥니다.</p>
                </div>
                <div className="col-span-12 md:col-span-6 card p-6">
                  <h3 className="text-lg font-semibold">재생 스택</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted">
                    <li>템플릿: 성공한 농장의 설계도</li>
                    <li>프로토콜: 구체적인 운영 매뉴얼</li>
                    <li>서사: 모델의 가치와 매력을 알리는 이야기</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">우리의 제품</h2>
              <p className="lead mb-8 max-w-prose">
                Gadaruda의 핵심 제품을 소개합니다. FarmOS로 데이터 기반 농업을 운영하고, MMC로 초기비용을 낮추며 확장성을 확보하세요.
              </p>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 card p-6" id="farmos">
                  <h3 className="text-xl font-semibold">FarmOS</h3>
                  <p className="text-muted mt-1">데이터 기반 작물 관리, 자동화, 예측 분석</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted">
                    <li>무경운, 피복작물·롤러 크림퍼</li>
                    <li>정밀 농업(드론·AI·로봇)</li>
                    <li>장기 생산성 증대 및 탄소 크레딧</li>
                  </ul>
                  <a href="#farmos" className="inline-block mt-4 rounded-md bg-brand text-white px-4 py-2">상세 보기</a>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 card p-6" id="mmc">
                  <h3 className="text-xl font-semibold">MMC</h3>
                  <p className="text-muted mt-1">모듈형 이동식 시설로 CAPEX 절감과 빠른 배치</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted">
                    <li>이동성·확장성, 에너지 효율</li>
                    <li>터널·온실 등 다양한 시설 적용</li>
                  </ul>
                  <a href="#mmc" className="inline-block mt-4 rounded-md bg-brand text-white px-4 py-2">상세 보기</a>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4 card p-6" id="byuri">
                  <h3 className="text-xl font-semibold">벼리 (Byuri)</h3>
                  <p className="text-muted mt-1">지능형 알고리즘 엔진으로 데이터 해석과 의사결정 지원</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted">
                    <li>머신러닝·생육 모델링</li>
                    <li>파트너 데이터 분석, 정책 컨설팅</li>
                  </ul>
                  <a href="#byuri" className="inline-block mt-4 rounded-md bg-brand text-white px-4 py-2">상세 보기</a>
                </div>
              </div>
            </div>

            {/* Contact section */}
            <section id="contact" className="mt-16">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-serif font-semibold">문의하기</h2>
                <p className="text-muted mt-2">프로젝트 문의나 협업 제안을 남겨 주세요.</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <ContactForm compact={true} />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
