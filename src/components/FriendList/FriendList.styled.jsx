import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2%;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;

  &.online {
    background-color: green;
  }

  &.offline {
    background-color: red;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #555;
`;