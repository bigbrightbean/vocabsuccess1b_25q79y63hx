// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Finding a fifty-dollar bill on the sidewalk was pure __________; she hadn't expected such a fortunate surprise.",
        chinese_question: "在人行道上找到一张五十美元的钞票纯属 __________；她没想到会有这样幸运的惊喜。",
        answers: [
            { option: "A", answer: "misfortune", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
            { option: "C", answer: "intention", chinese_answer: "意图", chinese_romanization: "yìtú" },
            { option: "D", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'misfortune' means bad luck." +
            "<br><br>" +
            "(C) 'intention' means a thing intended; an aim or plan." +
            "<br><br>" +
            "(D) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations.",
        chinese_explanation: "(B) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
            "<br><br>" +
            "(A) '不幸' 意味着坏运气。" +
            "<br><br>" +
            "(C) '意图' 意味着有意的事情；目标或计划。" +
            "<br><br>" +
            "(D) '失望' 意味着因为希望或期望未能实现而引起的悲伤或不快。"
    },
    {
        id: 2,
        question: "Despite being friends with both parties, she handled the dispute with complete __________, ensuring neither side felt unfairly treated.",
        chinese_question: "尽管与双方都是朋友，她处理争端时完全 __________，确保双方都不会感到不公平对待。",
        answers: [
            { option: "A", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "impartiality", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "D", answer: "favoritism", chinese_answer: "偏爱", chinese_romanization: "piān'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impartiality' means equal treatment of all rivals or disputants; fairness." +
            "<br><br>" +
            "(A) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'favoritism' means the practice of giving unfair preferential treatment to one person or group at the expense of another.",
        chinese_explanation: "(C) '公正'一词意味着对所有对手或争论者的平等对待；公平。" +
            "<br><br>" +
            "(A) '偏袒' 意味着偏爱一个事物或一个人而不公平。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '偏爱' 意味着给予一个人或一个群体不公平的优待的做法。"
    },
    {
        id: 3,
        question: "The writer’s use of __________ in his novel made the struggles of the characters feel real and relatable to readers.",
        chinese_question: "作家在小说中运用了 __________，使人物的挣扎感到真实且与读者产生共鸣。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "pathos", chinese_answer: "悲情", chinese_romanization: "bēiqíng" },
            { option: "C", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "detachment", chinese_answer: "超然", chinese_romanization: "chāorán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pathos' means a quality that evokes pity or sadness." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(B) '悲情'一词意味着引发怜悯或悲伤的品质。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '快乐' 意味着极大的愉悦和幸福感。" +
            "<br><br>" +
            "(D) '超然' 意味着客观或冷漠的状态。"
    },
    {
        id: 4,
        question: "She tried to introduce some __________ into the tense discussion by telling a funny story to lighten the mood.",
        chinese_question: "她试图通过讲一个有趣的故事在紧张的讨论中加入一些 __________ 以缓和气氛。",
        answers: [
            { option: "A", answer: "seriousness", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "levity", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
            { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "D", answer: "decorum", chinese_answer: "礼仪", chinese_romanization: "lǐyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'levity' means humor or frivolity, especially the treatment of a serious matter with humor or in a manner lacking due respect." +
            "<br><br>" +
            "(A) 'seriousness' means the state of being serious." +
            "<br><br>" +
            "(C) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
            "<br><br>" +
            "(D) 'decorum' means behavior in keeping with good taste and propriety.",
        chinese_explanation: "(B) '轻松'一词意味着幽默或轻浮，特别是以幽默或不尊重的方式对待严肃问题。" +
            "<br><br>" +
            "(A) '严肃' 意味着严肃的状态。" +
            "<br><br>" +
            "(C) '尊重' 意味着对某人或某物的能力、品质或成就的深深钦佩。" +
            "<br><br>" +
            "(D) '礼仪' 意味着符合良好品味和礼貌的行为。"
    },
    {
        id: 5,
        question: "To enter the restricted area, you must obtain a special __________ from the authorities.",
        chinese_question: "进入禁区，你必须从当局获得特别 __________。",
        answers: [
            { option: "A", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "permit", chinese_answer: "许可证", chinese_romanization: "xǔkězhèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'permit' means an official document giving someone authorization to do something." +
            "<br><br>" +
            "(A) 'refusal' means an act of refusing." +
            "<br><br>" +
            "(B) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(C) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(D) '许可证' 意味着给予某人做某事授权的正式文件。" +
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝的行为。" +
            "<br><br>" +
            "(B) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(C) '解雇' 意味着命令或允许某人离开的行为。"
    },
    {
        id: 6,
    question: "His __________ to the unexpected news was calm and composed.",
    chinese_question: "他对意外消息的 __________ 是冷静和镇定的。",
    answers: [
        { option: "A", answer: "panic", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
        { option: "B", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "C", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'response' means a reaction to something." +
        "<br><br>" +
        "(A) 'panic' means sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior." +
        "<br><br>" +
        "(C) 'avoidance' means the action of keeping away from or not doing something." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(A) '恐慌' 意味着突然的不可控制的恐惧或焦虑，常导致狂乱的无思考行为。" +
        "<br><br>" +
        "(C) '避免' 意味着远离或不做某事的行为。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
    question: "A __________ spread quickly through the office, causing unrest among the employees.",
    chinese_question: "一个 __________ 在办公室迅速传播，导致员工之间的不安。",
    answers: [
        { option: "A", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
        { option: "B", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
        { option: "C", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
        { option: "D", answer: "report", chinese_answer: "报告", chinese_romanization: "bàogào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." +
        "<br><br>" +
        "(B) 'truth' means that which is true or in accordance with fact or reality." +
        "<br><br>" +
        "(C) 'fact' means a thing that is known or proved to be true." +
        "<br><br>" +
        "(D) 'report' means a spoken or written account of something that has been observed, heard, done, or investigated.",
    chinese_explanation: "(A) '谣言' 意味着目前流传的关于不确定或可疑真相的故事或报告。" +
        "<br><br>" +
        "(B) '真相' 意味着符合事实或现实的东西。" +
        "<br><br>" +
        "(C) '事实' 意味着已知或被证明为真的事情。" +
        "<br><br>" +
        "(D) '报告' 意味着对已观察、听到、做过或调查过的事情的口头或书面叙述。"
    },
    {
        id: 8,
        question: "After hearing the new evidence, the judge ordered a __________ of the case to ensure a fair trial.",
        chinese_question: "在听到新证据后，法官下令对案件进行 __________ 以确保公平审判。",
        answers: [
            { option: "A", answer: "reconsideration", chinese_answer: "重新考虑", chinese_romanization: "chóngxīn kǎolǜ" },
            { option: "B", answer: "dismissal", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "D", answer: "confirmation", chinese_answer: "确认", chinese_romanization: "quèrèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reconsideration' means the action of considering something again or differently." +
            "<br><br>" +
            "(B) 'dismissal' means the act of ordering or allowing someone to leave." +
            "<br><br>" +
            "(C) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
            "<br><br>" +
            "(D) 'confirmation' means the action of confirming something or the state of being confirmed.",
        chinese_explanation: "(A) '重新考虑' 意味着再次或以不同方式考虑某事的行为。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许某人离开的行为。" +
            "<br><br>" +
            "(C) '批准' 意味着正式同意某事或接受某事为令人满意的行为。" +
            "<br><br>" +
            "(D) '确认' 意味着确认某事的行为或被确认的状态。"
    },
    {
        id: 9,
        question: "The journalist's article was admired for its __________, as it presented both sides of the debate without taking a stance.",
        chinese_question: "这位记者的文章因其 __________ 而受到赞赏，因为它在不表明立场的情况下展示了辩论的双方观点。",
        answers: [
            { option: "A", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "B", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
            { option: "C", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
            "<br><br>" +
            "(A) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
            "<br><br>" +
            "(C) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(D) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions.",
        chinese_explanation: "(B) '客观性'一词意味着客观、公正、不受个人感情或意见影响的品质。" +
            "<br><br>" +
            "(A) '偏袒' 意味着偏向某一事物或某人；偏爱。" +
            "<br><br>" +
            "(C) '偏见' 意味着对一个人或一群人的倾向或偏见，尤其是被认为不公平的方式。" +
            "<br><br>" +
            "(D) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。"
    },
    {
        id: 10,
        question: "The __________ of implementing the new policy was debated among the board members, considering the potential risks and benefits.",
        chinese_question: "董事会成员讨论了实施新政策的 __________，考虑了潜在的风险和收益。",
        answers: [
            { option: "A", answer: "feasibility", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
            { option: "B", answer: "futility", chinese_answer: "无用", chinese_romanization: "wúyòng" },
            { option: "C", answer: "redundancy", chinese_answer: "冗余", chinese_romanization: "rǒngyú" },
            { option: "D", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'feasibility' figuratively means the practicality or possibility of something being accomplished." +
            "<br><br>" +
            "(B) 'futility' means pointlessness or uselessness." +
            "<br><br>" +
            "(C) 'redundancy' means the state of being no longer needed or useful." +
            "<br><br>" +
            "(D) 'ambiguity' means the quality of being open to more than one interpretation; inexactness.",
        chinese_explanation: "(A) '可行性' 在此语境下意指某事得以完成的实用性或可能性。" +
            "<br><br>" +
            "(B) '无用' 意味着无意义或无用。" +
            "<br><br>" +
            "(C) '冗余' 意味着不再需要或有用的状态。" +
            "<br><br>" +
            "(D) '模糊' 意味着开放多种解释的质量；不准确。"
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
