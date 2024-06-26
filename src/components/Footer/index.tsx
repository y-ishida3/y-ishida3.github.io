"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from '@headlessui/react'

import { SiteURLType } from "@/types/base";
import styles from "./footer.module.css";

export const Footer = ({labels, urls}: SiteURLType) => {
  const router = useRouter();
  // :TODO ここで定義するのがいいのか？
  // :TODO hoverのいい定義の仕方を探す -> 一旦はunderlineで定義
  const normalStyle = "gap-2 text-center text-xs text-black py-2 px-3 m-3 hover:underline";

  return (
    <footer className="footerArea border-t flex items-center h-14 px-4">
      <div className="flex flex-col text-xs text-center" onClick={() => router.push("/")}>
        <span className="text-neutral-900">y-ishida3 portfolio</span>
        <span className="text-neutral-400 hover:underline">Icons by <a href="https://icons8.com">Icons8</a></span>
      </div>
      <span className="flex-1"></span>
      <div className="flex flex-row">
        {labels.map((label, index) => (
          <Button
            className={normalStyle}
            onClick={() => router.push(urls[index])}
            key={index}
          >
            {label}
          </Button>
        ))}
      </div>
    </footer>
  );
};