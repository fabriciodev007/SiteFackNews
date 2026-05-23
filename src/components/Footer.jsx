import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="mb-2">
                    <ul className="flex justify-center space-x-4 mb-2">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/sobre" className="hover:underline">Sobre</a>
                        </li>
                        <li>
                            <a href="/contato" className="hover:underline">Contato</a>
                        </li>
                    </ul>
                </div>

                <div className="redes-sociais mb-2">
                    <a href="https://www.linkedin.com/in/your-profile" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
                    </a>
                    <a href="https://www.twitter.com/your-profile" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Twitter</span>
                        <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                    </a>
                    <a href="https://www.github.com/your-profile" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">GitHub</span>
                        <FontAwesomeIcon icon={faGithub} className="fa-lg" />
                    </a>
                    <a href="https://www.facebook.com/your-profile" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Facebook</span>
                        <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
                    </a>
                    <a href="https://www.instagram.com/your-profile" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Instagram</span>
                        <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
                    </a>
                </div>

                <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
