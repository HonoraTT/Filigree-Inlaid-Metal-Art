import React, { createContext, useContext, useState, useEffect } from 'react';

const UserFavoritesContext = createContext();

export const UserFavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('userFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {
      collections: [],
      appointments: []
    };
  });

  useEffect(() => {
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCollections = (activity) => {
    setFavorites(prev => ({
      ...prev,
      collections: [...prev.collections, activity]
    }));
  };

  const addToAppointments = (activity) => {
    setFavorites(prev => ({
      ...prev,
      appointments: [...prev.appointments, activity]
    }));
  };

  return (
    <UserFavoritesContext.Provider value={{
      favorites,
      addToCollections,
      addToAppointments
    }}>
      {children}
    </UserFavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(UserFavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a UserFavoritesProvider');
  }
  return context;
};