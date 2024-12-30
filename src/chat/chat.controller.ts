import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('rooms')
  getRooms() {
    return this.chatService.getRooms();
  }

  @Post('rooms')
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.chatService.createRoom(createRoomDto);
  }

  @Get('rooms/:roomId/messages')
  getRoomMessages(@Param('roomId') roomId: string) {
    return this.chatService.getMessages(roomId);
  }
}