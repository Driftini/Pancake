# Pancake
A Windows 10-inspired theme for WINDOWS93, also coming with a couple extra tools.
## Features
The theme will change the looks of pretty much everything except most of the applications.
There will also be a dashboard usable to quickly customize its settings, for example you can choose whether to use the light theme or the dark one.
## Installation
### Using the pre-generated Setup script
Get the desired version's `PancakeSetup.js` from the repo's releases page, drag and drop it into WINDOWS93.
### Generating a new Setup script
This is completely optional, but allows you to easily install unreleased development versions or custom Pancake versions (although this might require editing `SETUPGEN.js`).

**NOTE: You'll need Node.js for this to work.**

Clone the desired branch and open your OS's terminal in the resulting folder.

Run `node SETUPGEN.js`: after a while (should take no more than a couple seconds) you'll be informed that your Setup script has been generated. Finally, import the script into WINDOWS93.
### Running the Setup
Execute the installer in the Terminal: you will be told that **proceeding will result in any unsaved data being lost.**

Upon proceeding, the setup program will take up the entire screen. Here you can choose how to install Pancake:
* Copying the version packed in the installer to WINDOWS93
* ~~Fetching the latest version from the GitHub repo~~

Next, the files will be copied into WINDOWS93. ~~The process may take a little longer if you're fetching the latest version from GitHub.~~

You will be able to edit some settings, such as:
* ~~Automatic update checking~~
* ~~Automatic update installation~~
* Theme (Light/Dark/Classic)
* ~~Boot logo replacement~~
* RSS feed tray icon
* ~~Dashboard tray icon~~

Keep in mind you can also change the settings after the installation by accessing the dashboard.

Once you're done with customization, WINDOWS93 will reboot back into the desktop.
## Uninstalling
If you wish to entirely remove Pancake from WINDOWS93, access the dashboard and go to the settings tab.

Scroll down until you find the **Uninstall Pancake** button.

Clicking on it will result in a prompt warning you that **all the Pancake data, including settings and any eventual extra files stored in /a/.pancake/ will be lost upon proceeeding**.

On confirmation, Pancake will erase all its files and WINDOWS93 will reboot.
