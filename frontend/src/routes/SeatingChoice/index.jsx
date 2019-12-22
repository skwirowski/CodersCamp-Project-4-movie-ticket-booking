import React, { useState, useEffect } from 'react';
import getRequest from './temporaryHelpers/getRequest';
import putRequest, { resetData } from './temporaryHelpers/putRequest';
import './styles/styles.css';

const SeatingChoice = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function getSpots() {
      const response = await getRequest();
      setSpots(response);
    }
    getSpots();
  }, []);

  const handleCheckboxChange = event => {
    const currentCheckboxId = event.target.id;
    spots.map(spot => {
      if (spot.id === currentCheckboxId) {
        spot.checked = !spot.checked;
        console.log(spot);
      }
    });
  };

  const handleSaveDataButtonChange = () => {
    putRequest(spots);
  };

  return (
    <>
      <h2>Seating Choice</h2>
      <div className="seatings">
        {spots.map(seat => {
          const { id, num, row, checked } = seat;

          return (
            <div key={id} className="seatings__seat">
              <label htmlFor={id} className="seatings__seat-label">
                {num}
              </label>
              <input
                id={id}
                className="seatings__seat-input"
                type="checkbox"
                value={checked}
                disabled={checked}
                onChange={handleCheckboxChange}
              />
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          handleSaveDataButtonChange();
          console.log('PUT request successful');
        }}
      >
        Temporary SAVE button
      </button>
    </>
  );
};

export default SeatingChoice;
