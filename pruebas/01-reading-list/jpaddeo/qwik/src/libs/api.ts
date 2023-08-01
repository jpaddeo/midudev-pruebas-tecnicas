import type { Book, Filters } from '~/types';

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
    list: async (filters?: Filters) => {
      const books: Book[] = await libraryData.library.map(mapBookFromApi);
      if (
        filters &&
        (filters.search.length || filters.genre.length || filters.pages > 0)
      ) {
        return books.filter((book) => {
          const isGenreMatch =
            !filters.genre.length || book.genre === filters.genre;
          const isSearchMatch =
            !filters.search.length ||
            book.title.toLowerCase().includes(filters.search.toLowerCase());
          const isPagesMatch = !filters.pages || book.pages <= filters.pages;
          return isGenreMatch && isSearchMatch && isPagesMatch;
        });
      }
      return books;
    },
    genres: async () => {
      const books: Book[] = await libraryData.library.map(mapBookFromApi);
      return Array.from(new Set(books.map(({ genre }) => genre)));
    },
    maxPages: async () => {
      const books: Book[] = await libraryData.library.map(mapBookFromApi);
      return Math.max(...books.map(({ pages }) => pages));
    },
  },
};
