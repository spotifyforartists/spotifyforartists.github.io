document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "U")
  ) {e.preventDefault();}
});

setInterval(() => {
  const before = performance.now();
  debugger;
  const after = performance.now();
  if (after - before > 100) {}
}, 1000);