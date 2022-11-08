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
        <div className='eduTable'>
          <div className='container flex justify-between my-3'>
            {educationTable.master}
            <p>2008-2010</p>
          </div>
          <p className='ml-9'>{educationTable.university}</p>
        </div>

        <div className='eduTable'>
          <div className='container flex justify-between my-3'>
            {educationTable.bachelor}
            <p>2002-2008</p>
          </div>
          <p className='ml-9'>{educationTable.university}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
