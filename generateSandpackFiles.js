const fs = require("fs");
const path = require("path");

const sandpackDir = path.join(__dirname, "docs", "components", "sandpack", "files");
const outputFile = path.join(__dirname, "generated", "sandpackFiles.ts");

function readDirectoryRecursively(dir) {
  const results = {};
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results[file] = readDirectoryRecursively(filePath);
    } else {
      results[file] = fs.readFileSync(filePath, "utf8");
    }
  });

  return results;
}

const sandpackExamples = readDirectoryRecursively(sandpackDir);

// Generate TypeScript content
let tsContent = `// This file is auto-generated. Do not edit manually.\n\n`;

Object.entries(sandpackExamples).forEach(([framework, examples]) => {
  Object.entries(examples).forEach(([exampleName, files]) => {
    const name = exampleName.split(".")[0];
    const varName = `${framework.split(".")[0]}${name.charAt(0).toUpperCase() + name.slice(1)}`;
    tsContent += `export const ${varName} = ${JSON.stringify(files, null, 2)};\n\n`;
  });
});

// Ensure the output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, tsContent);

console.log("Sandpack examples TypeScript file generated successfully!");
