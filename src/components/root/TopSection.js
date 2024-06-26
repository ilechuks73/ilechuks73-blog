/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
import { MdOutlineWavingHand } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { useReCaptcha } from "next-recaptcha-v3";
import validator from "validator";
import Image from "next/image";

export default function TopSection() {
  const [form, setForm] = useState({ emailAddress: "" });
  const [hasError, setHasError] = useState([false]);
  return (
    <div className={""}>
      <div className={"font-roboto max-w-[1000px] mx-4 md:mx-10 lg:mx-auto"}>
        <div className={"flex justify-between items-center py-3"}>
          <img
            alt={"ilechuks73"}
            className={"h-[30px] md:h-[50px]"}
            src={
              "https://res.cloudinary.com/geergregrgege/image/upload/v1716754334/assets/images/xsp4qwpdyc0j0s2805vf.png"
            }
          />
          <div className={"flex"}>
            <MuiButton
              endIcon={<GoArrowUpRight className={"font-light"} />}
              className={"!text-black !font-light !font-poppins !rounded-none"}
            >
              {"Portfolio"}
            </MuiButton>
            <MuiButton
              disabled={true}
              className={
                "!text-black !rounded-none !border-l !border-l-black !border-solid !font-poppins"
              }
            >
              {"Blog"}
            </MuiButton>
          </div>
        </div>
        <div className={"flex gap-x-6 w-full"}>
          <div className={"w-[100%] md:w-[60%] pb-10"}>
            <h1 className={"text-[30px] font-bold pt-20"}>Blog</h1>
            <h1 className={"text-[20px] mt-10  font-medium"}>
              I'm Joshua Ilechukwu
            </h1>
            <p className={"text-[16px] text-gray-600 mt-3"}>
              Feel free to explore my portfolio to see some of the projects I've
              been working on. If you'd like to collaborate or just have a chat,
              don't hesitate to reach out!
            </p>
            <MuiTextField
              error={hasError[0]}
              size={"small"}
              variant={"outlined"}
              className={"!w-full !mt-6"}
              placeholder={"Your email address"}
              value={form.emailAddress || ""}
              onChange={(e) =>
                setForm({ ...form, emailAddress: e.target.value })
              }
            />
            <div className={"mt-4"}>
              <MuiButton
                variant={"contained"}
                className={"!bg-black !text-white"}
                endIcon={<MdOutlineMarkEmailRead />}
                onClick={async (event) => {
                  setHasError((hasError) => {
                    hasError[0] = false;
                    return [...hasError];
                  });
                  if (
                    !form.emailAddress ||
                    validator.isEmpty(form.emailAddress) === true ||
                    validator.isEmail(form.emailAddress) === false
                  ) {
                    setHasError((hasError) => {
                      hasError[0] = true;
                      return [...hasError];
                    });
                    return false;
                  }
                }}
              >
                Subscribe
              </MuiButton>
            </div>
          </div>
          <div className={"w-[100%] md:w-[40%] hidden md:block"}>
            {/*<img*/}
            {/*  alt={"joshua ilechukwu"}*/}
            {/*  className={"w-[100%] h-[100%] object-cover object-center filter"}*/}
            {/*  src={*/}
            {/*    "https://res.cloudinary.com/geergregrgege/image/upload/v1716427815/assets/images/epdfpb3gswfsl1hd2zc3.jpg"*/}
            {/*  }*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */
