// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return "";
  }
  {
    return `## Badges
    ![](https://img.shields.io/badge/license-${license}-orange)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) {
    return "";
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, fullName) {
  if (license == null) {
    return "";
  }
  const currentYear = new Date().getFullYear();
  let licenseHead = "## License";

  if (license === "Apache-2.0") {
    return `${licenseHead}  
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and limitations under the License.`;
  }
  if (license === "MIT") {
    return `${licenseHead} 
    MIT License
    Copyright (c) ${currentYear} ${fullName}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
  if (license === "GNU GPLv2") {
    return `${licenseHead} 
    GNU GENERAL PUBLIC LICENSE
    Version 2, June 1991
    Copyright (C) 1989, 1991 Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA 
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU GPLv3") {
    return `${licenseHead} 
    GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007
    
    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "ISC") {
    return `${licenseHead} 
    ISC License
    Copyright (c) ${currentYear} ${fullName}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
 ${renderLicenseBadge(data.license)}
## Description
${data.description} 

## Table of Contents 

- [Installation](##installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation
${data.installation} 

## Usage
${data.usage} 


## Credits
${data.contribution} 

${renderLicenseSection(data.license, data.fullName)}

## Features

If your project has a lot of features, list them here.

## How to Contribute
${data.contribution}

## Tests
${data.testInstructions}

## Questions
<https://github.com/${data.username}>
Please contact me with additional questions at ${data.email}
`;
}

module.exports = generateMarkdown;
