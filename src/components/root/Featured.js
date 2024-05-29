import Image from "next/image";
import { Button as MuiButton } from "@mui/material";

export default function Featured() {
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Featured"}</h1>
      </div>
      <div
        className={
          "mt-4 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
        }
      >
        {[...Array(5)].map((item, index) => {
          return (
            <div
              key={index}
              className={"border border-gray-300 rounded-md p-2"}
            >
              <img
                className={"mb-5"}
                src={
                  "https://res.cloudinary.com/geergregrgege/image/upload/v1716754334/assets/images/xsp4qwpdyc0j0s2805vf.png"
                }
                alt={"ilechuks73"}
              />
              <p className={"text-md"}>Blog content title</p>
              <p className={"text-gray-500 text-sm"}>20th January, 2024</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
