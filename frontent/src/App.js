import React, { useState } from 'react';

import pages from './Pages';

function App() {
  const [currentPage, setCurrentPage] = useState('intro_animation');

  const goTo = (pageKey) => {
    if (pageKey in pages) {
      setCurrentPage(pageKey);
    } else {
      setCurrentPage('not_found');
    }
  };

  const render = () => {
    const Page = pages[currentPage];
    return (
      <div className="globalContainer">
        <Page goTo={goTo} className="fade-in" />
      </div>
    );
  };

  return render();
}

export default App;
