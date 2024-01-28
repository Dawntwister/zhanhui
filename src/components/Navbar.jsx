import { Link } from 'react-router-dom';
import { ReactComponent as NameLogo } from '../assets/Zhan Hui.svg';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="grid grid-cols-12 gap-1 bg-slate-500 text-white p-4 border-b-2 border-white h-[10vh]">
        {/* Logo Placeholder and Navigation Links in the same row */}
        <div className="col-span-12 flex items-center">
          {/* NameLogo prop on the left when clicked would bring me back to homepage*/}
          <NameLogo className="w-36 h-15 mx-5 my-3" />

          {/* Navigation Links in the middle */}
          <nav className="flex justify-center items-center flex-grow">
            <Link
              to="/"
              className="px-4 py-2 mx-2 bg-slate-500 hover:bg-white hover:text-slate-500 transition duration-300 rounded"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 mx-2 bg-slate-500 hover:bg-white hover:text-slate-500 transition duration-300 rounded"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="px-4 py-2 mx-2 bg-slate-500 hover:bg-white hover:text-slate-500 transition duration-300 rounded"
            >
              Projects
            </Link>
            <Link
              to="/learning-journey"
              className="px-4 py-2 mx-2 bg-slate-500 hover:bg-white hover:text-slate-500 transition duration-300 rounded"
            >
              Learning Journey
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 mx-2 bg-slate-500 hover:bg-white hover:text-slate-500 transition duration-300 rounded"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
