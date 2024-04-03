import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { ContentFilterToggle } from "./ContentFilterToggle";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-center border-b-2 border-accent bg-secondary p-4 text-secondary-foreground">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://wgu-capstone-docs.vercel.app/"
              legacyBehavior
              passHref
            >
              <a target="_blank" className={navigationMenuTriggerStyle()}>
                Docs
              </a>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-background">
              <div className="flex w-64 flex-col p-2">
                <Destination
                  props={{
                    link: "/about",
                    title: "About",
                    text: "Learn more about the website",
                  }}
                />
                <Destination
                  props={{
                    link: "/xavier",
                    title: "The Developer",
                    text: "Learn more about the developer",
                  }}
                />
                <Destination
                  props={{
                    link: "/tech",
                    title: "Tech Stack",
                    text: "Learn how the site was built",
                  }}
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mx-1 flex flex-row items-end">
        <ThemeToggle />
        <ContentFilterToggle />
      </div>
    </header>
  );
};

const Destination = ({
  props,
}: {
  props: { link: string; title: string; text?: string };
}) => {
  const { link, title, text } = props;
  return (
    <Link href={link} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="flex w-full flex-col rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <span className="text-sm font-medium leading-none">{title}</span>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {text}
          </p>
        </div>
      </NavigationMenuLink>
    </Link>
  );
};
