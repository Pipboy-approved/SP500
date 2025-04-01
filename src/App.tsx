import React from 'react';

function App() {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = '';
  };

  return (
    <div className="main">
      <div id="sp500">S&P 500 watch</div>
      <hr />
      <div id="data">
        <div id="price">Price data is limited to client</div>
        <div id="change">Change data is limited to client</div>
        <div id="chart">This is a POC verision of the solution. Live chart with Axios data is available in PROD version of the solution. Subset with Palantir's stock data is provided in this demo.</div>
      </div>
      <input 
        type="text" 
        id="search" 
        placeholder="" 
        onBlur={handleBlur}
      />
    </div>
  );
}

export default App;
