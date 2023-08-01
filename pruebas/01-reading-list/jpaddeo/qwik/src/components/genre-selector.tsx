import { $, component$ } from '@builder.io/qwik';

import { useGlobalAppState } from '~/context/app-context';

export default component$(() => {
  const { library, filters } = useGlobalAppState();

  const handleGenreChange = $((_: any, el: HTMLSelectElement) => {
    filters.genre = el.value;
  });

  return (
    <div class='flex flex-col gap-1 text-gray-600 dark:text-gray-50'>
      <label for='genero'>Género:</label>
      <select
        name='genero'
        class='h-10 border-2 border-gray-700 text-gray-600 dark:text-gray-50  dark:border-gray-200 hover:opacity-90 hover:scale-105 transition-transform duration-200 focus:outline-none focus:border-gray-600 dark:focus:border-gray-200 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider bg-transparent [&>option]:text-gray-700 cursor-pointer'
        onChange$={handleGenreChange}
      >
        <option value=''>Todos los géneros</option>
        {library.genres.map((genre: string) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
});
