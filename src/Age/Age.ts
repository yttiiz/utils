import type { DateType } from "./mod.ts";

/**
 * Handles Age computing.
 */
export class Age {
	/**
	 * Returns age according to the given `date` parameter.
	 * @param date
	 */
	public static get(date: DateType): number {
		return new Date(Date.now() - new Date(date).getTime()).getFullYear() - 1970;
	}
	/**
	 * Returns age with years according to the given `date` parameter.
	 * @param date
	 */
	public static getWithYear(
		date: DateType,
		locale: "FR" | "EN" = "FR",
	): string {
		const age = Age.get(date);
		const s = age >= 2 ? "s" : "";
		const years = locale === "FR" ? `an${s}` : `year${s} old`;
		return `${age} ${years}`;
	}

	/**
	 * Returns the oldest between two dates.
	 * @param firstDate
	 * @param secondDate
	 */
	public static whichIsOlder(
		firstDate: DateType,
		secondDate: DateType,
	): string {
		const age1 = new Date(firstDate).getTime();
		const age2 = new Date(secondDate).getTime();

		return age1 > age2 ? secondDate : age1 === age2 ? "same dates" : firstDate;
	}
}
