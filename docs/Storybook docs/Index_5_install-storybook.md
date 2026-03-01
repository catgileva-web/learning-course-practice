<document index="5">
    <source>install-storybook.md</source>
    <document_content>
## Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your project's root directory:

```bash
npm create storybook@latest
```

### Install a specific version

Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

The command above will make the following changes to your local environment:
* 📦 Install the required dependencies.
* 🛠 Setup the necessary scripts to run and build Storybook.
* 🛠 Add the default Storybook configuration.
* 📝 Add some boilerplate stories to get you started.
* 📡 Set up telemetry to help us improve Storybook. Read more about it here.

### Watch a video tutorial

### Run the Setup Wizard

If all goes well, you should see a setup wizard that will help you get started with Storybook introducing you to the main concepts and features, including how the UI is organized, how to write your first story, and how to test your components' response to various inputs utilizing controls.

If you skipped the wizard, you can always run it again by adding the `?path=/onboarding` query parameter to the URL of your Storybook instance, provided that the example stories are still available.

## Start Storybook

Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the `storybook` command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you.

```bash
npm run storybook
```

ℹ️
Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may opt-out if you'd not like to share any information.

There are some noteworthy items here:
* A collection of useful links for more in-depth configuration and customization options you have at your disposal.
* A second set of links for you to expand your Storybook knowledge and get involved with the ever-growing Storybook community.
* A few example stories to get you started.

### Troubleshooting

Now that you have successfully installed Storybook and understood how it works, let's continue where you left off in the setup wizard and delve deeper into writing stories.
    </document_content>
</document>