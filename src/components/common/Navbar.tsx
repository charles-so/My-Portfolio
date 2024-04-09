import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // My social media URLs
  const twitterUrl: string = 'https://twitter.com/NgolamSo';
  const githubUrl: string = 'https://github.com/charles-so';
  const linkedinUrl: string = 'https://www.linkedin.com/in/ngolam-charlesso/';
  const instagramUrl: string = 'https://www.instagram.com/ngolam.charles.so/';

  // Function to open a link in a new tab
  const openNewTab = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <nav className="border-b border-gray-200 px-10">
      <div className="flex items-center justify-between h-20 text-lg">
        {/* Container for logo */}
        <div>
          <div>
            Charles So
          </div>
        </div>
        {/* Container for links */}
        <div className="md:block hidden">
          <div className="flex items-center gap-5">
            <div className='flex'>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'underline' : ''} hover:bg-black hover:text-white px-3 py-2 rounded-md`}>About</Link>
              <Link to="/experiences" className={`nav-link ${location.pathname === '/experiences' ? 'underline' : ''} hover:bg-black hover:text-white px-3 py-2 rounded-md`}>Experiences</Link>
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'underline' : ''} hover:bg-black hover:text-white px-3 py-2 rounded-md`}>Projects</Link>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'underline' : ''} hover:bg-black hover:text-white px-3 py-2 rounded-md`}>Contact</Link>
              {/* Container for icons */}
            </div>
            {/* Container for icons */}
            <div className="flex">
              <FontAwesomeIcon icon={faTwitter} onClick={() => openNewTab(twitterUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
              <FontAwesomeIcon icon={faGithub} onClick={() => openNewTab(githubUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} onClick={() => openNewTab(linkedinUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} onClick={() => openNewTab(instagramUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Mobile button */}
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="p-2 rounded-md text-black hover:bg-blackhover:text-white transition duration-150 ease-in-out">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-5 w-7`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-5 w-7`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Dropdown for mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col gap-2 pb-5 text-lg`}>
        <div className="py-2">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'underline' : ''} hover:bg-black hover:text-white block px-3 py-2 rounded-md`}>About</Link>
          <Link to="/experiences" className={`nav-link ${location.pathname === '/experiences' ? 'underline' : ''} hover:bg-black hover:text-white block px-3 py-2 rounded-md`}>Experiences</Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'underline' : ''} hover:bg-black hover:text-white block px-3 py-2 rounded-md`}>Projects</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'underline' : ''} hover:bg-black hover:text-white block px-3 py-2 rounded-md`}>Contact</Link>
        </div>
        {/* Container for mobile icons */}
        <div className="flex">
          <FontAwesomeIcon icon={faTwitter} onClick={() => openNewTab(twitterUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mr-0.4 cursor-pointer" />
          <FontAwesomeIcon icon={faGithub} onClick={() => openNewTab(githubUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
          <FontAwesomeIcon icon={faLinkedin} onClick={() => openNewTab(linkedinUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} onClick={() => openNewTab(instagramUrl)} className="hover:bg-black hover:text-white px-3 py-2 rounded-md mt-0.4 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
