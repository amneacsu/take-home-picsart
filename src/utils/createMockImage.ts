import { faker } from '@faker-js/faker';
import { GalleryItem } from '../types.ts';

const mockSizes = [960, 480, 150, 640, 800, 1280, 320, 100, 400, 420, 515];

export const createMockImage = (imageId: number): GalleryItem => {
  const width = faker.helpers.arrayElement(mockSizes);
  const height = faker.helpers.arrayElement(mockSizes);

  const src = faker.image.urlPicsumPhotos({
    width,
    height,
  });

  return {
    id: imageId,
    width,
    height,
    alt: faker.lorem.sentence(),
    avg_color: faker.color.rgb(),
    photographer: faker.person.fullName(),
    src: {
      original: src,
      large: src,
    },
  };
};
