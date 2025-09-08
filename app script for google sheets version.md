Below I give:

1. A ready-to-copy Apps Script you can paste into your spreadsheet.
2. Exact steps to install it and wire the trigger.
3. A short fallback formula option if you still prefer a pure-formula approach.

---

# 1) Apps Script — automatic clickable "Open Map" on each new response

Open your spreadsheet → **Extensions → Apps Script** and paste this whole script (replace the sheet name if yours is different):

```javascript
/**
 * Add clickable "Open Map" hyperlink into the "View in Map" column
 * when a new Google Form response is submitted.
 *
 * Installable trigger: From spreadsheet -> On form submit
 */
function onFormSubmit(e) {
  try {
    // Sheet name that contains form responses (adjust if yours is different)
    const SHEET_NAME = 'Form_Responses';

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Read header row (trimmed, case-insensitive)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
      .map(h => (h || '').toString().trim());

    function colIndex(name) {
      name = name.toString().trim().toLowerCase();
      for (let i = 0; i < headers.length; i++) {
        if (headers[i].toString().trim().toLowerCase() === name) return i + 1;
      }
      return -1;
    }

    const lonCol = colIndex('Longitude');
    const latCol = colIndex('Latitude');
    let viewCol = colIndex('View in Map');

    // Ensure we have latitude & longitude columns
    if (lonCol === -1 || latCol === -1) {
      // nothing to do if lat/lon columns don't exist
      Logger.log('Latitude or Longitude column not found. Exiting.');
      return;
    }

    // If View in Map column doesn't exist, add it as the last column and set header
    if (viewCol === -1) {
      viewCol = sheet.getLastColumn() + 1;
      sheet.insertColumnAfter(sheet.getLastColumn());
      sheet.getRange(1, viewCol).setValue('View in Map');
    }

    // Determine the row that was just submitted
    // e.range should be available for spreadsheet-bound form submit events
    let row = (e && e.range && e.range.getRow) ? e.range.getRow() : null;
    if (!row) {
      // fallback: use last row
      row = sheet.getLastRow();
    }

    const lat = sheet.getRange(row, latCol).getValue();
    const lon = sheet.getRange(row, lonCol).getValue();

    if (!lat || !lon) {
      Logger.log('Latitude or Longitude is empty for row ' + row);
      return;
    }

    const mapsUrl = 'https://www.google.com/maps?q=' + lat + ',' + lon;

    // Create a clickable "Open Map" rich text value to display that text as a link
    const rich = SpreadsheetApp.newRichTextValue()
      .setText('Open Map')
      .setLinkUrl(mapsUrl)
      .build();

    sheet.getRange(row, viewCol).setRichTextValue(rich);
  } catch (err) {
    Logger.log('onFormSubmit error: ' + err);
  }
}
```

### How to wire/enable it

1. In the Apps Script editor, click **File → Save**.
2. Click the clock/trigger icon (left sidebar) or go to **Triggers**.
3. **Add Trigger**:

   * Choose function: `onFormSubmit`
   * Event source: **From spreadsheet**
   * Event type: **On form submit**
   * Click **Save** — authorize the script when prompted.
4. Test: submit the form once. The script will run and populate column `View in Map` in the same row with a clickable **Open Map** link.

---

<img width="1409" height="557" alt="image" src="https://github.com/user-attachments/assets/22f34cfd-0919-410d-a5b4-9eb6150772b3" />



# 2) Why this is better than trying to put ARRAYFORMULA into the header

* Your sheet UI prevented formulas in that header row.
* If Forms inserts the new response row at the top, an `ARRAYFORMULA` sitting on the second row can get moved down and break.
* Apps Script writes only to the new response row and uses a **rich text link** so the cell reads “Open Map” and clicking it opens Google Maps.

---

# 3) Quick fallback (pure-formula) — if you still prefer formula approach

If you want a pure-formula column and you can ensure the formula cell will not be overwritten by incoming rows (note: Forms sometimes insert new rows at top which can push formulas), use this in **F2** (and keep F1 as plain header "View in Map"):

```excel
=ARRAYFORMULA(IF( ROW(A2:A) = 0, "View in Map",
  IF( (LEN(D2:D) + LEN(E2:E)) > 0,
       HYPERLINK("https://www.google.com/maps?q=" & E2:E & "," & D2:D, "Open Map"),
       "" )
))
```

But (important): if your Sheet inserts new responses at the top, the safest method is Apps Script (above). The formula approach works well if responses **append to the bottom** and the formula stays anchored.

---

# 4) Quick troubleshooting

* If the script doesn’t trigger, verify you created the trigger and authorized the script.
* Confirm header names exactly: `Longitude`, `Latitude`, `View in Map` — if your headers differ, change them in the script (case-insensitive search is used, but spelling must match).
* If you want the `View in Map` column to be at a specific position (e.g., always column F), I can update the script to insert or move the column to F specifically.

---
