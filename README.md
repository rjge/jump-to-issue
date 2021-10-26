# Jump to issue

This is a chrome extension that infers the issue URL from the branch name on *GitHub* pull request page.

# Usage

## Settings
1. Load this extension to your chrome.
2. Click this extension's icon.
3. Click *Settings* link.
4. Chenge and save settings.
    - **Base url:** issue page's base url.  
      e.g. GitHub is "https://github.com/org/repo/issues/"
    - **Matching pattern (option):** regexp that matches the issue number in the branch name.  
      Enclose the part you want to use in the URL in parentheses "()".  
      No leading and trailing slashes (delimiters) are required.  
      If the branch name starts with a issue number, enter "(\d+).*".

## Normally
1. Open the GitHub pull request page.
2. Click to this extension's icon.
3. Click the button.
4. Or Click the textbox. (The URL will be copied to your clipboard.)
