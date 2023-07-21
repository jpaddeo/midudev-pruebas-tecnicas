import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { BookList } from '~/components/book-list';
import { ReadingList } from '~/components/reading-list';
import { Totals } from '~/components/totals';

export default component$(() => {
  return (
    <>
      <Totals />
      <section class='flex flex-row items-start justify-between min-h-screen p-6'>
        <BookList />
        <ReadingList />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Books Reading List',
  meta: [
    {
      name: 'description',
      content:
        'Books reading list challenge proposed by Miguel Ángel Durán (@midudev)',
    },
  ],
};
