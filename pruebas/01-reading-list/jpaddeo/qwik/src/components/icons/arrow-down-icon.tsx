import { component$ } from '@builder.io/qwik';

type ArrowDownIconProps = {
  className?: string;
};

export default component$(
  ({ className = 'w-2.5 h-2.5 ml-2.5' }: ArrowDownIconProps) => {
    return (
      <svg
        class={`${className}`}
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 10 6'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='m1 1 4 4 4-4'
        />
      </svg>
    );
  }
);
