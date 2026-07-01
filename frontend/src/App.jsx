import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';
import LoginPage from './Components/loginPage';
import NotificationPage from './Components/NotificationPage';

function App() {
  return (
    <>
      <LoginPage />
      {/* <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
          <SearchBar />

        </div>
      </div> */}
     <div className="flex w-screen h-screen overflow-hidden bg-[#0a0a0a]">
      <Sidebar active="notifications" />
      <div className="flex-1 h-full overflow-y-auto p-6 flex flex-col items-start space-y-6">
        <SearchBar />
        <NotificationPage />
      </div>
    </div>
    </>
  );
 
}
export default App;