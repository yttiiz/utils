/** List of methods types. */
export type MethodType = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";

/** List of platforms types. */
export type PlatformType = "next" | "nuxt" | "standard";

/**
 * `Fetcher.fetchData` type parameter.
 */
export type FetcherParamaterType = {
	url: string;
	data?: string | Record<string, string>;
	method?: MethodType;
	contentType?: string;
};

/**
 * ReturnType of `Fetcher.fetchData` in case of success.
 */
export type SuccessResponseType = {
	ok: true;
	code: number;
	data: Record<string, string>;
};

/**
 * ReturnType of `Fetcher.fetchData` in case of error.
 */
export type ErrorResponseType = {
	ok: false;
	code: number;
	message: string;
};
