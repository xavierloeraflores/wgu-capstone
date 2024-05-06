import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

type DownloadDropDownMenuItem = {
  href: string;
  name: string;
};

export type DownloadDropDownMenuProps = {
  menuTrigger?: string;
  menuLabel?: string;
  menuItems?: DownloadDropDownMenuItem[];
};

export const DownloadDropdown: React.FC<
  DownloadDropDownMenuProps & { className?: string }
> = ({ menuTrigger = "", menuLabel = "", menuItems = [] }) => {
  const downloadFile = (href: string) => {
    window.open(href, "_blank");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{menuTrigger}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item, idx) => (
          <DropdownMenuItem key={idx} onClick={() => downloadFile(item.href)}>
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
