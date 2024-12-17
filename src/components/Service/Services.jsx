import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Education</span>
        </h4>
        <h1>About</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={GiBookshelf}
            title={"Primary"}
            disc={`I Graduated in Diatagon Elementary School on S.Y 2015 - 2016.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GiSchoolBag}
            title={"Secondary"}
            disc={`I Graduated in St.Christine National High School, with the course of General Academic Strand or GAS, in S.Y 2020 - 2021.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={GiGraduateCap}
            title={"College"}
            disc={`As of now I'm currently 4th year Computer Sciece student, in (NEMSU) North Easthern Mindanao State University. `}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
