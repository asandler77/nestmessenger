import { Types } from "mongoose";

export class MovieDto {
  _id: Types.ObjectId;
  name: string;
  score: string;
  url: string;
  constructor(props: Partial<MovieDto>) {
    this._id = props._id || null;
    this.name = props.name || null;
    this.url = props.url || null;
    this.score = props.score || null;
  }
}
