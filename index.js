const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs');

try {
  const projectTotransform = core.getInput('project-to-transformt');
  const projectsDir = core.getInput('projects-dir');
  // Here's what we want to do:
  // Remove everything from root level
  // Move everything from projects dir to root level
  // Remove projects dir
    shell.ls('.');
    console.log(projectTotransform, projectsDir);
    shell.mv(`./${projectsDir}/${projectTotransform}`, '/tmp');
    shell.rm('-rf', './*');
    shell.mv(`/tmp/${projectTotransform}/*`, './');
} catch (error) {
  core.setFailed(error.message);
}