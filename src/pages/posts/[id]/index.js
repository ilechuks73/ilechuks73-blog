import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import services from "@/services";
import { enqueueSnackbar } from "notistack";
import { MdOutlineWavingHand } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function Post(props) {
  const router = useRouter();
  const [post, setPost] = useState(props.post);
  const iframeRef = useRef(null);

  // useEffect(() => {
  //   async function setup() {
  //     const response = await services.api.posts.single.find({
  //       id: router.query.id,
  //     });
  //     if (response.status !== 200) {
  //       enqueueSnackbar("An error occurred while fetching posts!");
  //       return false;
  //     }
  //     setPost(response.data.data.post);
  //   }
  //   setup();
  //   return () => {};
  // }, [router.query.id]);

  useEffect(() => {
    const iframeDoc =
      iframeRef.current.contentDocument ||
      iframeRef.current.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <style>
      *{
        font-family : "Roboto", sans-serif;
         
      }
      html{
        overflow: hidden;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: #fff;
      }
      img {
        max-width: 100%;
      }
    </style>
  </head><body>${props.post.body}</body><html>`);
    iframeDoc.close();

    const handleResize = () => {
      const iframeHeight =
        iframeRef.current.contentWindow.document.body.scrollHeight;
      iframeRef.current.style.height = `${iframeHeight + 100}px`;
    };

    iframeRef.current.onload = handleResize;
    iframeRef.current.contentWindow.addEventListener("resize", handleResize);

    return () => {
      iframeRef?.current?.contentWindow?.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [props.post]);

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Head>
      <div className={""}>
        <div className={"font-roboto max-w-[1000px] mx-4 md:mx-10 lg:mx-auto"}>
          <div className={"flex justify-between items-center py-3"}>
            <Link href="/">
              <img
                alt={"ilechuks73"}
                className={"h-[30px] md:h-[50px] cursor-pointer"}
                src={
                  "https://res.cloudinary.com/geergregrgege/image/upload/v1716754334/assets/images/xsp4qwpdyc0j0s2805vf.png"
                }
              />
            </Link>
            <div className={"flex"}>
              <MuiButton
                endIcon={<GoArrowUpRight className={"font-light"} />}
                className={
                  "!text-black !font-light !font-poppins !rounded-none"
                }
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
              <h1 className={"text-[30px] font-bold pt-20"}>{post.title}</h1>
              <p className="text-sm text-gray-500">
                {moment(post.createdAt).format("LL")}
              </p>
            </div>
          </div>
          <div>
            <img src={post.image} className="w-full" />
          </div>
          <div className={"w-[100%]"}>
            <iframe ref={iframeRef} style={{ width: "100%", border: "none" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await services.api.posts.single.find({
      id: context.params.id,
    });
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }
    const post = response.data.data.post;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);

    return {
      props: {
        error: {
          message: error.message,
        },
      },
    };
  }
}

export default Post;
