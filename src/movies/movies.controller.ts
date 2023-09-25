import {
  Body,
  Controller,
  Delete,
  Get, NotFoundException,
  Param,
  Patch,
  Post
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiOperation({ summary: "Add movie to DB" })
  @ApiResponse({ status: "2XX" })
  @Post("add-movie")
  @ApiResponse({
    status: 201,
    description: "The movie was added successfully.",
  })
  async create(@Body() createMovieDto: CreateMovieDto) {
    console.log("Controller----", createMovieDto);
    return await this.moviesService.create(createMovieDto);
  }
  @ApiOperation({ summary: "Remove all movies from DB" })
  @ApiResponse({ status: "2XX" })
  @Delete("delete-all")
  removeAll() {
    // throw new NotFoundException("Items not found");
    return this.moviesService.removeAll();
  }

  @ApiOperation({ summary: "Get movies from DB" })
  @ApiResponse({ status: "2XX" })
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
