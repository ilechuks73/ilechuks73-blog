import { Skeleton as MuiSkeleton } from "@mui/material";

export default function PostCardSkeleton(props) {
  return (
    <div>
      <MuiSkeleton height={200} className={""} />
      <MuiSkeleton className={"h-[20px]"} />
      <MuiSkeleton className={"h-[17px] w-[70%]"} />
      <MuiSkeleton className={"h-[35px] w-[30%]"} />
    </div>
  );
}
