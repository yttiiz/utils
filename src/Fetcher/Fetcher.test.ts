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

type IdsType = { id: number; userId: string };

type PostType = IdsType & {
	title: string;
};

type TodoType = IdsType & {
	todo: string;
	completed: string;
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

Deno.test({
	name: "Fetcher.postData (with FormData):",
	async fn() {
		const data = new FormData();
		data.append("todo", "Use DummyJSON in the project");
		data.append("completed", "false");
		data.append("userId", "5");

		const response = await Fetcher.postData<TodoType>(
			"https://dummyjson.com/todos/add",
			data,
		);

		if (response.ok) {
			assertEquals("5", response.data["userId"]);
		}
	},
});
