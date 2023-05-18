const d = document;
const ls = localStorage;

export default function darkTheme (btn){

    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");
    let luna = "🌙", sol = "☀️";

    const darkMode = () => {
        ls.setItem("theme", "dark");
        $selectors.forEach(el => el.classList.add("bg-black"));
        $themeBtn.textContent = sol;
    };
    const lightMode = () => {
        ls.setItem("theme", "light");
        $selectors.forEach(el => el.classList.remove("bg-black"));
        $themeBtn.textContent = luna;
    };

    d.addEventListener("click", (e) => {
        if( e.target.matches(btn) ){    
            if( $themeBtn.textContent === luna ){
                darkMode();
            }else{
                lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) => {

        if( ls.getItem("theme") === null ) ls.setItem("theme", "light");
        if( ls.getItem("theme") === "light" ) lightMode();
        if( ls.getItem("theme") === "dark" ) darkMode();

    })

}