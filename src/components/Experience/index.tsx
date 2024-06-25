// どこにデータかjsonを定義しておいて、それを読み込む形式にしたい
export const Experience: React.FC = () => {
    return (
      <main>
        {/* <h1 className="title text-5xl font-bold p-2">Carrer</h1> */}
        <h2 className="year p-1 text-neutral-400">2023年11月 - 現在</h2>
        <h2 className="job-title p-1 text-gray-900 font-bold">Data Scientist / Data Analyst</h2>
        <h2 className="company_name p-1 text-neutral-400 italic">RAKSUL Inc. Data Strategy</h2>
        <h2 className="description p-1">
          東京にてデータサイエンティストとして、現在は事業会社の課題や目的に合わせて、施策の立案から効果検証にかけて一気通貫して業務を行っています。
          また、過去の経験からプロトタイプによる業務改善も手掛けており、分析や可視化・モデリングだけでなく、運用のための設計と実装も行っていました。
        </h2>
      </main>
    );
  };