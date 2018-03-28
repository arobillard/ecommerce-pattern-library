---
tab-bar:
  width: 700
  padding: '1.5rem'
  desc: |
    The tab bar is used to navigate between tab pages. The tab bar uses jQuery to read the `href` to target the proper page to display, therefore the tab bar each `href` must correspond with a tab page `id`.
tab-page:
  width: 700
  padding: '1.5rem'
  desc: |
    The tab page code will vary depending on use. Each tab grouping can have up to three tab pages. Make sure to change the tab page `id` on each page beginning with `#tab-page-1` through `#tab-page-3`.

    For this pattern, view the pattern code and **copy paste the html directly**. Include the outer div with classes `pad-t-2` and `pad-b-2` for consistent spacing.
---
Tabbed sections are to be used inside of a `<section>` with an appropriate `section-highlight` class. The tabbed section is used when multiple pages or categories of information are required to be displayed. Examples include product information and the checkout stages.
