import { render, screen, cleanup } from '@testing-library/react';
import App from './App';


test('1. renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup)
  
it('2. should take a snapshot', () => {
  const { asFragment } = render(<App />)
    
  expect(asFragment(<App />)).toMatchSnapshot()
});

