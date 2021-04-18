import Head from "next/head";
import { Fragment } from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import EventsSearch from "../../components/events/events-search";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
