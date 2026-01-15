import { Article } from "@/components/Article";

export default function Works() {
  const articles = [
    {
      title: "SQLで総計を集計するときの備忘録",
      url: "https://zenn.dev/y_ishida3/articles/8ca2f2dee342d3",
      publishedAt: "2025-03-09",
    },
    {
      title: "Pythonで自作のSingletonパターンを実装してみる",
      url: "https://zenn.dev/y_ishida3/articles/d045f3be96f4af",
      publishedAt: "2025-01-02",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-2xl">
        <h1 className="title text-3xl font-bold p-2 mb-4">Works</h1>
        
        <div className="w-full flex flex-col gap-6">
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2">Articles</h2>
            <div className="flex flex-col gap-4">
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        title={article.title}
                        url={article.url}
                        publishedAt={article.publishedAt}
                    />
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
