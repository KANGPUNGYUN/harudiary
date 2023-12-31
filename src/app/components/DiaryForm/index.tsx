"use client";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@/app/components/modal";
import axios from "axios";
import { GowunBatang } from "@/app/styles/font";

interface UserData {
  email: string;
  provider: string;
  name: string;
}

interface FormInput {
  title: string;
  content: string;
  isPublic: boolean;
  user: UserData;
}

export default function DiaryForm() {
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: { isPublic: false, user: {} },
  });

  let [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e: any) => {
    setInputCount(e.target.value.length);
  };

  const isPublic = watch("isPublic");

  const date = new Date().toLocaleDateString("ko-KR");
  const year = date.split(". ")[0];
  const month = date.split(". ")[1];
  const day = date.split(".")[2];

  useEffect(() => {
    if (session?.user) {
      setValue("user", session?.user);
    }
  }, []);

  async function CreateDiary(data: FormInput) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/signin/userCheck`,
        {
          email: data.user.email,
          auth: data.user.provider,
        }
      );

      let userId = res.data;

      if (userId === null) {
        try {
          const newUser = await axios.post(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/signup/signupwithAuth`,
            {
              name: data.user.name,
              email: data.user.email,
              auth: data.user.provider,
              password: "",
            }
          );
          userId = newUser.data.id;
        } catch (error) {
          console.error(error);
        }
      }
      try {
        const lastdate = await axios.get(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/${userId}/checkDateValidate`
        );
        const res = await lastdate.data;
        if (
          new Date(res?.createdAt).toLocaleString("ko-KR").slice(0, 12) ===
          new Date().toLocaleString("ko-KR").slice(0, 12)
        ) {
          setError("user", {
            message:
              "오늘 작성한 일기가 존재합니다. 하루에 하나의 일기만 작성이 가능하니 참고해주세요.",
          });
          return;
        } else {
          const diary = await axios.post(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/createDiary`,
            {
              title: data.title,
              content: data.content,
              isPublic: data.isPublic,
              authorId: userId,
            }
          );
          router.push("/user/write/?modal=true");
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const searchParams = useSearchParams();
  const showModal = searchParams?.get("modal");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet preload"
        as="style"
      />
      <form className="p-diary-form">
        {showModal && <Modal />}
        <div className="p-diary-paper">
          <p className="p-diary-date">{`${year}년 ${month}월 ${day}일`}</p>
          <label className="p-diary-form-title-label__outer">
            <input
              type="text"
              className={
                errors.title
                  ? `p-diary-form-title errored ${GowunBatang.className}`
                  : `p-diary-form-title ${GowunBatang.className}`
              }
              {...register("title", {
                required: "제목을 입력해주세요.",
              })}
              placeholder={`오늘의 제목`}
            />
            <span className="underline"></span>
            <span className="form-control-blind">일기 제목 입력하기</span>
          </label>
          <div className="p-signup-form-error-message">
            {errors.title?.message}
          </div>
          <label>
            <textarea
              className={
                errors.content
                  ? `p-diary-form-content errored ${GowunBatang.className}`
                  : `p-diary-form-content ${GowunBatang.className}`
              }
              {...register("content", {
                required: "내용을 입력해주세요.",
              })}
              placeholder="당신의 하루를 작성해주세요."
              onChange={onInputHandler}
              maxLength={250}
              wrap="hard"
            />
            <span className="form-control-blind">일기 내용 입력하기</span>
          </label>
          <div className="p-diary-form-content-text-counter">
            <div className="p-signup-form-error-message">
              {errors.content?.message}
            </div>
            <p className="p-diary-form-content-text-limit">
              <span>{inputCount}</span>
              <span>/250자</span>
            </p>
          </div>
          <div className="p-diary-form-checkbox-label__outer">
            <label className="p-diary-form-checkbox-label">
              <div
                className={
                  isPublic
                    ? "p-diary-form-checkbox-input__outer active"
                    : "p-diary-form-checkbox-input__outer"
                }
              >
                <div className="p-diary-form-checkbox">
                  <span className="p-diary-form-check"></span>
                </div>
                <input
                  className="p-diary-form-checkbox-input"
                  type="checkbox"
                  checked={isPublic}
                  {...register("isPublic")}
                />
              </div>
              <span className="p-diary-form-checkbox-text__outer">
                <span className="p-diary-form-checkbox-text">공개 여부</span>
              </span>
            </label>
            <span data-tooltip="체크박스를 check하면 일기 내용이 이용자 모두에게 공개되며, uncheck하면 비공개됩니다.">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
          </div>
        </div>
        <div className="p-diary-form-error-message">{errors.user?.message}</div>
        <div className="p-diary-form-utility">
          <button
            onClick={handleSubmit((data) => {
              if (!session?.user) {
                setError("user", {
                  message: "로그인 정보가 없습니다. 먼저 로그인 하세요.",
                });
              } else {
                CreateDiary(data);
              }
            })}
            className="p-diary-form-submit-button"
          >
            일기 올리기
          </button>
        </div>
      </form>
    </>
  );
}
