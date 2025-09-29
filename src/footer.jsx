import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-media" id='contact'>
                <p className='contct-title'>Contact:</p>
                <a href="https://www.linkedin.com/in/ayoub-jraidi-ba4230310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BArWCffnzTU6fadCruYf20A%3D%3D" target="_blank" rel="noopener noreferrer" className='links'>
                    <img src="icons/linkedin.png" alt="LinkedIn" className='linkedin-logo'/><p>LinkedIn</p>
                </a>
                <a href="https://github.com/NextGeneration22?tab=repositories" target="_blank" rel="noopener noreferrer" className='links'>
                    <img src="icons/github.png" alt="GitHub" className='github-logo'/><p>GitHub</p>
                </a>
            
                </div>
            <p>&copy;&nbsp;2025 Ayoub.&nbsp;All rights reserved.</p>
        </footer>
    );
}
export default Footer;