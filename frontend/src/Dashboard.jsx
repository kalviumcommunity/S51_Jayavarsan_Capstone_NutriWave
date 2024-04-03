import React, { useState } from 'react';
// import han from './assets/menu.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [mobileScreen, setMobileScreen] = useState(window.matchMedia("(max-width: 990px)"));
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [compactDashboard, setCompactDashboard] = useState(false);

  const handleDropdownToggle = (event) => {
    const dropdown = event.target.closest(".dashboard-nav-dropdown");
    dropdown.classList.toggle("show");
    const siblings = Array.from(dropdown.parentNode.children).filter(child => child !== dropdown);
    siblings.forEach(sibling => sibling.classList.remove("show"));
  };

  const handleMenuToggle = () => {
    if (mobileScreen.matches) {
      setShowMobileNav(!showMobileNav);
    } else {
      setCompactDashboard(!compactDashboard);
    }
  };

  return (
    <div className={`dashboard ${compactDashboard ? 'dashboard-compact' : ''}`}>
      <div className={`dashboard-nav ${showMobileNav && mobileScreen.matches ? 'mobile-show' : ''}`}>
        <header>
          <a href="#!" className="menu-toggle" onClick={handleMenuToggle}>
            <img className={`fas fa-bars ${showMobileNav ? 'fa-times' : ''}`} src=""></img>
          </a>
          <a href="#" className="brand-logo"><i className="fas fa-anchor"></i> <span>NUTRI</span></a>
        </header>
        <nav className="dashboard-nav-list">
          <a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i> Home </a>
          <a href="#" className="dashboard-nav-item active"><i className="fas fa-tachometer-alt"></i> dashboard </a>
          <a href="#" className="dashboard-nav-item"><i className="fas fa-file-upload"></i> Add Meal </a>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle" onClick={handleDropdownToggle}>
              <i className="fas fa-photo-video"></i> Media
            </a>
            <div className='dashboard-nav-dropdown-menu'>
              <a href="#" className="dashboard-nav-dropdown-item">All</a>
              <a href="#" className="dashboard-nav-dropdown-item">Recent</a>
              <a href="#" className="dashboard-nav-dropdown-item">Images</a>
              <a href="#" className="dashboard-nav-dropdown-item">Video</a>
            </div>
          </div>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle" onClick={handleDropdownToggle}>
              <i className="fas fa-users"></i> My report
            </a>
            <div className='dashboard-nav-dropdown-menu'>
              <a href="#" className="dashboard-nav-dropdown-item">Calories</a>
              <a href="#" className="dashboard-nav-dropdown-item">Potential risks</a>
              <a href="#" className="dashboard-nav-dropdown-item">Suggested Mealplan</a>
              <a href="#" className="dashboard-nav-dropdown-item">News letter</a>
              {/* <a href="#" className="dashboard-nav-dropdown-item">New</a> */}
            </div>
          </div>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle" onClick={handleDropdownToggle}>
              <i className="fas fa-money-check-alt"></i> My Data
            </a>
            <div className='dashboard-nav-dropdown-menu'>
              <a href="#" className="dashboard-nav-dropdown-item">Weight</a>
              <a href="#" className="dashboard-nav-dropdown-item">Height</a>
              <a href="#" className="dashboard-nav-dropdown-item"> Fat calculator</a>
            </div>
          </div>
          <a href="#" className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </a>
          <a href="#" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </a>
          <div className="nav-item-divider"></div>
          <a href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
        </nav>
      </div>
      <div className='dashboard-app'>
        <header className='dashboard-toolbar'>
          <a href="#!" className="menu-toggle" onClick={handleMenuToggle}><i className="fas fa-bars"></i></a>
        </header>
        <div className='dashboard-content'>
          <div className='container'>
            <div className='card'>
              <div className='card-header'>
                <h1>Welcome to NutriWave</h1>
              </div>
              <div className='card-body'>
                <p>Dashboard Design comming soon .....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
