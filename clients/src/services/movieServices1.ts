import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { netip } from '../consts';
export const deleteApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://${netip}:3000/movies` }),
  endpoints: builder => ({
    deleteAllMovies: builder.mutation({
      query: () => ({
        url: 'delete-all',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeleteAllMoviesMutation } = deleteApi;
