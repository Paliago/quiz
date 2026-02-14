const fs = require('fs');
const path = require('path');

// Read the current file
const filePath = path.join(__dirname, 'src', 'dogQuizData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Map of correctAnswer to image filename
const breedToImage = {
  'Golden Retriever': 'golden-retriever.jpg',
  'French Bulldog': 'french-bulldog.jpg',
  'German Shepherd': 'german-shepherd.jpg',
  'Beagle': 'beagle.jpg',
  'Bulldog': 'bulldog.jpg',
  'Poodle': 'poodle.jpg',
  'Chihuahua': 'chihuahua.jpg',
  'Siberian Husky': 'husky.jpg',
  'Dachshund': 'dachshund.jpg',
  'Shih Tzu': 'shih-tzu.jpg',
  'Boxer': 'boxer.jpg',
  'Rottweiler': 'rottweiler.jpg',
  'Yorkshire Terrier': 'yorkshire-terrier.jpg',
  'Border Collie': 'border-collie.jpg',
  'Corgi': 'corgi.jpg',
  'Labrador Retriever': 'labrador.jpg',
  'Australian Shepherd': 'australian-shepherd.jpg',
  'Pug': 'pug.jpg',
  'Great Dane': 'great-dane.jpg',
  'Doberman': 'doberman.jpg',
  'Cocker Spaniel': 'cocker-spaniel.jpg',
  'Pomeranian': 'pomeranian.jpg',
  'Shiba Inu': 'shiba.jpg',
  'Bernese Mountain Dog': 'bernese-mountain.jpg',
  'Maltese': 'maltese.jpg',
  'Pit Bull Terrier': 'pitbull.jpg',
  'Whippet': 'whippet.jpg',
  'Cane Corso': 'cane-corso.jpg',
  'Newfoundland': 'newfoundland.jpg',
  'Dalmatian': 'dalmatian.jpg',
  'Weimaraner': 'weimaraner.jpg',
  'Basset Hound': 'basset-hound.jpg',
  'Jack Russell Terrier': 'jack-russell.jpg',
  'Samoyed': 'samoyed.jpg',
  'Chow Chow': 'chow-chow.jpg',
};

// Replace each imageUrl based on the correctAnswer in the same object
let id = 1;
for (const [breed, imageFile] of Object.entries(breedToImage)) {
  // Find and replace the imageUrl for this specific question
  const searchPattern = new RegExp(
    `(id: ${id},\\s*\\n\\s*)imageUrl: ['"][^'"]*['"],`,
    'g'
  );
  const replacement = `$1imageUrl: '/images/${imageFile}',`;
  
  const newContent = content.replace(searchPattern, replacement);
  if (newContent !== content) {
    content = newContent;
    console.log(`✅ Question ${id}: ${breed} → ${imageFile}`);
  } else {
    console.log(`⚠️  Question ${id}: ${breed} - pattern not found`);
  }
  id++;
}

// Write back
fs.writeFileSync(filePath, content);
console.log('\n🎉 Done! All images updated to local paths.');
