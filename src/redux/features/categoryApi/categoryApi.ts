

import { baseApi } from "@/redux/baseApi";

export const categoryApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({
   getAllCategoty: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getSingleCategoty: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
})
})


export const {
 useGetAllCategotyQuery,
 useGetSingleCategotyQuery

} = categoryApi;