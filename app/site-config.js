import { existsSync } from "node:fs";
import { join } from "node:path";

export const hasCompanyLogo = existsSync(
  join(process.cwd(), "public", "logo.png"),
);

export const hasCompanyMark = existsSync(
  join(process.cwd(), "public", "favicon-mark.png"),
);
