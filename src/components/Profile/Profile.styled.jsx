import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 25px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  
`;

export const Name = styled.p`
  font-size: 27px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #55414187;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #55414187;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  margin: 10px;
  margin-right: 20px;
`;

export const Label = styled.span`
  margin: 10px;
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  color: #555;
  font-weight: bold;
`;