import { useState, useEffect } from 'react'
import Certificate from './Certificate.jsx'
import './mainPage.css'
function MainPage() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [iconVisible, setIconVisible] = useState(false);
  const [showbackpack, setShowbackpack] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [itemListed, setItemListed] = useState(false);
  const [subList, setSubList] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [doorClosed, setDoorClosed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function openDoor(){
      setDoorOpen(true);
      setIconVisible(false);
      setShowbackpack(false);
      setTimeout(() => {
        setItemsVisible(false);
      }, 1700)
  }

  function closeDoor(){
    setDoorOpen(false);
    setDoorClosed(true);
    setTimeout(() => {
      setItemsVisible(true);
    }, 700);
    setTimeout(() => {
      setShowbackpack(true);
    }, 3000);
  };
  const showSkills = () => {
      setIconVisible(true);
  setTimeout(() => {
      document.getElementById('skill1').classList.toggle('rotateIcon');
    }, 0);
    setTimeout(() => {
      document.getElementById('skill2').classList.toggle('rotateIcon');
    }, 500);
    setTimeout(() => {
      document.getElementById('skill3').classList.toggle('rotateIcon');
    }, 1000);
    setTimeout(() => {
      document.getElementById('skill4').classList.toggle('rotateIcon');
    }, 1500);
    setTimeout(() => {
      document.getElementById('skill5').classList.toggle('rotateIcon');
    }, 2000);
    setTimeout(() => {
      document.getElementById('skill6').classList.toggle('rotateIcon');
    }, 2500);
    setTimeout(() => {
      document.getElementById('skill7').classList.toggle('rotateIcon');
    }, 3000);
    setTimeout(() => {
      document.getElementById('skill8').classList.toggle('rotateIcon');
    }, 3500);
    setTimeout(() => {
      document.getElementById('skill9').classList.toggle('rotateIcon');
    }, 4000);
    setTimeout(() => {
      document.getElementById('skill10').classList.toggle('rotateIcon');
    }, 4500);
    movebackpack();
  }
  
  const movebackpack = () => {
    setTimeout(() => {
      document.getElementById('backpack-image').classList.toggle('move-backpack');
      document.getElementById('backpack-p').classList.toggle('move-backpack');
    }, 4000);
    
  }

  const toggleDropdown =()=>{
    if(isOpen){
      setIsOpen(false);
  }else{
    setIsOpen(true);
  }
  }
  const toggleDropdownMenu =()=>{
    if(itemListed){
      setItemListed(false);
    }else{
      setItemListed(true);
     }
  }
  const dropsubList =()=>{
    if(subList){
      setSubList(false);
    }else{
      setSubList(true);
    }
  }
  return (
    <>
    <Certificate classList={itemsVisible ?  'fade-out' :'fade-out visible'} closeDoor={closeDoor} />
    <div id='door1' className={doorOpen ? 'open-door': doorClosed ? 'close-door':''} >
      {itemsVisible ?(
          <img className='my-pic' src="images/my-web-pic.png" alt="my photo."></img>
      ) : ( <></>
      )}
    </div>
    <div id="door2" className={doorOpen ? 'open-door': doorClosed ? 'close-door': ''} >
      {itemsVisible ?(
            <button className='view-certificate' onClick={openDoor}>View Certificate</button>
      ) : ( <></>
      )}
    </div>
      {iconVisible ?(
        <div>
          <img id='skill1' src="icons/html5.png" alt='HTML5'/>
          <img id='skill2' src='icons/css3.png' alt='CSS3'/>
          <img id='skill3' src='icons/javascript.png' alt='JavaScript'/>
          <img id='skill4' src='icons/react.png' alt='React'/>
          <img id='skill5' src='icons/node.js.png' alt='Node.js'/>
          <img id='skill6' src='icons/mongodb.png' alt='MongoDB'/>
          <img id='skill7' src='icons/docker.png' alt='Docker'/>
          <img id='skill8' src='icons/kubernetes.png' alt='Kubernetes'/>
          <img id='skill9' src='icons/microservices.png' alt='Microservises'/>
          <img id='skill10' src='icons/github.png' alt='GitHub'/>
        </div>
        ) : ( <></>)
      }
      {showbackpack ? (
        <>
        <img id='backpack-image' src="icons/backpack.png" onClick={showSkills}/>
        <p id='backpack-p' onClick={showSkills}>View Skills</p>
        <nav className='navigation-bar'>
    <img src="icons/laptop-100.png" alt="laptop" className='laptop-image'/>
    <h3>Full-Stack JavaScript Developer</h3>
    {isMobile ? (
        <div className='dropdown-menu' onClick={toggleDropdownMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
    ):(
      <>
      <a href="https://github.com/NextGeneration22?tab=repositories" target='_blank' className='github-url'>GitHub-repositories</a>
      <button onClick={toggleDropdown} className="dropdown-button">Additional skills</button>
      </>
    )}
    </nav>
      {itemListed && (
          <div className='dropdown-list'>
              <ul>
                <li><h5 className='dropdown-h5' onClick={dropsubList}>Additional skills</h5>
                    {subList && (
                    <ul>
                      <li>Mathematic</li>
                      <li>English</li>
                      <li>Critical thinking</li>
                      <li>Problem solving</li>
                    </ul>
                    )}
                </li>
                <li><a href="https://github.com/NextGeneration22?tab=repositories" target='_blank' className='github-link'>GitHub repositories</a></li>
              </ul>
        </div>)}
      {isOpen && (
          <div className="dropdown"><br/>
            <div>Mathematic</div>
            <div >English</div>
            <div>Critical thinking</div>
            <div>Problem solving</div>
          </div>
        )}
        </>
       ):(<></>)
      }
    </>
  )
}

export default MainPage

