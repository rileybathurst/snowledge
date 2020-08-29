// Used in components/header.js

import React from 'react'

function SmallMenu() {

  function openUp() {
    var menu_small = document.getElementById('menu_small');
    var menu_toggle = document.getElementById('menu_toggle');

    if (menu_small.className === 'active'){
      menu_small.className = 'inactive';
      menu_toggle.className = 'inactive'
    } else {
      menu_small.className = 'active';
      menu_toggle.className = 'active'
    }
  }
  
  return (
    <>
    <button className="small_menu--opener" onClick={openUp}>
      Menu
    </button>
      
    {/* <div className="small_menu--icon">=</div> fall back */}
    <div className="small_menu--icon"> {/* this cant be a line higher as its a display grid overwrite */}
      <span className="small_menu--icon-topline"></span>
      <span className="small_menu--icon-bottomline"></span>
    </div>
    
    </>
  );
}

export default SmallMenu;