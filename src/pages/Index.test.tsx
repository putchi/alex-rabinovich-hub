import { render } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import Index from './Index';
import * as sanityHooks from '@/hooks/useSanityData';

vi.mock('@/hooks/useSanityData', () => ({
  useSiteSettings: vi.fn(),
  useHeroData: vi.fn(),
  useAboutData: vi.fn(),
  useProjectsData: vi.fn(),
}));

describe('Index page', () => {
  beforeEach(() => {
    (sanityHooks.useSiteSettings as Mock).mockReturnValue({ data: undefined, isLoading: false });
    (sanityHooks.useHeroData as Mock).mockReturnValue({ data: undefined, isLoading: false });
    (sanityHooks.useAboutData as Mock).mockReturnValue({ data: undefined, isLoading: false });
    (sanityHooks.useProjectsData as Mock).mockReturnValue({ data: undefined, isLoading: false });
  });

  it('renders without crashing', () => {
    render(<Index />);
  });
});
