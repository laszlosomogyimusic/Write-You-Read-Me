let fullText = "";

function generateTitle(title) {
  let temp = `# ${title}

`;
  fullText += temp;
}

function generateDescription(description) {
  let temp = `## Description [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
${description}

`;

  fullText += temp;
}

function generateLicense(license) {
  let temp = `## License [![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)

${license}

`;

  fullText += temp;
}



function generateTableOfContents() {
  let temp = `## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

`;

  fullText += temp;
}

function generateInstall(install) {
  let temp = `## Installation
\`\`\`bash
${install}
\`\`\`

`;

fullText += temp;
}


function generateUsage(usage) {
  let temp = `## Usage
\`\`\`bash
${usage}
\`\`\`

`;

  fullText += temp;
}


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  generateTitle(data.projectname);
  generateDescription(data.description);
  generateTableOfContents();
  generateInstall(data.install);
  generateUsage(data.usage);
  generateLicense(data.license);

  return fullText;

//   return `# ${data.title}

// `;
}

module.exports = generateMarkdown;
