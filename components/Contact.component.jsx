import Image from "next/image";

const Contact = ({ icon, link, text, alt }) => {
  return (
    <a href={link} target='blank' className='flex gap-2'>
      <Image src={icon} width={20} height={20} alt={alt} />
      {text}
    </a>
  );
};

export default Contact;
