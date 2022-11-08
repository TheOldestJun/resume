import Image from "next/image";

const About = ({ about, aboutText }) => {
  return (
    <div className='text-white border-2 border-white py-2 backdrop-blur-sm px-2'>
      <div className='text-lg font-bold flex gap-2'>
        <Image
          src='/id-card-clip-solid.svg'
          width={20}
          height={20}
          alt='About me'
        />
        {about}
      </div>
      <hr />
      <div className='text-md leading-8'>{aboutText}</div>
    </div>
  );
};

export default About;
