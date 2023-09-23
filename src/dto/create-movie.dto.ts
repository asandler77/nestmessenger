import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  movie: string;
}
