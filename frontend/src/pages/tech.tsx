import Head from "next/head";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Stack</title>
        <meta name="description" content="About the Project Tech Stack" />
      </Head>
      <section className="w-full py-12 md:py-24">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tech Stack
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The tools and technologies used to build this solution.
            </p>
          </div>
          <Stack stackItems={FrontendStackItems} stackTitle="Frontend" />
          <Stack stackItems={BackendStackItems} stackTitle="Backend" />
          <Stack
            stackItems={MachineLearningStackItems}
            stackTitle="Machine Learning"
          />
        </div>
      </section>
    </>
  );
}

type StackProps = {
  stackItems: StackItemProps[];
  stackTitle: string;
};
type StackItemProps = {
  name: string;
  image: string;
};
const Stack: React.FC<StackProps & { className?: string }> = ({
  stackItems,
  stackTitle,
  className = "",
}) => {
  return (
    <>
      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
        {stackTitle}
      </h2>
      <div
        className={cn(
          "grid w-full grid-cols-2 items-center justify-center gap-6 lg:grid-cols-3 lg:gap-12",
          className,
        )}
      >
        {stackItems.map((stackItem) => {
          return <StackItem key={stackItem.name} {...stackItem} />;
        })}
      </div>
    </>
  );
};

const StackItem: React.FC<StackItemProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <img
        alt={`${name} Logo`}
        className="rounded-lg"
        height="100"
        src={image}
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="100"
      />
      <span className="text-sm font-medium dark:text-gray-400">{name}</span>
    </div>
  );
};

const FrontendStackItems = [
  {
    name: "React",
    image: "/favicon-96.png",
  },
  {
    name: "Next.js",
    image: "/favicon-96.png",
  },
  {
    name: "Tailwind CSS",
    image: "/favicon-96.png",
  },
  {
    name: "TypeScript",
    image: "/favicon-96.png",
  },
  {
    name: "TailwindCSS",
    image: "/favicon-96.png",
  },
  {
    name: "Vercel",
    image: "/favicon-96.png",
  },
];
const BackendStackItems = [
  {
    name: "Python",
    image: "/favicon-96.png",
  },
  {
    name: "FastApi",
    image: "/favicon-96.png",
  },
  {
    name: "Pydantic",
    image: "/favicon-96.png",
  },
  {
    name: "PostgreSQL",
    image: "/favicon-96.png",
  },
  {
    name: "Insomnia",
    image: "/favicon-96.png",
  },
  {
    name: "Railway",
    image: "/favicon-96.png",
  },
];
const MachineLearningStackItems = [
  {
    name: "SciKit-Learn",
    image: "/favicon-96.png",
  },
  {
    name: "NLTK",
    image: "/favicon-96.png",
  },
  {
    name: "Pandas",
    image: "/favicon-96.png",
  },
  {
    name: "NumPy",
    image: "/favicon-96.png",
  },
  {
    name: "pickle",
    image: "/favicon-96.png",
  },
  {
    name: "Kaggle",
    image: "/favicon-96.png",
  },
];
