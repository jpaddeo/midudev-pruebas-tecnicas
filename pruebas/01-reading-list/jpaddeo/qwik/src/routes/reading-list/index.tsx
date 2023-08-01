import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { useGlobalAppState } from '~/context/app-context';

import ReadingList from '~/components/reading-list';

export default component$(() => {
  const { library } = useGlobalAppState();
  return (
    <div class='flex flex-col p-8 bg-white dark:bg-gray-900 min-h-screen'>
      {library.readingList.length > 0 && <ReadingList />}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'JPA Books | Reading List',
  meta: [
    {
      name: 'description',
      content:
        'Books reading list challenge proposed by Miguel Ángel Durán (@midudev)',
    },
  ],
};
