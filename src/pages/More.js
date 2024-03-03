import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";

const More = () => {
useEffect(() => {
    window.scrollTo(0,0);
})
    return (
    <div className="content-container-m">
        <SiteHeader></SiteHeader>
        <p className="p-site-title">Wiecej</p>
        <p className="p-more-left-info">Zespol</p>
        <p className="p-more-right-details">to 4 you</p>
        <p className="p-more-left-info">Fotograf</p>
        <p className="p-more-right-details">...</p>
        <p className="p-more-left-info">Kamerzysta</p>
        <p className="p-more-right-details">...</p>
        <p className="p-more-left-info">Dekoracje</p>
        <p className="p-more-right-details">...</p>
        <p className="p-more-left-info">Cukiernia</p>
        <p className="p-more-right-details">...</p>
        <p className="p-more-left-info">Strona</p>
        <p className="p-more-right-details">Madera z Palcem</p>
        <p className="p-more-left-info">Sala</p>
        <p className="p-more-right-details">...</p>
        <p className="p-more-left-info">Drink Bar</p>
        <p className="p-more-right-details">...</p>
        <p className="p-contact-details-kinga-m"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
        <p className="p-contact-details-patryk-m"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
);
}
export default More;