// Function that returns a license badge based on which license is passed in
// If no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return " "
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Credits](#credits)

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Credits
${data.credits}
`;
}

module.exports = generateMarkdown;
