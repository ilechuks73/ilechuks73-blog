import Image from "next/image";
import { Button as MuiButton } from "@mui/material";
import { useState, useEffect } from "react";
import services from "@/services";
import { EnqueueSnackbar, enqueueSnackbar } from "notistack";

export default function Featured() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    async function setup() {
      try {
        const response = await services.api.posts.find();
        if (response.status !== 200) {
          enqueueSnackbar("An error occurred while fetching posts!");
        }
        setPosts(response.data.data.posts);
      } catch (error) {
        enqueueSnackbar("An error occurred while fetching posts!");
        console.log(error.message);
        console.log(error.stack);
      }
    }
    setup();
  }, []);
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
        {posts.map((item, index) => {
          return (
            <div
              key={index}
              className={"border border-gray-300 rounded-md p-2"}
            >
              <img className={"mb-5"} src={item.image} alt={"ilechuks73"} />
              <p className={"text-md"}>{item.title}</p>
              <p className={"text-gray-500 text-sm"}>20th January, 2024</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}