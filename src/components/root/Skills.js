import { Button as MuiButton } from "@mui/material";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs, IoLogoGithub } from "react-icons/io5";
import {
  SiRabbitmq,
  SiAmazonaws,
  SiLinux,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Skills"}</h1>
      </div>
      <div
        className={
          "mt-4 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
        }
      >
        {[
          { label: "HTML", icon: SiHtml5 },
          { label: "CSS", icon: SiCss3 },
          { label: "TailwindCSS", icon: SiTailwindcss },
          { label: "Javascript", icon: IoLogoJavascript },
          { label: "Node.js", icon: IoLogoNodejs },
          { label: "Github", icon: IoLogoGithub },
          { label: "RabbitMQ", icon: SiRabbitmq },
          { label: "AWS", icon: SiAmazonaws },
          { label: "Linux", icon: SiLinux },
          { label: "ReactJS", icon: SiReact },
          { label: "VueJS", icon: SiVuedotjs },
          { label: "NextJS", icon: SiNextdotjs },
          { label: "NuxtJS", icon: SiNuxtdotjs },
          { label: "MySQL", icon: SiMysql },
          { label: "PostgreSQL", icon: SiPostgresql },
          { label: "Redis", icon: SiRedis },
        ].map((item, index) => {
          return (
            <div key={index}>
              <MuiButton
                color="primary"
                className={
                  "!w-full !border !border-solid !border-gray-300 !text-black"
                }
                startIcon={<item.icon />}
              >
                {item.label}
              </MuiButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
