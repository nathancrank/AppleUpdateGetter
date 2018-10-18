# Apple Update Getter

Grab updates from Apple's update server with a simple node.json script.

# Requirements

- Node.js 8+
- macOS

# Installation

After cloning the repo, run `npm install`.

# Setup

Create two JSON files named `gets.json` and `gots.json`.

Both should have the following structure: `{ urls: [] }`.

Fill the array with a list of URLs from `support.apple.com/downloads`.

Run `node getter.js` to start. URLs will open and download in your default browser and download to its default location, as Apple has made it very difficult to use cURL or wget to get these files.

Quit by using `control-c`. Resume by running again.

URLs opened will be taken from `gets.json`, and added to `gots.json` to prevent duplicate downloads if quit.

In the future I may create an automated method of creating the URL list, but for now, use a web inspector to grab the `div#results` html content, and clean it up manually using a text editor, then place the list into the url array of `gets.json`.

# clickIt.js

This file contains a snippet to start expanding the downloads page to reveal all of the links. Paste everything except the last line of the script into the Web Inspector console and press return. To stop the expander, paste and return the last line of the script.

# Support

Open the files and poke around. It's a super basic script.