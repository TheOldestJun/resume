import Image from "next/image";
import Skill from "./Skill.component";

const Skills = ({ profSkills }) => {
  return (
    <div className=' text-white border-2 backdrop-blur-sm'>
      <div className='container'>
        <div className='text-lg font-bold flex gap-2'>
          <Image
            src='/briefcase-solid.svg'
            width={20}
            height={20}
            alt='professional skills'
          />
          {profSkills}
        </div>
        <hr />
        <Skill title='HTML' progress='90' prTitle={"Skilled"} />
      </div>
    </div>
  );
};

export default Skills;
