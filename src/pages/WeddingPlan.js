import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";

const WeddingPlan = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })

      return (
    <div className="content-container-wp">
        <SiteHeader></SiteHeader>
        <p className="p-site-title">Plan wesela</p>
        <p className="p-wedding-plan-left-headers">Ślub</p>
        <p className="p-wedding-plan-left-hours">13:00</p>
        <p className="p-wedding-plan-right-info">Kościół pw. Miłosierdzia Bożego</p>
        <p className="p-wedding-plan-right-info2">W Łukawcu</p>
        <p className="p-wedding-plan-left-headers">Przyjęcie weselne</p>
        <p className="p-wedding-plan-left-hours">15:00</p>
        <p className="p-wedding-plan-right-info">Oranżeria Przyjęcia</p>
        <p className="p-wedding-plan-right-info2">W Komorowie</p>
        <p className="p-wedding-plan-left-hours">15:30</p>
        <p className="p-wedding-plan-right-info">Obiad</p>
        <p className="p-wedding-plan-left-hours">16:00</p>
        <p className="p-wedding-plan-right-info">Tort</p>
        <p className="p-wedding-plan-left-hours">18:00</p>
        <p className="p-wedding-plan-right-info">Zdjęcia z Parą Młodą</p>
        <p className="p-wedding-plan-left-hours">19:00</p>
        <p className="p-wedding-plan-right-info">Kolacja Pierwsza</p>
        <p className="p-wedding-plan-left-hours">22:00</p>
        <p className="p-wedding-plan-right-info">Kolacja Druga</p>
        <p className="p-wedding-plan-left-hours">00:00</p>
        <p className="p-wedding-plan-right-info">Oczepiny</p>
        <p className="p-wedding-plan-left-hours">01:00</p>
        <p className="p-wedding-plan-right-info">Kolacja Trzecia</p>
        <p className="p-contact-details-kinga-wp"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-wp"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
);}

export default WeddingPlan;