// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ when he said he had finished the project; it was still incomplete.",
        chinese_question: "他说他完成了项目，其实是在__________，项目还没有完成。",
        answers: [
            { option: "A", answer: "bluffing", chinese_answer: "吹牛", chinese_romanization: "chuīniú" },
            { option: "B", answer: "admiring", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "C", answer: "rejecting", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "complaining", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bluffing' means trying to deceive someone as to one's abilities or intentions." +
            "<br><br>" +
            "(B) 'admiring' means to regard with respect or warm approval." +
            "<br><br>" +
            "(C) 'rejecting' means refusing to accept, believe, or agree with something." +
            "<br><br>" +
            "(D) 'complaining' means expressing dissatisfaction or annoyance about something.",
        chinese_explanation: "(A) '吹牛' 一词意味着试图欺骗某人关于自己的能力或意图。" +
            "<br><br>" +
            "(B) '钦佩' 意味着以尊敬或热烈的赞同来看待。" +
            "<br><br>" +
            "(C) '拒绝' 意味着拒绝接受、相信或同意某事。" +
            "<br><br>" +
            "(D) '抱怨' 意味着表达对某事的不满或烦恼。"
    },
    {
        id: 2,
    question: "After much debate, she decided to __________ to her friend's suggestion for the vacation destination.",
    chinese_question: "经过长时间的争论后，她决定 __________ 朋友对度假目的地的建议。",
    answers: [
        { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "B", answer: "acquiesce", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
        { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'acquiesce' means to accept something reluctantly but without protest." +
        "<br><br>" +
        "(A) 'reject' means to refuse to accept." +
        "<br><br>" +
        "(C) 'challenge' means to dispute the truth or validity of." +
        "<br><br>" +
        "(D) 'oppose' means to disapprove of and attempt to prevent.",
    chinese_explanation: "(B) '默许' 意味着不情愿地接受某事但不抗议。" +
        "<br><br>" +
        "(A) '拒绝' 意味着拒绝接受。" +
        "<br><br>" +
        "(C) '挑战' 意味着质疑某事的真实性或有效性。" +
        "<br><br>" +
        "(D) '反对' 意味着不赞成并试图阻止。"
    },
    {
        id: 3,
        question: "The book’s success __________ numerous adaptations, including a movie and a TV series.",
        chinese_question: "这本书的成功 __________ 了无数改编作品，包括电影和电视剧。",
        answers: [
            { option: "A", answer: "spawned", chinese_answer: "引发", chinese_romanization: "yǐnfā" },
            { option: "B", answer: "hampered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "blocked", chinese_answer: "阻塞", chinese_romanization: "zǔsè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spawned' figuratively means to generate or bring forth." +
            "<br><br>" +
            "(B) 'hampered' means to hinder or impede the movement or progress of." +
            "<br><br>" +
            "(C) 'rejected' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'blocked' means to make the movement or flow in (a passage, pipe, road, etc.) difficult or impossible.",
        chinese_explanation: "(A) '引发' 在此语境下比喻生成或引发。" +
            "<br><br>" +
            "(B) '阻碍' 意味着阻碍或妨碍移动或进展。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不够好、不能接受或有缺陷而予以拒绝。" +
            "<br><br>" +
            "(D) '阻塞' 意味着使通道、管道、道路等的流动变得困难或不可能。"
    },
    {
        id: 4,
        question: "Even though he disagreed, he chose not to __________ their suggestions in front of everyone.",
        chinese_question: "尽管他不同意，但他选择不在大家面前 __________ 他们的建议。",
        answers: [
            { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "C", answer: "ponder", chinese_answer: "思考", chinese_romanization: "sīkǎo" },
            { option: "D", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparage' figuratively means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'endorse' means to declare one's public approval or support of." +
            "<br><br>" +
            "(C) 'ponder' means to think about (something) carefully, especially before making a decision or reaching a conclusion." +
            "<br><br>" +
            "(D) 'explore' means to travel in or through (an unfamiliar country or area) in order to learn about or familiarize oneself with it.",
        chinese_explanation: "(A) '贬低' 在此语境下比喻认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '赞同' 意味着公开表示赞同或支持。" +
            "<br><br>" +
            "(C) '思考' 意味着仔细考虑（某事），特别是在做决定或得出结论之前。" +
            "<br><br>" +
            "(D) '探索' 意味着在（不熟悉的国家或地区）旅行，以便了解或熟悉它。"
    },
    {
        id: 5,
        question: "His controversial opinions caused the community to __________ him, leaving him isolated and without support.",
        chinese_question: "他的争议性意见导致社区 __________ 他，使他孤立无援。",
        answers: [
            { option: "A", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "B", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
            { option: "C", answer: "include", chinese_answer: "包括", chinese_romanization: "bāokuò" },
            { option: "D", answer: "ostracize", chinese_answer: "排斥", chinese_romanization: "páichì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ostracize' means to exclude someone from a society or group." +
            "<br><br>" +
            "(A) 'welcome' means to greet someone in a friendly way." +
            "<br><br>" +
            "(B) 'embrace' means to accept or support willingly and enthusiastically." +
            "<br><br>" +
            "(C) 'include' means to comprise or contain as part of a whole.",
        chinese_explanation: "(D) '排斥' 意味着将某人排除在社会或群体之外。" +
            "<br><br>" +
            "(A) '欢迎' 意味着友好地迎接某人。" +
            "<br><br>" +
            "(B) '拥抱' 意味着心甘情愿地、热情地接受或支持。" +
            "<br><br>" +
            "(C) '包括' 意味着作为整体的一部分。"
    },
    {
        id: 6,
    question: "They decided to __________ the mountain range to reach the other side.",
    chinese_question: "他们决定 __________ 山脉到达另一边。",
    answers: [
        { option: "A", answer: "climb", chinese_answer: "攀登", chinese_romanization: "pāndēng" },
        { option: "B", answer: "traverse", chinese_answer: "穿越", chinese_romanization: "chuānyuè" },
        { option: "C", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "D", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'traverse' means to travel across or through." +
        "<br><br>" +
        "(A) 'climb' means to go or come up a slope, incline, or staircase." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'descend' means to move or fall downward.",
    chinese_explanation: "(B) '穿越' 意味着穿过或通过。" +
        "<br><br>" +
        "(A) '攀登' 意味着上坡、上升或上楼梯。" +
        "<br><br>" +
        "(C) '避开' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '下降' 意味着向下移动或下降。"
    },
    {
        id: 7,
    question: "The strong odour from the garbage __________ anyone who walked past the alley.",
    chinese_question: "垃圾散发的强烈气味 __________ 了走过小巷的每个人。",
    answers: [
        { option: "A", answer: "attracted", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "B", answer: "delighted", chinese_answer: "使高兴", chinese_romanization: "shǐ gāoxìng" },
        { option: "C", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
        { option: "D", answer: "enticed", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'repulsed' means to cause someone to feel intense distaste and aversion." +
        "<br><br>" +
        "(A) 'attracted' means to cause someone to have a liking for or interest in something." +
        "<br><br>" +
        "(B) 'delighted' means to cause someone to feel very pleased." +
        "<br><br>" +
        "(D) 'enticed' means to attract or tempt by offering pleasure or advantage.",
    chinese_explanation: "(C) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
        "<br><br>" +
        "(A) '吸引' 意味着使某人对某事物产生喜欢或兴趣。" +
        "<br><br>" +
        "(B) '使高兴' 意味着让某人感到非常高兴。" +
        "<br><br>" +
        "(D) '诱惑' 意味着通过提供愉悦或好处来吸引或诱惑。"
    },
    {
        id: 8,
    question: "They watched the balloon __________ into the sky, becoming smaller and smaller until it was out of sight.",
    chinese_question: "他们看着气球 __________ 到天空中，越来越小，直到消失不见。",
    answers: [
        { option: "A", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "B", answer: "stay", chinese_answer: "停留", chinese_romanization: "tíngliú" },
        { option: "C", answer: "fall", chinese_answer: "落下", chinese_romanization: "luòxià" },
        { option: "D", answer: "ascend", chinese_answer: "上升", chinese_romanization: "shàngshēng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'ascend' means to go up or climb." +
        "<br><br>" +
        "(A) 'descend' means to move or fall downward." +
        "<br><br>" +
        "(B) 'stay' means to remain in the same place." +
        "<br><br>" +
        "(C) 'fall' means to move downward, typically rapidly and freely without control.",
    chinese_explanation: "(D) '上升' 意味着上升或攀登。" +
        "<br><br>" +
        "(A) '下降' 意味着向下移动或掉落。" +
        "<br><br>" +
        "(B) '停留' 意味着留在同一个地方。" +
        "<br><br>" +
        "(C) '落下' 意味着快速而自由地向下移动，通常是失去控制的。"
    },
    {
        id: 9,
        question: "The librarian had to __________ all the new books to keep the system organized.",
        chinese_question: "图书管理员必须 __________ 所有新书以保持系统有序。",
        answers: [
            { option: "A", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "B", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "C", answer: "catalog", chinese_answer: "编目", chinese_romanization: "biānmù" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'catalog' means to make a systematic list of (items of the same type)." +
            "<br><br>" +
            "(A) 'remove' means to take (something) away or off from the position occupied." +
            "<br><br>" +
            "(B) 'scatter' means to throw in various random directions." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(C) '编目' 意味着对（同类项目）进行系统的列表。" +
            "<br><br>" +
            "(A) '移除' 意味着从所占位置取走（某物）。" +
            "<br><br>" +
            "(B) '分散' 意味着朝各个随机方向抛洒。" +
            "<br><br>" +
            "(D) '忽视' 意味着不注意；忽视。"
    },
    {
        id: 10,
        question: "Her refusal to conform to the group's norms led them to __________ her, leaving her feeling isolated and alone.",
        chinese_question: "她拒绝遵守小组的规范，这导致他们 __________ 她，使她感到孤立和孤单。",
        answers: [
            { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "befriend", chinese_answer: "与...交朋友", chinese_romanization: "yǔ... jiāo péngyǒu" },
            { option: "D", answer: "ostracize", chinese_answer: "排斥", chinese_romanization: "páichì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ostracize' means to exclude someone from a society or group." +
            "<br><br>" +
            "(A) 'invite' means to ask someone to go somewhere or to do something." +
            "<br><br>" +
            "(B) 'accept' means to consent to receive or undertake something offered." +
            "<br><br>" +
            "(C) 'befriend' means to act as a friend to someone.",
        chinese_explanation: "(D) '排斥' 意味着将某人排除在社会或群体之外。" +
            "<br><br>" +
            "(A) '邀请' 意味着邀请某人去某个地方或做某事。" +
            "<br><br>" +
            "(B) '接受' 意味着同意接受或承担提供的某事。" +
            "<br><br>" +
            "(C) '与...交朋友' 意味着与某人交朋友。"
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
