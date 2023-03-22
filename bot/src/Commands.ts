import { Command } from "./Command";
import { StyleGuide } from "./interactions/StyleGuide";
import { CodeTemplate } from "./interactions/CodeTemplate";
import { PayRespects } from "./interactions/PayRespects";
import { Bonk } from "./interactions/Bonk";
import { Assignments } from "./interactions/Assignments";
import { TestingCommands } from "./interactions/Purge";
import { BubbleSort } from "./interactions/BubbleSort";
import { InsertionSort } from "./interactions/InsertionSort";

export const Commands: Command[] = [ 
  StyleGuide,
  CodeTemplate,
  PayRespects,
  Bonk,
  Assignments,
  TestingCommands,
  BubbleSort,
  InsertionSort
];
