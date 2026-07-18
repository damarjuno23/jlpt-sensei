let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let currentLessonId = null;

function getParam(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    currentLessonId = getParam('lesson');
    let filtered;
    
    if (currentLessonId) {
        filtered = allQuizData.filter(q => q.lessonId === parseInt(currentLessonId));
    } else {
        filtered = shuffleArray(allQuizData).slice(0, 10);
    }
    
    if (filtered.length === 0) {
        document.getElementById('quizContainer').innerHTML = `
            <div class="quiz-empty">
                <p>📝 Belum ada soal untuk lesson ini.</p>
                <a href="../index.html" class="btn-retry btn-back">← Home</a>
            </div>
        `;
        return;
    }
    
    currentQuestions = shuffleArray(filtered);
    currentIndex = 0;
    score = 0;
    answered = false;
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const q = currentQuestions[currentIndex];
    const sentenceHTML = q.sentence.replace('＿＿＿', '<span class="q-blank">＿＿＿</span>');
    
    container.innerHTML = `
        <div class="quiz-question">
            <div class="q-number">Soal ${currentIndex + 1} / ${currentQuestions.length}</div>
            <div class="q-sentence">${sentenceHTML}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option" onclick="selectAnswer(${i}, this)">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function selectAnswer(index, el) {
    if (answered) return;
    answered = true;
    
    const q = currentQuestions[currentIndex];
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (index === q.correct) {
        el.classList.add('correct');
        score++;
    } else {
        el.classList.add('wrong');
        options[q.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentIndex++;
        answered = false;
        if (currentIndex < currentQuestions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 800);
}

function showResult() {
    const container = document.getElementById('quizContainer');
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    
    let scoreClass = 'ok';
    let message = '💪 Terus berlatih!';
    if (percentage === 100) { scoreClass = 'perfect'; message = '🎉 Sempurna!'; }
    else if (percentage >= 80) { scoreClass = 'good'; message = '👍 Bagus!'; }
    
    const backLink = currentLessonId ? `../lessons/${currentLessonId}.html` : '../index.html';
    
    let prevQuizBtn = '';
    let nextQuizBtn = '';
    
    if (currentLessonId) {
        const prevId = parseInt(currentLessonId) - 1;
        const nextId = parseInt(currentLessonId) + 1;
        
        if (prevId >= 1) {
            prevQuizBtn = `<a href="quiz.html?lesson=${prevId}" class="btn-retry btn-back">← Prev Quiz</a>`;
        }
        if (nextId <= 53) {
            nextQuizBtn = `<a href="quiz.html?lesson=${nextId}" class="btn-retry btn-back">Next Quiz →</a>`;
        }
    }
    
    container.innerHTML = `
        <div class="quiz-question" style="text-align:center;">
            <h2>${message}</h2>
            <div class="quiz-score ${scoreClass}">${score} / ${total}</div>
            <p>${percentage}% benar</p>
            <button class="btn-retry" onclick="startQuiz()">Coba Lagi</button>
            <div style="display:flex; justify-content:center; gap:1rem; margin-top:1rem;">
                ${prevQuizBtn}
                <a href="${backLink}" class="btn-retry btn-back">📖 Lesson</a>
                ${nextQuizBtn}
            </div>
        </div>
    `;
}

startQuiz();