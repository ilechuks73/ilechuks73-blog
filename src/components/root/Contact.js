import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import validator from "validator";
import { enqueueSnackbar } from "notistack";

export default function Contact() {
  const [isLoading, setIsLoading] = useState([false]);
  const [hasError, setHasError] = useState([false, false, false]);
  const [form, setForm] = useState({
    name: null,
    emailAddress: null,
    message: null,
  });

  const { executeRecaptcha } = useReCaptcha();
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 flex flex-wrap sm:flex-nowrap gap-2 w-full"}>
        <div className={"w-full md:w-[50%] xl:w-[70%]"}>
          <h1 className={"text-[20px] font-medium"}>{"Let's Work Together"}</h1>
          <p className={"text-[15px] text-gray-600 mt-2"}>
            {
              "Trust me, You can never go wrong working with me, I give everything my best."
            }
          </p>
        </div>
        <div className={"w-full md:w-[50%] xl:w-[30%]"}>
          <MuiTextField
            error={hasError[0]}
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your name"}
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <MuiTextField
            error={hasError[1]}
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your email address"}
            value={form.emailAddress || ""}
            onChange={(e) => setForm({ ...form, emailAddress: e.target.value })}
          />
          <MuiTextField
            error={hasError[2]}
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your message"}
            multiline={true}
            minRows={4}
            value={form.message || ""}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className={"mt-3 w-full flex gap-x-2"}>
            <MuiButton
              disabled={isLoading[0] === true}
              variant={"contained"}
              className={"!bg-black !text-white !w-full !flex-grow"}
              endIcon={<PiPaperPlaneRightFill />}
              onClick={async (event) => {
                setHasError((hasError) => {
                  hasError[0] = false;
                  hasError[1] = false;
                  hasError[2] = false;
                  return [...hasError];
                });
                if (
                  !form.name ||
                  validator.isEmpty(form.name) === true ||
                  validator.isLength(form.name, { min: 2 }) === false
                ) {
                  setHasError((hasError) => {
                    hasError[0] = true;
                    return [...hasError];
                  });
                  return false;
                }
                if (
                  !form.emailAddress ||
                  validator.isEmpty(form.emailAddress) === true ||
                  validator.isEmail(form.emailAddress) === false
                ) {
                  setHasError((hasError) => {
                    hasError[1] = true;
                    return [...hasError];
                  });
                  return false;
                }
                if (
                  !form.message ||
                  validator.isEmpty(form.message) === true ||
                  validator.isLength(form.message, { min: 10 }) === false
                ) {
                  setHasError((hasError) => {
                    hasError[2] = true;
                    return [...hasError];
                  });
                  return false;
                }
                setIsLoading((isLoading) => {
                  isLoading[0] = true;
                  return [...isLoading];
                });
                const token = await executeRecaptcha("form_submit");
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...form,
                    token,
                  }),
                });
                if (response.status !== 200) {
                  setIsLoading((isLoading) => {
                    isLoading[0] = false;
                    return [...isLoading];
                  });
                  return false;
                }
                enqueueSnackbar(
                  "Hey, I got your message. I'll respond as soon as I can.",
                );
                setIsLoading((isLoading) => {
                  isLoading[0] = false;
                  return [...isLoading];
                });
                setForm({
                  name: null,
                  emailAddress: null,
                  message: null,
                });
              }}
            >
              Send
            </MuiButton>
            <MuiButton
              className={
                "!border !border-gray-200 !border-solid !bg-white !text-black"
              }
            >
              Clear
            </MuiButton>
          </div>
        </div>
      </div>
    </div>
  );
}
