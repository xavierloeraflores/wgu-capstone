import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationFirst,
  PaginationLast,
} from "@/components/ui/pagination";
import { toast } from "sonner";
import { useAtom } from "jotai";
import { ContentPageAtom } from "@/pages/_app";
import { useState, useEffect } from "react";

type FeedPaginationProps = {
  lastPage?: number;
};

export const FeedPagination: React.FC<FeedPaginationProps> = ({
  lastPage = 10,
}) => {
  const [page, setPage] = useAtom(ContentPageAtom);
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
    <Pagination>
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
