import { nearestString } from "./nearestString";

test("basic matching", () => {
	const matchArr = ["item 1", "item 2", "item 3"];

	expect(nearestString("item 1", matchArr)).toBe("item 1");
	expect(nearestString("Item 2", matchArr)).toBe("item 2");
	expect(nearestString("iTeM3", matchArr)).toBe("item 3");
	expect(nearestString("item 4", matchArr)).toBe(undefined);
});

test("subarray matching", () => {
	const matchArr: (string | [string, ...string[]])[] = [
		"item 1",
		["item 2", "item 3"],
		"item 4"
	];
	expect(nearestString("item 1", matchArr)).toBe("item 1");
	expect(nearestString("Item 2", matchArr)).toBe("item 2");
	expect(nearestString("iTeM3", matchArr)).toBe("item 2");
	expect(nearestString("iTeM > *4", matchArr)).toBe("item 4");
});

test("light duplicate items", () => {
	const matchArr: (string | [string, ...string[]])[] = [
		"item 1",
		"my*item",
		"my_item",
		["am*zing", "am_zing", "my!item", "great"],
		"item 4"
	];
	expect(nearestString("iTem 1", matchArr)).toBe("item 1");
	expect(nearestString("my*item", matchArr)).toBe("my*item");
	expect(nearestString("my_item", matchArr)).toBe("my_item");
	expect(nearestString("my?item", matchArr)).toBe(undefined);
	expect(nearestString("am*zing", matchArr)).toBe("am*zing");
	expect(nearestString("am_zing", matchArr)).toBe("am*zing");
	expect(nearestString("am?zing", matchArr)).toBe("am*zing"); // am* and am_ are not duplicates because they are in a list with eachother
	expect(nearestString("my!item", matchArr)).toBe("am*zing");
	expect(nearestString("gReAt", matchArr)).toBe("am*zing");
	expect(nearestString("ItEM**4!!", matchArr)).toBe("item 4");
});

test("strong duplicate items", () => {
	const matchArr: (string | [string, ...string[]])[] = [
		"item 1",
		"my*item",
		"my*item",
		"item 4"
	];
	expect(nearestString("iTem 1", matchArr)).toBe("item 1");
	expect(nearestString("my*item", matchArr)).toBe(undefined);
	expect(nearestString("my_item", matchArr)).toBe(undefined);
	expect(nearestString("my?item", matchArr)).toBe(undefined);
	expect(nearestString("ItEM**4!!", matchArr)).toBe("item 4");
});
