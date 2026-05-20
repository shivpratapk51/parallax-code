import type { RefObject } from "react";
import { TextAttributes, type ScrollBarRenderable } from "@opentui/core";
import { getFilteredCommands } from "./filter-commands";
import { COMMANDS } from "./commands";

const MAX_VISIBLE_ITEMS = 8;
const COMMAND_COL_WIDTH =
  Math.max(...COMMANDS.map((cmd) => cmd.name.length)) + 4;
