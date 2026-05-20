import type { KeyBinding } from "@opentui/core";
import { EmptyBorder } from "./boarder";
import { StatusBar } from "./statusBar";

type Props = {
  onSubmit: (text: string) => void;
  disabled?: boolean;
};

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "enter", action: "submit" },
  { name: "return", shift: true, action: "newline" },
  { name: "enter", shift: true, action: "newline" },
];

export function InputBar({ onSubmit, disabled = false }: Props) {
  return (
    <box width={"100%"} alignItems="center">
      <box
        // TODO: Add left border
        border={["left"]}
        borderColor={"#4dff4d"}
        customBorderChars={{
          ...EmptyBorder,
          vertical: "┃",
          bottomLeft: "╹",
        }}
      >
        <box
          position="relative"
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor={"#1A1A24"}
          width={"100%"}
          gap={1}
        >
          <textarea
            focused={!disabled}
            placeholder={'Ask anything... "Fix a bug in database'}
            keyBindings={TEXTAREA_KEY_BINDINGS}
          />
          <StatusBar />
        </box>
      </box>
    </box>
  );
}
