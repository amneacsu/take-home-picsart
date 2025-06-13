import React, { useCallback, useMemo } from 'react';
import { GridItem } from '../elements/GridItem.tsx';
import { useGridColumnCount } from '../hooks/useGridColumnCount.ts';
import { useMasonryLayout } from '../hooks/useMasonryLayout.ts';
import * as S from './Homepage.styles.ts';
import { useViewWindow } from '../hooks/useViewWindow.ts';
import { useImageList } from '../hooks/useImageList.ts';
import { useSearchQuery } from '../hooks/useSearchQuery.ts';
import { Navigation } from '../elements/Navigation.ts';
import { PageFooter } from '../elements/PageFooter.ts';
import { PageTitle } from '../elements/PageTitle.ts';
import { SearchBox } from '../elements/SearchBox.tsx';
import { Spinner } from '../elements/Spinner.tsx';
import { InfiniteLoadingTrigger } from '../elements/InfiniteLoadingTrigger.tsx';
import { gallerySchema } from '../types.ts';

export const Homepage = () => {
  const [query, setQuery] = useSearchQuery();
  const cols = useGridColumnCount();
  const viewport = useViewWindow();
  const { data, isFetching, fetchNextPage, hasNextPage } = useImageList(query);
  const photos = (data?.pages ?? []).flatMap((page) => gallerySchema.parse(page).photos);
  const masonry = useMasonryLayout(photos, cols);

  const totalHeight = useMemo(() => {
    return Math.max(0, ...masonry.map((item) => item.rect.height + item.rect.y));
  }, [masonry]);

  const visibleItems = useMemo(() => {
    return masonry.filter((item) => {
      return (item.rect.y + item.rect.height) > viewport.top && item.rect.y < viewport.bottom;
    });
  }, [masonry, viewport]);

  const handleLoadMore = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <div>
      <Navigation>
        <SearchBox
          query={query}
          onChangeQuery={setQuery}
        />
      </Navigation>

      <PageTitle>
        {query && `Topic: ${query}`}
        {!query && `Browsing all images`}
      </PageTitle>

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

      {!isFetching && hasNextPage && (
        <InfiniteLoadingTrigger
          onTrigger={handleLoadMore}
        />
      )}

      {isFetching && <Spinner />}

      <PageFooter />
    </div>
  );
};
