import Image from "next/image";

const Contacts = (props) => {
  return (
    <div className='py-2 flex flex-col items-center'>
      <Image
        src='/me.jpg'
        height={200}
        width={200}
        alt='Stanislav Pukha'
        className='rounded-full'
      />
      <div className='container'></div>
    </div>
  );
};

export default Contacts;
