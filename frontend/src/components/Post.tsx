import { Card, CardHeader, CardContent } from "./ui/card";
import { PostAvatar } from "./PostAvatar";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { ContentFilterAtom } from "@/pages/_app";

type PostProps = {
  text: string;
  title: string;
  isNSFW: boolean;
};

export const Post: React.FC<PostProps & { className?: string }> = ({
  text,
  title,
  isNSFW,
  className = "",
}) => {
  const [isFiltered] = useAtom(ContentFilterAtom);
  return (
    <Card className={cn("min-w-96 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2 border-b-2">
        <PostAvatar isNSFW={isNSFW} />
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </CardHeader>
      <CardContent
        className={isFiltered && isNSFW ? "overflow-hidden blur-xl filter" : ""}
      >
        <p className={isFiltered && isNSFW ? "select-none" : "select-text"}>
          {text}
        </p>
      </CardContent>
    </Card>
  );
};
