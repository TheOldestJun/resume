import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeLang } from "../store/langSlice";

const Header = ({ welcome }) => {
  const dispatch = useDispatch();

  return (
    <header className='relative py-2'>
      <div className='container mx-auto h-8 border-2 border-solid border-white backdrop-blur'>
        <nav className='flex items-center justify-between text-white  '>
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
                className='transition-colors hover:text-amber-300'
              >
                EN
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => dispatch(changeLang("UA"))}
                className='transition-colors hover:text-amber-300'
              >
                UA
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => dispatch(changeLang("RU"))}
                className='transition-colors hover:text-amber-300'
              >
                RU
              </a>
            </li>
          </ul>
          <ul className='absolute left-6 right-6 top-14 hidden flex-col items-center rounded-lg border-2 border-white backdrop-blur-sm'>
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
