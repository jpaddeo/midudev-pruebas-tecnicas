import {
  component$,
  useContextProvider,
  $,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import type { DocumentHead } from '@builder.io/qwik-city';

import { api } from '~/libs/api';

import { type Book } from '~/types';

import { BookListContext } from '~/contexts/book-list-context';
import {
  ReadingListContext,
  type ReadingListContextState,
} from '~/contexts/reading-list-context';

import { BookList } from '~/components/book-list';
import { ReadingList } from '~/components/reading-list';
import { Totals } from '~/components/totals';

const books = await api.books.list();

export default component$(() => {
  const readingListStore = useStore<ReadingListContextState>({
    readingList: [],
    toggleToReadingList: $(function (
      this: ReadingListContextState,
      book: Book
    ) {
      if (this.readingList.find((b) => b.ISBN === book.ISBN)) {
        this.readingList = this.readingList.filter((b) => b.ISBN !== book.ISBN);
      } else {
        this.readingList.push(book);
      }
      if (isBrowser) {
        window.localStorage.setItem(
          'books.readingList',
          JSON.stringify(this.readingList)
        );
      }
    }),
  });
  useContextProvider(BookListContext, { books });
  useContextProvider(ReadingListContext, readingListStore);

  useVisibleTask$(() => {
    const lsReadingList = window.localStorage.getItem('books.readingList');
    if (lsReadingList) {
      readingListStore.readingList = JSON.parse(lsReadingList);
    }
  });

  return (
    <>
      <Totals />
      <section class='flex flex-row items-start justify-between min-h-screen'>
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
