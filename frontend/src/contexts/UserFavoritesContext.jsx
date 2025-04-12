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

  const isInCollections = (activityId) => {
    return favorites.collections.some(item => item.id === activityId);
  };

  const isInAppointments = (activityId) => {
    return favorites.appointments.some(item => item.id === activityId);
  };

  const addToCollections = (activity) => {
    if (isInCollections(activity.id)) {
      // 如果已经收藏，则移除
      setFavorites(prev => ({
        ...prev,
        collections: prev.collections.filter(item => item.id !== activity.id)
      }));
      return false; // 返回 false 表示取消收藏
    } else {
      // 如果未收藏，则添加
      setFavorites(prev => ({
        ...prev,
        collections: [...prev.collections, activity]
      }));
      return true; // 返回 true 表示添加收藏
    }
  };

  const addToAppointments = (activity) => {
    if (isInAppointments(activity.id)) {
      // 如果已经预约，则取消
      setFavorites(prev => ({
        ...prev,
        appointments: prev.appointments.filter(item => item.id !== activity.id)
      }));
      return false; // 返回 false 表示取消预约
    } else {
      // 如果未预约，则添加
      setFavorites(prev => ({
        ...prev,
        appointments: [...prev.appointments, activity]
      }));
      return true; // 返回 true 表示添加预约
    }
  };

  return (
    <UserFavoritesContext.Provider value={{
      favorites,
      addToCollections,
      addToAppointments,
      isInCollections,
      isInAppointments
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