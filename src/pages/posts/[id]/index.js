import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import services from "@/services";
import { enqueueSnackbar } from "notistack";

function Post(props) {
  const router = useRouter();
  const [post, setPost] = useState(props.post);

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

  return <h1>{post?.title}</h1>;
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
