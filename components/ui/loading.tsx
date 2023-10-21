import { LuLoader } from 'react-icons/lu';

const Loading = () => {
  return (
    <div className='fixed w-full h-full left-0 top-0 flex flex-col gap-2 items-center justify-center text-white'>
      <LuLoader className='animate-spin' />
      Cargando...
    </div>
  );
};

export default Loading;
