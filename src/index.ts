/**
 * @module
 * This module contains an handler `class` to format date.
 *
 * @example
 * ```ts
 * import { DateFormatter } from "@yttiiz/utils";
 *
 * DateFormatter.display({ date: 1724620845901 }); // 25 août 2024 à 23:20
 * ```
 */
export * from "./Date/mod.ts";
/**
 * @module
 * This module contains an handler `class` to handle age.
 *
 * @example
 * ```ts
 * import { Age } from "@yttiiz/utils";
 *
 * Age.get("2015-05-25"); // 9
 * ```
 */
export * from "./Age/mod.ts";
/**
 * @module
 * This module contains an handler `class` to fetch data.
 *
 * @example
 * ```ts
 * import { Fetcher } from "@yttiiz/utils";
 *
 * const response = await Fetcher.getData("http://my-api-url.com");
 *
 * if (response.ok) {
 *   console.log(response.data) // { key: value }
 * }
 * ```
 */
export * from "./Fetcher/mod.ts";
