import Image from "next/image";
import localImage from "../../public/test.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ここはProfile的なcomponentsを作るほうが良さそう、about meでflex-colの変化させる感じ */}
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={localImage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h1>Hello World!!</h1>
      </div>
    </main>
  );
}
