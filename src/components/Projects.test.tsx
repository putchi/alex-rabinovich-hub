import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects />);
  });

  it('renders the AI Career Chatbot project', () => {
    render(<Projects />);
    expect(screen.getByText('AI Career Chatbot')).toBeInTheDocument();
  });

  it('renders all 4 project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Selected Projects')).toBeInTheDocument();
    expect(screen.getByText('Something is Baking...')).toBeInTheDocument();
  });
});
