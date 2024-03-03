import React, { useEffect } from 'react';
import mapchurch from '../img/map-church.PNG';
import maphall from '../img/map-hall.PNG';
import SiteHeader from '../components/SiteHeader';


const MapaDojazdu = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="content-container-md">
      <SiteHeader></SiteHeader>
      <p className='p-site-title'>Mapa dojazdu</p>
      <p className="p-map-left-info">
        Ślub
      </p>
      <a href="https://maps.app.goo.gl/JAxf1DoUkn2TH9Q59" className="p-map-right-links">
        Kościół pw. Miłosierdzia Bożego
      </a>
      <a href="https://maps.app.goo.gl/JAxf1DoUkn2TH9Q59" className="p-map-right-links2">
        W Łukawcu
      </a>
      <img src={mapchurch} className='img-map-style' alt="Mapa kościoła" />
      <p className="p-map-left-info">
        Przyjęcie weselne
      </p>
      <a href="https://maps.app.goo.gl/ujpSFQqMiPev3jFX9" className="p-map-right-links">
        Oranżeria Przyjęcia
      </a>
      <a href="https://maps.app.goo.gl/ujpSFQqMiPev3jFX9" className="p-map-right-links2">
        W Komorowie
      </a>
      <img src={maphall} className='img-map-style' alt="Mapa sali" />
      <p className="p-contact-details-kinga-md"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-md"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
  );
}

export default MapaDojazdu;