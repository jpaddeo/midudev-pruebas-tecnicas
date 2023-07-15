import { component$, useContext } from '@builder.io/qwik';

import { BookListContext } from '~/contexts/book-list-context';

import BookCard from '~/components/book-card';

export const BookList = component$(() => {
  const { books } = useContext(BookListContext);

  return (
    <div class='flex flex-col items-center justify-center bg-blue-400 p-6 shadow-lg border-2 border-black rounded-lg'>
      <section class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {books.map((book) => (
          <BookCard key={book.ISBN} book={book} />
        ))}
      </section>
      <span class='border-2 border-black rounded-full w-16 h-16 p-4 bg-white text-center'>
        more
      </span>
    </div>
  );
});
