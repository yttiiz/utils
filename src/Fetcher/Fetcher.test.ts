import { assertEquals } from "@deps";
import { Fetcher } from "./mod.ts";

Deno.test({
	name: "Fetcher.getData :",
	async fn() {
    const response = await Fetcher.getData("https://dummyjson.com/users");
		
    if (response.ok) {
      const expected = "Emily";
			const actual = (response.data["users"][0] as unknown as Record<string, string>)["firstName"];
			
      assertEquals(actual, expected);
		}
	},
});
