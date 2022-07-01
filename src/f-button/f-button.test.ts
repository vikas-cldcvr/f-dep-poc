import { html, fixture, expect } from "@open-wc/testing";

// eslint-disable-next-line import/no-unresolved
import { FButton } from "~";

describe("FButton", () => {
	it("has default title", async () => {
		const el: FButton = await fixture(html` <f-button></f-button> `);
		expect(el.title).to.equal("");
	});
});
