import { cookie } from "@hooks";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IJweet {
  id: string;
  slug: string;
  title: string;
  body: string;
  userId: string;
}

interface IJweetsApiResponse {
  data: IJweet[];
}

export const jweetsApi = createApi({
  reducerPath: "jweets-api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_ORIGIN}/api/jweets`,
    prepareHeaders(headers) {
      if (!cookie.get("session")) return headers;
      const sessionToken = cookie.get("session").session_token || "HEHE";
      headers.set("authorization", `Bearer ${sessionToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    jweets: builder.query<IJweetsApiResponse, void>({
      query: () => "/",
    }),
  }),
});
