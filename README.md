This action is meant to make CI commands easier when working with monorepo.
CASE: You have an action X that runs stuff that is very specific for a project A. You have to specify work directory for all command you intend to run but even still, when you run yarn install it would install every package for every project.

## Usage:
This action takes two arguments
- project-to-transform (required): Directory name for a project you want to make standalone
- projects-dir (default: packages): Where do subprojects live. Dont use preceeding or trailing slash.

Because this action operates on project code, it must be added after - uses: actions/checkout@...