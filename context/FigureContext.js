
import React, {createContext, useState, useEffect, AsyncStorage} from 'react';

export const FigureContext = createContext();

export const FigureProvider = ({children}) => {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedFigures = await AsyncStorage.getItem('figures');
        if (storedFigures) {
          setFigures(JSON.parse(storedFigures));
        }
      } catch (error) {
        console.log('Error loading figures from storage:', error);
      }
    };

    loadData();
  }, []);

  const addFigure = async figure => {
    const newFigures = [...figures, figure];
    setFigures(newFigures);
    await AsyncStorage.setItem('figures', JSON.stringify(newFigures));
  };

  const updateFigure = async updatedFigure => {
    const newFigures = figures.map(figure =>
      figure.id === updatedFigure.id ? updatedFigure : figure,
    );
    setFigures(newFigures);
    await AsyncStorage.setItem('figures', JSON.stringify(newFigures));
  };

  const deleteFigure = async id => {
    const newFigures = figures.filter(figure => figure.id !== id);
    setFigures(newFigures);
    await AsyncStorage.setItem('figures', JSON.stringify(newFigures));
  };

  return (
    <FigureContext.Provider
      value={{figures, addFigure, updateFigure, deleteFigure}}>
      {children}
    </FigureContext.Provider>
  );
};
