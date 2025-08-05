import { Button } from "./Button";

export default {
  title: "ui/Button",
};

export const Default = () => <Button children="button" />;
export const Inline = () => <Button isInline children="button" />;
export const sm = () => <Button size="sm" children="button" />;
export const outline = () => <Button variant="outline" children="button" />;
export const disabled = () => <Button disabled children="button" />;
