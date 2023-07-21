import { component$ } from '@builder.io/qwik';

import { useGlobalLibraryState } from '~/contexts/library-context';

export const Totals = component$(() => {
  const { books, readingList } = useGlobalLibraryState();

  return (
    <h1>
      {readingList.value.length}/{books.value.length}
    </h1>
  );
});
