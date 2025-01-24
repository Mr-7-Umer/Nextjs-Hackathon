"use client";

/**
 * This configuration is used for the Sanity Studio mounted at `\src\app\studio\[[...tool]]\page.tsx`
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool, StructureResolver } from "sanity/desk";

// Import environment variables and schema
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

// Define custom structure
const customStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("author").title("Authors"),
    ]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: customStructure, // Use the custom structure resolver here
    }),
    visionTool({
      defaultApiVersion: apiVersion,
    }),
  ],
});
