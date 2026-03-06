import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "TOW OVERLAND",
    "description": "Especialistas en fabricación de enganches americanos a medida en Chile",
    "url": "https://towoverland.com",
    "telephone": "+56985112929",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "Chile"
    },
    "priceRange": "$$",
    "image": "https://towoverland.com/logotow.png",
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TOW OVERLAND",
    "url": "https://towoverland.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://towoverland.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
