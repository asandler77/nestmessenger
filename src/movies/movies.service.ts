import { Injectable } from "@nestjs/common";
import { MoviesRepository } from "./movies.repository";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";

@Injectable()
export class MoviesService {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async create(createMovieDto: CreateMovieDto) {
    console.log("service===", createMovieDto);

    return await this.moviesRepository.addMovie(createMovieDto);
  }

  async removeAll() {
    return await this.moviesRepository.deleteAll();
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
