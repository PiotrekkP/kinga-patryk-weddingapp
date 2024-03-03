import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";

const GuestsTransport = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
      
    return (    
    <div className="content-container-gt">
        <SiteHeader></SiteHeader>
        <p className="p-site-title">Transport gości</p>
        <p className="p-guests-transport-left-headers">Ślub - Przyjęcie</p>
        <p className="p-guests-transport-left-info">1 bus</p>
        <p className="p-guests-transport-right-details">...</p>
        <p className="p-guests-transport-left-headers">Przyjęcie - ...</p>
        <p className="p-guests-transport-left-info">Rzeszów</p>
        <p className="p-guests-transport-right-details">2:15, 3:20, 4:50</p>
        <p className="p-guests-transport-left-info">Łukawiec</p>
        <p className="p-guests-transport-right-details">2:15, 3:20, 4:50</p>
        <p className="p-contact-details-kinga-gt"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
        <p className="p-contact-details-patryk-gt"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
)
}

export default GuestsTransport;