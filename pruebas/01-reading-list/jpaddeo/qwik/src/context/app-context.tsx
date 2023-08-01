import {
  createContextId,
  useStore,
  useContextProvider,
  useTask$,
  useContext,
} from '@builder.io/qwik';

import { api } from '~/libs/api';

import type { Filters, Library } from '~/types';

const APP_STORE_ID = 'app.books';

export interface AppContextState {
  library: Library;
  filters: Filters;
}

const AppContext = createContextId<AppContextState>(APP_STORE_ID);

export const useProvideAppState = () => {
  const library = useStore<Library>({
    books: [],
    genres: [],
    readingList: [],
  });
  const filters = useStore<Filters>({
    genre: '',
    pages: -1,
    search: '',
  });

  useTask$(async ({ track }) => {
    track(filters);
    try {
      const apiBooks = await api.books.list(filters);
      library.books = apiBooks.map((book) => ({
        ...book,
        isInReadingList: false,
      }));
      library.genres = await api.books.genres();
    } catch (error) {
      console.error(error);
    }
  });

  const appStore = useStore({
    library,
    filters,
  });

  useContextProvider(AppContext, appStore);
};

export const useGlobalAppState = () => {
  return useContext(AppContext);
};
