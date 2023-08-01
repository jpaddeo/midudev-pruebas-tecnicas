import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { type BookWithSettings } from '~/types';

import { useGlobalAppState } from '~/context/app-context';

import BookCard from '~/components/book-card';

export default component$(() => {
  const { library } = useGlobalAppState();

  return (
    <div class='flex flex-col p-8 bg-white dark:bg-gray-900'>
      <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4'>
        {library.books.map((book: BookWithSettings) => (
          <BookCard key={book.ISBN} book={book} />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'JPA Books | Inicio',
  meta: [
    {
      name: 'description',
      content:
        'Books reading list challenge proposed by Miguel Ángel Durán (@midudev)',
    },
  ],
};
