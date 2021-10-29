import React, { createContext } from "react";
import PropTypes from "prop-types";

export const AnalyticsContext = createContext({ namespace: "" });

const AnalyticsProvider = ({ namespace = "", children }) => {
  return (
    <AnalyticsContext.Provider value={{ namespace }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

AnalyticsProvider.propTypes = {
  namespace: PropTypes.string
};

export default AnalyticsProvider;
