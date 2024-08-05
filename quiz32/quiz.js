// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ boots were perfect for hiking in the rough terrain.",
        chinese_question: "他的 __________ 靴子非常适合在崎岖的地形中徒步旅行。",
        answers: [
            { option: "A", answer: "delicate", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "fragile", chinese_answer: "易碎的", chinese_romanization: "yìsuì de" },
            { option: "C", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
            { option: "D", answer: "flimsy", chinese_answer: "轻薄的", chinese_romanization: "qīngbáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(A) 'delicate' means easily broken or damaged; fragile." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'flimsy' means comparatively light and insubstantial; easily damaged.",
        chinese_explanation: "(C) '结实的' 意味着坚固和牢固地建造。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(B) '易碎的' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(D) '轻薄的' 意味着比较轻且不牢固；容易损坏。"
    },
    {
        id: 2,
        question: "The medication is __________ for use by both adults and children, and will not cause any harmful side effects.",
        chinese_question: "这种药物对成人和儿童都 __________，不会引起任何有害的副作用。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "harmful", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "C", answer: "ineffective", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "D", answer: "dangerous", chinese_answer: "危险", chinese_romanization: "wēixiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(C) 'ineffective' means not producing the desired effect." +
            "<br><br>" +
            "(D) 'dangerous' means able or likely to cause harm or injury.",
        chinese_explanation: "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(B) '有害' 意味着造成或可能造成伤害。" +
            "<br><br>" +
            "(C) '无效' 意味着未能产生预期效果。" +
            "<br><br>" +
            "(D) '危险' 意味着能够或可能造成伤害或伤害。"
    },
    {
        id: 3,
        question: "It is __________ for students to stand when the principal enters the classroom, as a sign of respect.",
        chinese_question: "校长进入教室时，学生们起立表示尊重是 __________ 的。",
        answers: [
            { option: "A", answer: "uncommon", chinese_answer: "不常见的", chinese_romanization: "bù chángjiàn de" },
            { option: "B", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "C", answer: "discouraged", chinese_answer: "不鼓励的", chinese_romanization: "bù gǔlì de" },
            { option: "D", answer: "unexpected", chinese_answer: "意外的", chinese_romanization: "yìwài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances." +
            "<br><br>" +
            "(A) 'uncommon' means out of the ordinary; unusual." +
            "<br><br>" +
            "(C) 'discouraged' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(D) 'unexpected' means not expected or regarded as likely to happen.",
        chinese_explanation: "(B) '习惯的' 意味着根据特定社会、地方或情况的习俗或惯常做法。" +
            "<br><br>" +
            "(A) '不常见的' 意味着不寻常的。" +
            "<br><br>" +
            "(C) '不鼓励的' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(D) '意外的' 意味着没有预料到的或不被认为可能发生的。"
    },
    {
        id: 4,
        question: "The __________ path through the mountains was dangerous and not for the faint of heart.",
        chinese_question: "穿越山区的 __________ 小路非常危险，不适合胆小的人。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "secure", chinese_answer: "稳固的", chinese_romanization: "wěngù de" },
            { option: "C", answer: "treacherous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'treacherous' means hazardous because of presenting hidden or unpredictable dangers." +
            "<br><br>" +
            "(A) 'safe' means not likely to cause or lead to harm or injury." +
            "<br><br>" +
            "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance.",
        chinese_explanation: "(C) '危险的' 意味着因为存在隐藏或不可预见的危险而有害的。" +
            "<br><br>" +
            "(A) '安全的' 意味着不太可能导致伤害或损伤的。" +
            "<br><br>" +
            "(B) '稳固的' 意味着固定或系牢，不会松动、丢失或丧失的。" +
            "<br><br>" +
            "(D) '可靠的' 意味着质量或性能一贯良好的。"
    },
    {
        id: 5,
        question: "After staying up all night, he felt __________ and could barely keep his eyes open during the meeting.",
        chinese_question: "熬了一整夜后，他感到 __________，在会议上几乎无法睁开眼睛。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūnyùshuì de" },
            { option: "D", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(C) '昏昏欲睡的' 意味着受到嗜睡的影响；迟钝和无精打采的。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '警觉的' 意味着迅速注意到任何不寻常和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(D) '活泼的' 意味着充满生命和活力的；活跃和外向的。"
    },
    {
        id: 6,
    question: "The engineer assured the team that constructing the bridge within the given timeframe was __________, and that the construction could proceed as planned.",
    chinese_question: "工程师向团队保证，在给定的时间范围内建造桥梁是 __________ 的，并且可以按计划进行施工。",
    answers: [
        { option: "A", answer: "impossible", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" },
        { option: "B", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
        { option: "C", answer: "unlikely", chinese_answer: "不大可能的", chinese_romanization: "bù dà kěnéng de" },
        { option: "D", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'feasible' means possible to do easily or conveniently." +
        "<br><br>" +
        "(A) 'impossible' means not able to occur, exist, or be done." +
        "<br><br>" +
        "(B) 'impractical' means not adapted for use or action; not sensible." +
        "<br><br>" +
        "(C) 'unlikely' means not likely to happen, be done, or be true.",
    chinese_explanation: "(D) '可行的' 意味着容易或方便地完成的。" +
        "<br><br>" +
        "(A) '不可能的' 意味着不能发生、存在或完成的。" +
        "<br><br>" +
        "(B) '不切实际的' 意味着不适合使用或行动的；不明智的。" +
        "<br><br>" +
        "(C) '不大可能的' 意味着不可能发生、完成或是真实的。"
    },
    {
        id: 7,
        question: "The __________ leader was known for making wise decisions that benefited the entire community.",
        chinese_question: "这位__________的领导者以做出有利于整个社区的明智决定而闻名。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
            { option: "B", answer: "sagacious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "C", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "D", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sagacious' means having or showing keen mental discernment and good judgment; wise." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(C) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '明智的'一词意味着具有或表现出敏锐的心智能力和良好的判断力；智慧的。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好的判断力或判断；不明智的。" +
            "<br><br>" +
            "(C) '无知的' 意味着总体上缺乏知识或意识的；未受教育的或不成熟的。" +
            "<br><br>" +
            "(D) '天真的' 意味着表现出缺乏经验、智慧或判断力的。"
    },
    {
        id: 8,
        question: "Her __________ actions showed she was clearly supportive of the new policy.",
        chinese_question: "她的__________行动表明她明显支持新政策。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "D", answer: "secret", chinese_answer: "秘密的", chinese_romanization: "mìmì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overt' means done or shown openly; plainly or readily apparent, not secret or hidden." +
            "<br><br>" +
            "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'secret' means not known or seen or not meant to be known or seen by others.",
        chinese_explanation: "(C) '公开的'一词意味着公开进行或显示的；明显的或显而易见的，不是秘密或隐藏的。" +
            "<br><br>" +
            "(A) '隐蔽的' 意味着没有公开承认或展示的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着藏在视线之外的；隐蔽的。" +
            "<br><br>" +
            "(D) '秘密的' 意味着不为人知或未被看到或不打算为他人所知或看到的。"
    },
    {
        id: 9,
        question: "This is a __________ opportunity that you should not miss.",
        chinese_question: "这是一个 __________ 的机会，你不应该错过。",
        answers: [
            { option: "A", answer: "worthless", chinese_answer: "无价值", chinese_romanization: "wú jiàzhí" },
            { option: "B", answer: "mediocre", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "C", answer: "golden", chinese_answer: "宝贵", chinese_romanization: "bǎoguì" },
            { option: "D", answer: "insignificant", chinese_answer: "不重要", chinese_romanization: "bù zhòngyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'golden' means particularly valuable, prosperous, or advantageous." +
            "<br><br>" +
            "(A) 'worthless' means having no real value or use." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '宝贵' 意味着特别有价值、繁荣或有利的。" +
            "<br><br>" +
            "(A) '无价值' 意味着没有实际价值或用途。" +
            "<br><br>" +
            "(B) '普通' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(D) '不重要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 10,
    question: "He was __________ to hear the results of his job interview, as he really wanted the position.",
    chinese_question: "他对听到工作面试结果感到__________，因为他真的很想要这份工作。",
    answers: [
        { option: "A", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
        { option: "B", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
        { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'anxious' means feeling or showing worry, nervousness, or unease about something with an uncertain outcome. Figuratively, it can mean eagerly and nervously awaiting something." +
        "<br><br>" +
        "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(C) 'confident' means feeling or showing certainty about something." +
        "<br><br>" +
        "(D) 'relaxed' means free from tension and anxiety.",
    chinese_explanation: "(B) '焦虑的' 一词意味着对结果不确定的事情感到或表现出担忧、紧张或不安。比喻地，它可以表示急切而紧张地等待某事。" +
        "<br><br>" +
        "(A) '冷静的' 意味着不表现或感觉紧张、愤怒或其他强烈情绪。" +
        "<br><br>" +
        "(C) '自信的' 意味着对某事感到或表现出确定性。" +
        "<br><br>" +
        "(D) '放松的' 意味着没有紧张和焦虑。"
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
