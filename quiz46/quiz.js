// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ expression indicated that the matter at hand was of great importance and not to be taken lightly.",
    chinese_question: "他 __________ 的表情表明眼前的事情非常重要，不容轻视。",
    answers: [
        { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "B", answer: "jovial", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "playful", chinese_answer: "顽皮的", chinese_romanization: "wánpí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'serious' means solemn or thoughtful in character or manner." +
        "<br><br>" +
        "(B) 'jovial' means cheerful and friendly." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'playful' means fond of games and amusement; lighthearted.",
    chinese_explanation: "(A) '严肃的' 意味着性格或举止庄重或深思的。" +
        "<br><br>" +
        "(B) '快乐的' 意味着友好和愉快的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；冷漠的。" +
        "<br><br>" +
        "(D) '顽皮的' 意味着喜欢游戏和娱乐的；轻松愉快的。"
    },
    {
        id: 2,
        question: "Her __________ desire for success led her to start multiple businesses, attend countless networking events, and take advanced courses to stay ahead in her field.",
        chinese_question: "她对成功的 __________ 欲望促使她创办了多家公司，参加了无数的社交活动，并参加高级课程以在她的领域中保持领先。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "indolent", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "C", answer: "sated", chinese_answer: "饱足的", chinese_romanization: "bǎozú de" },
            { option: "D", answer: "insatiable", chinese_answer: "贪得无厌的", chinese_romanization: "tāndéwúyàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'insatiable' means impossible to satisfy, often used to describe an unquenchable desire or appetite." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indolent' means wanting to avoid activity or exertion; lazy." +
            "<br><br>" +
            "(C) 'sated' means satisfied to the full, especially with food.",
        chinese_explanation: "(D) '贪得无厌的' 意味着无法满足，通常用来形容无法遏制的欲望或食欲。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '懒惰的' 意味着想避免活动或努力；懒惰的。" +
            "<br><br>" +
            "(C) '饱足的' 意味着完全满足，尤其是食物方面。"
    },
    {
        id: 3,
        question: "Despite the harsh criticism from her peers, she remained __________ to their negative comments and continued to pursue her goals.",
        chinese_question: "尽管受到同龄人的严厉批评，她仍然对他们的负面评论 __________，继续追求自己的目标。",
        answers: [
            { option: "A", answer: "pliable", chinese_answer: "易弯的", chinese_romanization: "yì wān de" },
            { option: "B", answer: "susceptible", chinese_answer: "易受影响的", chinese_romanization: "yì shòu yǐngxiǎng de" },
            { option: "C", answer: "vulnerable", chinese_answer: "易受伤的", chinese_romanization: "yì shòu shāng de" },
            { option: "D", answer: "impervious", chinese_answer: "不受影响的", chinese_romanization: "bù shòu yǐngxiǎng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impervious' means not allowing fluid to pass through; unable to be affected by." +
            "<br><br>" +
            "(A) 'pliable' means easily bent or flexible." +
            "<br><br>" +
            "(B) 'susceptible' means likely or liable to be influenced or harmed by a particular thing." +
            "<br><br>" +
            "(C) 'vulnerable' means exposed to the possibility of being attacked or harmed, either physically or emotionally.",
        chinese_explanation: "(D) '不受影响的' 意味着不让液体通过；不受影响的。" +
            "<br><br>" +
            "(A) '易弯的' 意味着容易弯曲或灵活的。" +
            "<br><br>" +
            "(B) '易受影响的' 意味着可能或易受特定事物影响或伤害的。" +
            "<br><br>" +
            "(C) '易受伤的' 意味着有可能遭受攻击或伤害的，无论是身体上还是情感上。"
    },
    {
        id: 4,
        question: "The __________ plot of the novel made it hard to follow the story.",
        chinese_question: "小说的 __________ 情节使得故事难以跟随。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliǎodàng de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point.",
        chinese_explanation: "(B) '复杂的' 意味着极其复杂且难以跟随。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着不复杂且容易理解。" +
            "<br><br>" +
            "(D) '基本的' 意味着形成基础或起点。"
    },
    {
        id: 5,
        question: "The chef's __________ dessert was the highlight of the meal, with everyone praising its taste.",
        chinese_question: "厨师的 __________ 甜点是这顿饭的亮点，每个人都赞美它的味道。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "B", answer: "unappetizing", chinese_answer: "不好吃", chinese_romanization: "bù hǎochī" },
            { option: "C", answer: "scrumptious", chinese_answer: "美味", chinese_romanization: "měiwèi" },
            { option: "D", answer: "mediocre", chinese_answer: "中等", chinese_romanization: "zhōngděng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrumptious' means extremely appetizing or delicious." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(B) 'unappetizing' means not inviting or attractive." +
            "<br><br>" +
            "(D) 'mediocre' means of only moderate quality; not very good.",
        chinese_explanation: "(C) '美味' 意味着极其可口或美味的。" +
            "<br><br>" +
            "(A) '平淡' 意味着缺乏强烈的特征或特点，因此无趣。" +
            "<br><br>" +
            "(B) '不好吃' 意味着不吸引人或不诱人。" +
            "<br><br>" +
            "(D) '中等' 意味着质量只是一般；不太好。"
    },
    {
        id: 6,
        question: "She couldn't help but feel hurt by his __________ remarks about her project.",
        chinese_question: "他对她的项目的 __________ 评论让她感到很受伤。",
        answers: [
            { option: "A", answer: "mocking", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
            { option: "B", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "sympathetic", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mocking' means making fun of someone or something in a cruel way." +
            "<br><br>" +
            "(B) 'encouraging' means giving support, confidence, or hope." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'sympathetic' means feeling, showing, or expressing sympathy.",
        chinese_explanation: "(A) '嘲讽' 意味着以残酷的方式取笑某人或某事。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给予支持、信心或希望。" +
            "<br><br>" +
            "(C) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(D) '同情' 意味着感到、表现或表达同情。"
    },
    {
        id: 7,
    question: "Her __________ presentation was well-received because it conveyed the essential points without unnecessary details.",
    chinese_question: "她的 __________ 演讲很受欢迎，因为它传达了必要的要点，没有不必要的细节。",
    answers: [
        { option: "A", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
        { option: "B", answer: "rambling", chinese_answer: "漫无边际的", chinese_romanization: "mànwúbiānjì de" },
        { option: "C", answer: "lengthy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
        { option: "D", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'succinct' means briefly and clearly expressed." +
        "<br><br>" +
        "(A) 'verbose' means using or expressed in more words than are needed." +
        "<br><br>" +
        "(B) 'rambling' means lengthy and confused or inconsequential." +
        "<br><br>" +
        "(C) 'lengthy' means of considerable or unusual length, especially so as to be tedious.",
    chinese_explanation: "(D) '简洁的' 意味着简明和清晰表达的。" +
        "<br><br>" +
        "(A) '冗长的' 意味着使用或表达的词比需要的多。" +
        "<br><br>" +
        "(B) '漫无边际的' 意味着冗长和混乱或无关紧要的。" +
        "<br><br>" +
        "(C) '冗长的' 意味着相当长或不寻常的长度，尤其是以至于乏味的。"
    },
    {
        id: 8,
        question: "It felt __________ to keep cleaning the house when the kids were constantly making a mess.",
        chinese_question: "当孩子们不断弄乱时，继续打扫房子感觉很 __________。",
        answers: [
            { option: "A", answer: "rewarding", chinese_answer: "有回报的", chinese_romanization: "yǒu huíbào de" },
            { option: "B", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "C", answer: "pointless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
            { option: "D", answer: "productive", chinese_answer: "富有成效的", chinese_romanization: "fùyǒu chéngxiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pointless' means having no purpose or effect." +
            "<br><br>" +
            "(A) 'rewarding' means providing satisfaction; gratifying." +
            "<br><br>" +
            "(B) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(D) 'productive' means achieving or producing a significant amount or result.",
        chinese_explanation: "(C) '无意义的' 意味着没有目的或效果。" +
            "<br><br>" +
            "(A) '有回报的' 意味着提供满足感的；令人满意的。" +
            "<br><br>" +
            "(B) '必要的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(D) '富有成效的' 意味着实现或产生了显著的数量或结果。"
    },
    {
        id: 9,
        question: "Smartphones have become __________ in modern society, with almost everyone owning one.",
        chinese_question: "智能手机在现代社会已经变得 __________，几乎每个人都有一部。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "B", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "ubiquitous", chinese_answer: "无处不在的", chinese_romanization: "wúchù bùzài de" },
            { option: "D", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ubiquitous' means present, appearing, or found everywhere." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'obsolete' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(C) '无处不在的' 意味着存在、出现或发现于任何地方。" +
            "<br><br>" +
            "(A) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '稀缺的' 意味着供不应求的。"
    },
    {
        id: 10,
        question: "The __________ character in the story always put others before himself.",
        chinese_question: "故事中的 __________ 角色总是把别人放在自己前面。",
        answers: [
            { option: "A", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "B", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "C", answer: "petty", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(A) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(C) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(D) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure.",
        chinese_explanation: "(B) '高尚的' 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
            "<br><br>" +
            "(A) '欺骗的' 意味着欺骗或误导他人。" +
            "<br><br>" +
            "(C) '琐碎的' 意味着不重要的；微不足道的。" +
            "<br><br>" +
            "(D) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。"
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
