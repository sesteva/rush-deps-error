import { render, screen } from '@testing-library/angular';
import { MyLibComponent } from './my-lib.component';

test('renders the current value and can increment and decrement', async () => {
  await render(MyLibComponent);
  expect(screen.getByText('my-lib works on live reload!'));
});
