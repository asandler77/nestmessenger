import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {
  //is ApiProperty redundant
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  chat_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sender_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
