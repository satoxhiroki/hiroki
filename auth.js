const USERS_KEY = 'mathGameUsers';
const CURRENT_USER_KEY = 'currentUser';

function getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
}

function showSuccess(message) {
    const successElement = document.getElementById('successMessage');
    successElement.textContent = message;
    successElement.style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

function login(username, password) {
    const users = getUsers();
    
    if (users[username] && users[username].password === password) {
        const userInfo = {
            username: username,
            scores: users[username].scores || []
        };
        setCurrentUser(userInfo);
        showSuccess('ログイン成功！ゲーム選択ページへ移動します...');
        setTimeout(() => {
            window.location.href = 'game-select.html';
        }, 1000);
        return true;
    }
    
    showError('ユーザー名またはパスワードが正しくありません。');
    return false;
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showError('ユーザー名とパスワードを入力してください。');
        return;
    }
    
    if (username.length < 3) {
        showError('ユーザー名は3文字以上にしてください。');
        return;
    }
    
    if (password.length < 4) {
        showError('パスワードは4文字以上にしてください。');
        return;
    }
    
    const users = getUsers();
    
    if (users[username]) {
        showError('このユーザー名は既に使用されています。');
        return;
    }
    
    users[username] = {
        password: password,
        scores: []
    };
    
    saveUsers(users);
    showSuccess('登録成功！ログインしてください。');
    
    document.getElementById('loginForm').reset();
}

function logout() {
    clearCurrentUser();
    window.location.href = 'login.html';
}

function checkAuth() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function saveScore(score, time, questions) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const users = getUsers();
    const scoreData = {
        score: score,
        time: time,
        questions: questions,
        date: new Date().toISOString()
    };
    
    if (!users[currentUser.username].scores) {
        users[currentUser.username].scores = [];
    }
    
    users[currentUser.username].scores.push(scoreData);
    saveUsers(users);
    
    currentUser.scores = users[currentUser.username].scores;
    setCurrentUser(currentUser);
}

if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });
}