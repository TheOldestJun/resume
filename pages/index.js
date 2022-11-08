import Image from "next/image";
import {
  Title,
  Header,
  About,
  Education,
  Contacts,
  Experience,
} from "../components/";
import { useSelector } from "react-redux";
import { lang } from "../constants/localization";

export default function Home() {
  const local = useSelector((state) => state.lang.lang.payload);
  return (
    <div className='container flex flex-col'>
      <Image
        src='/background.png'
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
      <Header welcome={lang[local]["welcome"]} />
      <main className='container'></main>
      <Title
        className='mx-5'
        name={lang[local]["name"]}
        title={lang[local]["title"]}
      />
      <div className='py-2 flex gap-2'>
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
          <Contacts address={lang[local]["address"]} />
        </div>
      </div>
    </div>
  );
}
