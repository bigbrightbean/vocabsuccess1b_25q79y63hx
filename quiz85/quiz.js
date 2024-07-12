// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her enthusiasm for the project never __________, even during the toughest times.",
    chinese_question: "即使在最艰难的时期，她对项目的热情也从未 __________。",
    answers: [
        { option: "A", answer: "flourished", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "wavered", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
        { option: "C", answer: "pale", chinese_answer: "相形见绌", chinese_romanization: "xiāngxíngjiànchù" },
        { option: "D", answer: "faded", chinese_answer: "褪色", chinese_romanization: "tuìsè" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'faded' means to gradually grow faint and disappear." +
        "<br><br>" +
        "(A) 'flourished' means to grow or develop in a healthy or vigorous way." +
        "<br><br>" +
        "(B) 'wavered' means to become unsteady or unreliable." +
        "<br><br>" +
        "(C) 'pale' means to seem less impressive or important when compared to something else.",
    chinese_explanation: "(D) '褪色' 意味着逐渐变得模糊并消失。" +
        "<br><br>" +
        "(A) '繁荣' 意味着以健康或有力的方式生长或发展。" +
        "<br><br>" +
        "(B) '动摇' 意味着变得不稳定或不可靠。" +
        "<br><br>" +
        "(C) '相形见绌' 意味着与某事相比显得不那么令人印象深刻或重要。"
    },
    {
        id: 2,
    question: "The company decided to __________ employee satisfaction through an anonymous questionnaire.",
    chinese_question: "公司决定通过匿名问卷 __________ 员工满意度。",
    answers: [
        { option: "A", answer: "survey", chinese_answer: "调查", chinese_romanization: "diàochá" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'survey' means to examine and record the opinions or experiences of individuals." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(C) 'reduce' means to make smaller or less in amount, degree, or size." +
        "<br><br>" +
        "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something.",
    chinese_explanation: "(A) '调查' 意味着检查和记录个人的意见或经历。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(C) '减少' 意味着在数量、程度或规模上变小或减少。" +
        "<br><br>" +
        "(D) '提高' 意味着增强、增加或进一步改善某物的质量、价值或范围。"
    },
    {
        id: 3,
    question: "Having a balanced diet is __________ for maintaining good health.",
    chinese_question: "均衡饮食对保持健康是 __________ 的。",
    answers: [
        { option: "A", answer: "essential", chinese_answer: "必要", chinese_romanization: "bìyào" },
        { option: "B", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
        { option: "C", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
        { option: "D", answer: "nonessential", chinese_answer: "非必需", chinese_romanization: "fēi bìxū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'essential' means absolutely necessary; extremely important." +
        "<br><br>" + 
        "(B) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" + 
        "(C) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" + 
        "(D) 'nonessential' means not absolutely necessary.",
    chinese_explanation: "(A) '必要' 意味着绝对必要；极其重要。" +
        "<br><br>" + 
        "(B) '无关' 意味着与某事无关或不相关。" +
        "<br><br>" + 
        "(C) '微不足道' 意味着太小或不重要而不值得考虑。" +
        "<br><br>" + 
        "(D) '非必需' 意味着不是绝对必要的。"
    },
    {
        id: 4,
        question: "The detective had to __________ through the evidence to find the crucial clue.",
        chinese_question: "侦探必须 __________ 证据以找到关键线索。",
        answers: [
            { option: "A", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "destroy", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "ferret", chinese_answer: "搜寻", chinese_romanization: "sōuxún" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ferret' means to search tenaciously for and find something." +
            "<br><br>" +
            "(A) 'overlook' means to fail to notice something." +
            "<br><br>" +
            "(B) 'destroy' means to put an end to the existence of something." +
            "<br><br>" +
            "(C) 'hide' means to put or keep out of sight.",
        chinese_explanation: "(D) '搜寻' 意味着坚韧地搜索并找到某物。" +
            "<br><br>" +
            "(A) '忽略' 意味着未能注意到某事。" +
            "<br><br>" +
            "(B) '毁坏' 意味着终结某物的存在。" +
            "<br><br>" +
            "(C) '隐藏' 意味着将某物置于或保持在视线之外。"
    },
    {
        id: 5,
    question: "The way he constantly checks his phone during conversations really __________ me.",
    chinese_question: "他在谈话中不断查看手机的方式真的 __________ 我。",
    answers: [
        { option: "A", answer: "entertains", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "B", answer: "irks", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "pleases", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
        { option: "D", answer: "relaxes", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irks' used figuratively means to irritate or annoy." +
        "<br><br>" +
        "(A) 'entertains' means to provide someone with amusement or enjoyment." +
        "<br><br>" +
        "(C) 'pleases' means to cause someone to feel happy and satisfied." +
        "<br><br>" +
        "(D) 'relaxes' means to make someone or something less tense or anxious.",
    chinese_explanation: "(B) '激怒' 在比喻意义上指刺激或惹恼。" +
        "<br><br>" +
        "(A) '娱乐' 意味着为某人提供娱乐或享受。" +
        "<br><br>" +
        "(C) '取悦' 意味着让某人感到高兴和满意。" +
        "<br><br>" +
        "(D) '放松' 意味着使某人或某物减少紧张或焦虑。"
    },
    {
        id: 6,
    question: "The chef prepared an elaborate feast to __________ the guests.",
    chinese_question: "厨师准备了一场盛宴来 __________ 客人。",
    answers: [
        { option: "A", answer: "starve", chinese_answer: "挨饿", chinese_romanization: "ái è" },
        { option: "B", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "D", answer: "exhaust", chinese_answer: "使疲惫", chinese_romanization: "shǐ píbèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'satiate' means to satisfy fully." +
        "<br><br>" +
        "(A) 'starve' means to suffer or die from lack of food." +
        "<br><br>" +
        "(C) 'confuse' means to make someone unable to think clearly." +
        "<br><br>" +
        "(D) 'exhaust' means to drain of strength or energy.",
    chinese_explanation: "(B) '满足' 意味着完全满足。" +
        "<br><br>" +
        "(A) '挨饿' 意味着因缺乏食物而遭受痛苦或死亡。" +
        "<br><br>" +
        "(C) '使困惑' 意味着使某人无法清晰思考。" +
        "<br><br>" +
        "(D) '使疲惫' 意味着使某人筋疲力尽。"
    },
    {
        id: 7,
    question: "The editor decided to __________ the controversial paragraph from the article to avoid potential backlash.",
    chinese_question: "编辑决定从文章中 __________ 有争议的段落，以避免潜在的反对。",
    answers: [
        { option: "A", answer: "include", chinese_answer: "包括", chinese_romanization: "bāokuò" },
        { option: "B", answer: "expunge", chinese_answer: "删除", chinese_romanization: "shānchú" },
        { option: "C", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "D", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expunge' means to erase or remove completely." +
        "<br><br>" +
        "(A) 'include' means to incorporate or make part of." +
        "<br><br>" +
        "(C) 'highlight' means to emphasize or make stand out." +
        "<br><br>" +
        "(D) 'emphasize' means to give special importance to.",
    chinese_explanation: "(B) '删除' 一词意味着完全抹去或移除。" +
        "<br><br>" +
        "(A) '包括' 意味着包含或使成为一部分。" +
        "<br><br>" +
        "(C) '强调' 意味着强调或突出。" +
        "<br><br>" +
        "(D) '强调' 意味着给予特别重要性。"
    },
    {
        id: 8,
    question: "The group of friends __________ in the snow, throwing snowballs and building snowmen.",
    chinese_question: "一群朋友在雪地里 __________，互相扔雪球，堆雪人。",
    answers: [
        { option: "A", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
        { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
        "<br><br>" + 
        "(A) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
        "<br><br>" + 
        "(A) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 9,
    question: "The villain in the movie would often __________ his teeth when he was upset.",
    chinese_question: "电影中的反派经常在生气时 __________ 牙齿。",
    answers: [
        { option: "A", answer: "gnash", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
        { option: "B", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "laugh", chinese_answer: "大笑", chinese_romanization: "dàxiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gnash' means to grind one's teeth together, typically as a sign of anger." +
        "<br><br>" +
        "(B) 'cheer' means to shout for joy or in praise or encouragement." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'laugh' means to make sounds and movements of the face and body that express amusement or happiness.",
    chinese_explanation: "(A) '咬牙' 意味着磨牙，通常是愤怒的表现。" +
        "<br><br>" +
        "(B) '欢呼' 意味着为愉快或赞扬或鼓励而大声喊叫。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '大笑' 意味着发出表示愉快或幸福的声音和面部和身体的动作。"
    },
    {
        id: 10,
    question: "The bakery's window display was designed to __________ passersby with its delicious-looking pastries.",
    chinese_question: "面包店的橱窗展示旨在用美味的糕点 __________ 路人。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "tarnish", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "C", answer: "tantalize", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
        { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'tantalize' means to torment or tease someone with the sight or promise of something that is unobtainable." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(B) 'tarnish' means to lose or cause to lose luster, especially as a result of exposure to air or moisture." +
        "<br><br>" +
        "(D) 'discourage' means to cause someone to lose confidence or enthusiasm.",
    chinese_explanation: "(C) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(B) '玷污' 意味着失去或使失去光泽，尤其是由于暴露在空气或湿气中。" +
        "<br><br>" +
        "(D) '劝阻' 意味着使某人失去信心或热情。"
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
