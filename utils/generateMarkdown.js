// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (license === 'MIT license'){
   badge = '![GitHub](https://img.shields.io/badge/license-MIT-green)';}
  else if (license === 'Apache 2.0 license'){
    badge = '![GitHub](https://img.shields.io/badge/license-Apache_2.0-green)';
  }
  else if (license === 'GNU General public license'){
     badge = '![GitHub](https://img.shields.io/badge/license-GNU-green)';
  }
  else if (license === 'None'){
    badge = '';
  }
  return badge
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lLink = ''
  if (license === 'MIT license'){
   lLink = 'https://choosealicense.com/licenses/mit/';}
  else if (license === 'Apache 2.0 license'){
     lLink = 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  else if (license === 'GNU General public license'){
     lLink = 'https://www.gnu.org/licenses/gpl-3.0.html';
  }
  else if (license === 'None'){
     lLink = '';
  }
  return lLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None'){
    licenseSection = ''
  } else {
    licenseSection = `License: `
  }
  return licenseSection;
}

//function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## ${renderLicenseSection(answers.license)}${renderLicenseBadge(answers.license)}
    ${renderLicenseLink(answers.license)}
  
  ## Table of Contents:  
  ### * [Description](#Description)
  ### * [How to install](#How)
  ### * [Usage](#Usage)
  ### * [Questions](#Questions)

  ## Description:
  ### ${answers.description}
  
  ## How to install:
  ### ${answers.install}

  ## Usage:
  ### ${answers.usage}

  ## Questions:
  ### https://github.com/${answers.git}
  ### ${answers.email}
  `;
};

module.exports = generateMarkdown;
