import React, { useState, useEffect } from 'react';
import DateSelectionPicker from 'components/DateSelectionPicker';

const DateSelection = (props) => {
  const [screenings, setScreenings] = useState([]);
console.log("blala" ,props)
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