import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem('token'); // Mendapatkan token dari localStorage


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden items-center justify-center">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner token={token} /> {/* Meneruskan token sebagai prop */}
            <div className="grid grid-cols-12 gap-6">
              {/* Isi konten di sini */}
            </div>
          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;