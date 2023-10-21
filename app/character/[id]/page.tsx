'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Character } from '@/types';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/components/ui/loading';

export default function CharacterPage() {
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${params.id}`
        );
        setCharacter(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params.id]);

  if (isLoading) return <Loading />;

  return (
    <div className='flex items-start gap-5'>
      <div>
        <div className='relative w-96 h-96'>
          <Image
            src={character ? character.image : ''}
            alt='Image'
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div>
        <h1 className='text-3xl dark:text-white font-bold mb-10'>
          {character?.name}
        </h1>
        <ul className='space-y-3 mb-5'>
          <li>Genero: {character?.gender}</li>
          <li>Especie: {character?.species}</li>
          <li>Status: {character?.status}</li>
        </ul>
      </div>
    </div>
  );
}
