import { Command } from "./Command";
import { Hello } from "./interactions/general/Hello";
import { Assignments } from "./interactions/general/Assignments";
import { StyleGuide } from "./interactions/general/StyleGuide";

export const Commands: Command[] = [ Hello, Assignments, StyleGuide ];