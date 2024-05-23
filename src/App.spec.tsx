import { fireEvent, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App'

describe('index.tsx', () => {
  it('should render index component', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <App />
    )
    const urlInput = getByPlaceholderText('Enter a URL');
    const selectInput = getByTestId('size');
    fireEvent.change(urlInput, { target: { value: "https://example.com" } });
    fireEvent.change(selectInput, { target: { value: "300" } });

    const btn = getByText(/Generate QR Code/);
    fireEvent.click(btn);
  });
});
