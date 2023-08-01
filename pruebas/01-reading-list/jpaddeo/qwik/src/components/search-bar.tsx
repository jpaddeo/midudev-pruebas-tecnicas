import { component$ } from '@builder.io/qwik';

import SearchForm from '~/components/search-form';

export default component$(() => {
  return (
    <section class='flex flex-row items-center justify-center w-full py-4'>
      <SearchForm />
    </section>
  );
});
