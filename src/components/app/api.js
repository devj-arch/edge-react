import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONFIG from '../../config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.BACKEND_URL }),
  endpoints: (builder) => ({
  getProductsByCategory: builder.query({
    query: (category) => `/products?category=${category}`,
  }),
}),
});

export const { useGetProductsByCategoryQuery } = api;

