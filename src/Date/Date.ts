import { DisplayDateType } from "./types.ts";

export class DateHandler {
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
	 * Display date using `Intl` object, with french locale. 
	 */
	public static displayDate({ date, style = "long" }: DisplayDateType) {
		date = date ? date : new Date();
		return new Intl.DateTimeFormat(
			"fr-FR",
			style === "long"
				? DateHandler.longDateOpts
				: style === "short"
				? DateHandler.shortDateOpts
				: DateHandler.baseDateOpts,
		)
			.format(date)
			.replace(",", " à");
	}
}
