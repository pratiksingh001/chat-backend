import { IsString, IsNotEmpty, IsArray, MinLength } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsArray()
  @IsString({ each: true })
  participants: string[];
}