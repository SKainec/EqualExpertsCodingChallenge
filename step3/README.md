Version Number: 5b8d0fd276b6d288905ed2f63a934e057e8feca2 

Prerequisite to running:
- Before being able to run this test suite, be sure to have node.js and npm installed. You can find instructions on how to install them [here](https://nodejs.org/en/).

Using build script: 
WINDOWS:
- From the root directory run in a powershell prompt, run `./buildScripts/buildAndRun.ps1` as an administrator.
MAC:
- From the root directory in a terminal, run `./buildScripts/buildAndRun.sh` as an administrator.

Installation instructions for regular use:
- Go to the root of this project and run `npm i` from the terminal.
- To run tests, at the root of this project run `npm test`.

Side note: I was unsure if to check for things like negative prices and negative quantities. Often times I've seen these types of things as separate cards so I chose to omit rather than do too much.