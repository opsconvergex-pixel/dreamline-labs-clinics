import ClinicFooter from "@/components/ClinicFooter";
import ClinicHeader from "@/components/ClinicHeader";
import { SITE } from "@/lib/site";

export type LegalSection = { h: string; p?: string[]; ul?: string[] };

export default function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="cl">
      <ClinicHeader ctaHref="/book" />
      <main>
        <section className="cl-legal-head">
          <div className="cl-wrap cl-narrow">
            <p className="cl-kicker">Legal</p>
            <h1 className="cl-h2">{title}</h1>
            <p className="cl-micro">Last updated: {SITE.updated}</p>
          </div>
        </section>
        <section className="cl-legal">
          <article className="cl-wrap cl-narrow">
            <p className="cl-legal-intro">{intro}</p>
            {sections.map((s, i) => (
              <section key={s.h}>
                <h2>
                  {i + 1}. {s.h}
                </h2>
                {s.p?.map((t) => <p key={t}>{t}</p>)}
                {s.ul && (
                  <ul>
                    {s.ul.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </section>
      </main>
      <ClinicFooter />
    </div>
  );
}
