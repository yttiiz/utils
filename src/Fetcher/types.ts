import type { DateType } from "../Age/mod.ts";

export type IntlParameterType = {
	date: number | DateType | undefined;
	locale: string;
	opts: Intl.DateTimeFormatOptions | undefined;
	joinWith?: string;
};

export type MethodType = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";

export type FetcherParamaterType = {
	url: string;
	data?: string | Record<string, string>;
	method?: MethodType;
	contentType?: string;
};

export type SuccessResponseType = {
	ok: true;
	code: number;
	data: Record<string, string>;
};

export type ErrorResponseType = {
	ok: false;
	code: number;
	message: string;
};
