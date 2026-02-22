import { render } from '@testing-library/react';
import Index from './Index';

describe('Index page', () => {
  it('renders without crashing', () => {
    render(<Index />);
  });
});
