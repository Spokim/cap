import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main/Main';
import Reservation from './Components/Reservation/Reservation';

test('renders the main page', () => {
  render(<Router><App /></Router>);
  const littlelemon = screen.getByText('Rick Power');
  expect(littlelemon).toBeInTheDocument();
});

test('Reserve a table' , () => {
  render(<Router><App /></Router>);
  const submit = screen.getByText('Navigation');
  expect(submit).toBeInTheDocument();
});

test('Form loads and displays as intended', () => {
  const form = {
    name: 'somename',
    guests: '3',
    date: '2023-01-29',
    time: '18:30',
    phone: 1234567890,
    comments: 'testtestelitest'
  }
  render(
    <Router>
      <Reservation form={form} onChange={jest.fn()} />
    </Router>
  )
  const title = screen.getByText('Reserve A Table');
  expect(title).toBeInTheDocument();

  const name = screen.getByPlaceholderText('Enter Name');
  expect(name).toBeInTheDocument();
  expect(name).toHaveValue('somename');

  const phone = screen.getByPlaceholderText('11 digits');
  expect(phone).toBeInTheDocument();
  expect(phone).toHaveValue(1234567890);

  const comments = screen.getByPlaceholderText('Additional Comments');
  expect(comments).toBeInTheDocument();
  expect(comments).toHaveValue('testtestelitest');

  const button = screen.getByText('Submit');
  expect(button).toBeInTheDocument();
})

test('form submit button active on valid form', () => {
  const form = {
    name: 'inputname',
    guests: '1-2',
    date: '2023-01-17',
    time: '09:30',
    phone: 1234567890,
    comments: 'testcomment'
  }
  render(
    <Router>
      <Reservation
      form={form}
      onChange={jest.fn()}
      onSubmit={jest.fn()}
      />
    </Router>
  )
  const button = screen.getByTestId('submitbutton');
  expect(button).toBeInTheDocument();
  expect(button).not.toHaveAttribute('disabled');
})