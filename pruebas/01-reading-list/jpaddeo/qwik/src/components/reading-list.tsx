import { component$ } from '@builder.io/qwik';

import { useGlobalLibraryState } from '~/contexts/library-context';

import BookCard from '~/components/book-card';

export const ReadingList = component$(() => {
  const { readingList } = useGlobalLibraryState();
  return (
    <section class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-8'>
      {readingList.value.map((book) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </section>
  );
});
