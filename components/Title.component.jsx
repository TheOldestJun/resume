import Image from "next/image";

const Title = ({ name, title }) => {
    return (
        <>
            <div className='container mx-auto flex items-center justify-between border-2 border-solid border-white text-white backdrop-blur-sm sm:hidden'>
                <Image
                    src='/me.jpg'
                    height={200}
                    width={200}
                    alt='Stanislav Pukha'
                    className='rounded-full'
                />
                <div className=' flex flex-col items-end  py-5 px-3 '>
                    <h2 className='text-3xl font-bold leading-10'>{name}</h2>
                    <h5 className='text-xl font-bold leading-10'>{title}</h5>
                </div>
            </div>
            <div className='hidden items-center border-2 border-solid border-white py-2 text-white backdrop-blur-sm sm:container sm:flex sm:flex-col'>
                <Image
                    src='/me.jpg'
                    height={150}
                    width={150}
                    alt='Stanislav Pukha'
                    className='rounded-full'
                />

                <h2 className='text-3xl font-bold leading-10'>{name}</h2>
                <h5 className='text-xl font-bold leading-10'>{title}</h5>
            </div>
        </>
    );
};

export default Title;
