import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputWithCurrency } from "./InputWithCurrency";

const meta = {
  title: "ui/InputWithCurrency",
  component: InputWithCurrency,
  args: {
    currency: "USD",
    id: "someId",
  },
} satisfies Meta<typeof InputWithCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
