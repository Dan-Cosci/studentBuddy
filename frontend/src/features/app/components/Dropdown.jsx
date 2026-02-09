import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight, FaBook, FaPlus } from 'react-icons/fa';
import useAppStore from '../useAppStore';
import './dropdown.scss'

const Dropdown = (props) => {
  const { setActive, setNotesRender } = useAppStore();
  const {sectionName, items} = props;
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  const handlePlus = (e) => {
    e.stopPropagation();

  }

  const handlePage = (e) =>{
    e.stopPropagation();
    setActive(e.target.textContent);
    setNotesRender();
  }

  return (
    <>
      <div className="dropDown">

       <div className="dropDown__container"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setOpen(!open)}
       >
         <p className="dropDown__title" >
          {sectionName}
          {visible &&
            (open ? <FaAngleDown /> : <FaAngleRight />)
          }
        </p>
       {visible && 
        <div className="dropDown__right">
          <FaPlus className='dropDown__right__icon' onClick={handlePlus}/>
        </div>
       }
       </div>

       <ul className={`dropDown__ul ${open ? 'dropDown__ul--open' : ''}`}>  
        {items.map((item) => (
          <li key={item} onClick={handlePage} className="dropDown__li">
            <FaBook className="dropDown__li__icon" />
            <span>{item}</span>
          </li>
        ))}

       </ul>
      </div>
    </>
  )
}

export default Dropdown