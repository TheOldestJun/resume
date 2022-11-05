import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeLang } from "../store/langSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='container mx-auto h-8'>
      <nav className='flex justify-between items-center text-white'>
        <Image
          src='/resume.svg'
          width={30}
          height={30}
          alt='site logo'
          className='ml-2 p-1'
        />
        <p>Choose your language</p>
        <ul className='flex gap-2'>
          <li>
            <a
              href='#'
              onClick={() => dispatch(changeLang("EN"))}
              className='hover:text-amber-300 transition-colors'
            >
              EN
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => dispatch(changeLang("UA"))}
              className='hover:text-amber-300 transition-colors'
            >
              UA
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => dispatch(changeLang("RU"))}
              className='hover:text-amber-300 transition-colors'
            >
              RU
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
