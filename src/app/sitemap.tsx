import { MetadataRoute } from 'next';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_URL || ''; // .env
  const _lastModified = new Date();
 
  const staticPaths = [
    {
      url: `${baseURL}`,
      lastModified: _lastModified,
    },
    {
      url: `${baseURL}/about_me`,
      lastModified: _lastModified,
    },
    {
      url: `${baseURL}/works`,
      lastModified: _lastModified,
    },
  ];
 
  return staticPaths;
}