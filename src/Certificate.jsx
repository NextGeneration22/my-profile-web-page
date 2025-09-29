import './Certificate.css';


function Certificate({toggleCertificate}) {
  return (
    <div className='certificate-container'>
      <button className='backbutton' onClick={toggleCertificate}>X</button>
      <img src="./images/certificate.png" alt="certificate" className='certificate-img'></img>
    </div>
  );
}

export default Certificate;