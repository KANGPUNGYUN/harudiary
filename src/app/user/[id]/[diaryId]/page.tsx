import { Metadata } from "next";
import Diary from "./diary";
import BackButton from "@/app/components/backbutton";

export const metadata: Metadata = {
  title: "하루쓰기 | 나의 하루",
  description: "당신의 하루를 작성하세요",
};

export default function MyDiary() {
  return (
    <>
      <main className="p-diary-main">
        <div className="p-diary-main__inner">
          <BackButton />
          <Diary />
        </div>
      </main>
    </>
  );
}