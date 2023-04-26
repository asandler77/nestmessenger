import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schemas/user.schema";
import { Model } from "mongoose";

// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(userName: string) {
    console.log("find user===", userName);

    return this.userModel.findOne({ userName }).exec();
  }

  async create(createUserDto: User): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    console.log("create user");
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  // async update(id: string, userDto: )
}
