import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONFIG from '../../config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.BACKEND_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) => `/products?category=${category}`,
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useLoginMutation } = api;
