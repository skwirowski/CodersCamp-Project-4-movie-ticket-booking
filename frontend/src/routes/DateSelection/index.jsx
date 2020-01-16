import React, { useState, useEffect } from 'react';
import DateSelectionPicker from 'components/DateSelectionPicker';

const DateSelection = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const mockedScreenings = [
      '2019-12-29T15:00',
      '2019-12-29T16:00',
      '2019-12-29T17:00',
      '2019-12-29T19:00',
      '2019-12-30T15:00',
      '2019-12-30T16:00',
      '2019-12-30T17:00',
      '2019-12-30T19:00',
      '2019-12-31T15:00',
      '2020-01-01T15:00',
      '2020-01-02T15:00',
      '2020-01-03T15:00',
      '2020-01-04T15:00',
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