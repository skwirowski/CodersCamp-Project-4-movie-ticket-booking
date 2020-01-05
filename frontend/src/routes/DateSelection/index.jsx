import React, { useState, useEffect } from 'react';
import DateSelectionPicker from 'components/DateSelectionPicker';

const DateSelection = () => {
  const [screenings, setScreenings] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const mockedScreenings = [
      '2020-01-03T15:00',
      '2020-01-03T18:00',
      '2020-01-03T20:00',
      '2020-01-04T13:00',
      '2020-01-04T16:00',
      '2020-01-04T19:00',
      '2020-01-04T21:00',
      '2020-01-05T11:00',
      '2020-01-05T13:00',
      '2020-01-05T15:00',
      '2020-01-05T19:00',
      '2020-01-06T15:00',
      '2020-01-06T18:00',
      '2020-01-07T14:00',
      '2020-01-07T17:00',
      '2020-01-07T19:00',
      '2020-01-07T21:00',
      '2020-01-08T15:00',
      '2020-01-08T17:00',
      '2020-01-08T19:00',
      '2020-01-08T21:00',
      '2020-01-08T23:00',
      '2020-01-09T17:00',
      '2020-01-09T19:00',
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
