import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('displays first name from env var', () => {
    vi.stubEnv('VITE_OWNER_NAME', 'Jane Doe');
    render(<Hero />);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    vi.unstubAllEnvs();
  });

  it('uses fallback name when env not set', () => {
    vi.stubEnv('VITE_OWNER_NAME', '');
    render(<Hero />);
    expect(screen.getByText('Your')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    vi.unstubAllEnvs();
  });

  it('displays owner title from env var', () => {
    vi.stubEnv('VITE_OWNER_TITLE', 'Engineer · Builder');
    render(<Hero />);
    expect(screen.getByText('Engineer · Builder')).toBeInTheDocument();
    vi.unstubAllEnvs();
  });

  it('uses fallback title when env not set', () => {
    vi.stubEnv('VITE_OWNER_TITLE', '');
    render(<Hero />);
    expect(screen.getByText('Your Title')).toBeInTheDocument();
    vi.unstubAllEnvs();
  });
});
