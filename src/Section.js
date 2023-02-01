import React from "react";
import styled from "styled-components";

const SCSection = styled.section`
  width: 50%;
  margin: 0px auto;
`;
const SCImage = styled.img`
  width: 85%;
  height: 500px;
`;
const SCDate = styled.p`
  font-size: 20px;
`;
const SCText = styled.p`
  font-family: inherit;
  font-size: 20px;
`;
const SCTitle = styled.h2`
  text-transform: uppercase;
`;

function Section(props) {
  const { data, tarih } = props;
  return (
    <SCSection>
      <SCTitle className="sectionTitle">{data.title}</SCTitle>
      <SCImage className="sectionImg" src={data.url} />
      <h3 className="sectionCopyright">{data.copyright}</h3>
      <SCDate className="sectionDate">{tarih}</SCDate>
      <SCText className="sectionText">{data.explanation}</SCText>
    </SCSection>
  );
}
export default Section;