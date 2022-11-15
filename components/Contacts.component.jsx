import Image from "next/image";
import Contact from "./Contact.component";

const Contacts = ({ address, contacts }) => {
  return (
    <div className='flex flex-col items-center gap-4 '>
      <div className='container border-2 py-2 leading-8 text-white backdrop-blur-sm'>
        <div className='flex gap-2 text-lg font-bold'>
          <Image
            src='/id-card-clip-solid.svg'
            width={20}
            height={20}
            alt='About me'
          />
          {contacts}
        </div>
        <hr />
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
