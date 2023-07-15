import type { Book } from '~/types';

import libraryData from '~/books.json';

const mapBookFromApi = ({ book }: any) => ({
  title: book.title,
  pages: book.pages,
  genre: book.genre,
  cover: book.cover,
  synopsis: book.synopsis,
  year: book.year,
  ISBN: book.ISBN,
  author: book.author,
});

export const api = {
  books: {
    list: async () => {
      const books: Book[] = await libraryData.library.map(mapBookFromApi);
      return books;
    },
    filter: async (genre: string) => {
      const filteredBooks: Book[] = await libraryData.library
        .filter(({ book }) => book.genre === genre)
        .map(mapBookFromApi);
      return filteredBooks;
    },
  },
};
