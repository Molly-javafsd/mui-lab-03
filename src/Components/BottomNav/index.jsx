
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import { useState, React } from 'react';
import HomePage from '../HomePage';
import CoursesPage from '../CoursesPage';
import AboutUSInfo from '../AboutUsInfo';
import { Home, MenuBook, Info} from '@mui/icons-material'
export default function BottomNav() {
    const [value,setValue]=useState(0);

    const handleChange = (e,newValue) => {
        setValue(newValue);
    };

  return (
    <>
      {value === 0 && <HomePage />}
      {value === 1 && <CoursesPage />}
      {value === 2 && <AboutUSInfo />}

      <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels>
 <BottomNavigationAction label="Home" icon={<Home/>} />
  <BottomNavigationAction label="Courses" icon={<MenuBook />} />
  <BottomNavigationAction label="About Us" icon={<Info />} />
      </BottomNavigation>
    </>
  )
}
