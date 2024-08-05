// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ for the frivolous spending habits of her colleagues was hard to hide.",
        chinese_question: "她对同事们挥霍无度的消费习惯的 __________ 难以掩饰。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "scorn", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
            { option: "C", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
            { option: "D", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scorn' means the feeling or belief that someone or something is worthless or despicable; contempt." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '轻蔑'一词意味着认为某人或某物毫无价值或可鄙的感觉或信念；蔑视。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(C) '嫉妒' 意味着因他人的财产、品质或运气而引起的不满或怨恨的感觉。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
        question: "The young entrepreneur was known as a __________ for his unconventional business strategies.",
        chinese_question: "这位年轻企业家以其非传统的商业策略而闻名，是个 __________。",
        answers: [
            { option: "A", answer: "maverick", chinese_answer: "特立独行者", chinese_romanization: "tèlìdúxíngzhě" },
            { option: "B", answer: "conformist", chinese_answer: "循规蹈矩者", chinese_romanization: "xúnguīdǎojǔzhě" },
            { option: "C", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuízhě" },
            { option: "D", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maverick' means an independent-minded person who does not conform to accepted norms." +
            "<br><br>" +
            "(B) 'conformist' means a person who conforms to accepted behavior or established practices." +
            "<br><br>" +
            "(C) 'follower' means a person who supports and admires a particular person or set of ideas." +
            "<br><br>" +
            "(D) 'traditionalist' means a person who adheres to tradition, especially in cultural or religious practice.",
        chinese_explanation: "(A) '特立独行者' 意味着一个独立思考、不遵守既定规范的人。" +
            "<br><br>" +
            "(B) '循规蹈矩者' 意味着一个遵循接受行为或既定做法的人。" +
            "<br><br>" +
            "(C) '追随者' 意味着支持和钦佩特定人或思想体系的人。" +
            "<br><br>" +
            "(D) '传统主义者' 意味着在文化或宗教实践中坚持传统的人。"
    },
    {
        id: 3,
    question: "The streets were in __________ after the unexpected storm hit the city.",
    chinese_question: "突如其来的风暴袭击了城市，街道上一片 __________。",
    answers: [
        { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
        { option: "B", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'mayhem' means a state of chaos and disorder." +
        "<br><br>" +
        "(A) 'order' means an organized or orderly state." +
        "<br><br>" +
        "(B) 'peace' means a state of tranquility or quiet." +
        "<br><br>" +
        "(C) 'harmony' means a state of agreement or concord.",
    chinese_explanation: "(D) '混乱' 意味着一种混乱和无序的状态。" +
        "<br><br>" +
        "(A) '秩序' 意味着一种有组织或有序的状态。" +
        "<br><br>" +
        "(B) '平静' 意味着一种宁静或安静的状态。" +
        "<br><br>" +
        "(C) '和谐' 意味着一种协议或和谐的状态。"
    },
    {
        id: 4,
        question: "The region experienced a __________ of heavy rains that led to widespread flooding and damage.",
        chinese_question: "该地区经历了一场 __________ 的大雨，导致了大范围的洪水和损失。",
        answers: [
            { option: "A", answer: "spate", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "B", answer: "drought", chinese_answer: "干旱", chinese_romanization: "gānhàn" },
            { option: "C", answer: "trickle", chinese_answer: "小股", chinese_romanization: "xiǎogǔ" },
            { option: "D", answer: "drizzle", chinese_answer: "毛毛雨", chinese_romanization: "máomaoyǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spate' means a large number of similar things or events appearing or occurring in quick succession." +
            "<br><br>" +
            "(B) 'drought' means a prolonged period of abnormally low rainfall, leading to a shortage of water." +
            "<br><br>" +
            "(C) 'trickle' means a small flow of liquid." +
            "<br><br>" +
            "(D) 'drizzle' means light rain falling in very fine drops.",
        chinese_explanation: "(A) '大量' 意味着大量相似的事物或事件迅速出现或发生。" +
            "<br><br>" +
            "(B) '干旱' 意味着长期异常少雨，导致水资源短缺。" +
            "<br><br>" +
            "(C) '小股' 意味着少量的液体流动。" +
            "<br><br>" +
            "(D) '毛毛雨' 意味着非常细小的雨滴。"
    },
    {
        id: 5,
        question: "She felt a sense of __________ as she walked down the dark, deserted street, constantly looking over her shoulder.",
        chinese_question: "她走在漆黑、无人街道上时感到一阵 __________，不断回头看。",
        answers: [
            { option: "A", answer: "apprehension", chinese_answer: "忧虑", chinese_romanization: "yōulǜ" },
            { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "C", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'apprehension' means anxiety or fear that something bad or unpleasant will happen." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'tranquility' means the quality or state of being tranquil; calm." +
            "<br><br>" +
            "(D) 'boredom' means the state of feeling bored.",
        chinese_explanation: "(A) '忧虑' 意味着对某事不好的或不愉快的事情将要发生的焦虑或恐惧。" +
            "<br><br>" +
            "(B) '喜悦' 意味着极大的愉快和幸福的感觉。" +
            "<br><br>" +
            "(C) '宁静' 意味着宁静的质量或状态；平静。" +
            "<br><br>" +
            "(D) '无聊' 意味着感到无聊的状态。"
    },
    {
        id: 6,
        question: "She became a passionate __________ for animal rights, organizing events and speaking at rallies to raise awareness.",
        chinese_question: "她成为动物权利的热情 __________，组织活动并在集会上演讲以提高意识。",
        answers: [
            { option: "A", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" },
            { option: "B", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "D", answer: "opponent", chinese_answer: "反对者", chinese_romanization: "fǎnduì zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advocate' means a person who publicly supports or recommends a particular cause or policy." +
            "<br><br>" +
            "(B) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." +
            "<br><br>" +
            "(D) 'opponent' means someone who competes against or fights another in a contest, game, or argument.",
        chinese_explanation: "(A) '倡导者' 意味着公开支持或推荐特定事业或政策的人。" +
            "<br><br>" +
            "(B) '批评者' 意味着对某事物表达不利意见的人。" +
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故中在场但不参与的人。" +
            "<br><br>" +
            "(D) '反对者' 意味着在比赛、游戏或争论中与另一方竞争或对抗的人。"
    },
    {
        id: 7,
        question: "His success in starting a business from scratch became a __________ for aspiring entrepreneurs.",
        chinese_question: "他从零开始创业的成功成为有抱负的企业家的 __________。",
        answers: [
            { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "fluke", chinese_answer: "偶然", chinese_romanization: "ǒurán" },
            { option: "C", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "D", answer: "paradigm", chinese_answer: "范例", chinese_romanization: "fànlì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'paradigm' means a typical example or pattern of something; a model." +
            "<br><br>" +
            "(A) 'failure' means lack of success." +
            "<br><br>" +
            "(B) 'fluke' means an unlikely chance occurrence, especially a surprising piece of luck." +
            "<br><br>" +
            "(C) 'distraction' means a thing that prevents someone from giving full attention to something else.",
        chinese_explanation: "(D) '范例' 意味着某物的典型例子或模式；模型。" +
            "<br><br>" +
            "(A) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(B) '偶然' 意味着不大可能的偶然事件，尤其是令人惊讶的好运。" +
            "<br><br>" +
            "(C) '分心' 意味着防止某人全神贯注于其他事情的事物。"
    },
    {
        id: 8,
    question: "The company's quick __________ to the crisis helped to minimize the damage.",
    chinese_question: "公司对危机的迅速 __________ 有助于将损失降到最低。",
    answers: [
        { option: "A", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'response' means a reaction to something." +
        "<br><br>" +
        "(B) 'neglect' means fail to care for properly." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
    chinese_explanation: "(A) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '错误' 意味着错误。" +
        "<br><br>" +
        "(D) '犹豫' 意味着在说或做某事之前暂停或犹豫的行为。"
    },
    {
        id: 9,
    question: "The new product launch was a complete __________ when the app crashed repeatedly, the servers went down, and customers couldn't make any purchases.",
    chinese_question: "新产品发布成了一场彻底的 __________，当应用程序反复崩溃，服务器宕机，客户无法进行任何购买时。",
    answers: [
        { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
        { option: "C", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" },
        { option: "D", answer: "fiasco", chinese_answer: "惨败", chinese_romanization: "cǎnbài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'fiasco' means a complete and humiliating failure." +
        "<br><br>" +
        "(A) 'success' means the accomplishment of an aim or purpose." +
        "<br><br>" +
        "(B) 'triumph' means a great victory or achievement." +
        "<br><br>" +
        "(C) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
    chinese_explanation: "(D) '惨败' 意味着完全和羞辱性的失败。" +
        "<br><br>" +
        "(A) '成功' 意味着目标或目的的实现。" +
        "<br><br>" +
        "(B) '胜利' 意味着伟大的胜利或成就。" +
        "<br><br>" +
        "(C) '成就' 意味着通常通过努力、勇气或技巧成功完成的事情。"
    },
    {
        id: 10,
        question: "His recent __________ of a new bicycle made commuting to work much easier and more enjoyable.",
        chinese_question: "他最近 __________ 了一辆新自行车，使上下班通勤变得更轻松愉快。",
        answers: [
            { option: "A", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "B", answer: "loss", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "C", answer: "loan", chinese_answer: "借款", chinese_romanization: "jièkuǎn" },
            { option: "D", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' means the act of obtaining or gaining possession." +
            "<br><br>" +
            "(B) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(C) 'loan' means a thing that is borrowed, especially a sum of money that is expected to be paid back with interest." +
            "<br><br>" +
            "(D) 'sale' means the exchange of a commodity for money; the action of selling something.",
        chinese_explanation: "(A) '获得' 意味着获取或获得所有权的行为。" +
            "<br><br>" +
            "(B) '失去' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(C) '借款' 意味着借来的东西，尤其是一笔预期会连本带息偿还的钱。" +
            "<br><br>" +
            "(D) '销售' 意味着用金钱交换商品的行为；销售某物的行为。"
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
