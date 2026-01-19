import React, { use, useState } from 'react'
import { FaAngleDown, FaAngleRight, FaBook, FaEllipsisH, FaPlus } from 'react-icons/fa';

const Dropdown = (props) => {

  const {sectionName, items} = props;
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="dropDown">

       <div className="dropDown__container"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
       >
         <p className="dropDown__title" onClick={() => setOpen(!open)}>
          {sectionName}
          {visible &&
            (open ? <FaAngleDown /> : <FaAngleRight />)
          }
        </p>
       {visible && 
        <div className="dropDown__right">
          <FaEllipsisH className='dropDown__right__icon'/>
          <FaPlus className='dropDown__right__icon'/>
        </div>
       }
       </div>

       <ul className={`dropDown__ul ${open ? 'show' : ''}`}>  
        {items.map((item) => (
          <li className="dropDown__li">
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