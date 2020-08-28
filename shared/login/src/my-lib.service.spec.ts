import { Component } from '@angular/core';
import { of } from 'rxjs';
import { render, screen } from '@testing-library/angular';
import { createMock } from '@testing-library/angular/jest-utils';
import { MyLibService, Customer } from './my-lib.service';

@Component({
  selector: 'app-fixture',
  template: `
    <ul>
      <li *ngFor="let customer of customers$ | async">
        {{ customer.name }}
      </li>
    </ul>
  `,
})
class CustomersComponent {
  customers$ = this.service.load();
  constructor(private service: MyLibService) {}
}

test('renders the provided customers with manual mock', async () => {
  const customers: Customer[] = [
    {
      id: '1',
      name: 'sarah',
    },
    {
      id: '2',
      name: 'charlotte',
    },
  ];
  await render(CustomersComponent, {
    componentProviders: [
      {
        provide: MyLibService,
        useValue: {
          load() {
            return of(customers);
          },
        },
      },
    ],
  });

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(customers.length);

  customers.forEach((customer) =>
    screen.getByText(new RegExp(customer.name, 'i'))
  );
});

test('renders the provided customers with createMock', async () => {
  const customers: Customer[] = [
    {
      id: '1',
      name: 'sarah',
    },
    {
      id: '2',
      name: 'charlotte',
    },
  ];

  const customersService = createMock(MyLibService);
  customersService.load = jest.fn(() => of(customers));

  await render(CustomersComponent, {
    componentProviders: [
      {
        provide: MyLibService,
        useValue: customersService,
      },
    ],
  });

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(customers.length);

  customers.forEach((customer) =>
    screen.getByText(new RegExp(customer.name, 'i'))
  );
});
