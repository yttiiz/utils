import { assertEquals } from "@deps";
import { Fetcher } from "./mod.ts";

Deno.test({
	name: "Fetcher.getData :",
	async fn() {
		const response = await Fetcher.getData(
			"https://dummyjson.com/users/1",
		);

		if (response.ok) {
			const expected = "Emily";
			assertEquals(response.data["firstName"], expected);
		}
	},
});
