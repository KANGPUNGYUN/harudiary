"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "@/app/components/backbutton";
import { GowunBatang } from "@/app/styles/font";

interface UserData {
  email: string;
  name: string;
}

interface FormInput {
  createdAt: Date;
  title: string;
  content: string;
  isPublic: boolean;
  user: UserData;
}

export default function DiaryUpdateForm() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      createdAt: new Date(),
      title: "",
      content: "",
      isPublic: false,
      user: {},
    },
  });

  const isPublic = watch("isPublic");

  useEffect(() => {
    if (session?.user) {
      setValue("user", session?.user);
    }

    const getDiary = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/${params.id}/${params.diaryId}`,
        {
          headers: {
            authorization: session?.user?.accessToken,
          },
        }
      );
      const diary = await res.data;

      return diary;
    };

    getDiary().then((res) => {
      setValue("title", res.title);
      setValue("content", res.content);
      setValue("isPublic", res.isPublic);
      setValue("createdAt", res.createdAt);
      setInputCount(res.content.length);
    });
  }, []);

  let [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e: any) => {
    setInputCount(e.target.value.length);
  };

  async function updateDiary(data: FormInput) {
    try {
      const updateDiaryData = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/${params.id}/${params.diaryId}/updateDiary`,
        {
          title: data.title,
          content: data.content,
          isPublic: data.isPublic,
        }
      );
      if (updateDiaryData.status === 200) {
        router.push(`/user/${params.id}/${params.diaryId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet preload"
        as="style"
      />
      <BackButton />
      <form className="p-diary-form">
        <div className="p-diary-paper">
          <p className="p-diary-date">{`${
            new Date(String(getValues("createdAt")))
              .toLocaleString("ko-KR")
              .split(".")[0]
          }년 ${
            new Date(String(getValues("createdAt")))
              .toLocaleString("ko-KR")
              .split(".")[1]
          }월 ${
            new Date(String(getValues("createdAt")))
              .toLocaleString("ko-KR")
              .split(".")[2]
          }일`}</p>
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
            <span data-tooltip="checkbox를 checked하면 회원 모두에게 일기가 공개되며, unchecked하면 비공개됩니다.">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
          </div>
        </div>
        <div className="p-diary-form-error-message">{errors.user?.message}</div>
        <div className="p-diary-form-utility">
          <button
            className="p-diary-form-submit-button"
            onClick={handleSubmit((data) => {
              if (!session?.user) {
                setError("user", {
                  message:
                    "로그인 정보가 없습니다. 일기를 작성하려면 먼저 로그인 또는 회원가입해주세요.",
                });
              } else {
                updateDiary(data);
              }
            })}
          >
            일기 수정하기
          </button>
        </div>
      </form>
    </>
  );
}
