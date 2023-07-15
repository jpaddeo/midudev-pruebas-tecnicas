import { component$, useContext } from '@builder.io/qwik';

import { ReadingListContext } from '~/contexts/reading-list-context';

import BookCard from '~/components/book-card';

export const ReadingList = component$(() => {
  const { readingList } = useContext(ReadingListContext);
  return (
    <section class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-8'>
      {readingList.map((book) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </section>
  );
});
