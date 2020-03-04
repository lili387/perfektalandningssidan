const darkSwitch = document.getElementById('checkbox');
window.addEventListener('load', () => {
  if (checkbox) {
    initTheme();
    checkbox.addEventListener('change', () => {
      resetTheme();
    });
  }
});

function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('checkbox') !== null &&
    localStorage.getItem('checkbox') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('data-theme');
}

function resetTheme() {
  if (checkbox.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('checkbox', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('checkbox');
  }
}

function myFunction() {
  var x = document.getElementById("dark-light-switch");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  } else {
    x.innerHTML = "Light Mode";
  }
}
