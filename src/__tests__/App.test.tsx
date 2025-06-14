import { MemoryRouter } from 'react-router';
import { faker } from '@faker-js/faker';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createMockImage } from '../utils/createMockImage.ts';
import { App } from '../App.tsx';

faker.seed(12345);
const photos = (new Array(20)).fill(0).map(createMockImage);
global.fetch = jest.fn() as jest.Mock;

const renderCase = (route?: string) => {
  return render(
    <MemoryRouter initialEntries={route ? [route] : undefined}>
      <App />
    </MemoryRouter>,
  );
};

it('displays a list of images on the homepage', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => ({ photos }),
  } as Response);

  const { getByRole, getByText, getAllByRole } = renderCase();
  await waitForElementToBeRemoved(getByRole('status'));
  getByText(/browsing all images/i);
  expect(getAllByRole('img').length).toBeLessThan(photos.length);
});

it('performs a topic search', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => ({ photos }),
  } as Response);

  const { getByText, getByPlaceholderText } = renderCase();
  await userEvent.type(getByPlaceholderText('Enter topic to search for...'), 'Tigers');
  await userEvent.keyboard('[Enter]');
  getByText(/topic: tigers/i);
});

it('displays image details', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => photos[0],
  } as Response);

  const { getByRole, getByText } = renderCase(`/details/${photos[0].id}`);
  await waitForElementToBeRemoved(getByRole('status'));
  getByText(new RegExp(`image details: ${photos[0].alt}`, 'i'));
  getByText(new RegExp(`by ${photos[0].photographer}`, 'i'));
  getByRole('button', { name: 'Back' });
  expect(getByRole('img')).toHaveAttribute('src', photos[0].src.large);
});

it('displays a 404 message', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    status: 404,
    json: async () => null,
  } as Response);

  const { getByRole, getByText } = renderCase(`/details/0`);
  await waitForElementToBeRemoved(getByRole('status'));
  getByText(/this photo doesn't exist/i);
});
