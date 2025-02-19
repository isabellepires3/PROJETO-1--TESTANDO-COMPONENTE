import { render, fireEvent, screen } from '@testing-library/react';
import BotaoContador from './button';

test('renderiza o componente BotaoContador', () => {
  render(<BotaoContador />);
  const botao = screen.getByRole('button');
  expect(botao).toBeInTheDocument();
  expect(botao).toHaveTextContent('Contador: 0');
});

test('incrementa o contador quando o botão é clicado', () => {
  render(<BotaoContador />);
  const botao = screen.getByRole('button');
  fireEvent.click(botao);
  expect(botao).toHaveTextContent('Contador: 1');
});