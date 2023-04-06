import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: Record<string, any>) {
    //we should use a DTO class to define the shape of the request body. See the validation chapter for more information.
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
