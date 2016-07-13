/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Product,ProductService} from '../shared';
import { Http, Response } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  let http:Http;
  let _productService:ProductService = new ProductService(http);
  beforeEachProviders(()=>[HomeComponent, ProductService]);
  xit('should create an instance', () => {
    let component = new HomeComponent(_productService);
    expect(component).toBeTruthy();
  });
});
