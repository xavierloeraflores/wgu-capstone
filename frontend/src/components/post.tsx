import { Card, CardHeader, CardContent } from "./ui/card";

export const Post = () => {
  const title = "Post Title";
  const content =
    "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter";
  return (
    <Card className="min-w-96 max-w-md">
      <CardHeader>
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </CardHeader>
      <CardContent>
        <p className="">{content}</p>
      </CardContent>
    </Card>
  );
};
