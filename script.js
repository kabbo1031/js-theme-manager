function setTheme(theme){
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

const saved = localStorage.getItem('theme');
if(saved){
  document.body.className = saved;
}
