/** List of methods types. */
export type MethodType = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";

/** List of platforms types. */
export type PlatformType = "next" | "nuxt" | "standard";

export type DataType =
	| string
	| Record<string, string | number | Record<string, string | number>>
	| FormData;

/**
 * `Fetcher.fetchData` type parameter.
 */
export type FetcherParamaterType = {
	url: string;
	data?: DataType;
	method?: MethodType;
	platform?: PlatformType;
};

/**
 * ReturnType of `Fetcher.fetchData` in case of success.
 */
export type SuccessResponseType<T = Record<string, string>> = {
	ok: true;
	code: number;
	data: T;
};

/**
 * ReturnType of `Fetcher.fetchData` in case of error.
 */
export type ErrorResponseType = {
	ok: false;
	code: number;
	message: string;
};
