import styled from '@emotion/styled'

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
font-size: 16px;
`;
export const Percentage = styled.span`
  padding: 10px 0;
  font-size: 24px;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }