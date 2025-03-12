import { ComponentProps } from "react";

export type StyleProps = Pick<ComponentProps<"svg">, "style" | "className">;
