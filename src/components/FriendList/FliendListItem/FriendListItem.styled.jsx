import styled from '@emotion/styled'

export const FriendListItemStyle = styled.li`
display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  :hover{
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Status = styled.span`
  margin-right: 10px;
  width: 10px;
  height: 10px;

  border-radius: 100px;
  background-color: ${({isOnline}) => {
    if (isOnline) {
        return `red`;
    } else {
        return `greenyellow`;
    }
  }};
`;

export const Name = styled.p`
font-size: 18px;
`;