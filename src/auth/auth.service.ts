import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async createUser(signUpObj: User) {
    console.log("create user====", signUpObj.userName, signUpObj.password);
    return this.usersService.create(signUpObj);
  }

  async signIn(username: string, pass: string): Promise<any> {
    console.log("login");
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      console.log("sign in error========");
      throw new UnauthorizedException();
    }

    const payload = { username: user.userName, sub: user.userId };
    console.log("payload===", payload);

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
