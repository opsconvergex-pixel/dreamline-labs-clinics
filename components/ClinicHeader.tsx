export default function ClinicHeader({
  ctaHref = "/book",
  ctaLabel = "Book a call",
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <header className="cl-head">
      <div className="cl-wrap cl-head-in">
        <a href="/" className="cl-brand" aria-label="Dreamline Labs home">
          Dreamline<span> Labs</span>
        </a>
        <a href={ctaHref} className="cl-btn cl-btn-sm">
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
