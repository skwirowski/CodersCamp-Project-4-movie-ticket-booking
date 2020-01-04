import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'css/DateSelection.css';
import 'react-tabs/style/react-tabs.css';

const DateSelectionPicker = props => {
  const { id } = useParams();
  const { details, seatingChoice } = routes;
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const getDayName = buffer => {
    const date = new Date();
    const day = date.getDay();
    if(day + buffer < 7 ){
      return daysOfTheWeek[day + buffer];
    } else {
      return daysOfTheWeek[Math.abs(daysOfTheWeek.length - day -  buffer)];
    }
   
  };

  const getScreeningsPerDay = (screenings, buffer) => {
    const screeningsPerDay = screenings.filter(screening => {
      const date = new Date(screening);
      return daysOfTheWeek[date.getDay()] === getDayName(buffer);
    });
    return screeningsPerDay;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="tabs">
          <Tabs>
            <TabList>
              {daysOfTheWeek.map((days, index) => (
                <Tab key={index}>{getDayName(index)}</Tab>
              ))}
            </TabList>
            {daysOfTheWeek.map((days, index) => (
              <TabPanel key={index} className="tab-panel">
                {getScreeningsPerDay(props.screenings, index).map(item => {
                  return (
                    <Link to={seatingChoice(id)} key={item}>
                      <button className="btn">{item}</button>
                    </Link>
                  );
                })}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="row">
        <Link to={details(id)}>
          <button className="btn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default DateSelectionPicker;