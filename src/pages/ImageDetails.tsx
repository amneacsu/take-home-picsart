import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Navigation } from '../elements/Navigation.ts';
import { PageFooter } from '../elements/PageFooter.ts';
import { PageTitle } from '../elements/PageTitle.ts';
import { Spinner } from '../elements/Spinner.tsx';
import { useImageDetails } from '../hooks/useImageDetails.ts';
import * as S from './ImageDetails.style.ts';

export const ImageDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = parseInt(params.id ?? '', 10);
  if (Number.isNaN(id)) throw new Error(`Invalid image ID: ${params.id}.`);

  const { data, isPending } = useImageDetails(id);

  return (
    <div>
      <Navigation>
        <button type="button" onClick={() => navigate(-1)}>Back</button>
      </Navigation>

      {isPending && <Spinner />}

      {data && (
        <>
          <PageTitle>
            Image details: {data.alt}
          </PageTitle>

          <S.ImageDetails>
            <S.ImageMeta>
              By {data.photographer}
            </S.ImageMeta>

            <S.ImagePreview
              src={data.src.large}
              alt={data.alt}
            />
          </S.ImageDetails>
        </>
      )}

      <PageFooter />
    </div>
  );
};
