import React from "react";
import styled from "styled-components";

const SCInput = styled.input`
  margin-top: 30px;
  background-color: #ddd;
  padding: 10px;
  font-size: 20px;
`;

export default function Tarih(props) {
  const { onChange } = props;
  return (
    <SCInput
      type="date"
      onChange={(event) => onChange(event.target.value)}
    ></SCInput>
  );
}
