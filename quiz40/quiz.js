// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The region experienced __________ rainfall throughout the year, making it difficult for farmers to rely on consistent water supply.",
        chinese_question: "该地区全年降雨 __________，使得农民难以依赖稳定的供水。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "B", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "regular", chinese_answer: "规律的", chinese_romanization: "guīlǜ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(B) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances.",
        chinese_explanation: "(A) '零星的' 意味着在不规则的间隔或仅在几个地方发生的；分散或孤立的。" +
            "<br><br>" +
            "(B) '持续的' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定、支持或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '规律的' 意味着按固定或确定的模式排列或组成的，尤其是每个实例之间间隔相同的。"
    },
    {
        id: 2,
        question: "The __________ roar of the waterfall could be heard from miles away.",
        chinese_question: "__________ 的瀑布咆哮声可以从几英里外听到。",
        answers: [
            { option: "A", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "B", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "C", answer: "thunderous", chinese_answer: "雷鸣般的", chinese_romanization: "léimíng bān de" },
            { option: "D", answer: "muffled", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thunderous' means very loud." +
            "<br><br>" +
            "(A) 'faint' means barely perceptible." +
            "<br><br>" +
            "(B) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'muffled' means (of a sound) not loud because of being obstructed in some way; muted.",
        chinese_explanation: "(C) '雷鸣般的' 意味着非常响亮的。" +
            "<br><br>" +
            "(A) '微弱的' 意味着几乎察觉不到的。" +
            "<br><br>" +
            "(B) '安静的' 意味着几乎没有声音或没有声音的。" +
            "<br><br>" +
            "(D) '沉闷的' 意味着（声音）由于某种方式被阻挡而不响亮的；被削弱的。"
    },
    {
        id: 3,
        question: "The smell of the spoiled milk was __________, causing everyone to quickly leave the room.",
        chinese_question: "变质牛奶的气味令人 __________，所有人都迅速离开了房间。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "refreshing", chinese_answer: "清爽的", chinese_romanization: "qīngshuǎng de" },
            { option: "C", answer: "nauseating", chinese_answer: "恶心的", chinese_romanization: "ěxīn de" },
            { option: "D", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nauseating' means causing a feeling of nausea or disgust." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'refreshing' means serving to refresh or reinvigorate." +
            "<br><br>" +
            "(D) 'fragrant' means having a pleasant or sweet smell.",
        chinese_explanation: "(C) '恶心的' 意味着引起恶心或厌恶的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着带来幸福感或享受的。" +
            "<br><br>" +
            "(B) '清爽的' 意味着起到提神或振作作用的。" +
            "<br><br>" +
            "(D) '芳香的' 意味着有愉快或甜美气味的。"
    },
    {
        id: 4,
        question: "Her smile was __________, reflecting her true happiness at seeing her old friend after many years.",
        chinese_question: "她的笑容是 __________ 的，反映出她见到多年未见的老朋友时的真实快乐。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "B", answer: "forced", chinese_answer: "勉强的", chinese_romanization: "miǎnqiǎng de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "artificial", chinese_answer: "人工的", chinese_romanization: "réngōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(A) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(B) 'forced' means obtained or imposed by coercion or physical power." +
            "<br><br>" +
            "(D) 'artificial' means made or produced by human beings rather than occurring naturally, especially as a copy of something natural.",
        chinese_explanation: "(C) '真诚的' 意味着真正的；真实的。" +
            "<br><br>" +
            "(A) '假的' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(B) '勉强的' 意味着通过强制或体力获得或施加的。" +
            "<br><br>" +
            "(D) '人工的' 意味着由人类制造或生产的，而不是自然发生的，特别是作为某些自然事物的复制品。"
    },
    {
        id: 5,
        question: "Living in a __________ area often means having more space and a closer connection to nature.",
        chinese_question: "住在 __________ 地区通常意味着拥有更多的空间和更亲近大自然的联系。",
        answers: [
            { option: "A", answer: "crowded", chinese_answer: "拥挤的", chinese_romanization: "yōngjǐ de" },
            { option: "B", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
            { option: "C", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "D", answer: "industrial", chinese_answer: "工业的", chinese_romanization: "gōngyè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rural' means relating to, or characteristic of the countryside rather than the town." +
            "<br><br>" +
            "(A) 'crowded' means having a lot of people in a small area." +
            "<br><br>" +
            "(B) 'urban' means relating to, or characteristic of a city or town." +
            "<br><br>" +
            "(D) 'industrial' means relating to or characterized by industry.",
        chinese_explanation: "(C) '乡村的' 意味着与乡村而不是城镇相关或具有乡村特点的。" +
            "<br><br>" +
            "(A) '拥挤的' 意味着在一个小区域内有很多人。" +
            "<br><br>" +
            "(B) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
            "<br><br>" +
            "(D) '工业的' 意味着与工业相关或具有工业特点的。"
    },
    {
        id: 6,
        question: "Despite the team's __________ efforts, they were unable to finish the project on time due to unforeseen challenges.",
        chinese_question: "尽管团队 __________ 的努力，由于不可预见的挑战，他们未能按时完成项目。",
        answers: [
            { option: "A", answer: "lackluster", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "B", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
            { option: "C", answer: "negligent", chinese_answer: "玩忽职守的", chinese_romanization: "wánhūzhíshǒu de" },
            { option: "D", answer: "haphazard", chinese_answer: "杂乱无章的", chinese_romanization: "záluànwúzhāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diligent' means showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(A) 'lackluster' means lacking in vitality, force, or conviction." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(B) '勤勉的' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(A) '平淡的' 意味着缺乏活力、力量或信念的。" +
            "<br><br>" +
            "(C) '玩忽职守的' 意味着未能妥善照顾某事的。" +
            "<br><br>" +
            "(D) '杂乱无章的' 意味着缺乏任何明显的组织原则。"
    },
    {
        id: 7,
        question: "The __________ ceremony honored the bravery of the soldiers who had fallen in battle.",
        chinese_question: "这次 __________ 的仪式纪念了在战斗中牺牲的士兵们的英勇。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "celebratory", chinese_answer: "庆祝的", chinese_romanization: "qìngzhù de" },
            { option: "C", answer: "solemn", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
            { option: "D", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'solemn' means formal and dignified." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'celebratory' means acknowledging a significant event with a gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'frivolous' means not having any serious purpose or value.",
        chinese_explanation: "(C) '庄重的' 意味着正式和庄严的。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大愉悦和幸福的。" +
            "<br><br>" +
            "(B) '庆祝的' 意味着通过聚会或愉快活动来纪念重要事件的。" +
            "<br><br>" +
            "(D) '轻浮的' 意味着没有任何严肃目的或价值的。"
    },
    {
        id: 8,
        question: "Despite the progress we’ve made, his __________ attitude suggests that he doesn't believe we’ll ever succeed.",
        chinese_question: "尽管我们已经取得了进展，他的 __________ 态度表明他不相信我们会成功。",
        answers: [
            { option: "A", answer: "hopeful", chinese_answer: "抱有希望的", chinese_romanization: "bào yǒu xīwàng de" },
            { option: "B", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "assured", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(D) 'assured' means confident and certain.",
        chinese_explanation: "(B) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的情况会发生。" +
            "<br><br>" +
            "(A) '抱有希望的' 意味着对未来事件感到或激发乐观的。" +
            "<br><br>" +
            "(C) '自信的' 意味着对自己感到或表现出信心的；自信的。" +
            "<br><br>" +
            "(D) '确定的' 意味着自信和肯定的。"
    },
    {
        id: 9,
        question: "After months of hard work, the team felt __________ as they celebrated their victory in the championship.",
        chinese_question: "经过几个月的辛勤工作，团队在庆祝他们在锦标赛中的胜利时感到 __________。",
        answers: [
            { option: "A", answer: "defeated", chinese_answer: "失败的", chinese_romanization: "shībài de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "triumphant", chinese_answer: "胜利的", chinese_romanization: "shènglì de" },
            { option: "D", answer: "discouraged", chinese_answer: "气馁的", chinese_romanization: "qìněi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'triumphant' means having achieved victory or success." +
            "<br><br>" +
            "(A) 'defeated' means having been beaten in a battle or other contest." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'discouraged' means having lost confidence or enthusiasm; disheartened.",
        chinese_explanation: "(C) '胜利的' 意味着取得了胜利或成功。" +
            "<br><br>" +
            "(A) '失败的' 意味着在战斗或其他比赛中被击败。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '气馁的' 意味着失去信心或热情；沮丧的。"
    },
    {
        id: 10,
        question: "The neighborhood is considered __________, with low crime rates and friendly residents.",
        chinese_question: "这个社区被认为是 __________ 的，犯罪率低，居民友好。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "dangerous", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "C", answer: "risky", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
            { option: "D", answer: "harmful", chinese_answer: "有害", chinese_romanization: "yǒuhài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'dangerous' means able or likely to cause harm or injury." +
            "<br><br>" +
            "(C) 'risky' means full of the possibility of danger, failure, or loss." +
            "<br><br>" +
            "(D) 'harmful' means causing or likely to cause harm.",
        chinese_explanation: "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(B) '危险' 意味着能够或可能造成伤害。" +
            "<br><br>" +
            "(C) '冒险' 意味着充满危险、失败或损失的可能性。" +
            "<br><br>" +
            "(D) '有害' 意味着造成或可能造成伤害。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
