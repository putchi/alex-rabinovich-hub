import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders GitHub link from env var', () => {
    vi.stubEnv('VITE_GITHUB_URL', 'https://github.com/testuser');
    render(<Footer />);
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/testuser');
    vi.unstubAllEnvs();
  });

  it('renders LinkedIn link from env var', () => {
    vi.stubEnv('VITE_LINKEDIN_URL', 'https://linkedin.com/in/testuser');
    render(<Footer />);
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
    vi.unstubAllEnvs();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with craft and care/i)).toBeInTheDocument();
  });

  it('falls back to # when env vars not set', () => {
    vi.stubEnv('VITE_GITHUB_URL', '');
    vi.stubEnv('VITE_LINKEDIN_URL', '');
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => expect(link).toHaveAttribute('href', '#'));
    vi.unstubAllEnvs();
  });
});
