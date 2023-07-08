import React, { useState } from 'react';

function VoteButton() {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    fetch(process.env.REACT_APP_VOTE_API_URL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vote: 1 })
    }).then (response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(data => {
      console.log(data);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }).catch(error => {
      console.error(error);
    });
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