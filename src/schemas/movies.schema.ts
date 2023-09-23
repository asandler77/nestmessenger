import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false, timestamps: true })
export class Movie {
  @Prop()
  movie: string;
}

export const MoviesSchema = SchemaFactory.createForClass(Movie);
