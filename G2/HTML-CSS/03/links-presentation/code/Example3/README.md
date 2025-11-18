# Example 3

This folder contains the source code for Example 3 of the links presentation.

- [Index](./index.html) ([Source](./README.md))
- [Movies](./movies/) ([Movies Source](./movies/README.md))
- [Images](./images/) ([Images Source](./images/README.md))

---

## Source code: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title> Hyperlinks</title>
</head>
<body>
	<h1> Introduction to links</h1>
	<!--absolute link-->
	<a href="https://www.google.com/" target="_blank"> go to Google</a>
	<br/>
	<a href="https://www.freeformatter.com/lorem-ipsum-generator.html" target="_blank">Lorem Ipsum Genereator</a>
	<br/>
	<!--relative link to index from movies directory-->
	<a href="movies/index.html"> go to movies page </a>
	<h2> Anchors </h2>
	<a href="#text1"> naslov 1 </a>
	<a href="#text2"> naslov 2 </a>
	<a href="#text3"> naslov 3 </a>

	<img src="images/image1.jpg" alt="image description"/>
	<p id="text1">
		<h2>Naslov 1</h2>
	  <!-- ...truncated for brevity... -->
```

---

[⬅️ Back to Code Examples](../)
