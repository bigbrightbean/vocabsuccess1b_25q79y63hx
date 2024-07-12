// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They __________ to cheat during the exam by sharing answers through a hidden earpiece.",
        chinese_question: "他们 __________ 以通过隐藏的耳机共享答案在考试中作弊。",
        answers: [
            { option: "A", answer: "connived", chinese_answer: "共谋", chinese_romanization: "gòngmóu" },
            { option: "B", answer: "competed", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "C", answer: "prepared", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" },
            { option: "D", answer: "refused", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connived' means secretly allow (something considered immoral, illegal, wrong, or harmful) to occur." +
            "<br><br>" +
            "(B) 'competed' means strive to gain or win something by defeating or establishing superiority over others." +
            "<br><br>" +
            "(C) 'prepared' means make (something) ready for use or consideration." +
            "<br><br>" +
            "(D) 'refused' means indicate or show that one is not willing to do something.",
        chinese_explanation: "(A) '共谋' 意味着秘密允许（某些被认为不道德、非法、错误或有害的事情）发生。" +
            "<br><br>" +
            "(B) '竞争' 意味着通过击败或确立优越地位来争取获得某物。" +
            "<br><br>" +
            "(C) '准备' 意味着使（某物）准备好供使用或考虑。" +
            "<br><br>" +
            "(D) '拒绝' 意味着表示或表明某人不愿意做某事。"
    },
    {
        id: 2,
    question: "She managed to __________ the audience with her captivating storytelling.",
    chinese_question: "她用迷人的故事讲述 __________ 了观众。",
    answers: [
        { option: "A", answer: "beguile", chinese_answer: "迷住", chinese_romanization: "mízhù" },
        { option: "B", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "offend", chinese_answer: "冒犯", chinese_romanization: "màofàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'beguile' means to charm or enchant someone in a deceptive way." +
        "<br><br>" + 
        "(B) 'bore' means to make someone feel weary and uninterested." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'offend' means to cause someone to feel upset, annoyed, or resentful.",
    chinese_explanation: "(A) '迷住' 意味着以欺骗的方式迷住或吸引某人。" +
        "<br><br>" + 
        "(B) '使厌烦' 意味着让某人感到疲倦和不感兴趣。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '冒犯' 意味着使某人感到不安、恼怒或怨恨。"
    },
    {
        id: 3,
    question: "The salesman tried to __________ the customers into buying the defective product.",
    chinese_question: "推销员试图 __________ 顾客购买有缺陷的产品。",
    answers: [
        { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "B", answer: "inform", chinese_answer: "告知", chinese_romanization: "gàozhī" },
        { option: "C", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bamboozle' means to trick or deceive someone." +
        "<br><br>" + 
        "(A) 'clarify' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" + 
        "(B) 'inform' means to give someone facts or information." +
        "<br><br>" + 
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
        "<br><br>" + 
        "(A) '澄清' 意味着使陈述或情况不再混乱，更易于理解。" +
        "<br><br>" + 
        "(B) '告知' 意味着给某人提供事实或信息。" +
        "<br><br>" + 
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 4,
        question: "The charity organization plans to __________ donations from local businesses to support their new project.",
        chinese_question: "慈善组织计划向当地企业 __________ 捐款，以支持他们的新项目。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "solicit", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'solicit' means to ask for or try to obtain something from someone." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(B) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'hide' means to put or keep out of sight.",
        chinese_explanation: "(D) '请求' 意味着向某人请求或试图从某人那里获得某物。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(B) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使某物不被看到。"
    },
    {
        id: 5,
    question: "The data __________ that more research is needed in this area.",
    chinese_question: "数据 __________ 需要在这一领域进行更多研究。",
    answers: [
        { option: "A", answer: "indicates", chinese_answer: "表明", chinese_romanization: "biǎomíng" },
        { option: "B", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "denies", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "D", answer: "hides", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'indicates' means to show or point out." +
        "<br><br>" + 
        "(B) 'ignores' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'denies' means to refuse to admit the truth or existence of something." +
        "<br><br>" + 
        "(D) 'hides' means to put or keep out of sight.",
    chinese_explanation: "(A) “表明” 意味着显示或指出。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '否认' 意味着拒绝承认某事的真实性或存在。" +
        "<br><br>" + 
        "(D) '隐藏' 意味着隐瞒；隐藏。"
    },
    {
        id: 6,
    question: "The guidebook will __________ you in exploring the city's hidden gems.",
    chinese_question: "这本指南将 __________ 你探索这座城市的隐藏宝藏。",
    answers: [
        { option: "A", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
        { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assist' means to help someone by doing a share of the work." +
        "<br><br>" +
        "(A) 'mislead' means to cause someone to have a wrong idea or impression." +
        "<br><br>" +
        "(C) 'hinder' means to make it difficult for someone to do something or for something to happen." +
        "<br><br>" +
        "(D) 'confuse' means to make someone bewildered or perplexed.",
    chinese_explanation: "(B) '协助' 意味着通过分担工作来帮助某人。" +
        "<br><br>" +
        "(A) '误导' 意味着使某人产生错误的想法或印象。" +
        "<br><br>" +
        "(C) '阻碍' 意味着使某人做某事或某事发生变得困难。" +
        "<br><br>" +
        "(D) '使困惑' 意味着使某人困惑或迷惑。"
    },
    {
        id: 7,
    question: "To complete the project on time, you need to __________ on the task at hand.",
    chinese_question: "为了按时完成项目，你需要 __________ 眼前的任务。",
    answers: [
        { option: "A", answer: "distract", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
        { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'focus' means to pay particular attention to something." +
        "<br><br>" + 
        "(A) 'distract' means to prevent someone from giving full attention to something." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(B) “专注” 意味着特别注意某事。" +
        "<br><br>" + 
        "(A) '分心' 意味着阻止某人全神贯注于某事。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 8,
    question: "The scam artist managed to __________ several people into giving him their personal information.",
    chinese_question: "诈骗犯设法 __________ 几个人，让他们把个人信息告诉他。",
    answers: [
        { option: "A", answer: "dupe", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dupe' means to deceive or trick someone." +
        "<br><br>" + 
        "(B) 'assist' means to help someone." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(A) '欺骗' 意味着欺骗或捉弄某人。" +
        "<br><br>" + 
        "(B) '帮助' 意味着帮助某人。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
    question: "To __________ a new language, you must practice speaking it daily.",
    chinese_question: "要 __________ 一门新语言，你必须每天练习说它。",
    answers: [
        { option: "A", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "master", chinese_answer: "精通", chinese_romanization: "jīngtōng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'master' means to become highly skilled or proficient in a particular area." +
        "<br><br>" +
        "(A) 'forget' means to fail to remember." +
        "<br><br>" +
        "(B) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(D) '精通' 意味着在某一特定领域变得非常熟练或精通。" +
        "<br><br>" +
        "(A) '忘记' 意味着未能记住。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '忽略' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "Parents sometimes need to __________ their children to teach them right from wrong.",
    chinese_question: "父母有时需要 __________ 孩子以教导他们分辨是非。",
    answers: [
        { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "B", answer: "chastise", chinese_answer: "责罚", chinese_romanization: "zéfá" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'chastise' means to rebuke or reprimand severely." +
        "<br><br>" + 
        "(A) 'reward' means to give something to someone in recognition of their service, effort, or achievement." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(B) '责罚' 意味着严厉地斥责或谴责。" +
        "<br><br>" + 
        "(A) '奖励' 意味着因服务、努力或成就给予某人某物。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
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
