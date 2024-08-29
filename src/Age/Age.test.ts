import { assertEquals } from "@deps";
import { Age, type DateType } from "./mod.ts";

Deno.test({
	name: "Age.get :",
	fn() {
		const newBorn = new Date().toISOString().split("T")[0];
		assertEquals(Age.get(newBorn as DateType), 0);

		const now = new Date();
		const year = now.getFullYear() - 20;
		const month = now.getMonth() + 1 >= 10
			? now.getMonth() + 1
			: `0${now.getMonth() + 1}`;
		const date = now.getDate();
		assertEquals(Age.get(`${year}-${month}-${date}` as DateType), 20);
	},
});

Deno.test({
	name: "Age.getWithYear :",
	fn() {
		const newBorn = new Date().toISOString().split("T")[0];
		assertEquals(Age.getWithYear(newBorn as DateType), "0 an");

		const now = new Date();
		const year = now.getFullYear() - 20;
		const month = now.getMonth() + 1 >= 10
			? now.getMonth() + 1
			: `0${now.getMonth() + 1}`;
		const date = now.getDate();
		assertEquals(
			Age.getWithYear(`${year}-${month}-${date}` as DateType),
			"20 ans",
		);
	},
});

Deno.test({
	name: "Age.whichIsOlder: ",
	fn() {
		assertEquals(Age.whichIsOlder("1999-08-21", "2010-02-02"), "1999-08-21");
		assertEquals(
			Age.whichIsOlder("1986-04-25", "1986-04-25"),
			"Les dates sont similaires.",
		);
	},
});
