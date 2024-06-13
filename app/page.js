import React from 'react';
import RootLayout from './layout';

const DashboardPage = () => {
  const dashboardHeader = (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
  );

 return (
   
      <div>
        <h2>Welcome to the Dashboard</h2>
        <p>This is the content of the dashboard page.</p>
      </div>
    
  );
};

export default DashboardPage;
