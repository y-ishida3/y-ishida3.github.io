"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from '@headlessui/react'

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  const router = useRouter();
  // :TODO 現状Reactのバグが発生しているので、将来的に治す必要がある模様
  const pathName = usePathname().replace('/', '') == '' ? '/' : usePathname().replace('/', '');

  // :TODO ここで定義するのがいいのか？
  // :TODO hoverのいい定義の仕方を探す
  const normalStyle = "gap-2 text-center text-xs text-black py-2 px-3 m-3";
  // :TODO この定義の仕方は行けていないので、directoryで定義できないか
  const labels = ["Home", "About Me", "Works", "Contact"];
  const urls = ["/", "about_me", "works", "contact"];

  return (
    <footer className="footerArea border-t flex items-center h-14 px-4">
      <h1 className="footerText" onClick={() => router.push("/")}>
        y-ishida3 portfolio
      </h1>
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