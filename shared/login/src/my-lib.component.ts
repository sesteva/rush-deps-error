import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: ` <p>my-lib works on live reload!</p> `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
