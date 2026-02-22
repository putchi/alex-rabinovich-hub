import { render, screen } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import Projects from './Projects';
import * as sanityHooks from '@/hooks/useSanityData';

vi.mock('@/hooks/useSanityData', () => ({
  useSiteSettings: vi.fn(),
  useHeroData: vi.fn(),
  useAboutData: vi.fn(),
  useProjectsData: vi.fn(),
}));

const mockProjects = {
  data: [
    {
      _id: 'proj-1',
      title: 'AI Career Chatbot',
      description: 'A conversational AI assistant.',
      tags: ['React', 'LLM', 'RAG'],
      link: 'https://example.com/chatbot',
      order: 1,
    },
    {
      _id: 'proj-2',
      title: 'Something is Baking...',
      description: 'Next project in the works.',
      tags: ['Coming Soon'],
      link: '#',
      order: 2,
    },
  ],
  isLoading: false,
};

describe('Projects', () => {
  beforeEach(() => {
    (sanityHooks.useProjectsData as Mock).mockReturnValue(mockProjects);
  });

  it('renders without crashing', () => {
    render(<Projects />);
  });

  it('renders the projects skeleton while loading', () => {
    (sanityHooks.useProjectsData as Mock).mockReturnValue({ data: undefined, isLoading: true });
    render(<Projects />);
    expect(screen.queryByText('Selected Projects')).not.toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Selected Projects')).toBeInTheDocument();
  });

  it('renders the AI Career Chatbot project', () => {
    render(<Projects />);
    expect(screen.getByText('AI Career Chatbot')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Something is Baking...')).toBeInTheDocument();
  });

  it('renders project tags', () => {
    render(<Projects />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });
});
