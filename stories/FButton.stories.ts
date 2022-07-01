import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "./../src/f-button/f-button";

export default {
  title: "FButton",
} as Meta;

const Template: Story<any> = () => {
  return html` <f-button>Submit</f-button>`;
};

export const Basic = Template.bind({});
