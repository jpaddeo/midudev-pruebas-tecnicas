import { component$ } from '@builder.io/qwik';

import { type BookWithSettings } from '~/types';

import { useGlobalAppState } from '~/context/app-context';

import BookCard from '~/components/book-card';

export default component$(() => {
  const { library } = useGlobalAppState();
  return (
    <section class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-4 py-8 w-full'>
      {library.readingList.map((book: BookWithSettings) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </section>
  );
});
