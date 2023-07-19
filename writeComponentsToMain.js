const fs = require('fs');
const path = require('path');

// Define the path to the components folder
const componentsFolderPath = path.join(__dirname, 'src/components');

// Read the files in the components folder
fs.readdir(componentsFolderPath, (err, entries) => {
  if (err) {
    console.error('Error reading components folder:', err);
    return;
  }

  // Filter out directories (folders)
  const componentFolders = entries.filter((entry) => {
    const fullPath = path.join(componentsFolderPath, entry);
    return fs.statSync(fullPath).isDirectory();
  });

  // Generate the content for main.js
  const exportStatements = componentFolders.map((folder) => {
    const indexPath = path.join(componentsFolderPath, folder, 'index.ts');
    if (fs.existsSync(indexPath)) {
      return `export { default as ${folder} } from './components/${folder}/index.ts';`;
    }
    return ''; // Skip folders without index.ts
  });

  const mainJsContent = exportStatements.join('\n');

  // Write the content to main.js
  fs.writeFile(path.join(__dirname, 'src/main.js'), mainJsContent, (err) => {
    if (err) {
      console.error('Error writing to main.js:', err);
      return;
    }
    console.log('Components exported to main.js successfully.');
  });
});
