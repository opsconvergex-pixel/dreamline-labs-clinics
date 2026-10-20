import { SITE } from "@/lib/site";

export default function ClinicFooter() {
  return (
    <footer className="cl-foot">
      <div className="cl-wrap cl-foot-in">
        <span>
          © {new Date().getFullYear()} {SITE.name}. {SITE.email}
        </span>
        <span className="cl-foot-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/guarantee-terms">Guarantee Terms</a>
        </span>
      </div>
    </footer>
  );
}
