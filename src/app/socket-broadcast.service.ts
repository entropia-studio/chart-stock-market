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
      .connect(this.getUrlWS())        
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
	
	getUrlWS = (): string => {
		var SOCKET_URL = 'ws://' + location.hostname + ":4300";		
    return SOCKET_URL;
  }

}
