import React from "react";

function PageTitle({ children }) {
  return (
    <h1
      style={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: '30px'
      }}
    >
      {children}
    </h1>
  );
}

export default PageTitle;
