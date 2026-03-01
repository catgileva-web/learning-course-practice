<document index="26">
    <source>visual-tests.md</source>
    <document_content>
# Visual tests

Visual tests catch bugs in UI appearance. They work by taking screenshots of every story and comparing them to previous versions to identify visual changes. This is ideal for verifying layout, color, size, contrast, and any other visual aspect of your UI.

Storybook supports cross-browser visual testing natively using Chromatic, a cloud service made by the Storybook team. When you enable visual testing, every story is automatically turned into a test. This gives you instant feedback on UI bugs directly in Storybook.

## Install the addon

Add visual tests to your project by installing @chromatic-com/storybook, the official addon by Storybook maintainers:

```bash
npx storybook@latest add @chromatic-com/storybook
```

ℹ️ Storybook 7.6 or higher is required. Read the migration guide to upgrade your project.

## Enable visual tests

When you start Storybook, you'll see a new addon panel for Visual Tests where you can run tests and view results.

To enable visual testing, sign up for Chromatic and create a project. This will give you access to a fleet of cloud browsers.

Select a project from your project list to finish setup. If you're setting up the addon for the first time, the configuration files and necessary project identifiers will be added for you automatically.

## Configure

The addon includes configuration options covering most use cases by default. You can also fine-tune the addon configuration to match your project's requirements via the `./chromatic.config.json` file. Below are the available options and examples of how to use them.

| Option | Description |
|--------|-------------|
| projectId | Automatically configured. Sets the value for the project identifier<br>`"projectId": "Project:64cbcde96f99841e8b007d75"` |
| buildScriptName | Optional. Defines the custom Storybook build script<br>`"buildScriptName": "deploy-storybook"` |
| debug | Optional. Output verbose debugging information to the console.<br>`"debug": true` |
| zip | Optional. Recommended for large projects. Configures the addon to deploy your Storybook to Chromatic as a zip file.<br>`"zip": true` |

```json
// ./chromatic.config.json
{
  "buildScriptName": "deploy-storybook",
  "debug": true,
  "projectId": "Project:64cbcde96f99841e8b007d75",
  "zip": true
}
```

## Run visual tests

Click the ▶️ Play button in the Storybook sidebar to run visual tests. This will send your stories to the cloud to take snapshots and detect visual changes.

## Review changes

If there are visual changes in your stories, they will be 🟡 highlighted in the sidebar. Click the story and go to the Visual Tests addon panel to see which pixels changed.

If the changes are intentional, ✅ accept them as baselines locally. If the changes aren't intentional, fix the story and rerun the tests using the ▶️ Play button.

When you finish accepting changes as baselines in the addon, you're ready to push the code to your remote repository. This will sync baselines to the cloud for anyone who checks out your branch.

## Automate with CI

The addon is designed to be used in tandem with CI. We recommend using the addon to check for changes during development and then running visual tests in CI as you get ready to merge.

Changes you accept as baselines in the addon will get auto-accepted as baselines in CI so you don't have to review twice.

1. Add a step to your CI workflow to run Chromatic.
   - GitHub Actions
   - GitLab Pipelines
   - Bitbucket Pipelines
   - CircleCI
   - Travis CI
   - Jenkins
   - Azure Pipelines
   - Custom CI provider
2. Configure your CI to include environment variables to authenticate with Chromatic (project token).

## PR checks

Once you successfully set up Chromatic in CI, your pull/merge requests will be badged with a UI Tests check. The badge notifies you of test errors or UI changes that need to be verified by your team. Make the check required in your Git provider to prevent accidental UI bugs from being merged.

## What's the difference between visual tests and snapshot tests?

Snapshot tests compare the rendered markup of every story against known baselines. This means the test compares blobs of HTML and not what the user actually sees. Which in turn, can lead to an increase in false positives as code changes don't always yield visual changes in the component.

Visual tests compare the rendered pixels of every story against known baselines. Because you're testing the same thing your users actually experience, your tests will be richer and easier to maintain.

## Learn about other UI tests

* Component tests for user behavior simulation
* Visual tests for appearance
* Accessibility tests for accessibility
* Snapshot tests for rendering errors and warnings
* Test runner to automate test execution
* Test coverage for measuring code coverage
* End-to-end tests for simulating real user scenarios
* Unit tests for functionality
</document_content>
</document>