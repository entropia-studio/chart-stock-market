import { TestBed, inject } from '@angular/core/testing';

import { ChartStocksService } from './chart-stocks.service';

describe('ChartStocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartStocksService]
    });
  });

  it('should be created', inject([ChartStocksService], (service: ChartStocksService) => {
    expect(service).toBeTruthy();
  }));
});
