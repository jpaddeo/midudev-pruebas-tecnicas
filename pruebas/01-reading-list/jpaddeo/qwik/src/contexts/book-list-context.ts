import { createContextId } from '@builder.io/qwik';

import type { Book } from '~/types';

export interface BookListContextState {
  books: Book[];
}

export const BookListContext =
  createContextId<BookListContextState>('books.book-list');
