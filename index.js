// @ts-check

import { Eta } from "eta"
import { domains } from "./duckduckgo.js";
import { users } from "./twitter.js";
import fs from "node:fs";

const eta = new Eta({ views: "./templates" })

// Render a template
const res = eta.render("./simple", {
  ddgResultDomains: domains,
  twitterUsers: users,
})

const dist = "dist"

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

const stream = fs.createWriteStream('./dist/filter.txt');
stream.write(res);