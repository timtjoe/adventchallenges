/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  // Code here
  if(data.length === 0) return '';

  //1. Sort the data based on the provided field
  const sortedData = [...data].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  })

  const keys = Object.keys(data[0]);

  //2. Calculate the maximum width for each column
  const colWidths = keys.map((key, index) => {
    const headerLetter = String.fromCharCode(65 + index);
    const lengths = sortedData.map(row => String(row[key]).length);
    return Math.max(headerLetter.length, ...lengths);
  });

  //3. Helper to build the horizontal border
  const createBorder = () => {
    return '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  }
  
  //4. Helper to build content row
  const createRow = (values) => {
    return '| ' + values.map((val, i) => {
      return String(val).padEnd(colWidths[i]);
    }).join(' | ') + ' |';
  };

  // 5. Assemble the table components
  const border = createBorder();
  //Header letters (A, B, C...)
  const headerLetters = keys.map((_, i) => String.fromCharCode(65 + i));
  const headerRow = createRow(headerLetters);
  // Data rows
  const bodyRows = sortedData.map(row => {
    const values = keys.map(key => row[key]);
    return createRow(values);
  });

  //Combine everything with newlines
  return [
    border, headerRow, border, ...bodyRows, border
  ].join("\n");
}

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
))
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
))
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+