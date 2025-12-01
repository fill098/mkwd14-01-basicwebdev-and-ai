Yes!
You **CAN** use a real `<table>` element AND still highlight elements on hover — *but only if we fix the structure so the legend and the table are siblings*, because CSS cannot select upward or sideways inside parents.

💡 **The trick:**
Place your legend items **before** the `<table>` and use CSS sibling selectors:

```
.legend-item:hover ~ table .alkali { ... }
```

This works perfectly.

---

# ✅ **WORKING VERSION USING `<table>`**

This example uses:

✔ real `<table>`
✔ `<tr>` `<td>` layout
✔ legend hover highlights all matching element types
✔ pure HTML + CSS (no JS)

---

# 📄 **COPY-PASTE WORKING CODE**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Periodic Table with <table></title>

<style>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* LEGEND ITEMS */
.legend-item {
    display: inline-block;
    padding: 8px 14px;
    margin: 5px 5px 15px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    background: #f7f7f7;
}

/* TABLE ELEMENTS */
table {
    border-collapse: collapse;
}

td {
    width: 70px;
    height: 70px;
    border: 1px solid #aaa;
    text-align: center;
    vertical-align: middle;
    border-radius: 6px;
    transition: 0.25s;
    background: #fafafa;
}

/* COLORS */
.alkali      { background-color: #ffe0e0; }
.alkaline    { background-color: #e0ffe0; }
.transition  { background-color: #e0e0ff; }
.nonmetal    { background-color: #fff2cc; }

/* ============================== */
/*         HOVER LOGIC            */
/* ============================== */
.legend-alkali:hover ~ table .alkali {
    outline: 3px solid red;
    transform: scale(1.1);
}

.legend-alkaline:hover ~ table .alkaline {
    outline: 3px solid green;
    transform: scale(1.1);
}

.legend-transition:hover ~ table .transition {
    outline: 3px solid blue;
    transform: scale(1.1);
}

.legend-nonmetal:hover ~ table .nonmetal {
    outline: 3px solid orange;
    transform: scale(1.1);
}
</style>
</head>
<body>

<h2>Periodic Table (Real &lt;table&gt; Element)</h2>

<!-- LEGEND (must be siblings of table) -->
<div class="legend-item legend-alkali">Alkali Metals</div>
<div class="legend-item legend-alkaline">Alkaline Earth Metals</div>
<div class="legend-item legend-transition">Transition Metals</div>
<div class="legend-item legend-nonmetal">Nonmetals</div>

<!-- REAL TABLE -->
<table>
    <tr>
        <td class="alkali">H</td>
        <td class="nonmetal">He</td>
        <td class="alkali">Li</td>
        <td class="alkaline">Be</td>
        <td class="transition">B</td>
    </tr>

    <tr>
        <td class="nonmetal">C</td>
        <td class="nonmetal">N</td>
        <td class="nonmetal">O</td>
        <td class="nonmetal">F</td>
        <td class="nonmetal">Ne</td>
    </tr>

    <tr>
        <td class="alkali">Na</td>
        <td class="alkaline">Mg</td>
        <td class="transition">Al</td>
        <td class="transition">Si</td>
        <td class="nonmetal">P</td>
    </tr>
</table>

</body>
</html>
```

---

# ✅ **Why this version works**

CSS rule example:

```css
.legend-alkali:hover ~ table .alkali { ... }
```

Works because:

| Selector part          | Meaning                                       |
| ---------------------- | --------------------------------------------- |
| `.legend-alkali:hover` | Hover on this legend item                     |
| `~ table`              | Find the `<table>` that is a **next sibling** |
| `.alkali`              | Apply the highlight to these cells            |

✔ Legend items and the table share the same parent
✔ The table comes **after** the legend items
✔ All `.alkali` inside the `<table>` can be selected

---
