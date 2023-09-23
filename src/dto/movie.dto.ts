import { Types } from "mongoose";

export class MovieDto {
  _id: Types.ObjectId;
  movie: string;
  constructor(props: Partial<MovieDto>) {
    this._id = props._id || null;
    this.movie = props.movie || null;
  }
}
