<document index="66">
<source>Upgrading Storybook.md</source>
<document_content>
Upgrading Storybook

React
Vue
Angular
Web Components
More
The frontend ecosystem is a fast-moving place. Regular dependency upgrades are a way of life, whether upgrading a framework, library, tooling, or all of the above! Storybook provides a few resources to help ease the pain of upgrading.

Upgrade script

The most common upgrade is Storybook itself. Storybook releases follow Semantic Versioning. We publish patch releases with bug fixes continuously, minor versions of Storybook with new features every few months, and major versions of Storybook with breaking changes roughly once per year.

To help ease the pain of keeping Storybook up-to-date, we provide a command-line script:

npm
npx storybook@latest upgrade
The upgrade command will use whichever version you specify. For example:

storybook@latest upgrade will upgrade to the latest version
storybook@7.6.10 upgrade will upgrade to 7.6.10
storybook@7 upgrade will upgrade to the newest 7.x.x version
After running the command, the script will:

Upgrade all Storybook packages in your project to the specified version
Run the relevant automigrations factoring in the breaking changes between your current version and the specified version
ℹ️
In addition to running the command, we also recommend checking the MIGRATION.md file, for the detailed log of relevant changes and deprecations that might affect your upgrade.
Verifying the upgrade

To help you verify that the upgrade was completed and that your project is still working as expected, the Storybook CLI provides the doctor command that allows you to do a health check on your project for common issues that might arise after an upgrade, such as duplicated dependencies, incompatible addons or mismatched versions. To perform the health check, run the following command with your package manager of choice:

npm
npx storybook@latest doctor
Automigrate script

Storybook upgrades are not the only thing to consider: changes in the ecosystem also present challenges. For example well-known frontend frameworks, such as Angular, Next.js or Svelte have been rolling out significant changes to their ecosystem, so even if you don't upgrade your Storybook version, you might need to update your configuration accordingly. That's what Automigrate is for:

npm
npx storybook@latest automigrate
It runs a set of standard configuration checks, explains what is potentially out-of-date, and offers to fix it for you automatically. It also points to the relevant documentation so you can learn more. It runs automatically as part of storybook upgrade command, but it's also available on its own if you don't want to upgrade Storybook.

Prereleases

In addition to the above, Storybook is under constant development, and we publish pre-release versions almost daily. Pre-releases are the best way to try out new features before they are generally available, and we do our best to keep them as stable as possible, although this is not always possible.

To upgrade to the latest pre-release:

npm
npx storybook@next upgrade
The upgrade command will use whichever version you specify. For example:

storybook@next upgrade will upgrade to the newest pre-release version
storybook@8.0.0-beta.1 upgrade will upgrade to 8.0.0-beta.1
storybook@8 upgrade will upgrade to the newest 8.x version
If you'd like to downgrade to a stable version, manually edit the package version numbers in your package.json and re-install.

ℹ️
Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may opt-out if you'd not like to share any information.
</document_content>
</document>