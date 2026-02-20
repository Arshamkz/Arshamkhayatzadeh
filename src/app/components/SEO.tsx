import { Helmet } from 'react-helmet-async';
import { analyticsConfig } from '../utils/analytics';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://res.cloudinary.com/dxjtnkux0/image/upload/v1767450887/nano-banana-2026-01-02T10-30-48_jbi03c.png',
  ogType = 'website',
  article,
}: SEOProps) {
  const siteUrl = 'https://arsham-portfolio.com';
  const fullTitle = title.includes('•') ? title : `${title} • Arsham Khayatzadeh`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Structured Data (Schema.org)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arsham Khayatzadeh',
    jobTitle: 'Product Designer',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/arsham-kz',
      'https://github.com/arsham-kz', // اگه داری
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'IranHotelOnline',
    },
    description:
      'Product Designer specializing in data-driven UX and conversion optimization for high-traffic B2C products.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arsham Khayatzadeh Portfolio',
    url: siteUrl,
    description: description,
  };

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Plausible Analytics - Privacy-friendly, GDPR-compliant, no cookies */}
      <script
        defer
        data-domain={analyticsConfig.domain}
        src={`${analyticsConfig.apiHost}/js/script.js`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Arsham Khayatzadeh Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags */}
      {ogType === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.tags &&
            article.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@arsham_kz" />

      {/* Additional SEO Tags */}
      <meta name="author" content="Arsham Khayatzadeh" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
}