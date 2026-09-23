import { Link } from "../components/Link";

export function LegalNotice() {
  return (
    <section className="seccion-privacy">
      <p className="privacy-title">Legal Notice</p>

      <div className="container-privacy">
        <p className="privacy-subtitle">Ownership</p>
        <p className="privacy-text">
          This website [luzyla.dev] is the personal portfolio of Lucila Di
          Lorenzo.
        </p>
        <p className="privacy-subtitle">Contact</p>
        <p className="privacy-text">
          <Link
            url="mailto:coder@luzyla.dev"
            className={`link-style link-privacy`}
            rel="noopener noreferrer"
          >
            coder@luzyla.dev
          </Link>
        </p>
        <p className="privacy-subtitle">Purpose</p>
        <p className="privacy-text">
          This site showcases personal and professional projects. It does not
          sell products or services.
        </p>
        <p className="privacy-subtitle">Intellectual property</p>
        <p className="privacy-text">
          The code, texts and designs on this site belong to Lucila Di Lorenzo
          unless stated otherwise. Third-party illustrations and icons are
          credited in the footer and belong to their respective authors.
        </p>
        <p className="privacy-subtitle">Links</p>
        <p className="privacy-text">
          This site contains links to external websites. I am not responsible
          for their content or privacy practices.
        </p>

        <p className="privacy-subtitle">Last updated</p>
        <p className="privacy-text">September 2026</p>
      </div>
    </section>
  );
}
