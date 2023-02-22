import Image from "next/image";

const Experience = ({ experience, experienceTable }) => {
    return (
        <div className='border-2 border-white py-2 px-2 text-white backdrop-blur-sm'>
            <div className='flex gap-2 text-lg font-bold'>
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
                    <div className='container my-3 flex justify-between'>
                        {experienceTable.webdev}
                        <p>2020-...</p>
                    </div>
                    <p className='mx-9'>{experienceTable.webdevDesc}</p>
                </div>
                <a href='https://goo.gl/maps/ZobeiUi8f2W98VwS9' target='blank'>
                    <div className='eduTable'>
                        <div className='container my-3 flex justify-between'>
                            {experienceTable.scm}
                            <p>2010-...</p>
                        </div>
                        <p className='mx-9'>{experienceTable.scmDesc}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Experience;
