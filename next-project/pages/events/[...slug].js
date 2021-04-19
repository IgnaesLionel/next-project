import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Fragment from "react";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading..</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          {" "}
          <p className="center">Invalid Filter. Please Adjust your values</p>
        </ErrorAlert>
        <Button className="center" link="/events">
          Show All Events
        </Button>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
      <ErrorAlert>  <p>No events found for the chosen filter!</p></ErrorAlert>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <EventList items={filteredEvents} />
      <ResultsTitle date={date} />
    </div>
  );
};

export default FilteredEventsPage;
