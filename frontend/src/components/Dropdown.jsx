import React, { use, useState } from 'react'
import { FaAngleDown, FaAngleRight, FaBook, FaPlus } from 'react-icons/fa';

const Dropdown = (props) => {

  const {sectionName, items} = props;
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  const handlePlus = (e) => {
    e.stopPropagation();

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

       <ul className={`dropDown__ul ${open ? 'show' : ''}`}>  
        {items.map((item) => (
          <li key={item} className="dropDown__li">
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