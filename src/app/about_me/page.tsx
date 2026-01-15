import { Experience } from '../../components/Experience';
import { Profile } from '../../components/Profile';
import { Skill } from '../../components/Skill';

import { ExperiencesType, SkillType } from '../../types/base';

export default function AboutMe() {
  // :TODO データはどこに格納しておけばいいんだ？（あまりいい方法が思いつかない）
  // localStorageがよさそう
  const skills: Array<SkillType> = [
    {
      key: 1,
      startDate: "2019-04-01",
      endDate: "",
      iconName: "python--v1",
      description: "機械学習や統計モデリング・アプリ開発"
    },
    {
      key: 2,
      startDate: "2019-04-01",
      endDate: "2022-07-01",
      iconName: "javascript--v1",
      description: "フロントエンドの開発"
    },
    {
      key: 3,
      startDate: "2019-04-01",
      endDate: "",
      iconName: "postgreesql",
      description: "データの抽出やDB設計・マートの作成"
    },
    {
      key: 4,
      startDate: "2022-11-01",
      endDate: "2023-03-01",
      iconName: "c-plus-plus-logo",
      description: "機械学習アルゴリズムの実装・DLL"
    },
    {
      key: 5,
      startDate: "2019-04-01",
      endDate: "",
      iconName: "git",
      description: "version管理"
    },
    {
      key: 6,
      startDate: "2019-04-01",
      endDate: "2022-07-01",
      iconName: "amazon-web-services",
      description: "EC2やS3・lambdaのインフラ"
    },
    {
      key: 7,
      startDate: "2023-11-01",
      endDate: "",
      iconName: "google-cloud",
      description: "Vertex AIやBigQuery"
    },
  ]

  const experiences: ExperiencesType = {
    carrer: [
      {
        key: 8,
        year: "2023年11月 - 現在",
        title: "Data Scientist / Data Aanlyst",
        affiliationName: "RAKSUL Inc. Data Startegy",
        description: `
          因果推論や数理最適化を用いた課題解決アプローチで施策実施の効果検証やその後の運用のための実装を担当。
        `
      },
      {
        key: 9,
        year: "2022年7月 - 2023年11月",
        title: "Data Scientist / Analytics Consaltant",
        affiliationName: "Deloitte Touche Tohmatsu LLC. Deloitte Analytics",
        description: `
          官公庁向けのプロジェクトにおけるコンサルタント側の業務改善を目的としたETLツールやの開発や金融機関に向けた法人営業のための金融モデルの資料化や需要予測ツールの開発といったアナリティクスサービスに従事。
        `
      },
      {
        key: 10,
        year: "2019年4月 - 2022年6月",
        title: "Data Scientist / AI Engineer",
        affiliationName: "GA technologies Inc. AI Strategy Center",
        description: `
          研究開発の部署で、不動産業界の課題や業務改善を行うために、プロトタイプの開発や機械学習モデルの構築といった業務に従事。
        `
      }
    ],
    education: [
      {
        key: 11,
        year: "2017年4月 - 2019年3月",
        title: "Master of Business Administration",
        affiliationName: "岡山大学 社会文化科学研究科 組織経営専攻",
        description: ""
      },
      {
        key: 12,
        year: "2013年4月 - 2017年3月",
        title: "Bachelor of Biological Resource Science",
        affiliationName: "島根大学 生物資源科学部 農林生産学科",
        description: ""
      },
    ],
    others: [
      {
        key: 13,
        year: "2021年",
        title: "電通大学「データアントレプレナーフェロープログラム」- 「回帰モデル作成（不動産データ分析）」講師",
        affiliationName: "",
        description: ""
      },
      {
        key: 14,
        year: "2020年",
        title: "電通大学「データアントレプレナーフェロープログラム」- 「ケース研究　不動産」講師",
        affiliationName: "",
        description: ""
      },
      {
        key: 15,
        year: "2020年",
        title: "日本行動計量学会 第48回大会 「Open Street Mapを活用した交通機関に関する騒音リスクマップの開発」 学会発表",
        affiliationName: "",
        description: ""
      },
      {
        key: 18,
        year: "2025年",
        title: "人工知能学会 第39回大会 「因果推論による価格表単位でのプライシング施策の効果量の推定」 学会発表",
        affiliationName: "",
        description: ""
      },
    ],
    certification: [
      {
        key: 16,
        year: "2019年3月",
        title: "宅地建物取引士",
        affiliationName: "",
        description: ""
      },
      {
        key: 17,
        year: "2017年3月",
        title: "高等学校教諭免許（理科）",
        affiliationName: "",
        description: ""
      },
    ]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <div className="flex flex-col justify-center items-top gap-2 p-5 w-[70%]">
        <h1 className="title text-5xl font-bold p-2">Skills</h1>
        <div className="grid grid-cols-4 justify-center images-center gap-3">
          {skills.map(skill => {
            return (
              <Skill
                key={skill.key}
                startDate={skill.startDate}
                endDate={skill.endDate}
                iconName={skill.iconName}
                description={skill.description}
              />
            )
          })}
        </div>
        {Object.keys(experiences).map((key, i) => {
            return experiences[key].map((experience, j) => {
              return (
                <div key={i + j}>
                  {j == 0 && <h1 className="title text-5xl font-bold p-2"  data-aos="fade-up">{key.charAt(0).toUpperCase() + key.slice(1)}</h1>}
                  <Experience
                    key={experience.key}
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
