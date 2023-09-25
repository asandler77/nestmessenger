import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { netip } from '../consts';
import { MovieModel } from '../pages/movies/model';

export const deleteApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://${netip}:3000/movies` }),
  endpoints: builder => ({
    deleteAllMovies: builder.mutation({
      query: () => ({
        url: 'delete-all',
        method: 'DELETE',
      }),
    }),
    getAllMovies: builder.query({
      query: () => 'movies',
    }),
    addMovie: builder.mutation({
      query: (movie: MovieModel) => ({
        url: 'add-movie',
        method: 'POST',
        body: {
          name: movie.name,
          url: movie.url,
          score: movie.score,
        },
      }),
    }),
  }),
});

export const { useDeleteAllMoviesMutation, useAddMovieMutation, useGetAllMoviesQuery } = deleteApi;
