import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationFirst,
  PaginationLast,
} from "@/components/ui/pagination";
import { toast } from "sonner";
import { type PrimitiveAtom, useAtom } from "jotai";
import { ContentPageAtom } from "@/pages/_app";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type FeedPaginationProps = {
  lastPage?: number;
};

export const FeedPagination: React.FC<
  FeedPaginationProps & { className?: string }
> = ({ lastPage = 10, className = "" }) => {
  const [page, setPage] = useAtom<number>(
    ContentPageAtom as PrimitiveAtom<number>,
  );
  const [firstPage, setFirstPage] = useState(1);
  const [secondPage, setSecondPage] = useState(2);
  const [thirdPage, setThirdPage] = useState(3);
  useEffect(() => {
    if (page === 1) {
      setFirstPage(1);
      setSecondPage(2);
      setThirdPage(3);
    } else if (page === lastPage) {
      setFirstPage(lastPage - 2);
      setSecondPage(lastPage - 1);
      setThirdPage(lastPage);
      return;
    } else {
      setFirstPage(page - 1);
      setSecondPage(page);
      setThirdPage(page + 1);
    }
  }, [page, lastPage]);

  const updatePage = async (newPage: number) => {
    toast("Loading page " + newPage);
    setPage(newPage);
  };
  return (
    <Pagination className={cn("", className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst onClick={() => updatePage(1)} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={page == 1}
            onClick={() => updatePage(firstPage)}
          >
            {firstPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={page != lastPage && page != 1}
            onClick={() => updatePage(secondPage)}
          >
            {secondPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={page == lastPage}
            onClick={() => updatePage(thirdPage)}
          >
            {thirdPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLast onClick={() => updatePage(lastPage)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
