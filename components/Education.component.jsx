import Image from "next/image";

const Education = ({ education, educationTable }) => {
  return (
    <div className='text-white border-2 border-white py-2 backdrop-blur-sm px-2 my-2'>
      <div className='text-lg font-bold flex gap-2'>
        <Image
          src='/graduation-cap-solid.svg'
          width={20}
          height={20}
          alt='Education'
        />
        {education}
      </div>
      <hr />
      <div className='text-md'>
        <div className='container flex justify-between'>
          {educationTable.bachelor}
          <p>2002-2008</p>
        </div>
        <div className='container'></div>
      </div>
    </div>
  );
};

export default Education;
