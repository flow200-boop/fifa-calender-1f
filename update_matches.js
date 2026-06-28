const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the 8 "3rd" placeholders with actual team names
const replacements = [
  { old: 'team2:"3rd A/B/C/D/F"', new: 'team2:"Bosnia & Herzegovina"' },
  { old: 'team2:"3rd C/D/F/G/H"', new: 'team2:"Paraguay"' },
  { old: 'team2:"3rd C/E/F/H/I"', new: 'team2:"Sweden"' },
  { old: 'team2:"3rd E/H/I/J/K"', new: 'team2:"DR Congo"' },
  { old: 'team2:"3rd A/E/H/I/J"', new: 'team2:"Ecuador"' },
  { old: 'team2:"3rd B/E/F/I/J"', new: 'team2:"Senegal"' },
  { old: 'team2:"3rd E/F/G/I/J"', new: 'team2:"Iran"' },
  { old: 'team2:"3rd D/E/I/J/L"', new: 'team2:"Ghana"' },
];

let count = 0;
for (const r of replacements) {
  if (content.includes(r.old)) {
    content = content.replace(r.old, r.new);
    count++;
    console.log(`✓ Replaced: ${r.old} -> ${r.new}`);
  } else {
    console.log(`✗ Not found: ${r.old}`);
  }
}

if (count > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`\n✅ Done! ${count} replacements made.`);
} else {
  console.log('\n⚠️ No replacements were made.');
}
