const Skill = ({ title, progress, prTitle }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <progress id={title} max='100' value={progress} className='pr'></progress>
      <div className='text-right'>{prTitle}</div>
    </div>
  );
};

export default Skill;
