import { Profile } from '../../components/Profile'
import { Experience } from '../../components/Experience'

export default function AboutMe() {
  // Skillsはこことは別のcomponentsになりそう -> レイアウトをそのままにするのであれば条件分岐で
  // :TODO データはどこに格納しておけばいいんだ？（あまりいい方法が思いつかない）
  const experiences = {
    carrer: [
      {
        year: "2023年11月 - 現在",
        title: "Data Scientist / Data Aanlyst",
        affiliationName: "RAKSUL Inc. Data Strategy",
        description: `
          東京にてデータサイエンティストとして、現在は事業会社の課題や目的に合わせて、施策の立案から効果検証にかけて一気通貫して業務を行っています。
          また、過去の経験からプロトタイプによる業務改善も手掛けており、分析や可視化・モデリングだけでなく、運用のための設計と実装も行っていました。
        `
      },
      {
        year: "2022年7月 - 2023年11月",
        title: "Data Scientist / Analytics Consaltant",
        affiliationName: "Deloitte",
        description: `
          働いていた
        `
      }
    ],
    education: [
      {
        year: "2023年11月 - 現在",
        title: "Data Scientist / Data Aanlyst",
        affiliationName: "TEST",
        description: ""
      },
    ]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Profileに合わせて下のやつもサイズをあわせたい */}
      <Profile />
      <div className="flex flex-col justify-center items-top gap-2 p-5 w-[70%]">
        {Object.keys(experiences).map(key => {
            {/* この書き方はリファクタリングする必要あるかも */}
            return experiences[key].map((experience, index) => {
              return (
                <div>
                  {index == 0 && <h1 className="title text-5xl font-bold p-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h1>}
                  <Experience
                    year={experience.year}
                    title={experience.title}
                    affiliationName={experience.affiliationName}
                    description={experience.description}
                  />
                </div>
              )
            })
        })}
      </div>
    </main>
  );
}
