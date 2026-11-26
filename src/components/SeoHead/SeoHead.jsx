import { useEffect } from 'react';
import { seoRoutes } from '../../data/siteData';

/**
 * Updates or inserts a <meta> tag in document.head.
 */
function upsertMeta(selector, attrName, attrValue, content) {
  if (typeof document === 'undefined' || !content) return;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Declarative head metadata manager for React 19 SPA routes.
 * Syncs document.title, meta description, and Open Graph tags.
 */
export default function SeoHead({ route = '/', title, description }) {
  useEffect(() => {
    const routeMeta = seoRoutes[route] || seoRoutes['/'];
    const resolvedTitle = title || routeMeta.title;
    const resolvedDescription = description || routeMeta.description;

    if (resolvedTitle) {
      document.title = resolvedTitle;
    }

    upsertMeta(
      'meta[name="description"]',
      'name',
      'description',
      resolvedDescription
    );
    upsertMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      resolvedTitle
    );
    upsertMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      resolvedDescription
    );
  }, [route, title, description]);

  return null;
}
