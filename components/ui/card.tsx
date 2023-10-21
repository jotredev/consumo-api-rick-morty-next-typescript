import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/types';

import { LuUser2, LuAnnoyed } from 'react-icons/lu';

interface CardProps {
  data: Character;
}

const Card = ({ data }: CardProps) => {
  const { id, name, image, species, gender, status } = data;

  return (
    <Link
      href={`/character/${id}`}
      className='bg-white dark:bg-[#202023] flex flex-col max-w-sm mx-auto shadow-xl rounded-3xl'
    >
      <div className='relative w-full h-80 rounded-tl-3xl rounded-tr-3xl'>
        <Image
          src={image}
          alt='Image'
          fill
          className='object-cover rounded-tl-3xl rounded-tr-3xl'
        />
      </div>
      <div className='bg-[#0A0A0B] mx-4 rounded-xl flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6'>
        <h5 className='text-white text-lg font-semibold'>{species}</h5>
      </div>
      <div className='px-6 py-4 flex flex-col gap-2'>
        <h4 className='text-xl font-semibold text-gray-800 dark:text-white'>
          {name}
        </h4>
        <p className='text-gray-500'>
          Diseñadora UX / UI y desarrolladora frontend con el framework en React
          JS
        </p>
        <ul className='mt-4 space-y-3'>
          <li className='flex items-center text-gray-700 dark:text-gray-500'>
            <LuUser2 size={20} className='mr-2 dark:text-white' />
            <h1 className='px-2'>{gender}</h1>
          </li>
          <li className='flex items-center text-gray-700 dark:text-gray-500'>
            <LuAnnoyed size={20} className='mr-2 dark:text-white' />
            <h1 className='px-2'>{status}</h1>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
