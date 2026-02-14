const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const dogBreeds = [
  { name: 'golden-retriever', breed: 'retriever/golden' },
  { name: 'labrador', breed: 'labrador' },
  { name: 'german-shepherd', breed: 'germanshepherd' },
  { name: 'beagle', breed: 'beagle' },
  { name: 'bulldog', breed: 'bulldog/english' },
  { name: 'poodle', breed: 'poodle/standard' },
  { name: 'chihuahua', breed: 'chihuahua' },
  { name: 'husky', breed: 'husky' },
  { name: 'dachshund', breed: 'dachshund' },
  { name: 'shih-tzu', breed: 'shihtzu' },
  { name: 'boxer', breed: 'boxer' },
  { name: 'rottweiler', breed: 'rottweiler' },
  { name: 'yorkshire-terrier', breed: 'terrier/yorkshire' },
  { name: 'border-collie', breed: 'collie/border' },
  { name: 'corgi', breed: 'corgi/cardigan' },
  { name: 'french-bulldog', breed: 'bulldog/french' },
  { name: 'pomeranian', breed: 'pomeranian' },
  { name: 'shiba', breed: 'shiba' },
  { name: 'bernese-mountain', breed: 'mountain/bernese' },
  { name: 'maltese', breed: 'maltese' },
  { name: 'pitbull', breed: 'pitbull' },
  { name: 'whippet', breed: 'whippet' },
  { name: 'doberman', breed: 'doberman' },
  { name: 'cocker-spaniel', breed: 'spaniel/cocker' },
  { name: 'great-dane', breed: 'dane/great' },
  { name: 'newfoundland', breed: 'newfoundland' },
  { name: 'dalmatian', breed: 'dalmatian' },
  { name: 'weimaraner', breed: 'weimaraner' },
  { name: 'basset-hound', breed: 'hound/basset' },
  { name: 'jack-russell', breed: 'terrier/russell' },
  { name: 'samoyed', breed: 'samoyed' },
  { name: 'chow-chow', breed: 'chow' },
  { name: 'australian-shepherd', breed: 'australian/shepherd' },
  { name: 'pug', breed: 'pug' },
  { name: 'cane-corso', breed: 'corso/cane' },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Status ${response.statusCode}`));
        return;
      }
      
      const data = [];
      response.on('data', chunk => data.push(chunk));
      response.on('end', () => {
        fs.writeFileSync(filepath, Buffer.concat(data));
        resolve();
      });
    }).on('error', reject);
  });
}

function getDogImageUrl(breed) {
  return new Promise((resolve, reject) => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    https.get(url, (response) => {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.status === 'success') {
            resolve(json.message);
          } else {
            reject(new Error('API returned error'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('🐕 Downloading dog breed images...\n');
  
  for (const dog of dogBreeds) {
    const filepath = path.join(imagesDir, `${dog.name}.jpg`);
    try {
      const imageUrl = await getDogImageUrl(dog.breed);
      await downloadImage(imageUrl, filepath);
      const stats = fs.statSync(filepath);
      console.log(`✅ ${dog.name}: ${(stats.size / 1024).toFixed(1)} KB`);
    } catch (error) {
      console.log(`❌ ${dog.name}: ${error.message}`);
    }
  }
  
  console.log('\n🎉 Done!');
}

downloadAll();
