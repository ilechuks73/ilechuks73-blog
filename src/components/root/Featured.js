import Image from "next/image";
import { Button as MuiButton } from "@mui/material";
import { useState, useEffect } from "react";
import services from "@/services";
import { enqueueSnackbar } from "notistack";
import moment from "moment";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import PostCardSkeleton from "@/components/PostCardSkeleton";
import PostCard from "@/components/PostCard";

export default function Featured() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    async function setup() {
      try {
        const response = await services.api.posts.find();
        if (response.status !== 200) {
          enqueueSnackbar("An error occurred while fetching posts!");
        }
        setPosts(response.data.data.posts);
        setIsLoading((isLoading) => {
          isLoading[0] = false;
          return [...isLoading];
        });
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
        {isLoading[0] ? (
          <>
            {[...Array(4)].map((item, index) => {
              return <PostCardSkeleton key={index} />;
            })}
          </>
        ) : (
          <>
            {posts.map((item, index) => {
              return <PostCard key={index} post={item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
