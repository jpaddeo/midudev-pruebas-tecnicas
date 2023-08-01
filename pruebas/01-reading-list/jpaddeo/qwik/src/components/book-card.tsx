import { component$, $ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

import { type BookWithSettings } from '~/types';

import { useGlobalAppState } from '~/context/app-context';

type BookProps = {
  book: BookWithSettings;
};

export default component$(({ book }: BookProps) => {
  const { library } = useGlobalAppState();
  const { readingList, books } = library;

  const toogleToReadingList = $((book: BookWithSettings) => {
    books.value = books.map((b: BookWithSettings) =>
      b.ISBN === book.ISBN ? { ...b, isInReadingList: !b.isInReadingList } : b
    );
  });

  return (
    <article
      class={`${
        readingList.find((b: BookWithSettings) => b.ISBN === book.ISBN)
          ? 'border-2 border-yellow-400'
          : 'book'
      }`}
      onClick$={() => toogleToReadingList(book)}
    >
      <Image
        src={book.cover}
        layout='responsive'
        alt={book.title}
        width={180}
        aspectRatio={2 / 3}
      />
    </article>
  );
});
