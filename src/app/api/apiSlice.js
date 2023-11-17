import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// console.log('test', import.meta.env.VITE_BASE_URL)

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  // credentials: 'include', //creates cors error when api is called
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    // if we have a token, set the auth header value
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // console.log(args) // request url, method, body
  // console.log(api) // signal, dispatch, getState()
  // console.log(extraOptions) //custom like {shout: true}

  let result = await baseQuery(args, api, extraOptions)

  // If you want, handle other status codes, too
  if (result?.error?.status === 401) {
    console.log('sending refresh token')
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['', ''],
  endpoints: () => ({}),
})
