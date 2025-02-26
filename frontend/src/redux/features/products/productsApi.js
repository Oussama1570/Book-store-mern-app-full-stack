import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl().replace(/\/$/, '')}/api/products`,  // Changed '/api/books' to '/api/products'
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const productsApi = createApi({  // Changed 'booksApi' to 'productsApi'
    reducerPath: 'productsApi',  // Changed 'booksApi' to 'productsApi'
    baseQuery,
    tagTypes: ['Products'],  // Changed 'Books' to 'Products'
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({  // Changed 'fetchAllBooks' to 'fetchAllProducts'
            query: () => "/",
            providesTags: ["Products"]  // Changed 'Books' to 'Products'
        }),
        fetchProductById: builder.query({  // Changed 'fetchBookById' to 'fetchProductById'
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Products", id }],  // Changed 'Books' to 'Products'
        }),
        addProduct: builder.mutation({  // Changed 'addBook' to 'addProduct'
            query: (newProduct) => ({  // Changed 'newBook' to 'newProduct'
                url: `/create-product`,  // Changed '/create-book' to '/create-product'
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["Products"]  // Changed 'Books' to 'Products'
        }),
        updateProduct: builder.mutation({  // Changed 'updateBook' to 'updateProduct'
            query: ({ id, ...rest }) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Products"]  // Changed 'Books' to 'Products'
        }),
        deleteProduct: builder.mutation({  // Changed 'deleteBook' to 'deleteProduct'
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]  // Changed 'Books' to 'Products'
        })
    })
})

export const {
    useFetchAllProductsQuery,  // Changed 'useFetchAllBooksQuery' to 'useFetchAllProductsQuery'
    useFetchProductByIdQuery,  // Changed 'useFetchBookByIdQuery' to 'useFetchProductByIdQuery'
    useAddProductMutation,  // Changed 'useAddBookMutation' to 'useAddProductMutation'
    useUpdateProductMutation,  // Changed 'useUpdateBookMutation' to 'useUpdateProductMutation'
    useDeleteProductMutation  // Changed 'useDeleteBookMutation' to 'useDeleteProductMutation'
} = productsApi;

export default productsApi;  // Changed 'booksApi' to 'productsApi'
