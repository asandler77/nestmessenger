import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { ApiResponse } from "@nestjs/swagger";
import { constants } from "http2";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post("add-movie")
  @ApiResponse({
    status: 201,
    description: "The movie was added successfully.",
  })
  async create(@Body() createMovieDto: CreateMovieDto) {
    console.log("Controller----", createMovieDto);
    return await this.moviesService.create(createMovieDto);
  }

  @Delete("delete-all")
  removeAll() {
    return this.moviesService.removeAll();
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moviesService.remove(+id);
  }
}
