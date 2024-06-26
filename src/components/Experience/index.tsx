// どこにデータかjsonを定義しておいて、それを読み込む形式にしたい
type Props = {
  year: string,
  title: string,
  affiliationName: string,
  description: string
}

// :TODO JSX.Elintと呼ばれる形にしているので、どれに統一すべきか考えたい 
export const Experience = ({year, title, affiliationName, description}: Props) => {
    return (
      <main>
        <h2 className="year p-1 text-neutral-400">{year}</h2>
        <h2 className="jobTitle p-1 text-gray-900 font-bold">{title}</h2>
        <h2 className="companyName p-1 text-neutral-400 italic">{affiliationName}</h2>
        <h2 className="description p-1">
          {description}
        </h2>
      </main>
    );
  };