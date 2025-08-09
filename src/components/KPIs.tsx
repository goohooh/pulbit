export default function KPIs() {
  const items = [
    { label: "연 매출", value: "1억" },
    { label: "필요경비", value: "3천만원" },
    { label: "순수익", value: "7천만원" },
  ];
  return (
    <section className="container-px py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-serif tracking-tight">경제적 효율성</h2>
        <p className="lead mt-2">저비용·고매출 구조를 수치로 보여드립니다.</p>
        <div className="mt-6 grid grid-cols-12 gap-4">
          {items.map((it) => (
            <div key={it.label} className="col-span-12 md:col-span-4 card p-6 text-center">
              <div className="text-3xl font-semibold">{it.value}</div>
              <div className="text-muted mt-1">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
