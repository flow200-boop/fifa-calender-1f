// Compute FIFA World Cup 2026 group standings and Round of 32 matchups

const GROUP_TEAMS = {
  'A': ['Mexico', 'South Africa', 'South Korea', 'Czech Republic'],
  'B': ['Canada', 'Bosnia & Herzegovina', 'Qatar', 'Switzerland'],
  'C': ['Brazil', 'Morocco', 'Haiti', 'Scotland'],
  'D': ['USA', 'Paraguay', 'Australia', 'Turkey'],
  'E': ['Germany', 'Curacao', 'Ivory Coast', 'Ecuador'],
  'F': ['Netherlands', 'Japan', 'Sweden', 'Tunisia'],
  'G': ['Belgium', 'Egypt', 'Iran', 'New Zealand'],
  'H': ['Spain', 'Cape Verde', 'Saudi Arabia', 'Uruguay'],
  'I': ['France', 'Senegal', 'Iraq', 'Norway'],
  'J': ['Argentina', 'Algeria', 'Austria', 'Jordan'],
  'K': ['Portugal', 'DR Congo', 'Uzbekistan', 'Colombia'],
  'L': ['England', 'Croatia', 'Ghana', 'Panama'],
};

const matches = [
  { date:"2026-06-11", uk:"20:00", stage:"Group A", team1:"Mexico", team2:"South Africa", result:"2-0" },
  { date:"2026-06-12", uk:"03:00", stage:"Group A", team1:"South Korea", team2:"Czech Republic", result:"2-1" },
  { date:"2026-06-12", uk:"20:00", stage:"Group B", team1:"Canada", team2:"Bosnia & Herzegovina", result:"1-1" },
  { date:"2026-06-13", uk:"02:00", stage:"Group D", team1:"USA", team2:"Paraguay", result:"4-1" },
  { date:"2026-06-13", uk:"20:00", stage:"Group B", team1:"Qatar", team2:"Switzerland", result:"1-1" },
  { date:"2026-06-13", uk:"23:00", stage:"Group C", team1:"Brazil", team2:"Morocco", result:"1-1" },
  { date:"2026-06-14", uk:"02:00", stage:"Group C", team1:"Haiti", team2:"Scotland", result:"0-1" },
  { date:"2026-06-14", uk:"05:00", stage:"Group D", team1:"Australia", team2:"Turkey", result:"2-0" },
  { date:"2026-06-14", uk:"18:00", stage:"Group E", team1:"Germany", team2:"Curacao", result:"7-1" },
  { date:"2026-06-14", uk:"21:00", stage:"Group F", team1:"Netherlands", team2:"Japan", result:"2-2" },
  { date:"2026-06-15", uk:"00:00", stage:"Group E", team1:"Ivory Coast", team2:"Ecuador", result:"1-0" },
  { date:"2026-06-15", uk:"03:00", stage:"Group F", team1:"Sweden", team2:"Tunisia", result:"5-1" },
  { date:"2026-06-15", uk:"17:00", stage:"Group H", team1:"Spain", team2:"Cape Verde", result:"0-0" },
  { date:"2026-06-15", uk:"20:00", stage:"Group G", team1:"Belgium", team2:"Egypt", result:"1-1" },
  { date:"2026-06-15", uk:"23:00", stage:"Group H", team1:"Saudi Arabia", team2:"Uruguay", result:"1-1" },
  { date:"2026-06-16", uk:"02:00", stage:"Group G", team1:"Iran", team2:"New Zealand", result:"2-2" },
  { date:"2026-06-16", uk:"20:00", stage:"Group I", team1:"France", team2:"Senegal", result:"3-1" },
  { date:"2026-06-16", uk:"23:00", stage:"Group I", team1:"Iraq", team2:"Norway", result:"1-4" },
  { date:"2026-06-17", uk:"02:00", stage:"Group J", team1:"Argentina", team2:"Algeria", result:"3-0" },
  { date:"2026-06-17", uk:"05:00", stage:"Group J", team1:"Austria", team2:"Jordan", result:"3-1" },
  { date:"2026-06-17", uk:"18:00", stage:"Group K", team1:"Portugal", team2:"DR Congo", result:"1-1" },
  { date:"2026-06-17", uk:"21:00", stage:"Group L", team1:"England", team2:"Croatia", result:"4-2" },
  { date:"2026-06-18", uk:"00:00", stage:"Group L", team1:"Ghana", team2:"Panama", result:"1-0" },
  { date:"2026-06-18", uk:"03:00", stage:"Group K", team1:"Uzbekistan", team2:"Colombia", result:"1-3" },
  { date:"2026-06-18", uk:"17:00", stage:"Group A", team1:"Czech Republic", team2:"South Africa", result:"1-1" },
  { date:"2026-06-18", uk:"20:00", stage:"Group B", team1:"Switzerland", team2:"Bosnia & Herzegovina", result:"4-1" },
  { date:"2026-06-18", uk:"23:00", stage:"Group B", team1:"Canada", team2:"Qatar", result:"6-0" },
  { date:"2026-06-19", uk:"02:00", stage:"Group A", team1:"Mexico", team2:"South Korea", result:"1-0" },
  { date:"2026-06-19", uk:"20:00", stage:"Group D", team1:"USA", team2:"Australia", result:"2-0" },
  { date:"2026-06-19", uk:"23:00", stage:"Group C", team1:"Scotland", team2:"Morocco", result:"0-1" },
  { date:"2026-06-20", uk:"01:30", stage:"Group C", team1:"Brazil", team2:"Haiti", result:"3-0" },
  { date:"2026-06-20", uk:"04:00", stage:"Group D", team1:"Turkey", team2:"Paraguay", result:"0-1" },
  { date:"2026-06-20", uk:"18:00", stage:"Group F", team1:"Netherlands", team2:"Sweden", result:"5-1" },
  { date:"2026-06-20", uk:"21:00", stage:"Group E", team1:"Germany", team2:"Ivory Coast", result:"2-1" },
  { date:"2026-06-21", uk:"01:00", stage:"Group E", team1:"Ecuador", team2:"Curacao", result:"0-0" },
  { date:"2026-06-21", uk:"05:00", stage:"Group F", team1:"Tunisia", team2:"Japan", result:"0-4" },
  { date:"2026-06-21", uk:"17:00", stage:"Group H", team1:"Spain", team2:"Saudi Arabia", result:"4-0" },
  { date:"2026-06-21", uk:"20:00", stage:"Group G", team1:"Belgium", team2:"Iran", result:"0-0" },
  { date:"2026-06-21", uk:"23:00", stage:"Group H", team1:"Uruguay", team2:"Cape Verde", result:"2-2" },
  { date:"2026-06-22", uk:"02:00", stage:"Group G", team1:"New Zealand", team2:"Egypt", result:"1-3" },
  { date:"2026-06-22", uk:"18:00", stage:"Group J", team1:"Argentina", team2:"Austria", result:"2-0" },
  { date:"2026-06-22", uk:"22:00", stage:"Group I", team1:"France", team2:"Iraq", result:"3-0" },
  { date:"2026-06-23", uk:"01:00", stage:"Group I", team1:"Norway", team2:"Senegal", result:"3-2" },
  { date:"2026-06-23", uk:"04:00", stage:"Group J", team1:"Jordan", team2:"Algeria", result:"1-2" },
  { date:"2026-06-23", uk:"18:00", stage:"Group K", team1:"Portugal", team2:"Uzbekistan", result:"5-0" },
  { date:"2026-06-23", uk:"21:00", stage:"Group L", team1:"England", team2:"Ghana", result:"0-0" },
  { date:"2026-06-24", uk:"00:00", stage:"Group L", team1:"Panama", team2:"Croatia", result:"0-1" },
  { date:"2026-06-24", uk:"03:00", stage:"Group K", team1:"Colombia", team2:"DR Congo", result:"1-0" },
  { date:"2026-06-24", uk:"20:00", stage:"Group B", team1:"Switzerland", team2:"Canada", result:"2-1" },
  { date:"2026-06-24", uk:"20:00", stage:"Group B", team1:"Bosnia & Herzegovina", team2:"Qatar", result:"3-1" },
  { date:"2026-06-24", uk:"23:00", stage:"Group C", team1:"Morocco", team2:"Haiti", result:"4-2" },
  { date:"2026-06-24", uk:"23:00", stage:"Group C", team1:"Scotland", team2:"Brazil", result:"0-3" },
  { date:"2026-06-25", uk:"02:00", stage:"Group A", team1:"South Africa", team2:"South Korea", result:"1-0" },
  { date:"2026-06-25", uk:"02:00", stage:"Group A", team1:"Czech Republic", team2:"Mexico", result:"0-3" },
  { date:"2026-06-25", uk:"21:00", stage:"Group E", team1:"Curacao", team2:"Ivory Coast", result:"0-2" },
  { date:"2026-06-25", uk:"21:00", stage:"Group E", team1:"Ecuador", team2:"Germany", result:"2-1" },
  { date:"2026-06-26", uk:"00:00", stage:"Group F", team1:"Tunisia", team2:"Netherlands", result:"1-3" },
  { date:"2026-06-26", uk:"00:00", stage:"Group F", team1:"Japan", team2:"Sweden", result:"1-1" },
  { date:"2026-06-26", uk:"03:00", stage:"Group D", team1:"Turkey", team2:"USA", result:"3-2" },
  { date:"2026-06-26", uk:"03:00", stage:"Group D", team1:"Paraguay", team2:"Australia", result:"0-0" },
  { date:"2026-06-26", uk:"20:00", stage:"Group I", team1:"Norway", team2:"France", result:"1-4" },
  { date:"2026-06-26", uk:"20:00", stage:"Group I", team1:"Senegal", team2:"Iraq", result:"5-0" },
  { date:"2026-06-27", uk:"01:00", stage:"Group H", team1:"Cape Verde", team2:"Saudi Arabia", result:"0-0" },
  { date:"2026-06-27", uk:"01:00", stage:"Group H", team1:"Uruguay", team2:"Spain", result:"0-1" },
  { date:"2026-06-27", uk:"04:00", stage:"Group G", team1:"New Zealand", team2:"Belgium", result:"1-5" },
  { date:"2026-06-27", uk:"04:00", stage:"Group G", team1:"Egypt", team2:"Iran", result:"1-1" },
  { date:"2026-06-27", uk:"22:00", stage:"Group L", team1:"Panama", team2:"England", result:"0-3" },
  { date:"2026-06-27", uk:"22:00", stage:"Group L", team1:"Croatia", team2:"Ghana", result:"2-1" },
  { date:"2026-06-28", uk:"00:30", stage:"Group K", team1:"Colombia", team2:"Portugal", result:"2-2" },
  { date:"2026-06-28", uk:"00:30", stage:"Group K", team1:"DR Congo", team2:"Uzbekistan", result:"2-0" },
  { date:"2026-06-28", uk:"03:00", stage:"Group J", team1:"Algeria", team2:"Austria", result:"1-2" },
  { date:"2026-06-28", uk:"03:00", stage:"Group J", team1:"Jordan", team2:"Argentina", result:"0-3" },
];

// Compute standings
const standings = {};
Object.keys(GROUP_TEAMS).forEach(letter => {
  standings[letter] = {};
  GROUP_TEAMS[letter].forEach(team => {
    standings[letter][team] = { mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
  });
});

matches.filter(m => m.result && m.stage.startsWith('Group')).forEach(m => {
  const letter = m.stage.replace('Group ', '');
  if (!standings[letter]) return;
  const [g1, g2] = m.result.split('-').map(Number);
  const t1 = standings[letter][m.team1];
  const t2 = standings[letter][m.team2];
  if (!t1 || !t2) return;
  t1.mp++; t2.mp++;
  t1.gf += g1; t1.ga += g2;
  t2.gf += g2; t2.ga += g1;
  if (g1 > g2) { t1.w++; t2.l++; t1.pts += 3; }
  else if (g1 < g2) { t2.w++; t1.l++; t2.pts += 3; }
  else { t1.d++; t2.d++; t1.pts += 1; t2.pts += 1; }
  t1.gd = t1.gf - t1.ga;
  t2.gd = t2.gf - t2.ga;
});

// Sort each group
Object.keys(standings).forEach(letter => {
  standings[letter] = Object.entries(standings[letter])
    .map(([name, s]) => ({ name, ...s }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.name.localeCompare(b.name));
});

console.log("=== GROUP STANDINGS ===");
Object.keys(standings).forEach(letter => {
  console.log(`\nGroup ${letter}:`);
  standings[letter].forEach((t, i) => {
    console.log(`  ${i+1}. ${t.name} - ${t.pts}pts (${t.w}W ${t.d}D ${t.l}L) GF:${t.gf} GA:${t.ga} GD:${t.gd > 0 ? '+' : ''}${t.gd}`);
  });
});

// Best third-placed teams
const thirds = [];
Object.keys(standings).forEach(letter => {
  thirds.push({ ...standings[letter][2], group: letter });
});
thirds.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);

console.log("\n\n=== BEST THIRD-PLACED TEAMS ===");
thirds.forEach((t, i) => {
  console.log(`  ${i+1}. ${t.name} (Group ${t.group}) - ${t.pts}pts, GD:${t.gd > 0 ? '+' : ''}${t.gd}, GF:${t.gf}`);
});

const advancing = thirds.slice(0, 8);
console.log("\n=== ADVANCING (top 8) ===");
advancing.forEach((t, i) => {
  console.log(`  ${i+1}. ${t.name} (Group ${t.group})`);
});

const eliminated = thirds.slice(8);
console.log("\n=== ELIMINATED (bottom 4) ===");
eliminated.forEach((t, i) => {
  console.log(`  ${i+1}. ${t.name} (Group ${t.group})`);
});

// Group winners and runners-up
console.log("\n\n=== GROUP WINNERS ===");
Object.keys(standings).forEach(letter => {
  console.log(`  Group ${letter}: ${standings[letter][0].name} (1st), ${standings[letter][1].name} (2nd)`);
});

// Now determine Round of 32 matchups
// Based on 2026 FIFA World Cup format:
// 12 group winners + 12 runners-up + 8 best third-placed = 32 teams
// The pre-determined pairings for 3rd-placed teams:

const thirdPlaceSlots = {
  'M75': { groups: ['A','B','C','D','F'], label: '3rd A/B/C/D/F' },
  'M78': { groups: ['C','D','F','G','H'], label: '3rd C/D/F/G/H' },
  'M79': { groups: ['C','E','F','H','I'], label: '3rd C/E/F/H/I' },
  'M80': { groups: ['E','H','I','J','K'], label: '3rd E/H/I/J/K' },
  'M81': { groups: ['A','E','H','I','J'], label: '3rd A/E/H/I/J' },
  'M82': { groups: ['B','E','F','I','J'], label: '3rd B/E/F/I/J' },
  'M85': { groups: ['E','F','G','I','J'], label: '3rd E/F/G/I/J' },
  'M88': { groups: ['D','E','I','J','L'], label: '3rd D/E/I/J/L' },
};

// Assign best third-placed teams to slots
// We need to find a valid assignment where each team goes to a slot that accepts their group
// This is a constraint satisfaction problem

const rankedThirds = [...advancing];

function findAssignment(slots, teams) {
  // Sort teams by rank (best first)
  const sortedTeams = [...teams];
  
  // For each slot, find the best available team
  const assignment = {};
  const assigned = new Set();
  
  // Process slots in order of most constrained (fewest compatible teams) first
  const slotEntries = Object.entries(slots).map(([key, slot]) => ({
    key,
    ...slot,
    compatible: sortedTeams.filter(t => slot.groups.includes(t.group) && !assigned.has(t.name))
  })).sort((a, b) => a.compatible.length - b.compatible.length);
  
  // Simple greedy algorithm - try to assign best team to each slot
  // Need to handle constraints carefully
  
  let attempts = 0;
  const maxAttempts = 1000;
  
  function tryAssign(remainingSlots, remainingTeams, currentAssignment) {
    attempts++;
    if (attempts > maxAttempts) return null;
    if (remainingSlots.length === 0) return currentAssignment;
    
    // Pick the most constrained slot
    const sorted = remainingSlots
      .map(s => ({ ...s, compatible: remainingTeams.filter(t => s.groups.includes(t.group)) }))
      .sort((a, b) => a.compatible.length - b.compatible.length);
    
    const slot = sorted[0];
    const otherSlots = remainingSlots.filter(s => s.key !== slot.key);
    
    // Try each compatible team from best to worst
    const compatible = remainingTeams.filter(t => slot.groups.includes(t.group));
    // Sort by rank (index in rankedThirds)
    compatible.sort((a, b) => rankedThirds.indexOf(a) - rankedThirds.indexOf(b));
    
    for (const team of compatible) {
      const newAssignment = { ...currentAssignment, [slot.key]: team };
      const newTeams = remainingTeams.filter(t => t.name !== team.name);
      const result = tryAssign(otherSlots, newTeams, newAssignment);
      if (result) return result;
    }
    
    return null; // Backtrack
  }
  
  const result = tryAssign(slotEntries, sortedTeams, {});
  return result;
}

const assignment = findAssignment(thirdPlaceSlots, rankedThirds);

console.log("\n\n=== ROUND OF 32 ASSIGNMENT ===");
if (assignment) {
  Object.entries(assignment).forEach(([slot, team]) => {
    console.log(`  ${slot} (${thirdPlaceSlots[slot].label}): ${team.name} (Group ${team.group})`);
  });
} else {
  console.log("  Could not find valid assignment!");
}

// Print the full Round of 32 matchups
console.log("\n\n=== FULL ROUND OF 32 MATCHUPS ===");
const r32Matchups = [
  { id: 73, date:"2026-06-28", uk:"20:00", team1:"South Africa", team2:"Canada" },
  { id: 74, date:"2026-06-29", uk:"18:00", team1:"Brazil", team2:"Japan" },
  { id: 75, date:"2026-06-29", uk:"21:30", team1:"Germany", team2: assignment?.['M75']?.name || 'TBD' },
  { id: 76, date:"2026-06-30", uk:"02:00", team1:"Netherlands", team2:"Morocco" },
  { id: 77, date:"2026-06-30", uk:"18:00", team1:"Ivory Coast", team2:"Norway" },
  { id: 78, date:"2026-06-30", uk:"22:00", team1:"France", team2: assignment?.['M78']?.name || 'TBD' },
  { id: 79, date:"2026-07-01", uk:"02:00", team1:"Mexico", team2: assignment?.['M79']?.name || 'TBD' },
  { id: 80, date:"2026-07-01", uk:"17:00", team1:"England", team2: assignment?.['M80']?.name || 'TBD' },
  { id: 81, date:"2026-07-01", uk:"21:00", team1:"Belgium", team2: assignment?.['M81']?.name || 'TBD' },
  { id: 82, date:"2026-07-02", uk:"01:00", team1:"USA", team2: assignment?.['M82']?.name || 'TBD' },
  { id: 83, date:"2026-07-02", uk:"20:00", team1:"Spain", team2:"Austria" },
  { id: 84, date:"2026-07-03", uk:"00:00", team1:"Portugal", team2:"Croatia" },
  { id: 85, date:"2026-07-03", uk:"04:00", team1:"Switzerland", team2: assignment?.['M85']?.name || 'TBD' },
  { id: 86, date:"2026-07-03", uk:"19:00", team1:"Australia", team2:"Egypt" },
  { id: 87, date:"2026-07-03", uk:"23:00", team1:"Argentina", team2:"Cape Verde" },
  { id: 88, date:"2026-07-04", uk:"02:30", team1:"Colombia", team2: assignment?.['M88']?.name || 'TBD' },
];

// Map match IDs to the index in the actual MATCHES array in index.html
// The Round of 32 starts at index 70 in the MATCHES array (0-indexed)
console.log("\n\nFor each R32 match, the team2 should be updated:");
r32Matchups.forEach((m, i) => {
  console.log(`  Match index ${70 + i} (M${m.id}): ${m.team1} vs ${m.team2}`);
});
