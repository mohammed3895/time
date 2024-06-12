import { Skeleton } from "../ui/skeleton";

const TextLoading = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <Skeleton
      className={`w-[${width} ?? 60px] h-[${height} ?? 6px] bg-accent`}
    />
  );
};

export default TextLoading;
