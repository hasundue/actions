import { VERSION } from "./mod.ts";
import { assert } from "https://deno.land/std@0.204.0/assert/assert.ts";

Deno.test("VERSION", () => assert(VERSION));
