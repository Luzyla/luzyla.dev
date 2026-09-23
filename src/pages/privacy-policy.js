import { Link } from "react-router-dom";

export function PrivacyPolicy() {
  return (
    <section>
      <h2>Privacy Policy</h2>

      <h4>Data controller</h4>
      <p>
        Lucila Di Lorenzo. Contact:
        <Link
          href="mailto:coder@luzyla.dev"
          className={`link-style ${className}`}
          rel="noopener noreferrer"
          onClick={onClick}
        >
          coder@luzyla.dev
        </Link>
      </p>

      <h4>What data I collect</h4>
      <p>
        Only the data you submit through the contact form: name, email and
        message.
      </p>

      <h4>Why</h4>
      <p>
        To reply to your message. Nothing else: no newsletters, no marketing, no
        profiling.
      </p>

      <h4>Legal basis</h4>
      <p>
        Your consent, given when you submit the form (Art. 6.1.a GDPR). You can
        withdraw it at any time by writing to{" "}
        <Link
          href="mailto:coder@luzyla.dev"
          className={`link-style ${className}`}
          rel="noopener noreferrer"
          onClick={onClick}
        >
          coder@luzyla.dev
        </Link>
        .
      </p>

      <h4>Who processes the data</h4>
      <p>
        Form submissions are stored in Google Sheets through Google Apps Script
        (Google LLC). Google may process data in the United States under the
        EU-US Data Privacy Framework. The hosting provider, located in the EU,
        may keep technical server logs (such as IP addresses) for security
        purposes.
      </p>

      <h4>How long I keep it</h4>
      <p>
        Your name and email are deleted 12 months after you contact me. The
        message may be kept afterwards in anonymized form, without any personal
        data.
      </p>

      <h4>Your rights</h4>
      <p>
        You can request access, rectification, erasure, restriction, objection
        or portability of your data by writing to{" "}
        <Link
          href="mailto:coder@luzyla.dev"
          className={`link-style ${className}`}
          rel="noopener noreferrer"
          onClick={onClick}
        >
          coder@luzyla.dev
        </Link>
        . If you believe your rights have not been respected, you can file a
        complaint with the Spanish Data Protection Agency (www.aepd.es).
      </p>

      <h4>Cookies</h4>
      <p>This site does not use cookies.</p>

      <p>Last updated: September 2026</p>
    </section>
  );
}
