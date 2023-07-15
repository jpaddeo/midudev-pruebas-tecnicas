import { createContextId, type QRL } from '@builder.io/qwik';

import type { Book } from '~/types';

export interface ReadingListContextState {
  readingList: Book[];
  toggleToReadingList: QRL<(this: ReadingListContextState, book: Book) => void>;
}

export const ReadingListContext =
  createContextId<ReadingListContextState>('books.reading-list');
