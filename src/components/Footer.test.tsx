import { render, screen } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import Footer from './Footer';
import * as sanityHooks from '@/hooks/useSanityData';

vi.mock('@/hooks/useSanityData', () => ({
  useSiteSettings: vi.fn(),
  useHeroData: vi.fn(),
  useAboutData: vi.fn(),
  useProjectsData: vi.fn(),
}));

describe('Footer', () => {
  it('renders without crashing', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({ data: undefined, isLoading: false });
    render(<Footer />);
  });

  it('renders GitHub link from Sanity data', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({
      data: { githubUrl: 'https://github.com/testuser', linkedinUrl: '#' },
      isLoading: false,
    });
    render(<Footer />);
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/testuser');
  });

  it('renders LinkedIn link from Sanity data', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({
      data: { githubUrl: '#', linkedinUrl: 'https://linkedin.com/in/testuser' },
      isLoading: false,
    });
    render(<Footer />);
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
  });

  it('renders copyright text', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({ data: undefined, isLoading: false });
    render(<Footer />);
    expect(screen.getByText(/Built with craft and care/i)).toBeInTheDocument();
  });

  it('falls back to # when data not yet loaded', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({ data: undefined, isLoading: false });
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => expect(link).toHaveAttribute('href', '#'));
  });
});
