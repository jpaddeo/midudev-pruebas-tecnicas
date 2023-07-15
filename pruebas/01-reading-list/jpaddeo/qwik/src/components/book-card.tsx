import { component$, useContext, $ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

import { ReadingListContext } from '~/contexts/reading-list-context';
import { type Book } from '~/types';

type BookProps = {
  book: Book;
};

export default component$(({ book }: BookProps) => {
  const { readingList, toggleToReadingList } = useContext(ReadingListContext);

  const handleBookClick = $((book: Book) => {
    toggleToReadingList(book);
  });

  return (
    <article
      key={book.ISBN}
      onClick$={() => handleBookClick(book)}
      class={`border-2 border-black py-2 hover:bg-gray-200 hover:cursor-pointer bg-white shadow rounded-lg justify-center items-center flex flex-col ${
        readingList.find((b) => b.ISBN === book.ISBN) ? 'bg-gray-800' : ''
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
