import React, { useState, useEffect } from "react";

import { Box, Container, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

import Service from "./Service";

const ServicesPage = () => {
  //initialstate
  const myServices = [
    {
      title: "Provider 1",
      address: "123 Main St",
      services: ["Food", "Jobs"],
    },
    {
      title: "Provider 2",
      address: "411 E Wisconsin Ave",
      unit: "9th Fl",
      zip: "53202",
    },
    {
      title: "Provider 3",
      address: "808 N 3rd St",
      city: "Milwaukee",
      state: "WI",
      zip: "53203",
    },
  ];

  const [expanded, setExpanded] = useState("service0");
  const [segments, setSegments] = useState([]);

  // TODO load list of services from data
  //const [services, setServices] = useState(myServices);
  const [services] = useState(myServices);

  //functions
  const handleCheck = (service) => (event) => {
    event.stopPropagation();
    // TODO event.target.checked contains state of checkbox with id of service param
    // service param will be "service0", "service1", etc based on position in list
  };

  const handleExpand = (service) => (event, isExpanded) => {
    setExpanded(isExpanded ? service : false);
  };

  const handleSegments = (event, newSegments) => {
    setSegments(newSegments);
    // TODO filter services by segment
  };

  useEffect(() => {}, [expanded]);

  return (
    <Container
      className="services"
      style={{
        display: "flex",
        marginTop: "200px",
      }}
    >
      <Box
        className="left sidebar"
        style={{
          flex: "1",
          paddingRight: "5%",
        }}
      >
        <Box className="segments">
          <ToggleButtonGroup
            onChange={handleSegments}
            value={segments}
            exclusive={true}
          >
            <ToggleButton value="food">Food</ToggleButton>
            <ToggleButton value="health">Health</ToggleButton>
            <ToggleButton value="jobs">Jobs</ToggleButton>
            <ToggleButton value="housing">Housing</ToggleButton>
            <ToggleButton value="reentry">Reentry</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {services.map((service, i) => {
          return (
            <Service
              key={i}
              expanded={expanded}
              handleCheck={handleCheck}
              handleExpand={handleExpand}
              id={"service" + i}
              data={service}
            />
          );
        })}
      </Box>
      <br />
      <Box
        className="map"
        style={{
          flex: "2",
        }}
      >
        <div>map goes here</div>
      </Box>
    </Container>
  );
};

export default ServicesPage;
