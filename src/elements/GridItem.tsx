import React from 'react';
import { Link } from 'react-router';
import * as S from './GridItem.styles.ts';
import { GalleryItem } from '../types.ts';

interface GridItemProps {
  image: GalleryItem;
  rect: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

const spacer = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const GridItem = ({
  image,
  rect,
}: GridItemProps) => {
  const { x, y, width, height } = rect;

  return (
    <S.GridItem
      data-testid={`image_${image.id}`}
      style={{ left: x, top: y }}
    >
      <Link to={`/details/${image.id}`}>
        <img
          alt={`Image ${image.id}`}
          src={spacer}
          width={width}
          height={height}
        />
      </Link>
    </S.GridItem>
  );
};
