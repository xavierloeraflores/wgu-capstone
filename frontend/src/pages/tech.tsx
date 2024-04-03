import Head from "next/head";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Stack</title>
        <meta name="description" content="About the Project Tech Stack" />
      </Head>
      <section className="w-full space-y-6 py-6">
        <div className="items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl ">
            Tech Stack
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The tools and technologies used to build this solution.
          </p>
        </div>
        <div className="container mt-8 grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
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
      <Separator />
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
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "PostCSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
];
const BackendStackItems = [
  {
    name: "FastApi",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Insomnia",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
  },
  {
    name: "Railway",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
  },
];
const MachineLearningStackItems = [
  {
    name: "SciKit-Learn",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    name: "NLTK",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
  },
  {
    name: "Pandas",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Jupyter Notebook",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Kaggle",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
  },
];
