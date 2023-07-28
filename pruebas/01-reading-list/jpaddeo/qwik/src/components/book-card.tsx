import { component$, $ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

import { useGlobalLibraryState } from '~/contexts/library-context';

import type { Book } from '~/types';

type BookProps = {
  book: Book;
};

export default component$(({ book }: BookProps) => {
  const { readingList, booksWithSettings } = useGlobalLibraryState();

  const toogleToReadingList = $((book: Book) => {
    booksWithSettings.value = booksWithSettings.value.map((b) =>
      b.ISBN === book.ISBN ? { ...b, isInReadingList: !b.isInReadingList } : b
    );
  });

  return (
    <article
      class={` ${
        readingList.value.find((b) => b.ISBN === book.ISBN)
          ? 'outline-2 outline-yellow-300 outline w-[180] h-[255]'
          : 'book'
      } flex items-center justify-center`}
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
