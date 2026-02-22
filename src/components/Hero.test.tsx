import { render, screen, fireEvent } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import Hero from './Hero';
import * as sanityHooks from '@/hooks/useSanityData';

vi.mock('@/hooks/useSanityData', () => ({
  useSiteSettings: vi.fn(),
  useHeroData: vi.fn(),
  useAboutData: vi.fn(),
  useProjectsData: vi.fn(),
}));

const mockSettings = {
  data: {
    ownerName: 'Jane Doe',
    ownerTitle: 'Engineer · Builder',
    githubUrl: 'https://github.com/janedoe',
    linkedinUrl: 'https://linkedin.com/in/janedoe',
    siteTitle: 'Jane Doe',
    siteDescription: 'Portfolio',
  },
  isLoading: false,
};

const mockHero = {
  data: { bio: 'Test bio paragraph.' },
  isLoading: false,
};

describe('Hero', () => {
  beforeEach(() => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue(mockSettings);
    (sanityHooks.useHeroData as Mock).mockReturnValue(mockHero);
  });

  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('renders the hero skeleton while settings are loading', () => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({ data: undefined, isLoading: true });
    render(<Hero />);
    expect(screen.queryByText('Jane')).not.toBeInTheDocument();
  });

  it('renders the hero skeleton while hero data is loading', () => {
    (sanityHooks.useHeroData as Mock).mockReturnValue({ data: undefined, isLoading: true });
    render(<Hero />);
    expect(screen.queryByText('Jane')).not.toBeInTheDocument();
  });

  it('displays owner first and last name', () => {
    render(<Hero />);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
  });

  it('displays owner title', () => {
    render(<Hero />);
    expect(screen.getByText('Engineer · Builder')).toBeInTheDocument();
  });

  it('displays bio text', () => {
    render(<Hero />);
    expect(screen.getByText('Test bio paragraph.')).toBeInTheDocument();
  });

  it('scroll arrow click calls scrollIntoView when target exists', () => {
    render(<Hero />);
    const scrollIntoView = vi.fn();
    vi.spyOn(document, 'getElementById').mockReturnValue({ scrollIntoView } as unknown as HTMLElement);
    const arrowButton = document.querySelector('.absolute.bottom-12');
    if (arrowButton) fireEvent.click(arrowButton);
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    vi.restoreAllMocks();
  });

  it('scroll arrow click is safe when target is missing', () => {
    render(<Hero />);
    vi.spyOn(document, 'getElementById').mockReturnValue(null);
    const arrowButton = document.querySelector('.absolute.bottom-12');
    if (arrowButton) fireEvent.click(arrowButton);
    vi.restoreAllMocks();
  });
});
