import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={i}
          key={item.title}
        >
          text={item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="THIS IS SPARTA!"
        num={22}
        key="SPARTA"
      >
        <p>TONIGHT WE DINE IN HELL!</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen ? true : false;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

// map and index
// Yes, the `index` parameter is a built-in feature when using the `map()` function in JavaScript, and it is automatically provided as the second argument to the callback function.

// ### How It Works:
// When you use the `map()` method, the callback function you provide is executed once for each element in the array. The callback function accepts **three parameters**:
// 1. **Current Value** (`element` or `num` in our example) — The value of the current array element being processed.
// 2. **Index** — The position (or index) of the current element in the array.
// 3. **Array** — The original array being processed (this parameter is optional and not commonly used).

// Here’s the breakdown of how `map()` works with the index:

// ### Syntax:
// ```javascript
// array.map((element, index, array) => {
//   // Code that uses element, index, and array
// });
// ```

// - `element`: The current item in the array.
// - `index`: The index of the current item.
// - `array`: The original array being processed (optional).

// ### Example of Mapping with Index (Revisited):

// ```javascript
// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits.map((fruit, index) => {
//   return `The fruit at index ${index} is ${fruit}`;
// });

// console.log(result);
// ```

// ### Output:
// ```
// [
//   "The fruit at index 0 is apple",
//   "The fruit at index 1 is banana",
//   "The fruit at index 2 is cherry"
// ]
// ```

// ### Explanation:
// - When the callback function is executed, `fruit` represents the current element (e.g., `'apple'`, `'banana'`, `'cherry'`), and `index` represents its position (e.g., 0, 1, 2).
// - The `index` is automatically provided by JavaScript.

// ### Conclusion:
// Yes, the **index** is automatically provided by the `map()` method as the **second argument** in the callback function. You don’t have to explicitly do anything to make it work — it's part of how `map()` is designed!
