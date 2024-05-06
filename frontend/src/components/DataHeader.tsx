import {
  DownloadDropdown,
  type DownloadDropDownMenuProps,
} from "./DownloadDropdown";
import Image from "next/image";

type ImageProps = {
  alt: string;
  src: string;
};
type DataHeaderProps = {
  title?: string;
  headline?: string;
  dropdown: DownloadDropDownMenuProps;
  image: ImageProps;
};

export const DataHeader: React.FC<DataHeaderProps & { className?: string }> = ({
  title = "",
  headline = "",
  dropdown,
  image,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {title}
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {headline}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <DownloadDropdown
                menuTrigger={dropdown.menuTrigger}
                menuLabel={dropdown.menuLabel}
                menuItems={dropdown.menuItems}
              />
            </div>
          </div>

          <Image
            alt={image.alt}
            className="mx-auto aspect-[1/1] max-w-64 overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="400"
            width="400"
            src={image.src}
          />
        </div>
      </div>
    </section>
  );
};
