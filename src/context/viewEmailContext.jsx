import { createContext, useContext, useState } from 'react';

// Create a context
export const viewCurrentEmailContext = createContext();

// Create a provider
export const ViewCurrentEmailProvider = ({ children }) => {
  const [emailId, setEmailId] = useState(null);

  return (
    <viewCurrentEmailContext.Provider value={{ emailId, setEmailId }}>
      {children}
    </viewCurrentEmailContext.Provider>
  );
};

export const useViewCurrentEmail = () => useContext(viewCurrentEmailContext);