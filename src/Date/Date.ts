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
	public static display(
		{ date, style = "long", locale = "fr-FR" }: DisplayDateType,
	): string {
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
}
