import React, { createContext, useContext, useState } from "react";

const QuoteModalContext = createContext();

export const QuoteModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => useContext(QuoteModalContext);
