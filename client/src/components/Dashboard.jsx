import React,{useEffect, useState} from 'react';
import { useLocation} from 'react-router-dom';
import DashSide from './Dashboard/DashSide';
import DashProfile from './Dashboard/DashProfile';

const Dashboard = () => {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
          <div className='md:w-56'>
              <DashSide/>
          </div>
          <div className='flex-grow'>
          {tab === 'profile' && <DashProfile/>}
          </div>
        </div>
    );
}

export default Dashboard;