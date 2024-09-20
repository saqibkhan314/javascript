let insert = document.querySelector("#insert")
document.addEventListener("keydown",(e) =>{
  insert.innerHTML = `
  <h2>
  <table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</h2>
  `
})