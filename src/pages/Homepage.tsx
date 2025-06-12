import React, { useMemo } from 'react';
import { GridItem } from '../elements/GridItem.tsx';
import { useGridColumnCount } from '../hooks/useGridColumnCount.ts';
import { useMasonryLayout } from '../hooks/useMasonryLayout.ts';
import * as S from './Homepage.styles.ts';
import { useViewWindow } from '../hooks/useViewWindow.ts';
import { useImageList } from '../hooks/useImageList.ts';

export const Homepage = () => {
  const cols = useGridColumnCount();
  const viewport = useViewWindow();
  const data = useImageList();
  const masonry = useMasonryLayout(data, cols);

  const totalHeight = useMemo(() => {
    return Math.max(0, ...masonry.map((item) => item.rect.height + item.rect.y));
  }, [masonry]);

  const visibleItems = useMemo(() => {
    return masonry.filter((item) => {
      return (item.rect.y + item.rect.height) > viewport.top && item.rect.y < viewport.bottom;
    });
  }, [masonry, viewport]);

  return (
    <div>
      <S.GridWrapper
        style={{ width: cols * 300, height: totalHeight }}
      >
        {visibleItems.map((item) => {
          return (
            <GridItem
              key={item.image.id}
              image={item.image}
              rect={item.rect}
            />
          );
        })}
      </S.GridWrapper>
    </div>
  );
};
