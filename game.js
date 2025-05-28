const scenarios = [
    {
        title: "保険募集時の説明義務",
        text: "あなたは保険営業担当者です。お客様から「細かい約款は後で読むから、とりあえず契約だけ進めてほしい」と言われました。どう対応しますか？",
        choices: [
            {
                text: "お客様の要望通り、簡単な説明だけで契約を進める",
                correct: false,
                feedback: "これは保険業法第294条（情報提供義務）違反です！契約概要・注意喚起情報の説明は必須です。",
                penalty: "業務改善命令、最悪の場合は登録取消（保険業法第307条）"
            },
            {
                text: "重要事項は必ず説明し、理解いただいてから契約を進める",
                correct: true,
                feedback: "正解！保険業法では、契約前に重要事項の説明が義務付けられています。"
            },
            {
                text: "パンフレットを渡して「後で読んでください」と伝える",
                correct: false,
                feedback: "不十分です。重要事項は口頭での説明も必要です。",
                penalty: "行政指導、繰り返すと業務停止命令の可能性"
            }
        ]
    },
    {
        title: "クーリング・オフの説明",
        text: "生命保険の契約時、お客様からクーリング・オフについて質問されました。どう説明しますか？",
        choices: [
            {
                text: "「うちの保険は品質が良いので、クーリング・オフは使えません」と説明",
                correct: false,
                feedback: "虚偽の説明は保険業法第300条違反！クーリング・オフは法的権利です。",
                penalty: "業務停止命令（1ヶ月以上）、悪質な場合は登録取消"
            },
            {
                text: "クーリング・オフ制度について正確に説明し、書面でも案内する",
                correct: true,
                feedback: "素晴らしい！クーリング・オフの説明は保険募集人の重要な義務です。"
            },
            {
                text: "「詳しくは契約後に説明します」と回答を避ける",
                correct: false,
                feedback: "説明義務違反です。契約前に必ず説明が必要です。",
                penalty: "行政指導、改善されない場合は業務改善命令"
            }
        ]
    },
    {
        title: "特別利益の提供",
        text: "大口契約を検討中のお客様から「契約したら何か特典はないの？」と聞かれました。どう対応しますか？",
        choices: [
            {
                text: "「契約いただければ、商品券1万円分を差し上げます」と提案",
                correct: false,
                feedback: "保険業法第300条（特別利益の提供の禁止）違反！これは重大な違反行為です。",
                penalty: "業務停止命令（3ヶ月以上）、登録取消の可能性大"
            },
            {
                text: "「申し訳ございませんが、特別な利益提供は法律で禁止されています」と説明",
                correct: true,
                feedback: "完璧な対応！特別利益の提供は厳しく禁止されています。"
            },
            {
                text: "「保険料を少し割引することは可能です」と独自に提案",
                correct: false,
                feedback: "認可された保険料以外での契約は違法です！",
                penalty: "業務停止命令、会社に対しても行政処分"
            }
        ]
    },
    {
        title: "比較説明の適正性",
        text: "他社商品との比較を求められました。どのように説明しますか？",
        choices: [
            {
                text: "「他社の商品は保障が悪く、当社が圧倒的に優れています」と説明",
                correct: false,
                feedback: "不当な比較は保険業法第300条違反！客観的事実に基づく説明が必要です。",
                penalty: "業務改善命令、悪質な場合は業務停止命令"
            },
            {
                text: "客観的なデータを示し、メリット・デメリットを公平に説明",
                correct: true,
                feedback: "適切です！比較説明は客観的かつ正確に行う必要があります。"
            },
            {
                text: "「他社商品の説明は控えさせていただきます」と比較を拒否",
                correct: false,
                feedback: "適切な比較説明は顧客の利益になります。拒否は不適切です。",
                penalty: "行政指導の可能性"
            }
        ]
    },
    {
        title: "告知義務の説明",
        text: "健康状態に不安があるお客様が「病気のことは言わなくてもいいよね？」と聞いてきました。",
        choices: [
            {
                text: "「大丈夫です、黙っていれば分かりません」とアドバイス",
                correct: false,
                feedback: "告知義務違反の教唆は重大な保険業法違反！絶対にしてはいけません。",
                penalty: "登録取消、刑事罰の可能性（懲役・罰金）"
            },
            {
                text: "告知義務の重要性を説明し、正直に申告するよう促す",
                correct: true,
                feedback: "正しい対応！告知義務は保険契約の基本です。"
            },
            {
                text: "「私は聞かなかったことにします」と見て見ぬふりをする",
                correct: false,
                feedback: "募集人として不適切な行為です。正しい告知を促す義務があります。",
                penalty: "業務停止命令、登録取消の可能性"
            }
        ]
    },
    {
        title: "無登録募集の防止",
        text: "同僚から「君の名前を借りて契約を取りたい」と頼まれました。どう対応しますか？",
        choices: [
            {
                text: "信頼できる同僚なので名前を貸す",
                correct: false,
                feedback: "名義貸しは保険業法違反！無登録募集に加担することになります。",
                penalty: "登録取消、3年以下の懲役または300万円以下の罰金"
            },
            {
                text: "断固として拒否し、必要なら上司に報告する",
                correct: true,
                feedback: "適切な判断！無登録募集は重大な違法行為です。"
            },
            {
                text: "「今回だけ」と条件付きで承諾する",
                correct: false,
                feedback: "一度でも違法！名義貸しに「今回だけ」は通用しません。",
                penalty: "登録取消、刑事罰の対象"
            }
        ]
    },
    {
        title: "保険料の立替",
        text: "お客様が「今月は保険料が払えない。立て替えてくれないか」と依頼してきました。",
        choices: [
            {
                text: "お客様のために一時的に立て替える",
                correct: false,
                feedback: "保険料の立替は保険業法で禁止されています！",
                penalty: "業務改善命令、繰り返すと登録取消"
            },
            {
                text: "立替はできないことを説明し、猶予制度等を案内する",
                correct: true,
                feedback: "正解！適切な制度を案内することが大切です。"
            },
            {
                text: "会社には内緒で個人的に貸す",
                correct: false,
                feedback: "形を変えても立替行為です。絶対にしてはいけません。",
                penalty: "業務停止命令、登録取消の可能性"
            }
        ]
    },
    {
        title: "意向把握義務",
        text: "急いでいるお客様から「とにかく一番安い保険でいい」と言われました。",
        choices: [
            {
                text: "要望通り最安値の保険をすぐに提案する",
                correct: false,
                feedback: "意向把握が不十分です！保険業法では適切な意向把握が義務付けられています。",
                penalty: "行政指導、改善されない場合は業務改善命令"
            },
            {
                text: "時間をいただき、ニーズを詳しく確認してから提案する",
                correct: true,
                feedback: "素晴らしい！意向把握は適切な保険募集の基本です。"
            },
            {
                text: "「安い保険は保障が薄いですよ」と高額商品を勧める",
                correct: false,
                feedback: "顧客の意向を無視した募集は不適切です。",
                penalty: "業務改善命令の可能性"
            }
        ]
    },
    {
        title: "個人情報の取扱い",
        text: "別の顧客から「○○さんはどんな保険に入っているの？」と聞かれました。",
        choices: [
            {
                text: "親しい間柄なので、契約内容を教える",
                correct: false,
                feedback: "個人情報保護法違反！顧客情報の漏洩は重大な違反です。",
                penalty: "業務停止命令、刑事罰（6月以下の懲役または30万円以下の罰金）"
            },
            {
                text: "「申し訳ございませんが、お答えできません」と断る",
                correct: true,
                feedback: "完璧！顧客情報の守秘義務は絶対です。"
            },
            {
                text: "「詳しくは言えないが、良い保険に入っている」と曖昧に答える",
                correct: false,
                feedback: "曖昧でも情報漏洩です。一切答えてはいけません。",
                penalty: "行政指導、悪質な場合は業務停止命令"
            }
        ]
    },
    {
        title: "不実告知の禁止",
        text: "解約を検討している顧客に対して、どのように対応しますか？",
        choices: [
            {
                text: "「解約すると大損しますよ」と事実と異なる説明で引き止める",
                correct: false,
                feedback: "不実告知は保険業法第300条違反！事実に基づかない説明は禁止です。",
                penalty: "業務停止命令（1ヶ月以上）、悪質な場合は登録取消"
            },
            {
                text: "解約時の影響を正確に説明し、顧客の判断を尊重する",
                correct: true,
                feedback: "適切な対応！正確な情報提供が保険募集人の責務です。"
            },
            {
                text: "「今解約すると二度と保険に入れなくなる」と脅す",
                correct: false,
                feedback: "脅迫的な募集行為は重大な違反！",
                penalty: "登録取消、刑事罰の可能性"
            }
        ]
    }
];

let currentScenarioIndex = 0;
let score = 0;
let violations = 0;
let gameState = 'playing';

const scoreElement = document.getElementById('score');
const violationsElement = document.getElementById('violations');
const scenarioCountElement = document.getElementById('scenario-count');
const scenarioTitleElement = document.getElementById('scenario-title');
const scenarioTextElement = document.getElementById('scenario-text');
const choicesElement = document.getElementById('choices');
const feedbackModal = document.getElementById('feedback-modal');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const feedbackIcon = document.getElementById('feedback-icon');
const penaltyInfo = document.getElementById('penalty-info');
const penaltyText = document.getElementById('penalty-text');
const nextButton = document.getElementById('next-button');
const gameOverModal = document.getElementById('game-over-modal');
const finalScore = document.getElementById('final-score');
const finalViolations = document.getElementById('final-violations');
const resultMessage = document.getElementById('result-message');
const resultBadge = document.getElementById('result-badge');
const restartButton = document.getElementById('restart-button');
const character = document.getElementById('character');
const characterSpeech = document.getElementById('character-speech');
const mouth = document.getElementById('mouth');

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 20 + 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = Math.random() * 20 + 20 + 's';
        particlesContainer.appendChild(particle);
    }
}

function updateCharacterExpression(isHappy) {
    if (isHappy) {
        mouth.setAttribute('d', 'M80 120 Q100 130 120 120');
        characterSpeech.textContent = 'すばらしい判断です！';
    } else {
        mouth.setAttribute('d', 'M80 130 Q100 120 120 130');
        characterSpeech.textContent = '違反は大変なことに...';
    }
    characterSpeech.style.animation = 'none';
    setTimeout(() => {
        characterSpeech.style.animation = 'fadeInOut 4s ease-in-out';
    }, 10);
}

function loadScenario() {
    const scenario = scenarios[currentScenarioIndex];
    scenarioTitleElement.textContent = scenario.title;
    scenarioTextElement.textContent = scenario.text;
    scenarioCountElement.textContent = `${currentScenarioIndex + 1}/${scenarios.length}`;
    
    choicesElement.innerHTML = '';
    scenario.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.textContent = choice.text;
        button.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choiceIndex) {
    const scenario = scenarios[currentScenarioIndex];
    const choice = scenario.choices[choiceIndex];
    
    if (choice.correct) {
        score += 10;
        scoreElement.textContent = score;
        feedbackTitle.textContent = '正解！';
        feedbackTitle.className = 'correct';
        penaltyInfo.classList.add('hidden');
        
        feedbackIcon.innerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#27ae60"/>';
        
        updateCharacterExpression(true);
        
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }
    } else {
        violations++;
        violationsElement.textContent = violations;
        feedbackTitle.textContent = '違反行為です！';
        feedbackTitle.className = 'incorrect';
        
        feedbackIcon.innerHTML = '<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#e74c3c"/>';
        
        if (choice.penalty) {
            penaltyInfo.classList.remove('hidden');
            penaltyText.textContent = choice.penalty;
        }
        
        updateCharacterExpression(false);
        
        document.querySelector('.game-stats').classList.add('violation-shake');
        setTimeout(() => {
            document.querySelector('.game-stats').classList.remove('violation-shake');
        }, 500);
        
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        }
    }
    
    feedbackText.textContent = choice.feedback;
    feedbackModal.classList.remove('hidden');
}

function nextScenario() {
    feedbackModal.classList.add('hidden');
    currentScenarioIndex++;
    
    if (currentScenarioIndex >= scenarios.length) {
        endGame();
    } else {
        loadScenario();
    }
}

function endGame() {
    gameState = 'ended';
    finalScore.textContent = score;
    finalViolations.textContent = violations;
    
    let badge = '';
    if (violations === 0) {
        resultMessage.textContent = '完璧！あなたは優秀なコンプライアンス意識を持っています！';
        resultMessage.style.color = '#27ae60';
        badge = '<div class="badge badge-perfect">🏆 コンプライアンスマスター</div>';
    } else if (violations <= 2) {
        resultMessage.textContent = 'もう少し注意が必要です。保険業法の理解を深めましょう。';
        resultMessage.style.color = '#f39c12';
        badge = '<div class="badge badge-good">📚 要復習</div>';
    } else {
        resultMessage.textContent = '危険！このままでは重大な処分を受ける可能性があります。';
        resultMessage.style.color = '#e74c3c';
        badge = '<div class="badge badge-warning">⚠️ 要注意</div>';
    }
    
    resultBadge.innerHTML = badge;
    gameOverModal.classList.remove('hidden');
    
    const currentUser = getCurrentUser();
    if (currentUser) {
        const scoreData = {
            score: score,
            violations: violations,
            date: new Date().toISOString(),
            game: 'compliance'
        };
        
        const users = getUsers();
        if (!users[currentUser.username].complianceScores) {
            users[currentUser.username].complianceScores = [];
        }
        users[currentUser.username].complianceScores.push(scoreData);
        saveUsers(users);
    }
}

function restartGame() {
    currentScenarioIndex = 0;
    score = 0;
    violations = 0;
    gameState = 'playing';
    
    scoreElement.textContent = score;
    violationsElement.textContent = violations;
    
    gameOverModal.classList.add('hidden');
    updateCharacterExpression(true);
    loadScenario();
}

nextButton.addEventListener('click', nextScenario);
restartButton.addEventListener('click', restartGame);

const viewStatsButton = document.getElementById('view-stats-button');
if (viewStatsButton) {
    viewStatsButton.addEventListener('click', function() {
        window.location.href = 'stats.html';
    });
}

window.addEventListener('DOMContentLoaded', function() {
    if (!checkAuth()) {
        return;
    }
    
    const currentUser = getCurrentUser();
    if (currentUser) {
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';
        userInfo.innerHTML = `
            <span>ようこそ、${currentUser.username}さん</span>
            <button onclick="logout()" class="logout-btn">ログアウト</button>
        `;
        document.body.appendChild(userInfo);
    }
    
    createParticles();
    loadScenario();
});