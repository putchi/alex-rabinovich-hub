import { render, screen, fireEvent } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import About from './About';
import * as sanityHooks from '@/hooks/useSanityData';

vi.mock('@/hooks/useSanityData', () => ({
  useSiteSettings: vi.fn(),
  useHeroData: vi.fn(),
  useAboutData: vi.fn(),
  useProjectsData: vi.fn(),
}));

const mockAbout = {
  data: {
    paragraph1: 'First about paragraph.',
    paragraph2: 'Second about paragraph.',
    skills: ['Go', 'TypeScript', 'React'],
  },
  isLoading: false,
};

describe('About', () => {
  beforeEach(() => {
    (sanityHooks.useAboutData as Mock).mockReturnValue(mockAbout);
  });

  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders the about skeleton while loading', () => {
    (sanityHooks.useAboutData as Mock).mockReturnValue({ data: undefined, isLoading: true });
    render(<About />);
    expect(screen.queryByText('A bit about me')).not.toBeInTheDocument();
  });

  it('renders about section heading', () => {
    render(<About />);
    expect(screen.getByText('A bit about me')).toBeInTheDocument();
  });

  it('renders the skills list', () => {
    render(<About />);
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders the paragraph text', () => {
    render(<About />);
    expect(screen.getByText('First about paragraph.')).toBeInTheDocument();
    expect(screen.getByText('Second about paragraph.')).toBeInTheDocument();
  });

  it('scroll arrow click calls scrollIntoView when target exists', () => {
    render(<About />);
    const scrollIntoView = vi.fn();
    vi.spyOn(document, 'getElementById').mockReturnValue({ scrollIntoView } as unknown as HTMLElement);
    const arrowButton = document.querySelector('.flex.justify-center.mt-16');
    if (arrowButton) fireEvent.click(arrowButton);
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    vi.restoreAllMocks();
  });

  it('scroll arrow click is safe when target is missing', () => {
    render(<About />);
    vi.spyOn(document, 'getElementById').mockReturnValue(null);
    const arrowButton = document.querySelector('.flex.justify-center.mt-16');
    if (arrowButton) fireEvent.click(arrowButton);
    vi.restoreAllMocks();
  });
});
