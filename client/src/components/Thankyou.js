// ThankYou.js
import React from 'react';
import styled from 'styled-components';

const ThankYouContainer = styled.div`
  background-color: #f0f0f0; 
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 100px auto;
  justify-content:center;
  text-align: center;
`;

const ThankYouTitle = styled.h2`
  color: #333;
`;

const ThankYouMessage = styled.p`
  color: #555;
`;

const ThankYou = () => {
  return (
    <ThankYouContainer>
      <ThankYouTitle>Thank You for Enrolling!</ThankYouTitle>
      <ThankYouMessage>
        We appreciate your decision to enroll. Welcome to our community!
      </ThankYouMessage>
    </ThankYouContainer>
  );
};

export default ThankYou;
