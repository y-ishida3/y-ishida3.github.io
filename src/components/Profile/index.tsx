// これがどういう意味があまりわかっていない
"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import localImage from "../../../public/snow.jpeg";

export const Profile = () => {
  // :TODO 現状Reactのバグが発生しているので、将来的に治す必要がある模様
  const pathName = usePathname()
  const pathName_ = pathName.replace('/', '') == '' ? '/' : pathName.replace('/', '');
  // :TODO ここで定義するのがいいのか？
  const flexStyle = pathName_ == 'about_me' ? "flex flex-row justify-center items-top gap-4" : "flex flex-col justify-center items-center gap-4";


  return (
    <div className={flexStyle}>
      <Image
        className="rounded-2xl object-cover"
        src={localImage}
        width={400}
        alt="Picture of the author"
      />
      <div className="introductionArea w-1/3">
        <h1 className="name text-5xl font-bold p-2">Yasuhiro Ishida</h1>
        <h2 className="job-title p-1 text-neutral-400">Data Scientist / Data Analyst</h2>
        <h2 className="description p-1">
          東京でデータサイエンティストとして働いており、現在は事業会社に所属し課題や目的に合わせて、施策の立案から効果検証にかけて一気通貫して業務を行っています。
          また、過去の経験からプロトタイプによる業務改善も手掛けており、分析や可視化・モデリングだけでなく、運用のための設計と実装も行っていました。
        </h2>
        <div className="flex flex-row justify-center item-center gap-4 py-3">
          <a href="https://www.linkedin.com/in/yasuhiro-ishida-50498b242">
            <img width="100" height="100" src="https://img.icons8.com/fluency/100/linkedin.png" alt="linkedin"/>
          </a>
          <a href="https://github.com/y-ishida3">
            <img width="100" height="100" src="https://img.icons8.com/fluency-systems-filled/100/github.png" alt="github"/>
          </a>
        </div>
      </div>
    </div>
  );
};
