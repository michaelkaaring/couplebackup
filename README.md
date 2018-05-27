# Couple backup tool

This is a simple tool to backup your data from the couple.me app. It's very rough in the edges, as it was created in a hurry just to be sure people had the opportunity to backup their data in case Couple shut's down their app.

The tool will fetch a JSON file of all your messages. Give you options to download all your moments and all your secrets(locked moments).

## Download

macOS: https://github.com/michaelkaaring/couplebackup/releases/download/v1.0.1/Couple.backuptool-1.0.1.dmg
Windows: https://github.com/michaelkaaring/couplebackup/releases/download/v1.0.1-win/Couple.backuptool.Setup.1.0.1.exe

## How to use

First, you log in using your login to Couple. Then you select a location where you want the tool to save your data. And after that just sit back and relax and wait for the tool to do the rest. And don't let your computer go to sleep, as that may interrupt the backup.

## What could be done better or is missing
I know this app is simple and not "nice". So pullrequests are welcome.
- A viewer which loads Timeline.json and displays the messagehistory in a messaging app "fashion".
- Errorhandling
- Proper handling to continue download if computer dies/network issues.
- Ability to check if timeline has changed since the last one fetched, and then give the option to download the missing moments.
- A proper design
- A refactor should probably be done.
