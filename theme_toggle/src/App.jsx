import { useEffect, useState } from "react";
import "./App.css";

function App() {

  // 1️⃣ Website ka current theme
  const [theme, setTheme] = useState("light");

  // 2️⃣ User ne button dabaya ya nahi
  const [manual, setManual] = useState(false);

  // 3️⃣ System theme sirf page load par check karo
  useEffect(() => {

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Agar user ne button nahi dabaya
    if (manual === false) {
      if (mediaQuery.matches === true) {
        setTheme("dark");   // system dark hai
      } else {
        setTheme("light");  // system light hai
      }
    }

    // System theme change hone par
    function onSystemThemeChange(event) {
      if (manual === false) {
        if (event.matches === true) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    }

    mediaQuery.addEventListener("change", onSystemThemeChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", onSystemThemeChange);
    };

  }, []); // 🔥 beginner ke liye empty dependency

  // 4️⃣ Button click par
  function handleTheme() {
    setManual(true); // ab user ka decision

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div id="container" className={theme}>
      <h1>THEME TOGGLE</h1>
      <button onClick={handleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default App;
