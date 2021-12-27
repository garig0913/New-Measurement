import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <Box
                className="d-flex flex-column align-items-center text-center"
                pt={5}
              >
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                  mb="40px"
                >
                  HI, I AM BRIAN DEAN, FULL STACK DEVELOPER
                </Text>

                <Title mb="3rem">
                  Let’s create thoughtful experiences for your brand.
                </Title>
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  <Button arrowRight>Check my works</Button>
                </Link>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
