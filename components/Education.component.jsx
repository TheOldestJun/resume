import Image from "next/image";

const Education = ({ education, educationTable }) => {
    return (
        <div className='border-2 border-white py-2 px-2 text-white backdrop-blur-sm'>
            <div className='flex gap-2 text-lg font-bold'>
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
                <a href='https://goo.gl/maps/4A4URTbQSeFtvmX17' target='blank'>
                    <div className='eduTable'>
                        <div className='container my-3 flex justify-between'>
                            {educationTable.master}
                            <p>2008-2010</p>
                        </div>
                        <p className='ml-9'>{educationTable.university}</p>
                    </div>
                </a>
                <a href='https://goo.gl/maps/4A4URTbQSeFtvmX17' target='blank'>
                    <div className='eduTable'>
                        <div className='container my-3 flex justify-between'>
                            {educationTable.bachelor}
                            <p>2002-2008</p>
                        </div>
                        <p className='ml-9'>{educationTable.university}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Education;
