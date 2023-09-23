import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false, timestamps: true })
export class Movie {
  @Prop()
  name: string;
  @Prop()
  url: string;
  @Prop()
  score: string;
}

export const MoviesSchema = SchemaFactory.createForClass(Movie);
