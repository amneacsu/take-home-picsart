import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Navigation } from '../elements/Navigation.ts';
import { PageFooter } from '../elements/PageFooter.ts';
import { PageError } from '../elements/PageError.tsx';
import { PageTitle } from '../elements/PageTitle.ts';
import { Spinner } from '../elements/Spinner.tsx';
import { useImageDetails } from '../hooks/useImageDetails.ts';
import * as S from './ImageDetails.style.ts';
import { galleryItemSchema } from '../types.ts';

export const ImageDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = parseInt(params.id ?? '', 10);
  if (Number.isNaN(id)) throw new Error(`Invalid image ID: ${params.id}.`);

  const { data, isPending } = useImageDetails(id);
  const image = data ? galleryItemSchema.parse(data) : data;

  return (
    <div>
      <Navigation>
        <button type="button" onClick={() => navigate(-1)}>Back</button>
      </Navigation>

      {isPending && <Spinner />}

      {image === null && (
        <PageError
          title="This photo doesn't exist"
        />
      )}

      {image && (
        <>
          <PageTitle>
            Image details: {image.alt}
          </PageTitle>

          <S.ImageDetails>
            <S.ImageMeta>
              By {image.photographer}
            </S.ImageMeta>

            <S.ImagePreview
              src={image.src.large}
              alt={image.alt}
            />
          </S.ImageDetails>
        </>
      )}

      <PageFooter />
    </div>
  );
};
