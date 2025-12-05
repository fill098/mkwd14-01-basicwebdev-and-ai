# Advanced Beginner HTML Exercise 

This exercise will help you build a **slightly more complex HTML
project**, but still beginner-friendly.\
You will practice: **navigation menus, internal links, external links,
lists, images, tables, a simple contact form, inline colors and fonts**,
and multi‑section layout (no advanced CSS yet).

------------------------------------------------------------------------

# 🎯 Project Goal

Create a **mini personal website** with multiple sections **on a single
HTML page**, using smooth navigation and well-structured content.

------------------------------------------------------------------------

# 🧩 Requirements

## 1. Basic HTML Structure

Your page must include: - `<!DOCTYPE html>` - `<html>`, `<head>`,
`<body>` - A **title** in the `<title>` tag - A **favicon** (optional
but recommended)

Example:

``` html
<link rel="icon" href="images/favicon.png">
```

------------------------------------------------------------------------

## 2. Navigation Menu (Internal Links)

At the top of your page, create a **navigation bar** using a list:

Sections: - Home - Projects - Skills - Gallery - Table of Favorites -
Contact

------------------------------------------------------------------------

## 3. Home Section

Use: - A large `<h1>` - A paragraph about you or your chosen topic -
Some colored or styled text *(preferably use external css file)*:

``` html
<p style="color: green; font-family: Verdana;">
  Welcome to my page!
</p>
```

You may also add a small profile image.

------------------------------------------------------------------------

## 4. Projects Section

Create a list of 3--5 example "projects" using: - An **unordered
list** - Each project name linking to an external website\
(for example: GitHub, Wikipedia, YouTube, StackOverflow)

Example:

``` html
<li><a href="https://www.wikipedia.org" target="_blank">History Project</a></li>
```

------------------------------------------------------------------------

## 5. Skills Section

Create an **ordered list** of skills or topics you're learning.

Add a short description using `<strong>`, `<em>`, `<mark>`, etc.

Example:

``` html
<ol>
  <li><strong>HTML</strong> – structure of web pages</li>
  <li><em>CSS</em> – simple styling</li>
  <li><mark>JavaScript</mark> – interactivity (later!)</li>
</ol>
```

------------------------------------------------------------------------

## 6. Gallery Section

Include **at least 3 images**, each with: - A proper `alt` attribute\
- Width attributes or simple inline styling

Example:

``` html
<img src="images/photo1.jpg" alt="A mountain" width="250">
```

Use a **figure** element for at least one image:

``` html
<figure>
  <img src="images/city.jpg" alt="City view" width="250">
  <figcaption>City skyline at night</figcaption>
</figure>
```

------------------------------------------------------------------------

## 7. Table of Favorites

Create a table with: - A `<thead>` - A `<tbody>` - At least 3 rows\
- At least 3 columns

Suggested columns: - Category - Favorite Item - Why You Like It

Example:

``` html
<table border="1">
  <thead>
    <tr>
      <th>Category</th>
      <th>Favorite</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Movie</td>
      <td>Inception</td>
      <td>Mind-bending story</td>
    </tr>
  </tbody>
</table>
```

------------------------------------------------------------------------

## 8. Contact Section (Simple Form)

Create a basic form using: - `<label>` - `<input type="text">` -
`<input type="email">` - `<textarea>` - A submit button

Example:

``` html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea><br><br>

  <input type="submit" value="Send">
</form>
```

------------------------------------------------------------------------

## 9. External Resources Section

Create a short list of 3+ useful websites: - MDN - W3Schools -
FreeCodeCamp - Wikipedia

Links must open in **new tabs** using `target="_blank"`.

------------------------------------------------------------------------

## 10. Footer

Add a footer with: - Your name or username - The current year - A link
back to the **top of the page**

Example:

``` html
<footer>
  <p>&copy; 2025 My Website</p>
  <a href="#home">Back to top</a>
</footer>
```

------------------------------------------------------------------------

# 🎉 What You Will Learn

By completing this exercise, you will practice:

-   Structuring a complex HTML document\
-   Using navigation and internal links\
-   Working with images and figure captions\
-   Formatting text and applying simple inline styling\
-   Building tables\
-   Creating basic forms\
-   Linking to external websites\
-   Organizing content into clear sections

This is an excellent step before you start learning **layout (Flexbox /
Grid)** and external CSS files.

Good luck and have fun! 🚀
