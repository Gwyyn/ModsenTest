import React from 'react';
import StartScreen from "./components/StartScreen/StartScreen";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
            <StartScreen/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
