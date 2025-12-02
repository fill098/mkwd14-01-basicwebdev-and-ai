You're **absolutely right** — the previous method cannot work because:

💥 **CSS cannot select a sibling of the PARENT from a CHILD.**
In my earlier code:

```
.legend .alkali:hover ~ .table
```

`.alkali` is *inside* `.legend`
`.table` is a *sibling of .legend*, **not** a sibling of `.alkali`.

➡️ **So CSS cannot reach it.**
This is why nothing happens.

---

# ✅ **THE FIX**

To make it work **without JavaScript**, each **legend item must be a direct sibling of the table**, not inside a wrapper.

✔ Legend items and the table must share the same parent.
✔ No containers around legend items.

---

# 🎉 **100% WORKING VERSION (CSS-only highlight)**

Copy–paste this.
This version **WILL WORK**, guaranteed.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Working CSS Hover Periodic Table</title>

<style>
body { font-family: Arial, sans-serif; padding: 20px; }

/* Legend items MUST be siblings of the table */
.legend-item {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 8px 12px;
    margin: 5px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
}

/* Table */
.table {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 70px);
    gap: 10px;
}

.element {
    padding: 15px;
    border: 1px solid #aaa;
    border-radius: 6px;
    text-align: center;
    background: #f2f2f2;
    transition: 0.25s;
}

/* COLORS */
.alkali      { background-color: #ffe0e0; }
.alkaline    { background-color: #e0ffe0; }
.transition  { background-color: #e0e0ff; }
.nonmetal    { background-color: #fff2cc; }

/* ============================== */
/* WORKING HOVER LOGIC            */
/* ============================== */

/* Hovering the legend item → highlight table items */
.legend-alkali:hover ~ .table .alkali {
    outline: 3px solid red;
    transform: scale(1.12);
}

.legend-alkaline:hover ~ .table .alkaline {
    outline: 3px solid green;
    transform: scale(1.12);
}

.legend-transition:hover ~ .table .transition {
    outline: 3px solid blue;
    transform: scale(1.12);
}

.legend-nonmetal:hover ~ .table .nonmetal {
    outline: 3px solid orange;
    transform: scale(1.12);
}
</style>
</head>
<body>

<h2>CSS-Only Hover Periodic Table</h2>

<!-- THESE MUST BE DIRECT SIBLINGS OF .table -->
<div class="legend-item legend-alkali">Alkali metals</div>
<div class="legend-item legend-alkaline">Alkaline earth metals</div>
<div class="legend-item legend-transition">Transition metals</div>
<div class="legend-item legend-nonmetal">Nonmetals</div>

<!-- TABLE (must come after all the legend items) -->
<div class="table">
    <div class="element alkali">H</div>
    <div class="element nonmetal">He</div>
    <div class="element alkali">Li</div>
    <div class="element alkaline">Be</div>
    <div class="element transition">B</div>

    <div class="element nonmetal">C</div>
    <div class="element nonmetal">N</div>
    <div class="element nonmetal">O</div>
    <div class="element nonmetal">F</div>
    <div class="element nonmetal">Ne</div>

    <div class="element alkali">Na</div>
    <div class="element alkaline">Mg</div>
    <div class="element transition">Al</div>
    <div class="element transition">Si</div>
    <div class="element nonmetal">P</div>
</div>

</body>
</html>
```

---

# ✅ **Why this works**

This structure:

```
.parent
 ├─ legend-item (hovered)
 ├─ legend-item
 ├─ legend-item
 ├─ legend-item
 └─ table
```

Is valid for CSS:

```
.legend-alkali:hover ~ .table .alkali
```

Because:

✔ `.legend-alkali` and `.table` are **siblings**
✔ `.table` is **after** `.legend-alkali`
✔ CSS can reach `.table .alkali`

---
