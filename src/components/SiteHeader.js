import burger from '../img/burger.png';
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SiteHeader() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef();

  useEffect(()=> {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  });

  const handleDropdownItemClick = (targetPage) => {
    navigate(targetPage);
  };


  return (
    <div ref={menuRef} className='menu-container'>
        <h1 className='site-header-h1' onClick={()=> handleDropdownItemClick('/home')}>K & P</h1>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={burger}></img>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <ul>
            <DropdownItem text = {"Plan wesela"} onClick={()=> handleDropdownItemClick('/planwesela')}/>
            <DropdownItem text = {"Mapa dojazdu"} onClick={()=> handleDropdownItemClick('/mapadojazdu')}/>
            <DropdownItem text = {"Transport gości"}onClick={()=> handleDropdownItemClick('/transport')}/>
            <DropdownItem text = {"Dodatkowe atrakcje"} onClick={()=> handleDropdownItemClick('/atrakcje')}/>
            <DropdownItem text = {"Więcej..."} onClick={()=> handleDropdownItemClick('/wiecej')}/>
          </ul>
        </div>
      </div>
  );
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem' onClick={props.onClick}>
        <a>{props.text}</a>
      </li>
    );
  }