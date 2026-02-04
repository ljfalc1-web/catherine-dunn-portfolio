# Portfolio CMS Guide

This guide explains how to update your portfolio website using Google Sheets.

## Quick Start

### To update your portfolio:

1. **Upload images to Cloudinary** (drag-and-drop at cloudinary.com)
2. **Copy the image URL** from Cloudinary
3. **Edit your Google Sheet** (add or modify rows)
4. **Click "Publish Changes"** on the publish page
5. **Wait 2-3 minutes** for the site to update

---

## Adding Images to Cloudinary

1. Go to [cloudinary.com](https://cloudinary.com) and sign in
2. Click **Media Library** in the sidebar
3. Drag and drop your image, or click **Upload**
4. After upload, click on the image
5. Click **Copy URL** to copy the image link
6. Paste this URL in the `thumbnail` column of your spreadsheet

**Tip:** Use images that are at least 600px wide for best quality.

---

## Editing the Google Sheet

### Spreadsheet Columns:

| Column | Required? | Description |
|--------|-----------|-------------|
| id | Yes | Unique identifier (e.g., `digital-4`, `print-5`) |
| title | Yes | Project title |
| client | Yes | Client name |
| category | Yes | Must be one of the valid categories (see below) |
| description | Yes | Full project description |
| thumbnail | Yes | Cloudinary image URL |
| year | Yes | Year of the project (e.g., `2024`) |
| results | No | Results/metrics, separated by semicolons |
| embedType | No | `instagram` or `tiktok` for social embeds |
| embedUrl | No | URL for the embedded content |
| externalLink | No | Link to external website |

### Valid Categories:

- `Digital`
- `Print`
- `Social`
- `Influencer Partnerships`
- `Events`

**Important:** Category names must match exactly (including capitalization).

### Results Format:

Separate multiple results with semicolons:
```
50+ placements; 2M impressions; 180% traffic increase
```

### Adding a New Project:

1. Add a new row at the bottom of the sheet
2. Fill in all required columns
3. Use a unique `id` (e.g., if you have `digital-3`, name the next one `digital-4`)
4. Publish your changes

### Editing an Existing Project:

1. Find the row you want to edit
2. Update any cells
3. Publish your changes

### Removing a Project:

1. Delete the entire row
2. Publish your changes

---

## Publishing Changes

After updating the spreadsheet:

1. Go to **[your-site.vercel.app/publish.html](publish.html)**
2. Click the **"Publish Changes"** button
3. Wait 2-3 minutes for the site to rebuild
4. Refresh your portfolio site to see the changes

---

## Troubleshooting

### Changes not appearing?
- Make sure you clicked "Publish Changes" after editing
- Wait at least 3 minutes, then refresh the page
- Check that all required columns are filled in
- Verify the category name matches exactly

### Image not showing?
- Make sure you copied the full Cloudinary URL
- The URL should start with `https://res.cloudinary.com/`
- Try opening the URL in a new browser tab to verify it works

### Project not appearing?
- Check that all required columns have values
- Verify the category is spelled correctly
- Make sure the `id` is unique

---

## Need Help?

Contact Louis for technical assistance.
