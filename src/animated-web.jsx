import {useEffect} from 'react';
import './animated-web.css';

function Web() {

  useEffect(() => {
    const scenes = document.querySelectorAll('.scene');
let currentScene = 0;

function showWireframe() {
    const wireframes = document.querySelectorAll('.wireframe-section');
    wireframes.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 400);
    });
    setTimeout(() => nextScene(), 3000);
}

function showBrandedSite() {
    const elements = [
        document.querySelector('.business-header'),
        document.querySelector('.business-hero'),
        document.querySelector('.business-services'),
        document.querySelector('.business-footer')
    ];

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 500);
    });

    setTimeout(() => nextScene(), 4000);
}

function showPremiumSite() {
    // Premium site is already styled and visible
    setTimeout(() => restartAnimation(), 15000);
}

function nextScene() {
    scenes[currentScene].classList.remove('active');
    currentScene = (currentScene + 1) % scenes.length;
    scenes[currentScene].classList.add('active');

    switch(currentScene) {
        case 1:
            showBrandedSite();
            break;
        case 2:
            showPremiumSite();
            break;
    }
}

function restartAnimation() {
    // Reset all scenes
    scenes.forEach(scene => scene.classList.remove('active'));
    document.querySelectorAll('.wireframe-section').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.business-header, .business-hero, .business-services, .business-footer').forEach(el => el.classList.remove('show'));

    currentScene = 0;
    startAnimation();
}

function startAnimation() {
    scenes[currentScene].classList.add('active');
    setTimeout(() => {
        showWireframe();
    }, 500);
}

// Start the animation
startAnimation();
  }, []);

  
  return (
    <>
      {/* Scene 1: Basic Layout Structure */}
        <div className="scene" id="scene1">
            <div className="layout-structure">
                <div className="wireframe-section wireframe-header">
                    HEADER SECTION
                </div>
                <div className="wireframe-section wireframe-hero">
                    HERO BANNER
                </div>
                <div className="wireframe-section wireframe-services">
                    SERVICES SECTION
                </div>
                <div className="wireframe-section wireframe-footer">
                    FOOTER
                </div>
            </div>
        </div>

        {/* Scene 2: Colors and Branding */}
        <div className="scene" id="scene2">
            <div className="branded-site">
                <div className="business-header">
                    <div className="logo">BusinessPro</div>
                    <nav className="nav-menu">
                        <a href="#" className="nav-item">Home</a>
                        <a href="#" className="nav-item">About</a>
                        <a href="#" className="nav-item">Services</a>
                        <a href="#" className="nav-item">Contact</a>
                    </nav>
                </div>
                
                <div className="business-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Grow Your Business</h1>
                        <p className="hero-subtitle">Professional solutions for modern companies</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">Hero Image Placeholder</div>
                    </div>
                </div>

                <div className="business-services">
                    <div className="service-card">
                        <div className="service-icon">📊</div>
                        <div className="service-title">Analytics</div>
                        <div className="service-desc">Data-driven insights for your business</div>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🚀</div>
                        <div className="service-title">Marketing</div>
                        <div className="service-desc">Boost your brand visibility</div>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">💡</div>
                        <div className="service-title">Strategy</div>
                        <div className="service-desc">Smart solutions for growth</div>
                    </div>
                </div>

                <div className="business-footer">
                    © 2025 BusinessPro. All rights reserved.
                </div>
            </div>
        </div>

        {/* Scene 3: Premium Styling */}
        <div className="scene" id="scene3">
            <div className="premium-site">
                <div className="premium-header">
                    <div className="premium-logo">BusinessPro</div>
                    <nav className="premium-nav">
                        <a href="#" className="premium-nav-item">Home</a>
                        <a href="#" className="premium-nav-item">About</a>
                        <a href="#" className="premium-nav-item">Services</a>
                        <a href="#" className="premium-nav-item">Contact</a>
                    </nav>
                </div>
                
                <div className="premium-hero">
                    <div className="premium-hero-content">
                        <h1 className="premium-hero-title">Transform Your Business</h1>
                        <p className="premium-hero-subtitle">Premium solutions for exceptional growth</p>
                        <button className="premium-cta">Start Your Journey</button>
                    </div>
                    <div className="premium-hero-image">
                        <div className="premium-image-placeholder">
                            <img src="images/bigstock-196164373.jpg" alt="Premium Hero" className='image'/>
                        </div>
                    </div>
                </div>

                <div className="premium-services">
                    <div className="premium-service-card">
                        <div className="premium-service-icon">📈</div>
                        <div className="premium-service-title">Advanced Analytics</div>
                        <div className="premium-service-desc">Deep insights and real-time data visualization</div>
                    </div>
                    <div className="premium-service-card">
                        <div className="premium-service-icon">🎯</div>
                        <div className="premium-service-title">Targeted Marketing</div>
                        <div className="premium-service-desc">Precision campaigns that drive results</div>
                    </div>
                    <div className="premium-service-card">
                        <div className="premium-service-icon">⚡</div>
                        <div className="premium-service-title">Growth Strategy</div>
                        <div className="premium-service-desc">Accelerated business transformation</div>
                    </div>
                </div>

                <div className="premium-footer">
                    © 2025 BusinessPro - Powering Business Excellence
                </div>
            </div>
        </div>
    </>
  )
}
export default Web;

