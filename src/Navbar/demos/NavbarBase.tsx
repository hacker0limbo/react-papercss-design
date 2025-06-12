import React from 'react';
import type { NavbarItem } from 'react-papercss-design';
import { Navbar } from 'react-papercss-design';

const App: React.FC = () => {
  const navbarItems: NavbarItem[] = [
    { label: 'Documentation', href: 'https://www.getpapercss.com/docs/' },
    { label: 'About', href: 'https://www.getpapercss.com/about/' },
    { label: 'Github', href: 'https://github.com/rhyneav/papercss' },
  ];

  return <Navbar brand="Get PaperCSS" navbarItems={navbarItems} />;
};

export default App;
