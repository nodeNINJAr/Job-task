

import { baseApi } from "@/redux/baseApi";
import { IProduct } from "@/type/type";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
     getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query<IProduct, string>({
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