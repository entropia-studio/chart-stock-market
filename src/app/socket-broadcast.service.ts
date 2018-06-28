import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

const CHAT_URL = 'ws://localhost:8080/';

export interface Message {
	action: string,	
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
		
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)  
			.pipe(				
				map((response: MessageEvent): Message => {
					let data = JSON.parse(response.data);
					console.log("data ",data);
					return {
						action: data.action
					}
				}),
				catchError(error => of(null))
			)   			
  }
}
