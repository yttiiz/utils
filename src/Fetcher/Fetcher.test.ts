import { assertEquals } from "@deps";
import { Fetcher } from "./mod.ts";

// Set DummyJson types
type UserType = {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	email: string;
	phone: string;
};

type PostType = {
	id: number;
	title: string;
	userId: string;
};

Deno.test({
	name: "Fetcher.getData :",
	async fn() {
		const response = await Fetcher.getData<UserType>(
			"https://dummyjson.com/users/1",
		);

		if (response.ok) {
			const expected = "Emily";
			assertEquals(response.data["firstName"], expected);
		}
	},
});

Deno.test({
	name: "Fetcher.postData :",
	async fn() {
		const response = await Fetcher.postData<PostType>(
			"https://dummyjson.com/posts/add",
			{ title: "Clean code by Crowler", userId: "5" },
		);

		if (response.ok) {
			assertEquals("Clean code by Crowler", response.data["title"]);
			assertEquals("5", response.data["userId"]);
		}
	},
});
