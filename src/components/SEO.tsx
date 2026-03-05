import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export const SEO = ({ title, description, canonical, noindex }: SEOProps) => {
  const fullTitle = title.includes("FokusDemenz") ? title : `${title} | FokusDemenz`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};
