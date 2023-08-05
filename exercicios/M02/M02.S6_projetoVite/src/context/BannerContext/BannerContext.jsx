import React, { createContext, useState } from 'react';

export const BannerContext = createContext();


export const BannerProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <BannerContext.Provider value={{ title, setTitle, subtitle, setSubtitle }}>
      {children}
    </BannerContext.Provider>
  );
}
