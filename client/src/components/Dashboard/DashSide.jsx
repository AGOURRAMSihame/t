import { Sidebar } from 'flowbite-react';
import React,{useState,useEffect} from 'react';
import {HiUser,HiArrowSmRight} from 'react-icons/hi';
import { useLocation,NavLink } from 'react-router-dom';
import {logoutSuccess} from '../../redux/user/userSlice'
import { useDispatch } from 'react-redux';

export default function DashSide() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab,setTab] = useState('');
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])

  const handleLogout = async () => {
    try {
      const res = await fetch('/logout',{
        method: 'POST',
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }else{
        dispatch(logoutSuccess());
      }
    }catch (err) {
        console.log(err.message)
    }
  
  }
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='m-0 p-0'>
          <NavLink to='/dashboard?tab=profile' >
          <Sidebar.Item active={tab === 'profile'} icon={HiUser} 
          label = {'user'} labelColor='dark' as = 'div'>
              Profile
          </Sidebar.Item>
          <Sidebar.Item onClick={handleLogout} icon={HiArrowSmRight} className="cursor-pointer" >
              Log Out
          </Sidebar.Item>
          </NavLink>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
