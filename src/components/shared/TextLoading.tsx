import { Skeleton } from "../ui/skeleton";

const TextLoading = ({ className }: { className?: string }) => {
  return <Skeleton className={`w-20 h-4 bg-accent ${className}`} />;
};

export default TextLoading;
