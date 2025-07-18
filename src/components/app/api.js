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
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
      }),
    }),
    getUserProfile: builder.query({
      query: () => '/auth/profile',
    }),
    getCart: builder.query({
      query: () => ({
        url: '/cart',
        method: 'POST', // Matches your backend's POST /cart
      }),
    }),
    placeOrder: builder.mutation({
      query: (billingDetails) => ({
        url: '/cart/place-order',
        method: 'POST',
        body: { billingDetails },
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useGetCartQuery,
  usePlaceOrderMutation,
} = api;

