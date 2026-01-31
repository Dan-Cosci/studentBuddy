import React from 'react'

const NavPagesButton = (props) => {
  const { pageName } = props;

  return (
    <li className='side-nav__li'>{pageName}</li>
  )
}

export default NavPagesButton