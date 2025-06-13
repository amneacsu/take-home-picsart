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

export const GridItem = ({
  image,
  rect,
}: GridItemProps) => {
  const { x, y, width, height } = rect;

  return (
    <S.GridItem
      data-testid={`image_${image.id}`}
      style={{ left: x, top: y, backgroundColor: image.avg_color }}
    >
      <Link to={`/details/${image.id}`}>
        <img
          alt={image.alt}
          src={image.src.large}
          width={width}
          height={height}
        />
      </Link>
    </S.GridItem>
  );
};
