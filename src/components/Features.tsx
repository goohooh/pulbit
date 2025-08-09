export default function Features() {
  const items = [
    {
      title: "Soil-first analytics",
      body: "Measure moisture, organic matter, and compaction trends in one view.",
    },
    {
      title: "Adaptive irrigation",
      body: "Automated recommendations to cut waste and protect root systems.",
    },
    {
      title: "Traceable operations",
      body: "Audit-ready logs for inputs, equipment, and harvests.",
    },
    {
      title: "Open data standards",
      body: "Export to CSV, GeoJSON, and integrate with your co-op systems.",
    },
  ];

  return (
    <section id="solutions" className="container-px py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">Built for modern agriculture</h2>
            <p className="lead mt-3 max-w-prose">Simple where it matters, rigorous under the hood.</p>
          </div>
          <a href="#demo" className="hidden md:inline-flex h-10 px-4 rounded-md bg-brand text-white hover:opacity-95">데모 보기</a>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-4">
          {items.map((it) => (
            <div key={it.title} className="col-span-12 md:col-span-6 card p-5">
              <div className="h-10 w-10 rounded-md bg-brand/90 mb-4" aria-hidden />
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-muted mt-1">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
