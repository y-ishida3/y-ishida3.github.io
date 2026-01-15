import { ArticleType } from "@/types/base";

export const Article = ({ key, title, url, publishedAt }: ArticleType) => {
  return (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
      data-aos="fade-up"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <div className="text-sm text-neutral-400">Published on {publishedAt}</div>
    </a>
  );
};
