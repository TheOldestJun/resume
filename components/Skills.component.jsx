import Image from "next/image";
import Skill from "./Skill.component";

const Skills = ({ skills, skillsProf }) => {
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
          {skills}
        </div>
        <hr />
        <Skill
          title='English'
          progress='80'
          prTitle={skillsProf["upperIntermediate"]}
        />
        <Skill title='HTML' progress='90' prTitle={skillsProf["advanced"]} />
        <Skill
          title='CSS3, Tailwind CSS'
          progress='50'
          prTitle={skillsProf["intermediate"]}
        />
        <Skill
          title='Javascript ES8'
          progress='90'
          prTitle={skillsProf["advanced"]}
        />
        <Skill
          title='Node.JS / Express.JS'
          progress='30'
          prTitle={skillsProf["elementary"]}
        />
        <Skill
          title='React.JS/Redux Toolkit'
          progress='50'
          prTitle={skillsProf["intermediate"]}
        />
        <Skill
          title='Next.JS/SSR/CSR'
          progress='50'
          prTitle={skillsProf["intermediate"]}
        />
        <Skill
          title='PostgreSQL'
          progress='30'
          prTitle={skillsProf["elementary"]}
        />
      </div>
    </div>
  );
};

export default Skills;
