import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL || '/api/'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: 'posts',
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = api
