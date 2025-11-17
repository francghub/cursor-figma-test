# Content Directory

This folder contains all text content for the website in structured formats (JSON/Markdown).

## Files

### `sections.json`
Contains all text content for each section of the website. Edit this file to update:
- Page titles
- Section descriptions
- Links and CTAs
- Labels and metadata

## Usage

To update website content:

1. Edit the JSON file with your new text
2. The components will automatically read from these files
3. No code changes needed for text updates

## Future Enhancements

You can also add:
- `blog-posts.json` - Blog entries
- `projects.json` - Project details
- `team.md` - Team member bios
- `about.md` - About page content

## Format

Keep the JSON structure intact when editing:
```json
{
  "section-name": {
    "title": "Your Title",
    "paragraphs": ["Text here"]
  }
}
```

