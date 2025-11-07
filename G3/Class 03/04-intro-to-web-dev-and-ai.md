# 🎯 Introduction to Web Development and AI for development– Session 4
Trainer: Tijana Stojanovska | Contact: stojanovska_tijana@outlook.com

---

## ⚙️ Problems Programmers Face
- Naming things is really hard.  
- Understanding previously written code.  
- Finding the right tool for a task.  
- Finding mistakes and broken things (bugs).  

---

## 🧠 Formulating a Solution
A solution to a problem can be written in code, but it can also be communicated through other means.  

Common methods for expressing solutions include:  
- Text / Verbal explanation  
- Drawing (diagrams, flowcharts)  
- Pseudocode  

---

## 💻 Working Out a Solution Using Pseudocode
Solutions can be expressed using simplified, language-independent steps.  
**Pseudocode** represents a way to describe the logical flow of a solution.  

It may use programming-like keywords but is not tied to any particular language.  
Pseudocode helps everyone understand the logic, regardless of programming background.  

> There is no single “correct” pseudocode format.  

---

## 💡 Pseudocode Example
**Task:** Write a program that calculates the sum of two numbers.  

**Steps:**  
1. Start the program.  
2. Read the first input and save it in variable `n1`.  
3. Read the second input and save it in variable `n2`.  
4. Sum both inputs and save the result in variable `sum`.  
5. Print the value of `sum`.  
6. End the program.  

---

## 🔶 Working Out a Solution Using Flowcharts
A solution can also be represented through a **flowchart**, which visualizes the sequence of events.  
Flowcharts consist of shapes connected by arrows that indicate the flow of control.  
Different shapes have specific meanings (start, process, decision, etc.).  

Example: Flowchart – Sum of Two Numbers  
![Flowchart example](img/flowchart_sum_of_two_numbers.png)


---

## ⚙️ Algorithms and How to Write Them
When we want to instruct a machine on what to do, we give it **instructions**.  
An algorithm is a finite sequence of operations designed to solve a specific problem.  

When programming, we give sets of instructions (algorithms) that tell the computer how to solve problems.  

---

### 🧩 Example Problem
**Problem:**  
I need to find the accurate sum of two numbers.  

**Solution:**  
- The user enters two numbers.  
- The program sums them 
- The program displays the result  

**Pseudocode:**  
```text
Input => number1, number2  
result = number1 + number2  
Output => result
```

---

### 🧠 Pseudocode Example 2
```text
Begin
    a = input()
    b = input()
    result = a + b
    return result
End
```

---

## 🧩 Simple Task
Write a simple program that performs euro/denar conversion in both directions.  

The user enters a value and specifies the currency.  
If the currency is **denar**, the program outputs euros.  
If the currency is **euro**, the program outputs denars.  

**Time to complete:** 10–15 minutes  

---

### Attempt No. 1
1. Input value and currency.  
2. Calculate using the conversion rate.  
3. Output the converted value.  

---

### Attempt No. 2
1. Input `currencyAmount` and `currencyType`.  
2. Check if `currencyType` is **euro** or **denar**.  
3. Multiply or divide by the appropriate conversion rate.  
4. Output the `convertedCurrencyAmount`.  

---

### Attempt No. 3
1. Input `currencyAmount` (the amount of money) and `currencyType` (**euro** or **denar**).  
2. If `currencyType` is **euro**, multiply `currencyAmount` by `rate` (61.5).  
3. If `currencyType` is **denar**, divide `currencyAmount` by `rate` (61.5).  
4. Output the converted value.  

---

### Attempt No. 4
![Flowchart solution](img/flowchart_currency_conversion.png)

---

## 💬 Using AI for Pseudocode (Iterative Prompting)

### 🧩 Task  
Write pseudocode for a program that converts **euro ↔ denar** using rate = 61.5.

---

### 🪜 Step 1 – First Prompt  
> “Write pseudocode for euro/denar conversion.”

**Possible AI Output:**
`START
INPUT amount, currency
IF currency = "euro" THEN
PRINT amount * 61.5
ELSE
PRINT amount / 61.5
END IF
END`

**Assessment:**  
- ✅ Works correctly  
- ⚠️ No comments or validation  

---

### 🪜 Step 2 – Improve Prompt  
> “Add comments so a beginner understands.”

**Possible AI Output:**
`START
// Ask for amount and currency
INPUT amount, currency
// Convert based on type
IF currency = "euro" THEN
PRINT amount * 61.5
ELSE IF currency = "denar" THEN
PRINT amount / 61.5
ELSE
PRINT "Invalid currency"
END IF
END`

**Assessment:**  
- ✅ Clearer logic and explanation  
- ⚠️ Still no handling for invalid numbers  

---

### 🪜 Step 3 – Handle Edge Cases  
> “Handle negative or missing input.”

**Possible AI Output:**
`START
INPUT amount, currency
IF amount <= 0 THEN
PRINT "Invalid amount"
ELSE IF currency = "euro" THEN
PRINT amount * 61.5
ELSE IF currency = "denar" THEN
PRINT amount / 61.5
ELSE
PRINT "Invalid currency"
END IF
END`

**Assessment:**  
- ✅ Adds validation  
- ✅ Ready for beginner understanding  

---

## ⚙️ Basic Programming Methodologies
Some solutions to problems are very common in programming.  
Because they appear frequently, they are expressed through universal **concepts** used in most programming languages.  
While syntax may vary, the **core functionality** remains consistent across languages.  

---

## 🔸 Making Decisions – IF / THEN / ELSE
We use **logical expressions** that can only be **true** or **false**.  
“If” checks a condition and executes different actions depending on the result.  

**Example:**
```text
If condition then
    true action
else
    false action
End-if
```

**Example 2:**
```text
If first > second then
    print "First number is larger"
else
    print "First number is not larger"
End-if
```

**Flowchart**:
![Flowchart if-else](img/flowchart_numbers.png)

---

## 🔹 Nested IF / THEN / ELSE
```text
If first > second then
    print "First number is bigger"
else
    If first < second then
        print "Second number is bigger"
    else
        print "They are equal"
    End-if
End-if
```

---

## ⚙️ Non-Binary Decisions – SWITCH
Sometimes we have more than two outcomes.  
Implemented differently across languages, but very similar in **C#** and **JavaScript**.  

**Example:**
```text
switch day
    case 1: print "Monday"   break
    case 2: print "Tuesday"  break
    ...
    default: print "No such day"  break
end-switch
```

---

## 🔁 Repeating Instructions – FOR
```text
for initial-expression; test-expression; loop-expression
    loop-statements
end-for
```

**Example:**
```text
for i = 0; i < 5; i = i + 1
    print i
end-for
```

Execution sequence:  
1–2–3–4–2–3–4... until the condition becomes false.  

---

## 🔁 Repeating Instructions – WHILE
**Example:**
```text
A = 1
WHILE (A < 6)
    PRINT A
    A = A + 1
END WHILE
```

**Equivalent FOR example:**
```text
for i = 0; i < 5; i = i + 1
    print i
end-for
```

`i = i + 1` is the same as `i++`.  
`i = i - 1` is the same as `i--`.  

---

## 🧮 Collections (Arrays)
Computers are efficient with repetitive data.  
**Collections** or **arrays** store related values together and allow easy access using **indexes** (usually zero-based).

**Example:**
```text
students = ["Andrej", "Bazhe", "Branko"]
for i = 0; i < students.length; i = i + 1
    print students[i]
end-for
```

Indexes:  
- students[0] → Andrej  
- students[1] → Bazhe  
- students[2] → Branko  

---

## 🧾 Final Grade Task – Homework
Write an algorithm to determine a student’s final grade and whether they pass or fail.  

**Requirements:**
- The final grade is the **average of four marks**.  
- The four marks are entered as input.  
- If the final grade ≥ 3 → passing.  
- Otherwise → failing.  
- Write pseudocode.  
- Design a flowchart.
- You can use AI help, but AI response should be assessed (think about negative scenarios) 

---

### 📚 References
- https://en.wikibooks.org/wiki/BASIC_Programming/Beginning_BASIC/Control_Structures/IF...THEN...ELSE  
- https://en.wikibooks.org/wiki/Programming_Fundamentals/For_Loop  
- https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/  

---

## 🗨️ Questions?
