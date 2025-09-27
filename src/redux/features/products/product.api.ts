

import { baseApi } from "@/redux/baseApi";
import { ProductApiResponse } from "@/type/type";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
     getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query<ProductApiResponse, string>({
      query: (productId) => ({
        url:`/products/${productId}`,
        method: "GET",
      }),
  }),
})
});

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,

} = productsApi;