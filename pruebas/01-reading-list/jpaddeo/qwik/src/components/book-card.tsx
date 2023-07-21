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
    <div
      class={`relative block mx-[5%] my-auto rounded-lsm bg-[url("${book.cover}")] shadow-lg shadow-gray-500 transform-all duration-75 hover:rotate-3d`}
    >
      <div class='book'>
        <div class='front'>
          <div class='cover'>
            <Image
              src={book.cover}
              layout='responsive'
              alt={book.title}
              width={120}
              aspectRatio={2 / 3}
            />
          </div>
        </div>
        <div class='left-side'>
          <h2>
            <span>George Orwell</span>
            <span>1984</span>
          </h2>
        </div>
      </div>
    </div>
  );
  return (
    <article
      key={book.ISBN}
      onClick$={() => toogleToReadingList(book)}
      class={`border-2 border-black py-2 hover:bg-gray-200 hover:cursor-pointer bg-white shadow rounded-lg justify-center items-center flex flex-col ${
        readingList.value.find((b) => b.ISBN === book.ISBN) ? 'bg-gray-800' : ''
      }`}
    >
      <Image
        src={book.cover}
        layout='responsive'
        alt={book.title}
        width={120}
        aspectRatio={2 / 3}
      />
      <h1 class='text-base font-semibold truncate' title={book.title}>
        {book.title}
      </h1>
      <p class='text-sm text-gray-400'>{book.author.name}</p>
    </article>
  );
});
