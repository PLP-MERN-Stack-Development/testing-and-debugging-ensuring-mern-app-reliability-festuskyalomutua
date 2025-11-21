import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserList from '../../src/components/UserList';

jest.mock('axios');

test('loads and displays users', async () => {
  axios.get.mockResolvedValue({ data: [{ name: 'John' }] });
  render(<UserList />);
  await waitFor(() => expect(screen.getByText('John')).toBeInTheDocument());
});
