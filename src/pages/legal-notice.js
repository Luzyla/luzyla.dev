import { Link } from "react-router-dom";

export function LegalNotice() {
  return (
    <section>
      <h2>Legal Notice</h2>
      <h4>Owner</h4>
      <p>
        This website {luzyla.dev} is the personal portfolio of Lucila Di
        Lorenzo.
      </p>
      <h4>Contact</h4>
      <p>
        <Link
          href="mailto:coder@luzyla.dev"
          className={`link-style ${className}`}
          rel="noopener noreferrer"
          onClick={onClick}
        >
          coder@luzyla.dev
        </Link>
      </p>
      <h4>Purpose</h4>
      <p>
        This site showcases personal and professional projects. It does not sell
        products or services.
      </p>
      <h4>Intellectual property</h4>
      <p>
        The code, texts and designs on this site belong to Lucila Di Lorenzo
        unless stated otherwise. Third-party illustrations and icons are
        credited in the footer and belong to their respective authors.
      </p>
      <h4>Links</h4>
      <p>
        This site contains links to external websites. I am not responsible for
        their content or privacy practices.
      </p>

      <p>Last updated: September 2026</p>
    </section>
  );
}
