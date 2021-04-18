import React from "react";
import EventItem from "./EventItem";
import classes from "./eventList.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          className={classes.list}
        />
      ))}
    </ul>
  );
};

export default EventList;
