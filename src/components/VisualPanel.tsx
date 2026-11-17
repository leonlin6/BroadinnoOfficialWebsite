export function VisualPanel({ label = "DATA · DIGITAL · TECHNOLOGY", variant = "light" }: { label?: string; variant?: "light" | "dark" }) {
  return (
    <div className={`visual-panel visual-panel-${variant}`} role="img" aria-label="數據與科技整合的抽象視覺設計，後續可替換成正式圖片">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-core"><span className="core-line" /><span className="core-dot" /><span className="core-line short" /></div>
      <div className="visual-top"><span className="visual-spark" /> BROADINNO / INSIGHT 01</div>
      <div className="visual-bottom"><span>{label}</span><span>↗</span></div>
    </div>
  );
}
