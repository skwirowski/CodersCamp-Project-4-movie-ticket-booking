import React, { useState, useEffect } from 'react';
import DateSelectionPicker from 'components/DateSelectionPicker';

const DateSelection = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const mockedScreenings = [
    
      '2020-01-03T15:00',
      '2020-01-03T15:00',
      '2020-01-03T15:00',
      '2020-01-04T15:00',
      '2020-01-05T15:00',
      '2020-01-06T15:00',
      '2020-01-06T15:00',
      '2020-01-07T15:00',
      '2020-01-07T15:00',
      '2020-01-08T15:00',
      '2020-01-08T15:00',
      '2020-01-09T15:00',
      '2020-01-07T15:00',
      '2020-01-07T15:00',
      '2020-01-08T15:00',
      '2020-01-08T15:00',
      '2020-01-09T15:00',
 
    ];
    
    setScreenings(mockedScreenings);
    return () => controller.abort();
  }, []);

  return (
    <>
      <DateSelectionPicker screenings={screenings} />
    </>
  );
};
export default DateSelection;