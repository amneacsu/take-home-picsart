import styled from 'styled-components';

export const ImagePreview = styled.img`
  display: block;
`;

export const ImageMeta = styled.div``;

export const ImageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
  }
`;
