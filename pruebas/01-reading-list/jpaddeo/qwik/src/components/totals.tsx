import { component$, useContext } from '@builder.io/qwik';

import { BookListContext } from '~/contexts/book-list-context';
import { ReadingListContext } from '~/contexts/reading-list-context';

export const Totals = component$(() => {
  const { books } = useContext(BookListContext);
  const { readingList } = useContext(ReadingListContext);
  return (
    <h1>
      {readingList.length}/{books.length}
    </h1>
  );
});
