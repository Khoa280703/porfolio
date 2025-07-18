import logo from '../assets/asset/HCMCUT.svg';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-15" src={logo} alt="Logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {/* Bọc mỗi icon trong một thẻ <a> và thêm link vào href */}
                <a href="https://www.linkedin.com/in/khoa-b%C3%B9i-728a4730a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Khoa280703" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/khoa2807/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;