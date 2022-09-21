import type { RenderResult } from "@testing-library/vue";
import { fireEvent, render } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";

import Popover from "../src/components/popover.vue";

describe("popover-without-before-each.vue", () => {
  let wrapper: RenderResult;

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render", async () => {
    wrapper = render(Popover);

    const { getByText, html, findByText } = wrapper;
    const button = getByText("Solutions");
    await fireEvent.click(button);
    await findByText("Analytics");
    expect(html()).toMatchSnapshot();
  });
});
