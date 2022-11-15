import Image from "next/image";
import {
  Title,
  Header,
  About,
  Education,
  Contacts,
  Experience,
  Skills,
} from "../components/";
import { useSelector } from "react-redux";
import { lang } from "../constants/localization";

export default function Home() {
  const local = useSelector((state) => state.lang.lang.payload);
  return (
    <>
      <Image
        src='/pexels.jpg'
        width={1200}
        height={700}
        alt='background'
        style={{
          position: "fixed",
          zIndex: "-1",
          top: "0",
          left: "0",
          minWidth: "100%",
          minHeight: "100%",
          opacity: "90%",
        }}
      />
      <div className='container flex flex-col md:hidden'>
        <Header welcome={lang[local]["welcome"]} />
        <main className='container'></main>
        <Title
          className='mx-5'
          name={lang[local]["name"]}
          title={lang[local]["title"]}
        />
        <div className='flex gap-2 py-2'>
          <div className='w-2/3'>
            <About
              about={lang[local]["about"]}
              aboutText={lang[local]["aboutText"]}
            />
            <Education
              education={lang[local]["education"]}
              educationTable={lang[local]["educationTable"]}
            />
            <Experience
              experience={lang[local]["experience"]}
              experienceTable={lang[local]["experienceTable"]}
            />
          </div>
          <div className='w-1/3'>
            <Contacts
              address={lang[local]["address"]}
              contacts={lang[local]["contacts"]}
            />
            <Skills
              skills={lang[local]["skills"]}
              skillsProf={lang[local]["skillsProf"]}
            />
          </div>
        </div>
      </div>
      <div className='hidden gap-2 md:container md:flex md:flex-col'>
        <Header welcome={lang[local]["welcome"]} />
        <main className='container'></main>
        <Title name={lang[local]["name"]} title={lang[local]["title"]} />
        <Contacts
          address={lang[local]["address"]}
          contacts={lang[local]["contacts"]}
        />
        <Skills
          skills={lang[local]["skills"]}
          skillsProf={lang[local]["skillsProf"]}
        />
        <About
          about={lang[local]["about"]}
          aboutText={lang[local]["aboutText"]}
        />
        <Education
          education={lang[local]["education"]}
          educationTable={lang[local]["educationTable"]}
        />
        <Experience
          experience={lang[local]["experience"]}
          experienceTable={lang[local]["experienceTable"]}
        />
      </div>
    </>
  );
}
