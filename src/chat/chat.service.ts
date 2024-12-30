import { Injectable } from '@nestjs/common';
import { IMessage, IRoom } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateRoomDto } from './dto/create-room.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  private messages: IMessage[] = [];
  private rooms: IRoom[] = [];

  createMessage(createMessageDto: CreateMessageDto): IMessage {
    const message: IMessage = {
      id: uuidv4(),
      ...createMessageDto,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  createRoom(createRoomDto: CreateRoomDto): IRoom {
    const room: IRoom = {
      id: uuidv4(),
      ...createRoomDto,
    };
    this.rooms.push(room);
    return room;
  }

  getMessages(roomId?: string): IMessage[] {
    if (roomId) {
      return this.messages.filter(message => message.roomId === roomId);
    }
    return this.messages;
  }

  getRooms(): IRoom[] {
    return this.rooms;
  }

  getRoomById(roomId: string): IRoom | undefined {
    return this.rooms.find(room => room.id === roomId);
  }
}