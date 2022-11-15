import Image from "next/image";
import Skill from "./Skill.component";

const Skills = ({ skills, skillsProf }) => {
  return (
    <div className=' mt-2 border-2 text-white backdrop-blur-sm md:mt-0'>
      <div className='container py-2'>
        <div className='flex gap-2 text-lg font-bold'>
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
          title='CSS3, Tailwind CSS, SCSS'
          progress='50'
          prTitle={skillsProf["intermediate"]}
        />
        <Skill
          title='Javascript ES8'
          progress='90'
          prTitle={skillsProf["advanced"]}
        />
        <Skill
          title='Typescript'
          progress='30'
          prTitle={skillsProf["elementary"]}
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
          title='PostgreSQL via Prisma'
          progress='30'
          prTitle={skillsProf["elementary"]}
        />
      </div>
    </div>
  );
};

export default Skills;
