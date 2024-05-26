import {
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  IconButton as MuiIconButton,
} from "@mui/material";

import { BsImage } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";

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

export default function ViewSwitch() {
  return (
    <div className={"fixed w-full block bottom-2 z-[999999999999]"}>
      <div className={"mx-auto w-min"}>
        <MuiButtonGroup className={""}>
          <MuiButton className={"!bg-black !border-[0.5px] !text-white !border-white"}>
            <BsImage />
          </MuiButton>
          <MuiButton className={"!bg-black !border-[0.5px] !text-white !border-white"}>
            <BsTextCenter />
          </MuiButton>
        </MuiButtonGroup>
      </div>
    </div>
  );
}
