import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

const SOCKET_URL = 'ws://localhost:4300/';

export interface Message {
	action: string,	
}

@Injectable({
  providedIn: 'root'
})
export class SocketBroadcastService {

  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
		
		this.messages = <Subject<Message>>wsService
      .connect(SOCKET_URL)        
			.pipe(				
				map((response: MessageEvent): Message => {
					let data = JSON.parse(response.data);					
					return {
						action: data.action
					}
				}),
				catchError(error => of(null))
			)   			
  }
}
