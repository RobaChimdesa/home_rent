import './navbar.css'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';
import { Form, Link } from "react-router-dom";

function Navbar() {

  const sidebarlist=[
    {name:'Home',
     icon:<HomeIcon/>,
     path:'/home'  
  },
  {name:'About',
     icon:<PersonIcon/>,
     path:'/about'  
  },
  {name:'Skills',
     icon:<PsychologyIcon/>,
     path:'/skills'  
  },
  {name:'Eduction',
     icon:<SchoolIcon/>,
     path:'/education'  
  },
  {name:'Projects',
     icon:<ImageAspectRatioIcon />,
     path:'/projects'  
  },
  {name:'Contacts',
     icon:<LocalPostOfficeIcon/>,
     path:'/contact'  
  }
  ]
  const listOrder=sidebarlist.map((order)=>{
  return(
   <li className='orderlist'>
  {order.icon} {order.name}  
 
  </li>
  )
  })

  function menu(){
   return(
      <>
      <h2>hello</h2>
          {listOrder}</>

   );
  }
  return (
    <>
    <button onClick={menu}><MenuIcon/></button>
    <div className='menu' onClick={menu}><MenuIcon/></div>
     <div> {listOrder}</div>
   
    </>
  )
}

export default Navbar