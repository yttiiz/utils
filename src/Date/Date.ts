import type { DisplayDateType } from "./types.ts";

/**
 * Handles date formatting.
 */
export class DateFormatter {
	private static baseDateOpts: Intl.DateTimeFormatOptions = {
		timeZone: "Europe/Paris",
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	private static longDateOpts: Intl.DateTimeFormatOptions = {
		timeZone: "Europe/Paris",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

	private static shortDateOpts: Intl.DateTimeFormatOptions = {
		timeZone: "Europe/Paris",
		year: "2-digit",
		month: "numeric",
		day: "numeric",
	};

	/**
	 * Display date using `Intl` object.
	 * @param {DisplayDateType} details object details
	 */
	public static display({
		date,
		style = "long",
		locale = "fr-FR",
	}: DisplayDateType): string {
		date = date ? date : new Date();
		return new Intl.DateTimeFormat(
			locale,
			style === "long"
				? DateFormatter.longDateOpts
				: style === "short"
				? DateFormatter.shortDateOpts
				: DateFormatter.baseDateOpts,
		)
			.format(date)
			.replace(",", locale === "fr-FR" ? " à" : ",");
	}

	/**
	 * Returns an object with current date details.
	 * @returns object containing 3 keys: 'year', 'month', 'day'.
	 */
	public static create(): {
		year: number;
		month: string | number;
		day: string | number;
	} {
		const now = new Date();
		return {
			year: now.getFullYear(),
			month: now.getMonth() + 1 < 10
				? `0${now.getMonth() + 1}`
				: now.getMonth() + 1,
			day: now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(),
		};
	}
}
