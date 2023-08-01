import {
  $,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';

import { type BookWithSettings } from '~/types';

import { api } from '~/libs/api';

import { useGlobalAppState } from '~/context/app-context';

const MIN_PAGES = 10;

export default component$(() => {
  const { library, filters } = useGlobalAppState();
  const maxPagesSignal = useSignal<number>(10000);

  useTask$(async () => {
    maxPagesSignal.value = await api.books.maxPages();
  });
  useVisibleTask$(() => {
    filters.pages = Math.max(
      ...library.books.map(({ pages }: BookWithSettings) => pages)
    );
  });

  const handleChange = $((_: any, el: HTMLInputElement) => {
    filters.pages = parseInt(el.value);
  });

  return (
    <div class='flex flex-col gap-1 text-gray-600 dark:text-gray-50'>
      <label for='pages'>Número de páginas:</label>
      <div class='flex items-center justify-between gap-x-2'>
        <input
          name='pages'
          type='range'
          min={MIN_PAGES}
          max={maxPagesSignal.value}
          onInput$={handleChange}
          onChange$={handleChange}
          class='accent-gray-700 dark:accent-gray-50 hover:scale-105 cursor-pointer'
          value={filters.pages}
        />
        <p>{filters.pages}</p>
      </div>
      <p class='text-gray-500 italic text-sm'>
        Máximo: <span class='font-bold'>{maxPagesSignal.value}</span>
      </p>
    </div>
  );
});
