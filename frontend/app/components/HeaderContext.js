"use client";
const { createContext, useContext, useState } = require("react");

// СОздаем контекст
const HeaderContext = createContext();

// Это чтобы использовать контест
export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }) => {
    const [showDefaultHeader, setShowDefaultHeader] = useState(true);

    return (
        <HeaderContext.Provider
            value={{ showDefaultHeader, setShowDefaultHeader }}
        >
            {children}
        </HeaderContext.Provider>
    );
};
