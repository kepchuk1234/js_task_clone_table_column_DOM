"use strict";
// write your code here
const table = document.querySelector("table");
const rows = table.rows;
for (const row of rows){
    const type = row.sectionRowIndex === 0 ? "th" : "td";
    const item = document.createElement(type);
    const secondCell = table.rows[row.rowIndex].cells[1];
    const selaryCell = table.rows[row.rowIndex].cells[4];
    const selaryCellContent = selaryCell.textContent;
    item.textContent = selaryCellContent;
    selaryCell.textContent = secondCell.textContent;
    row.append(item);
}

//# sourceMappingURL=index.f75de5e1.js.map
