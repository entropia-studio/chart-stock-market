import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

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
					console.log('data',data);
					return {
						action: data.action
					}
				}),
				catchError(error => of(null))
			)   			
	}
	
	getUrlWS = (): string => {				
		var SOCKET_URL = location.hostname + ":4300";
		SOCKET_URL = location.hostname === 'localhost' 
			? 'ws://' + SOCKET_URL : 'wss://' + SOCKET_URL;	
					
    return SOCKET_URL;
  }

}
