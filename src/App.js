// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// =================
import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';
// import user from './user.json';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}
