// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His explanation was pure __________, based on nothing more than a hunch and without any supporting data.",
        chinese_question: "他的解释纯粹是 __________，仅仅基于直觉而没有任何支持数据。",
        answers: [
            { option: "A", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
            { option: "B", answer: "conjecture", chinese_answer: "推测", chinese_romanization: "tuīcè" },
            { option: "C", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
            { option: "D", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conjecture' means an opinion or conclusion formed on the basis of incomplete information." +
            "<br><br>" +
            "(A) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(C) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
            "<br><br>" +
            "(D) 'fact' means a thing that is known or proved to be true.",
        chinese_explanation: "(B) '推测'一词意味着在不完全信息的基础上形成的意见或结论。" +
            "<br><br>" +
            "(A)'确定性' 意味着对某事是事实的坚定信念。" +
            "<br><br>" +
            "(C)'证据' 意味着表明某一信念或命题真实或有效的事实或信息的可用集合。" +
            "<br><br>" +
            "(D)'事实' 意味着已知或被证明是真实的事情。"
    },
    {
        id: 2,
        question: "The company faced a __________ of customer complaints after the defective product was released.",
        chinese_question: "公司在发布有缺陷的产品后，面临 __________ 的客户投诉。",
        answers: [
            { option: "A", answer: "spate", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "B", answer: "trickle", chinese_answer: "小股", chinese_romanization: "xiǎogǔ" },
            { option: "C", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "D", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spate' figuratively means a large number of similar things or events appearing or occurring in quick succession." +
            "<br><br>" +
            "(B) 'trickle' means a small flow of liquid." +
            "<br><br>" +
            "(C) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(D) 'abundance' means a very large quantity of something.",
        chinese_explanation: "(A) '大量' 在此语境下意指大量相似的事物或事件迅速出现或发生。" +
            "<br><br>" +
            "(B) '小股' 意味着少量的液体流动。" +
            "<br><br>" +
            "(C) '稀缺' 意味着稀少或短缺的状态。" +
            "<br><br>" +
            "(D) '丰富' 意味着某物的非常大量。"
    },
    {
        id: 3,
        question: "The sudden downpour turned the field into a __________, making it difficult for the players to move.",
        chinese_question: "突如其来的大雨把田地变成了 __________，让球员们难以移动。",
        answers: [
            { option: "A", answer: "haven", chinese_answer: "避风港", chinese_romanization: "bìfēnggǎng" },
            { option: "B", answer: "desert", chinese_answer: "沙漠", chinese_romanization: "shāmò" },
            { option: "C", answer: "quagmire", chinese_answer: "沼泽地", chinese_romanization: "zhǎozédì" },
            { option: "D", answer: "plateau", chinese_answer: "高原", chinese_romanization: "gāoyuán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quagmire' means a soft, boggy area of land that gives way underfoot." +
            "<br><br>" +
            "(A) 'haven' means a place of safety or refuge." +
            "<br><br>" +
            "(B) 'desert' means a barren area of landscape with little precipitation." +
            "<br><br>" +
            "(D) 'plateau' means an area of relatively level high ground.",
        chinese_explanation: "(C) '沼泽地'一词意味着一块松软的、沼泽的土地，在脚下会塌陷。" +
            "<br><br>" +
            "(A) '避风港' 意味着安全或避难的地方。" +
            "<br><br>" +
            "(B) '沙漠' 意味着降水很少的不毛之地。" +
            "<br><br>" +
            "(D) '高原' 意味着相对平坦的高地。"
    },
    {
        id: 4,
        question: "After years of hard work and perseverance, he finally reached the __________ of his profession, becoming the CEO.",
        chinese_question: "经过多年的努力和坚持，他终于达到了职业的 __________，成为首席执行官。",
        answers: [
            { option: "A", answer: "pinnacle", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "middle", chinese_answer: "中间", chinese_romanization: "zhōngjiān" },
            { option: "D", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pinnacle' means the most successful point; the culmination." +
            "<br><br>" +
            "(B) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(C) 'middle' means the point or position at an equal distance from the sides, edges, or ends of something." +
            "<br><br>" +
            "(D) 'end' means the final part of something.",
        chinese_explanation: "(A) '顶峰' 意味着最成功的点；顶点。" +
            "<br><br>" +
            "(B) '开始' 意味着某事开始的时间或空间点。" +
            "<br><br>" +
            "(C) '中间' 意味着距某物两侧、边缘或末端相等距离的点或位置。" +
            "<br><br>" +
            "(D) '结束' 意味着某事的最后部分。"
    },
    {
        id: 5,
        question: "The ancient __________ stood tall against the skyline, a testament to the architectural prowess of its builders.",
        chinese_question: "古老的 __________ 高耸在天际，见证了建筑者的高超技艺。",
        answers: [
            { option: "A", answer: "hut", chinese_answer: "小屋", chinese_romanization: "xiǎowū" },
            { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
            { option: "C", answer: "tent", chinese_answer: "帐篷", chinese_romanization: "zhàngpéng" },
            { option: "D", answer: "shack", chinese_answer: "棚屋", chinese_romanization: "péngwū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a large, imposing building." +
            "<br><br>" +
            "(A) 'hut' means a small, simple, single-story house or shelter." +
            "<br><br>" +
            "(C) 'tent' means a portable shelter made of cloth, supported by one or more poles and stretched tight by cords or loops attached to pegs driven into the ground." +
            "<br><br>" +
            "(D) 'shack' means a roughly built hut or cabin.",
        chinese_explanation: "(B) '大厦'一词意味着一座大型、宏伟的建筑物。" +
            "<br><br>" +
            "(A) '小屋' 意味着一个小的、简单的单层房子或住所。" +
            "<br><br>" +
            "(C) '帐篷' 意味着由布料制成的可移动的庇护所，由一个或多个杆子支撑，并通过固定在地上的绳索或环拉紧。" +
            "<br><br>" +
            "(D) '棚屋' 意味着一个简陋的建造的小屋或小木屋。"
    },
    {
        id: 6,
        question: "Winning the Nobel Prize was the __________ of his scientific career.",
        chinese_question: "获得诺贝尔奖是他科学事业的 __________。",
        answers: [
            { option: "A", answer: "foundation", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
            { option: "B", answer: "pinnacle", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "C", answer: "plateau", chinese_answer: "高原", chinese_romanization: "gāoyuán" },
            { option: "D", answer: "pit", chinese_answer: "深渊", chinese_romanization: "shēnyuān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pinnacle' figuratively means the highest or most successful point in a career or field." +
            "<br><br>" +
            "(A) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
            "<br><br>" +
            "(C) 'plateau' means a state of little or no change following a period of activity or progress." +
            "<br><br>" +
            "(D) 'pit' means a large hole in the ground.",
        chinese_explanation: "(B) '顶峰' 在此语境下意指职业或领域的最高点或最成功的点。" +
            "<br><br>" +
            "(A) '基础' 意味着建筑物的最低承重部分，通常在地下。" +
            "<br><br>" +
            "(C) '高原' 意味着在一段活动或进步之后没有变化的状态。" +
            "<br><br>" +
            "(D) '深渊' 意味着地上的大洞。"
    },
    {
        id: 7,
    question: "Skydiving involves a significant __________ due to the potential for equipment failure.",
    chinese_question: "由于设备可能会发生故障，跳伞涉及很大的 __________。",
    answers: [
        { option: "A", answer: "safety", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "B", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "C", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
        { option: "D", answer: "protection", chinese_answer: "保护", chinese_romanization: "bǎohù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'risk' means a situation involving exposure to danger." +
        "<br><br>" +
        "(A) 'safety' means the condition of being protected from or unlikely to cause danger, risk, or injury." +
        "<br><br>" +
        "(C) 'guarantee' means a formal assurance that certain conditions will be fulfilled." +
        "<br><br>" +
        "(D) 'protection' means the action of protecting someone or something.",
    chinese_explanation: "(B) '风险' 意味着涉及暴露于危险的情况。" +
        "<br><br>" +
        "(A) '安全' 意味着受到保护的状态或不太可能导致危险、风险或伤害的状态。" +
        "<br><br>" +
        "(C) '保证' 意味着对某些条件将得到满足的正式保证。" +
        "<br><br>" +
        "(D) '保护' 意味着保护某人或某事的行为。"
    },
    {
        id: 8,
        question: "After hours of climbing, they finally stood on the __________, enjoying the flat terrain and the vast sky above.",
        chinese_question: "经过数小时的攀登，他们终于站在了 __________ 上，享受平坦的地形和头顶广阔的天空。",
        answers: [
            { option: "A", answer: "slope", chinese_answer: "斜坡", chinese_romanization: "xiépō" },
            { option: "B", answer: "plateau", chinese_answer: "高原", chinese_romanization: "gāoyuán" },
            { option: "C", answer: "ridge", chinese_answer: "山脊", chinese_romanization: "shānjǐ" },
            { option: "D", answer: "cliff", chinese_answer: "悬崖", chinese_romanization: "xuányá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plateau' means an area of relatively level high ground." +
            "<br><br>" +
            "(A) 'slope' means a surface of which one end or side is at a higher level than another." +
            "<br><br>" +
            "(C) 'ridge' means a long, narrow hilltop, mountain range, or watershed." +
            "<br><br>" +
            "(D) 'cliff' means a steep rock face, especially at the edge of the sea.",
        chinese_explanation: "(B) '高原' 意味着相对平坦的高地。" +
            "<br><br>" +
            "(A) '斜坡' 意味着一端或一侧比另一端或一侧高的表面。" +
            "<br><br>" +
            "(C) '山脊' 意味着长而窄的山顶、山脉或分水岭。" +
            "<br><br>" +
            "(D) '悬崖' 意味着陡峭的岩石表面，尤其是海边的。"
    },
    {
        id: 9,
        question: "The artist's painting was an __________ of childhood memories, capturing the innocence and wonder of youth.",
        chinese_question: "这位艺术家的画作是对童年记忆的 __________，捕捉到了童年的纯真和奇迹。",
        answers: [
            { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "evocation", chinese_answer: "唤起", chinese_romanization: "huànqǐ" },
            { option: "C", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evocation' means the act of bringing or recalling a feeling, memory, or image to the conscious mind." +
            "<br><br>" +
            "(A) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(B) '唤起' 意味着将一种感觉、记忆或图像带到意识中的行为。" +
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝提议、想法等。" +
            "<br><br>" +
            "(C) '破坏' 意味着对某物造成如此大的损害，以至于它不再存在或无法修复的行为或过程。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 10,
        question: "Receiving the award was a huge __________ for her confidence and career.",
        chinese_question: "获得这个奖项对她的信心和事业是一个巨大的 __________。",
        answers: [
            { option: "A", answer: "blow", chinese_answer: "打击", chinese_romanization: "dǎjí" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "slump", chinese_answer: "低潮", chinese_romanization: "dīcháo" },
            { option: "D", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'boost' means an increase or improvement." +
            "<br><br>" +
            "(A) 'blow' means a sudden shock or disaster for someone." +
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(C) 'slump' means a sudden severe or prolonged fall in the price, value, or amount of something.",
        chinese_explanation: "(D) '提升' 意味着增加或改善。" +
            "<br><br>" +
            "(A) '打击' 意味着对某人的突然冲击或灾难。" +
            "<br><br>" +
            "(B) '障碍' 意味着阻挡某人前进的事物或阻碍进展的事物。" +
            "<br><br>" +
            "(C) '低潮' 意味着某物价格、价值或数量的突然严重或长期的下降。"
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
