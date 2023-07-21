import {
  createContextId,
  useSignal,
  type Signal,
  useStore,
  useContextProvider,
  useTask$,
  useVisibleTask$,
  useContext,
} from '@builder.io/qwik';
import { api } from '~/libs/api';

import type { Book, BookWithSettings } from '~/types';

const LIBRARY_STORE_ID = 'books.library';

export interface LibraryContextState {
  books: Signal<Book[]>;
  booksWithSettings: Signal<BookWithSettings[]>;
  readingList: Signal<Book[]>;
}

const LibraryContext = createContextId<LibraryContextState>(LIBRARY_STORE_ID);

export const useProvideLibraryState = () => {
  const books = useSignal<Book[]>([]);
  const booksWithSettings = useSignal<BookWithSettings[]>([]);
  const readingList = useSignal<Book[]>([]);

  useTask$(async () => {
    try {
      const apiBooks = await api.books.list();
      books.value = apiBooks;
      booksWithSettings.value = apiBooks.map((book) => ({
        ...book,
        isInReadingList: false,
        isFavorite: false,
      })); // por defecto uso los que vienen de la api.
    } catch (error) {
      console.error(error);
    }
  });

  useVisibleTask$(() => {
    try {
      const storedBooksWithSettings = localStorage.getItem(LIBRARY_STORE_ID);
      if (storedBooksWithSettings) {
        const parsedStoredBooksWithSettings = JSON.parse(
          storedBooksWithSettings
        ) as BookWithSettings[];
        const mergedBooks = booksWithSettings.value.map((book) => {
          const bookWithSettings = parsedStoredBooksWithSettings.find(
            (b) => b.ISBN === book.ISBN
          );
          if (bookWithSettings) {
            return {
              ...book,
              isInReadingList: bookWithSettings.isInReadingList,
              isFavorite: bookWithSettings.isFavorite,
            };
          }
          return book;
        });
        booksWithSettings.value = mergedBooks;
      }
    } catch (error) {
      console.error(error);
    }
  });
  useVisibleTask$(({ track }) => {
    track(booksWithSettings);
    readingList.value = booksWithSettings.value.filter(
      (b) => b.isInReadingList
    );
    localStorage.setItem(LIBRARY_STORE_ID, JSON.stringify(readingList.value));
  });

  const store = useStore({
    books,
    booksWithSettings,
    readingList,
  });

  useContextProvider(LibraryContext, store);
};

export const useGlobalLibraryState = () => {
  return useContext(LibraryContext);
};
