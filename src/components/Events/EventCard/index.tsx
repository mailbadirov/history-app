import React from "react";

import { CardContainer, EventDescription, EventYear } from "./styles";

const EventCard = ({ year, description }: IEventCardType) => {
  return (
    <CardContainer>
      <EventYear>{year}</EventYear>

      <EventDescription>{description}</EventDescription>
    </CardContainer>
  );
};

export default EventCard;
