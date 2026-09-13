# Dev Stack

A modern, responsive web application built with React, Vite, TypeScript and Tailwind CSS. Dev Stack helps developers stack all the technology they explore so far of their development journey across Frontend, Backend, Database, Languages, Styling, and DevOps.

🔗 **Live Site:** [https://jovial-babka-513ddb.netlify.app/](https://jovial-babka-513ddb.netlify.app/)

---

## 🛠️ Technologies Used

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Notifications:** React-Toastify
- **Build Tool:** Vite 8
- **Data Source:** Dynamic JSON (`/data.json`)

---

## 🚀 Key Features

1. **Dynamic Technology Section**
   - 12 real-world technologies are fetched dynamically via `fetch` from a local JSON, displaying category chips, ratings, and difficulty badges.

2. **Interactive "Your Stack" Section**
   - Select technologies to assemble a custom stack in a dedicated sidebar.
   - Built-in duplicate prevention alerts users if a technology has already been chosen.
   - Remove individual technologies or clear the entire stack with a single click.

3. **Smooth, Responsive UI and toast Notifications**
   - Pixel-perfect layout inspired by modern design standards, responsive across mobile, tablet, and desktop screens.
   - Custom-themed React-Toastify alerts

---

## 💡 React Core Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:** JSX full form is JavaScript XML. JSX lets us write HTML-like code inside JavaScript. We use it because it is easy to understand and use at the same time.

### 2. What is the difference between props and state?

**Answer:** Props is data passed by parent component to child component and state is data that a component manages can change when something happens.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** `useState` lets us create and update data inside a component. I used it in `App.tsx` for the technologies, selected stack, and loading state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` is used when we need to do something after the component renders. `useEffect` is needed to load JSON data because it can handle the fetch and error.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:** React uses the key to know which item is which when the list changes. A unique key helps React update the right item without unnecessary changes.

### 6. What is conditional rendering? Show one place you used it.

**Answer:** Conditional rendering means if some condition is fullfuiled then change something in the component mean render new things. It can show different UI based on a condition. In this project, I used it to show your stack component. When the stack is empty, it shows "Your stack is empty." Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** A parent sends data to a child through props. A child can send something back by calling a function that the parent passed as a prop.
