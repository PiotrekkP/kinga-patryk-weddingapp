import SiteHeader from '../components/SiteHeader';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  
  const navigate = useNavigate();
  const handleConfirmButtonClick = (targetPage) => {
    navigate(targetPage);
  };
  return (
    
    <div className="content-container-home">
      <SiteHeader></SiteHeader>
      <button className="button-confirm-appearance" onClick={()=> handleConfirmButtonClick('/potwierdzenie')}>Potwierdz przybycie!</button>
      <p className="p-contact-details-kinga-home"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-home"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
  );
}

export default Home;
