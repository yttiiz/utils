import { assertEquals } from "@deps";
import { DateFormatter } from "./mod.ts";

Deno.test({
	name: "DateFormatter.display (long) :",
	fn() {
		assertEquals(
			DateFormatter.display({ date: 1724620845901 }),
			"25 août 2024 à 23:20",
		);
		assertEquals(
			DateFormatter.display({ date: 1724620845901, locale: "en-EN" }),
			"Aug 25, 2024, 11:20 PM",
		);
	},
});

Deno.test({
	name: "DateFormatter.display (normal) :",
	fn() {
		assertEquals(
			DateFormatter.display({ date: 1724620845901, style: "normal" }),
			"25 août 2024",
		);
	},
});

Deno.test({
	name: "DateFormatter.display (short) :",
	fn() {
		assertEquals(
			DateFormatter.display({ date: 1724620845901, style: "short" }),
			"25/08/24",
		);
	},
});

Deno.test({
	name: "DateFormatter.create :",
	fn() {
		assertEquals(
			typeof DateFormatter.create(),
			"object",
		);
		assertEquals(
			Object.keys(DateFormatter.create()),
			["year", "month", "day"],
		);
	},
});
