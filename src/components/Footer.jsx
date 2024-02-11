// import Github svg and LinkedIn svg jsx files from src/assets
import GithubLogo from '../assets/IconGithub.jsx';
import LinkedInLogo from '../assets/IconLinkedIn.jsx';

const Footer = () => {
  return (
    <div className='relative'>
        <div className="relative inset-x-0 bottom-0 p-4 bg-gray-400 justify-center items-center">
            <div className='flex justify-center py-4'>
                {/* Github Logo Placeholder, when clicked, will redirect to my Github */}
                <a target='_blank' rel="noreferrer" href="https://github.com/Dawntwister" >
                    <GithubLogo className="w-8 h-8 mx-5" />
                </a>

                {/* LinkedIn Logo Placeholder, when clicked, will redirect to my LinkedIn */}
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/zhan-hui" >
                    <LinkedInLogo className="w-8 h-8 mx-5" />
                </a>
            </div>

            {/* Copyright */}
            <div className="flex justify-center text-white text-sm pb-2">
                &copy; Ng Zhan Hui
            </div>
        </div>
    </div>
  );
};

export default Footer;