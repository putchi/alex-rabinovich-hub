import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders the skills list', () => {
    render(<About />);
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders about section heading', () => {
    render(<About />);
    expect(screen.getByText('A bit about me')).toBeInTheDocument();
  });
});
