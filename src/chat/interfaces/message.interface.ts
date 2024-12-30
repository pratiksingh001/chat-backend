export interface IMessage {
    id: string;
    sender: string;
    content: string;
    roomId?: string;
    createdAt: Date;
  }
  
  export interface IRoom {
    id: string;
    name: string;
    participants: string[];
  }