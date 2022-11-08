const Title = ({ name, title }) => {
  return (
    <div className='container border-solid border-2 border-white text-white backdrop-blur-sm py-5 mx-auto flex flex-col items-end'>
      <h2 className='font-bold text-3xl leading-10'>{name}</h2>
      <h5 className='font-bold text-xl leading-10'>{title}</h5>
    </div>
  );
};

export default Title;
