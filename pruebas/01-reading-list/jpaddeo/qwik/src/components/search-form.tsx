import {
  $,
  QwikMouseEvent,
  QwikSubmitEvent,
  component$,
  useSignal,
} from '@builder.io/qwik';

import { useGlobalAppState } from '~/context/app-context';

import GenreSelector from '~/components/genre-selector';
import SliderSelector from '~/components/slider-selector';

export default component$(() => {
  const { filters } = useGlobalAppState();

  const searchSignal = useSignal<string>('');

  const handleSearchKeyPress = $((e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      filters.search = searchSignal.value;
      return false;
    }
  });
  const handleSearchButtonClick = $((e: any) => {
    e.preventDefault();
    filters.search = searchSignal.value;
  });

  return (
    <form class='flex flex-col md:flex-row gap-1 justify-between items-center w-full'>
      <div class='flex'>
        <input
          type='text'
          placeholder='"Harry Potter", "Lord of Kings"'
          class='w-full md:w-80 px-4 h-10 rounded-l border-2 border-gray-700 text-gray-600 dark:text-gray-50  dark:border-gray-200 bg-transparent outline-none'
          bind:value={searchSignal}
          onKeyPress$={handleSearchKeyPress}
        />
        <button
          type='button'
          class='bg-gray-700 text-gray-50 rounded-r px-2 md:px-3 py-0 md:py-1 hover:opacity-90'
          onClick$={handleSearchButtonClick}
        >
          Buscar
        </button>
      </div>
      <div class='flex flex-col sm:flex-row items-center gap-6 justify-center'>
        <GenreSelector />
        <SliderSelector />
      </div>
    </form>
  );
});
