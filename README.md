# Pinnacle Pulse website

This is a simple GitHub Pages site containing only:

- the newest Pinnacle Pulse newsletter;
- an archive of earlier newsletters.

## Upload to GitHub

1. Create a public repository called `pinnacle-pulse`.
2. Upload every file and folder from this package.
3. Go to **Settings > Pages**.
4. Choose **Deploy from a branch**.
5. Select **main** and **/ (root)**, then save.

## Add the PDFs

Open the `newsletters` folder and upload the PDF files using the filenames referenced in `script.js`.

The current latest file should be named:

`latest.pdf`

## Update each month

1. Rename the old `latest.pdf` to its month, for example `august-2026.pdf`.
2. Upload the new newsletter as `latest.pdf`.
3. Open `script.js` and change the latest month/title.
4. Add the old edition to the top of the `previous` list.
5. Commit the changes.

The logo used is the official white Pinnacle Hospitality Group logo from the corporate website.
