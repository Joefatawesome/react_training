import React from 'react';
import { render } from '@testing-library/react';
import NBSWebsite from './NBSWebsite';

test('renders learn react link', () => {
  const { getByText } = render(<NBSWebsite />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
