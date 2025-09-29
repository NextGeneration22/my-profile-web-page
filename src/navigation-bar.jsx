import "./navigation-bar.css"

function NavBar(){
    return(
        <div className="nav-bar">
            <img className="web-logo" src="images/my-pic.png"></img>
            <h2 className="main-title">Full-Stack JavaScript Developer</h2>
            <div className="navi-items">
            <h1><a href="#home">Home</a></h1>
            <h1><a href="#about-creator">About</a></h1>
            <h1><a href="#contact">Contact</a></h1>
            </div>
        </div>
    )
}

export default NavBar;