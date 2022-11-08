import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeLang } from "../store/langSlice";

const Header = ({ welcome }) => {
  const dispatch = useDispatch();
  return (
    <header className='relative py-2'>
      <div className='container mx-auto h-8 border-2 border-solid border-white backdrop-blur'>
        <nav className='flex justify-between items-center text-white  '>
          <Image
            src='/resume.svg'
            width={30}
            height={30}
            alt='site logo'
            className='p-1'
          />
          <p className='md:hidden'>{welcome}</p>
          <ul className='flex gap-4'>
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
          <ul className='hidden absolute left-6 right-6 top-14 backdrop-blur-sm border-2 rounded-lg border-white flex-col items-center'>
            <li>
              <a href='#' className='block py-4'>
                EN
              </a>
            </li>
            <li>
              <a href='#' className='block py-4'>
                UA
              </a>
            </li>
            <li>
              <a href='#' className='block py-4'>
                RU
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
