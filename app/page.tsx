import type { Metadata } from 'next';
import getCharacter from '@/services/get-character';
import Card from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Characters',
  description: 'Characters',
};

export default async function Home() {
  const characters = await getCharacter();

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {characters.results.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
