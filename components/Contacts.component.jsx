import Image from "next/image";
import Contact from "./Contact.component";

const Contacts = ({ address }) => {
  return (
    <div className='py-2 flex flex-col items-center gap-4'>
      <Image
        src='/me.jpg'
        height={200}
        width={200}
        alt='Stanislav Pukha'
        className='rounded-full'
      />
      <div className='container text-white border-2 backdrop-blur-sm leading-8'>
        <Contact
          icon='/map-location-solid.svg'
          link='https://goo.gl/maps/9ABa4ELESTTYD7YM9'
          text={address}
          alt='location'
        />
        <Contact
          icon='/square-phone-solid.svg'
          link='tel:+380675303897'
          text='+38(067)530-38-97'
          alt='telephone'
        />
        <Contact
          icon='/square-envelope-solid.svg'
          link='mailto:s.v.pukha@gmail.com'
          text='s.v.pukha@gmail.com'
          alt='email'
        />
        <Contact
          icon='/linkedin.svg'
          link='https://www.linkedin.com/in/stanislavpukha/'
          text='#stanislavpukha'
          alt='linkedin'
        />
        <Contact
          icon='/square-github.svg'
          link='https://github.com/TheOldestJun'
          text='github.com/TheOldestJun'
          alt='github'
        />
      </div>
    </div>
  );
};

export default Contacts;
