import type {
	ErrorResponseType,
	FetcherParamaterType,
	PlatformType,
	SuccessResponseType,
} from "./types.ts";

/**
 * Handles fetching data from any api endpoint.
 */
export class Fetcher {
	/**
	 * Returns a success or error response, based on a `get` method.
	 * @param url Api endpoint.
	 * @param searchParams Additional details to fetch data.
	 */
	public static async getData<T>(
		url: string,
		searchParams?: string,
	): Promise<SuccessResponseType<T> | ErrorResponseType> {
		return await Fetcher.fetchData<T>({ url, data: searchParams });
	}

	/**
	 * Returns a success or error response, based on a `post` method.
	 * @param url Api endpoint.
	 * @param data Body of the request.
	 */
	public static async postData<T>(
		url: string,
		data: string | Record<string, string> = {},
		platform: PlatformType = "standard",
	): Promise<SuccessResponseType<T> | ErrorResponseType> {
		return await Fetcher.fetchData<T>({ url, data, method: "POST", platform });
	}

	/**
	 * Returns a success or error response, based on a `put` method.
	 * @param url Api endpoint.
	 * @param data Body of the request.
	 */
	public static async putData<T>(
		url: string,
		data: string | Record<string, string> = {},
		platform: PlatformType = "standard",
	): Promise<SuccessResponseType<T> | ErrorResponseType> {
		return await Fetcher.fetchData<T>({ url, data, method: "PUT", platform });
	}

	/**
	 * Returns a success or error response, based on a `delete` method.
	 * @param url Api endpoint.
	 * @param data Body of the request.
	 */
	public static async deleteData<T>(
		url: string,
		data: string | Record<string, string> = {},
		platform: PlatformType = "standard",
	): Promise<SuccessResponseType<T> | ErrorResponseType> {
		return await Fetcher.fetchData<T>({
			url,
			data,
			method: "DELETE",
			platform,
		});
	}

	/**
	 * Creates a fetch request according to the object parameter, and a pre-define fetch options.
	 * @param {Object} params
	 */
	private static async fetchData<T>({
		url,
		data,
		method = "GET",
		platform,
	}: FetcherParamaterType): Promise<
		SuccessResponseType<T> | ErrorResponseType
	> {
		const opts: RequestInit = {
			method,
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			redirect: "follow",
			referrerPolicy: "no-referrer",
		};

		let response: Response;

		try {
			if (method === "GET" || method === "HEAD") {
				data
					? (response = await fetch(
						url + "?" + new URLSearchParams(data),
						opts,
					))
					: (response = await fetch(url, opts));
			} else {
				// According to the platform, the body has to be convert in a FormData.
				switch (platform) {
					case "next":
					case "nuxt": {
						const formData = new FormData();
						formData.append(
							"value",
							typeof data === "string" ? data : JSON.stringify(data),
						);
						opts["body"] = formData;
						break;
					}

					case "standard": {
						opts["headers"] = { "Content-Type": "application/json" };
						opts["body"] = typeof data === "string"
							? data
							: JSON.stringify(data);
						break;
					}
				}

				response = await fetch(url, opts);
			}

			return response.ok
				? {
					ok: true,
					code: response.status,
					data: await response.json(),
				}
				: {
					ok: false,
					code: response.status,
					message: response.statusText,
				};
		} catch (_) {
			return {
				ok: false,
				code: 500,
				message: "This api call failed.",
			};
		}
	}
}
