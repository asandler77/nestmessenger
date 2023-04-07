import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../schemas/user.schema";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: User) {
    console.log("signIn");
    return this.authService.signIn(signInDto.userName, signInDto.password);
  }

  // @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post("create")
  createUser(@Body() signInDto: User){
    return this.authService.createUser(signInDto);
  }

}
