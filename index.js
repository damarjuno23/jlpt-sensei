// Pixel Puzzle Animation
function pixelPuzzle() {
    const canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'img/logo.png';
    
    img.onload = () => {
        const gridSize = 20; // 20x20 grid
        const pieceW = canvas.width / gridSize;
        const pieceH = canvas.height / gridSize;
        const totalPieces = gridSize * gridSize;
        const duration = 1700; // 2 detik
        
        // Buat array indeks 0 sampai totalPieces-1, lalu acak
        const pieces = [];
        for (let i = 0; i < totalPieces; i++) {
            pieces.push(i);
        }
        // Shuffle
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        
        const startTime = performance.now();
        
        function drawPieces(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const piecesToShow = Math.floor(progress * totalPieces);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < piecesToShow; i++) {
                const pieceIndex = pieces[i];
                const col = pieceIndex % gridSize;
                const row = Math.floor(pieceIndex / gridSize);
                
                const sx = col * (img.width / gridSize);
                const sy = row * (img.height / gridSize);
                const sw = img.width / gridSize;
                const sh = img.height / gridSize;
                
                const dx = col * pieceW;
                const dy = row * pieceH;
                
                ctx.drawImage(img, sx, sy, sw, sh, dx, dy, pieceW, pieceH);
            }
            
            if (progress < 1) {
                requestAnimationFrame(drawPieces);
            } else {
                // Animasi selesai, ganti canvas dengan img
                const container = document.getElementById('logoContainer');
                const finalImg = document.createElement('img');
                finalImg.src = 'img/logo.png';
                finalImg.alt = 'Logo';
                finalImg.style.maxWidth = '500px';
                finalImg.style.width = '100%';
                canvas.replaceWith(finalImg);
            }
        }
        
        requestAnimationFrame(drawPieces);
    };
}

// State management untuk Home & Lesson List
function showLessons() {
    document.getElementById('homeState').style.display = 'none';
    document.getElementById('lessonState').style.display = 'grid';
}

function showHome() {
    document.getElementById('lessonState').style.display = 'none';
    document.getElementById('homeState').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // Jalanin animasi puzzle
    pixelPuzzle();
    
    // Cek URL parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'lessons') {
        showLessons();
    }

    // Generate grammar cards
    const grid = document.getElementById('lessonState');
    if (grid) {
        grammarData.forEach(grammar => {
            const card = document.createElement('a');
            card.href = `lessons/${grammar.id}.html`;
            card.className = 'grammar-card';
            card.innerHTML = `
                <div class="number">#${grammar.id}</div>
                <div class="jp">${grammar.jp}</div>
                <div class="romaji">${grammar.romaji}</div>
            `;
            grid.appendChild(card);
        });
    }
});