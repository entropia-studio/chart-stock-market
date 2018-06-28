import { TestBed, inject } from '@angular/core/testing';

import { SocketBroadcastService } from './socket-broadcast.service';

describe('SocketBroadcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketBroadcastService]
    });
  });

  it('should be created', inject([SocketBroadcastService], (service: SocketBroadcastService) => {
    expect(service).toBeTruthy();
  }));
});
