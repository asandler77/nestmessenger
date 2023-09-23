import { ApiProperty } from "@nestjs/swagger";

export class UpdateMovieDto {
  @ApiProperty()
  data: string;
}
