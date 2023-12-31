import Logo from "../components/navigation/navbar/Logo";
import SignInSNS from "../components/SignInSNS";
import { Metadata } from "next";
import SignInForm from "../components/SignInForm";

export const metadata: Metadata = {
  title: "하루쓰기 | 로그인",
  description: "당신의 하루를 작성하세요",
  openGraph: {
    title: "하루쓰기",
    description: "NextJS 기반 웹 일기 서비스",
    siteName: "하루쓰기",
    images: [{ url: "/opengraph_image.webp", width: 800, height: 400 }],
    type: "website",
  },
};

export default function SignIn() {
  return (
    <>
      <div className="p-signin-main__outer">
        <main className="p-signin-main">
          <div className="p-signin-container">
            <div className="p-signin-container__inner">
              <div className="p-signin-container-logo">
                <Logo />
              </div>
              <SignInForm />
              <section className="p-signin-sns-signin">
                <SignInSNS />
              </section>
            </div>
          </div>
          <footer>
            <div
              className="p-footer__copyright"
              style={{
                fontSize: "10px",
                width: "100%",
                color: "#757575",
                lineHeight: "20px",
                margin: "-5px 0 25px",
                textAlign: "center",
              }}
            >
              Copyright 2023. KANGPUNGYUN. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
