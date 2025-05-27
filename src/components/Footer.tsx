'use client';

import React from 'react';
import Logo from "@/components/header/Logo";
import SocialIcons from "@/components/header/SocialIcons";
import NavMenu from "@/components/header/NavMenu";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-6  dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <Logo text="MJ.KohanKan"/>
        <SocialIcons className={'flex gap-4 py-6'} />
        <NavMenu place={'footer'}/>
      </div>
    </footer>
  );
};

export default Footer;