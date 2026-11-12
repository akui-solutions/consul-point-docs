/**
 * En pantallas estrechas, las tablas de tres columnas o más se muestran como
 * fichas (una por fila). Para eso cada celda necesita el nombre de su columna:
 * se copia de la cabecera a `data-label` y se marca la tabla con `table-stack`.
 * Ver los estilos `.table-stack` en src/css/custom.css.
 */
function labelTables(): void {
  document.querySelectorAll<HTMLTableElement>('.markdown table').forEach((table) => {
    const headers = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent?.trim() ?? '');
    if (headers.length < 3) return;
    table.classList.add('table-stack');
    table.querySelectorAll('tbody tr').forEach((row) => {
      Array.from(row.children).forEach((cell, i) => {
        if (headers[i]) cell.setAttribute('data-label', headers[i]);
      });
    });
  });
}

export function onRouteDidUpdate(): void {
  // El contenido nuevo ya está en el DOM en el siguiente ciclo.
  window.setTimeout(labelTables, 0);
}
