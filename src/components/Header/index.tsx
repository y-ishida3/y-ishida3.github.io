"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from '@headlessui/react'

import styles from "./header.module.css";

export const Header: React.FC = () => {
  const router = useRouter();
  // :TODO 現状Reactのバグが発生しているので、将来的に治す必要がある模様
  const pathName = usePathname().replace('/', '') == '' ? '/' : usePathname().replace('/', '');

  // :TODO ここで定義するのがいいのか？
  const normalStyle = "gap-2 rounded-md bg-white-100 text-center text-xs text-black py-2 px-3 m-3 hover:bg-gray-900 hover:text-white";
  const activeStyle = "gap-2 rounded-md bg-gray-900 text-center text-xs text-white py-2 px-3 m-3 hover:bg-gray-600";
  // :TODO この定義の仕方は行けていないので、directoryで定義できないか
  const labels = ["Home", "About Me", "Works", "Contact"];
  const urls = ["/", "about_me", "works", "contact"];

  return (
    <header className="headerArea border-b flex items-center h-14 px-4">
      <h1 className="headerText" onClick={() => router.push("/")}>
        y-ishida3 portfolio
      </h1>
    <span className="flex-1"></span>
    <div className="flex flex-row">
      {labels.map((label, index) => (
        <Button
          className={pathName == urls[index] ? activeStyle : normalStyle}
          onClick={() => router.push(urls[index])}
          key={index}
        >
          {label}
        </Button>
      ))}
    </div>
    </header>
  );
};