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
    async function updateSpots() {
      await putRequest(spots);
      const response = await getRequest();
      await setSpots(response);
    }
    updateSpots();
  };

  return (
    <>
      <h2 className="seating-choice-heading">Seating Choice</h2>
      <div className="screen">SCREEN</div>
      <div className="seatings">
        {spots.map((seat, index) => {
          const { id, num, row, checked } = seat;

          return (
            <div key={id} className="seatings-container">
              {index % 10 === 0 ? (
                <div className="seatings__row">{row}</div>
              ) : null}

              <div className="seatings__seat">
                <input
                  id={id}
                  className="seatings__seat-input"
                  type="checkbox"
                  value={checked}
                  disabled={checked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={id} className="seatings__seat-label">
                  {num}
                </label>
              </div>
            </div>
          );
        })}
        <div className="seatings__legend">
          <div className="seatings__legend-spot" />
          <span className="seatings__legend-description">seat taken</span>
        </div>
      </div>
      <button
        className="temporary-button-seats-save"
        type="button"
        onClick={handleSaveDataButtonChange}
      >
        Book seat
      </button>
    </>
  );
};

export default SeatingChoice;
