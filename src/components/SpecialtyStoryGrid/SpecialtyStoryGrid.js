import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 4rem;
    grid-template-columns: 100%;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 1fr minmax(0px, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;
  }
`;

const SportsStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
