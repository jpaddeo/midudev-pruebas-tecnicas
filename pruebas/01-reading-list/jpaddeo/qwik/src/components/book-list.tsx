import { component$ } from '@builder.io/qwik';

import { useGlobalLibraryState } from '~/contexts/library-context';

import BookCard from '~/components/book-card';

export default component$(() => {
  const { books } = useGlobalLibraryState();

  return (
    <section class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-8 w-full'>
      {books.value.map((book) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </section>
  );
});
