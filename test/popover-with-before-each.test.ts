import type { RenderResult } from "@testing-library/vue";
import { fireEvent, render } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Popover from "../src/components/popover.vue";

describe("popover-with-before-each.vue", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(Popover);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render", async () => {
    const { getByText, html, findByText } = wrapper;
    const button = getByText("Solutions");
    await fireEvent.click(button);
    await findByText("Analytics");
    expect(html()).toMatchSnapshot();
  });
});
