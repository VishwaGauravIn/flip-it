import { useEffect } from "react";

export default function ThemeToggle(params) {
    useEffect(() => {
        const darkMode = document.querySelector(".theme-toggle");
      
        function darkify() {
          document.documentElement.classList.toggle("theme--night");
          document.documentElement.classList.toggle("dark");
        }
      
        darkMode.addEventListener("click", darkify);
      
        darkify();
        
      }, [])
  return (
    <>
      <div class="theme-toggle theme-toggle-js">
        <span class="moon"></span>
        <span class="sun"></span>
        <small class="sun__ray"></small>
        <small class="sun__ray"></small>
        <small class="sun__ray"></small>
        <small class="sun__ray"></small>
        <small class="sun__ray"></small>
        <small class="sun__ray"></small>
      </div>
    </>
  );
}
