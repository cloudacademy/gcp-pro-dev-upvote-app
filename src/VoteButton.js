import React, { useState } from 'react';

function VoteButton() {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    console.log('Vote cast!');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  }

  return (
    <div className="vote-button-container">
      <button onClick={handleClick} type="button">
        Cast your vote
      </button>
      {showMessage && <div className="vote-button-message">Thanks for voting!</div>}
    </div>
  );
}

export default VoteButton;