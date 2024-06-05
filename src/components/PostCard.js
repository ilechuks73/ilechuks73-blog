import { Button as MuiButton } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import moment from "moment";

export default function PostCardSkeleton(props) {
  return (
    <div className={"border overflow-hidden border-gray-300 rounded-md"}>
      <div
        className={
          "h-[200px] overflow-hidden sm:flex border border-gray-300 flex-col justify-center hidden"
        }
      >
        <a
          href={`https://blog.ilechuks73.com/posts/${props.post._id}`}
          target="_blank"
          className=""
        >
          <img
            src={props.post.image}
            alt={"ilechuks73"}
            className="object-fill"
          />
        </a>
      </div>
      <div className={"px-2 pb-5 mt-5"}>
        <a
          href={`https://blog.ilechuks73.com/posts/${props.post._id}`}
          target="_blank"
        >
          <p className={"text-md truncate hover:underline"}>
            {props.post.title}
          </p>
        </a>
        <p className={"text-gray-500 text-sm"}>
          {moment(props.post.createdAt).format("LL")}
        </p>
        <a
          href={`https://blog.ilechuks73.com/posts/${props.post._id}`}
          target="_blank"
        >
          <MuiButton
            className={"!px-0 !text-black !hover:text-underline"}
            disableRipple={true}
            endIcon={<IoIosArrowRoundForward />}
          >
            Read
          </MuiButton>
        </a>
      </div>
    </div>
  );
}
