import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const PostApi = createApi({
    reducerPath: 'PostApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://jsonplaceholder.typicode.com/'}),
    tagTypes: ['Post'],

    endpoints: (build) => ({

        getPosts: build.query<IPost[], number>({
            query: (limit: number = 10) => ({
                url: "posts",
                params: {
                    _limit : limit
                },
            }),

            providesTags: (res) => {
               return res 
                ? [...res.map(({id}) => ({type : 'Post' as const, id})), 'Post']
                : ['Post']
            }
        })

    })
})

export const {useGetPostsQuery} = PostApi;