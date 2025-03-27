//DetailPage.js：展示详细信息内�?
// src/pages/DetailPage.js
import React from 'react';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailPage = () => {
  return (
    <DetailWrapper>
      <h2>Art Detail</h2>
      <p>Here you can view details about a specific art piece.</p>
    </DetailWrapper>
  );
};

export default DetailPage;
