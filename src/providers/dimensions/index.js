import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';
import { Dimensions } from 'react-native';

export const DimensionsContext = createContext();

export const useDimensions = () => {
  return useContext(DimensionsContext);
}

export const DimensionsProvider = ({ children }) => {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? true : false)

  const handleDimensionsChange = () => Dimensions.get('window').width > Dimensions.get('window').height ? setIsLandscape(true) : setIsLandscape(false);

  useEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);   

    return (() => {
      Dimensions.removeListener('change', handleDimensionsChange);
    })
  }, [])

  return (
    <DimensionsContext.Provider value={{ isLandscape }}>
      {children}
    </DimensionsContext.Provider>
  )
}
