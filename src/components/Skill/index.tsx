import { SkillType } from "@/app/types";

export const Skill = ({key, startDate, endDate, iconName, description}: SkillType) => {
  const currentDate: Date = endDate == "" ? new Date() : new Date(endDate);
  const startDate_ : Date = new Date(startDate);
  const experienceYear: string = (
    // ミリ秒単位なので、ミリ秒->秒->分->時間->日->年に変換
    // 少数第一位まで出力するために100をかけて100で割っている
    Math.round(((currentDate.getTime() - startDate_.getTime()) / 1000 / 60 / 60 / 24 / 365 * 10)) / 10
  ).toFixed(1);

  return (
    <div className="flex flex-row gap-1" key={key}>
      <div className="flex flex-col items-center justify-center text-3xl">
        <img width="96" height="96" src={`https://img.icons8.com/color/96/${iconName}.png`} alt={iconName}/>
      </div>
      <div className="flex flex-col justify-center images-center gap-1">
        <div className="text-xl font-bold">{experienceYear}年</div>
        <div className="text-neutral-400 text-xs">{description}</div>
      </div>
    </div>
  );
};