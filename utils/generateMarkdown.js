// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=="None"){
    return `![badmath](https://img.shields.io/badge/license-${license}-blue.svg)`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=="None"){
    return `[https://choosealicense.com/licenses/${license.toLowerCase()}](https://choosealicense.com/licenses/${license.toLowerCase()})`
  }else{ 
    return '';
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="None"){
    return `## License
    This project is licensed under the ${license} license.
    You can read more here ${renderLicenseLink(license)}
    `
}else{
  return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

\`\`\`bash
${data.installation}
\`\`\`

## Usage

${data.usage}

## How to contribute

${data.contribution}

${renderLicenseSection(data.license)}

## Tests

\`\`\`bash
${data.test}
\`\`\`


## Questions

For issues contact me at ${data.email}
My github account [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;
