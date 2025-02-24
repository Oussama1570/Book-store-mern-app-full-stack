import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl().replace(/\/$/, '')}/api/orders`, // Ensures no double slash
        credentials: 'include'  // Ensure credentials are sent with the request
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: 'include'  // Ensure credentials are sent
            }),
            invalidatesTags: ['Orders'] // Ensure cache is updated
        }),
        getOrderByEmail: builder.query({
            query: (email) => ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        })
    })
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
export default ordersApi;
