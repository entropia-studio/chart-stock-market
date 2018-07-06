import { TestBed, inject } from '@angular/core/testing';

import { GoogleChartBaseService } from './google-chart-base.service';

describe('GoogleChartBaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleChartBaseService]
    });
  });

  it('should be created', inject([GoogleChartBaseService], (service: GoogleChartBaseService) => {
    expect(service).toBeTruthy();
  }));
});
