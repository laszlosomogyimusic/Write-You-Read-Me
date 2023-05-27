let fullText = "";


function generateTitle(title, license) {
  let licenseBadge = "";
  let licenseURL = "";

  switch (license) {
    case 'Apache 2.0':
      licenseURL = "https://opensource.org/licenses/Apache-2.0";
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseURL})`;
      break;
    case 'GNU GPL v3':
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseURL})`;
      break;
    case 'MIT':
      licenseURL = "https://opensource.org/licenses/MIT";
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseURL})`;
      break;
    default:
      licenseURL = "https://opensource.org/licenses/MIT";
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseURL})`;
      break;
  }

  let temp = `# ${title} ${licenseBadge}
  
  `;

  fullText += temp;
}

function generateDescription(description) {
  let temp = `## Description 
${description}

`;

  fullText += temp;
}


function generateTableOfContents() {
  let temp = `## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

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

function generateLicense(license) {
  let temp = `## License
This software is using ${license} license. 
Please click on the badge on the top line to read more about it. 

`;

  fullText += temp;
}

function generateContributing(contributing) {
  let temp = `## Contributing
${contributing}

`;

  fullText += temp;
}

function generateTests(tests) {
  let temp = `## Tests
${tests}

`;

  fullText += temp;
}

function generateQuestions(email, githubrepo) {
  let temp = `## Questions
* For further questions you can reach me here: ${email}
* This is my GitHub repository: [${githubrepo}](https://github.com/${githubrepo})

`;

  fullText += temp;
}

// function to generate markdown for README
function generateMarkdown(data) {
  generateTitle(data.projectname, data.license);
  generateTableOfContents();
  generateDescription(data.description);
  generateInstall(data.install);
  generateUsage(data.usage);
  generateLicense(data.license);
  generateContributing(data.contributing);
  generateTests(data.tests);
  generateQuestions(data.email, data.githubrepo);

  return fullText;
}

module.exports = generateMarkdown;
