import './Certificate.css';


function Certificate({classList, closeDoor}) {
  return (
    <div className={`certificate ${classList}`}>
      <nav className='navigation-bar'>
        <img src="../icons/laptop-100.png" alt="laptop" className='laptop-image'/>
        <h3>Full-Stack JavaScript Developer</h3>
        <button className='backbutton' onClick={closeDoor}>back</button>
      </nav>
      <img src="/images/certificate.png" alt="certificate" className='certificate-img'></img>
    </div>
  );
}

export default Certificate;