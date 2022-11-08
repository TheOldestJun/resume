import Image from "next/image";

const Experience = ({ experience, experienceTable }) => {
  return (
    <div className='text-white border-2 border-white py-2 backdrop-blur-sm px-2 my-2'>
      <div className='text-lg font-bold flex gap-2'>
        <Image
          src='/person-digging-solid.svg'
          width={20}
          height={20}
          alt='Experience'
        />
        {experience}
      </div>
      <hr />
      <div className='text-md'>
        <div className='eduTable'>
          <div className='container flex justify-between my-3'>
            {experienceTable.webdev}
            <p>2020-...</p>
          </div>
          <p className='mx-9'>{experienceTable.webdevDesc}</p>
        </div>

        <div className='eduTable'>
          <div className='container flex justify-between my-3'>
            {experienceTable.scm}
            <p>2010-...</p>
          </div>
          <p className='mx-9'>{experienceTable.scmDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
