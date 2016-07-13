/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Product} from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1,'fff','ddd',new Date(), 12,'asasa','sssss')).toBeTruthy();
  });
});
