// this file will be automatically run by the GH action worflow in .github/workflows/update_kinch.yml
// you can also run it manually with `node src/lib/tasks/update_kinch.js`
// it will update src/lib/data/kinch.json
// currently, it only scrapes the top 30 countries from https://wca.cuber.pro/, but you can edit line 51 to change that

// src/lib/tasks/update_kinch.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Update kinch.json
export async function updateKinchJSON(jsonPath = './src/lib/data/kinch.json') {
  try {
    console.log('Fetching Kinch data...');
    const res = await fetch(
      'https://jackmaddigan.github.io/kinch/data/kinch.json'
    );
    if (!res.ok) {
      throw new Error('Failed fetch');
    }
    const data = (await res.json()).slice(0, 25); // Use top 25
    
    // add flags
    data.forEach((entry) => {
      const code = entry.iso2.toUpperCase();

      entry.flag = `https://twemoji.maxcdn.com/v/latest/72x72/${[...code]
        .map((c) => (0x1f1e6 + c.charCodeAt(0) - 65).toString(16))
        .join('-')}.png`;
    });
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Kinch JSON updated: ${jsonPath}`);
  } catch (err) {
    console.error('Error updating Kinch:', err);
  }
}

// Run directly if executed
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  updateKinchJSON();
}
