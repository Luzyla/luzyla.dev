import { Link } from "../components/Link";

export function PrivacyPolicy() {
  return (
    <section className="seccion-privacy">
      <p className="privacy-title">Privacy Policy</p>
      <div className="container-privacy">
        <p className="privacy-subtitle">Data controller</p>
        <p className="privacy-text">
          Lucila Di Lorenzo. Contact:{" "}
          <Link
            url="mailto:coder@luzyla.dev"
            className={`link-style link-privacy`}
            rel="noopener noreferrer"
            // onClick={}
          >
            coder@luzyla.dev
          </Link>
        </p>

        <p className="privacy-subtitle">What data I collect</p>
        <p className="privacy-text">
          Only the data you submit through the contact form: name, email and
          message.
        </p>

        <p className="privacy-subtitle">Why</p>
        <p className="privacy-text">
          To reply to your message. Nothing else: no newsletters, no marketing,
          no profiling.
        </p>

        <p className="privacy-subtitle">Legal basis</p>
        <p className="privacy-text">
          Your consent, given when you submit the form (Art. 6.1.a GDPR). You
          can withdraw it at any time by writing to{" "}
          <Link
            url="mailto:coder@luzyla.dev"
            className={`link-style link-privacy`}
            rel="noopener noreferrer"
          >
            coder@luzyla.dev
          </Link>
          .
        </p>

        <p className="privacy-subtitle">Who processes the data</p>
        <p className="privacy-text">
          Form submissions are stored in Google Sheets through Google Apps
          Script (Google LLC). Google may process data in the United States
          under the EU-US Data Privacy Framework. The hosting provider, located
          in the EU, may keep technical server logs (such as IP addresses) for
          security purposes.
        </p>

        <p className="privacy-subtitle">How long I keep it</p>
        <p className="privacy-text">
          Your name and email are deleted 12 months after you contact me. The
          message may be kept afterwards in anonymized form, without any
          personal data.
        </p>

        <p className="privacy-subtitle">Your rights</p>
        <p className="privacy-text">
          You can request access, rectification, erasure, restriction, objection
          or portability of your data by writing to{" "}
          <Link
            url="mailto:coder@luzyla.dev"
            className={`link-style link-privacy`}
            rel="noopener noreferrer"
          >
            coder@luzyla.dev
          </Link>
          . If you believe your rights have not been respected, you can file a
          complaint with the Spanish Data Protection Agency (www.aepd.es).
        </p>

        <p className="privacy-subtitle">Cookies</p>
        <p className="privacy-text">This site does not use cookies.</p>

        <p className="privacy-subtitle">Last updated</p>
        <p className="privacy-text">September 2026</p>
      </div>
    </section>
  );
}
