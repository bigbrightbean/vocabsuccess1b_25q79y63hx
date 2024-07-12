// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was __________ with her new car, showing it off to everyone she met.",
        chinese_question: "她对她的新车 __________，向遇到的每个人炫耀。",
        answers: [
            { option: "A", answer: "disappointed", chinese_answer: "失望", chinese_romanization: "shīwàng" },
            { option: "B", answer: "displeased", chinese_answer: "不满", chinese_romanization: "bùmǎn" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "infatuated", chinese_answer: "迷恋", chinese_romanization: "míliàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'infatuated' means to be inspired with an intense but short-lived passion or admiration." +
            "<br><br>" +
            "(A) 'disappointed' means to feel sad or displeased." +
            "<br><br>" +
            "(B) 'displeased' means to feel dissatisfaction." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest.",
        chinese_explanation: "(D) '迷恋' 一词意味着受到强烈但短暂的激情或钦佩的激励。" +
            "<br><br>" +
            "(A) '失望' 意味着感到悲伤或不高兴。" +
            "<br><br>" +
            "(B) '不满' 意味着感到不满意。" +
            "<br><br>" +
            "(C) '冷漠' 意味着表现出或感到没有兴趣。"
    },
    {
        id: 2,
        question: "He often __________ in the mornings, making him late for work.",
        chinese_question: "他早晨常常 __________，导致上班迟到。",
        answers: [
            { option: "A", answer: "rushes", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "B", answer: "prepares", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" },
            { option: "C", answer: "focuses", chinese_answer: "集中注意力", chinese_romanization: "jízhōng zhùyì lì" },
            { option: "D", answer: "tarries", chinese_answer: "拖延", chinese_romanization: "tuōyán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tarries' means to delay or linger." +
            "<br><br>" +
            "(A) 'rushes' means to move quickly." +
            "<br><br>" +
            "(B) 'prepares' means to get ready." +
            "<br><br>" +
            "(C) 'focuses' means to concentrate attention.",
        chinese_explanation: "(D) '拖延' 一词意味着延迟或停留。" +
            "<br><br>" +
            "(A) '匆忙' 意味着快速移动。" +
            "<br><br>" +
            "(B) '准备' 意味着做好准备。" +
            "<br><br>" +
            "(C) '集中注意力' 意味着集中注意力。"
    },
    {
        id: 3,
    question: "When faced with unexpected questions, he began to __________, unable to provide clear answers.",
    chinese_question: "面对意外问题时，他开始 __________，无法提供清晰的答案。",
    answers: [
        { option: "A", answer: "articulate", chinese_answer: "清楚地表达", chinese_romanization: "qīngchǔ de biǎodá" },
        { option: "B", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flounder' used figuratively means to struggle or have difficulty." +
        "<br><br>" + 
        "(A) 'articulate' means to express an idea or feeling fluently and coherently." +
        "<br><br>" + 
        "(C) 'clarify' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" + 
        "(D) 'reassure' means to set someone's mind at rest or dispel their fears.",
    chinese_explanation: "(B) '挣扎' 在比喻意义上指困难或挣扎。" +
        "<br><br>" + 
        "(A) '清楚地表达' 意味着流利和连贯地表达一个想法或感觉。" +
        "<br><br>" + 
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" + 
        "(D) '安慰' 意味着使某人放心或消除他们的恐惧。"
    },
    {
        id: 4,
    question: "Despite the difficulties, she would __________ her teeth and persevere.",
    chinese_question: "尽管困难重重，她还是会 __________ 牙齿，坚持下去。",
    answers: [
        { option: "A", answer: "gnash", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gnash' means to grind one's teeth together, used figuratively here to show determination." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'relax' means to make or become less tense or anxious." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '咬牙' 意味着磨牙，这里是比喻用法，表示决心。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '放松' 意味着变得不那么紧张或焦虑。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
    question: "The scent of freshly baked bread began to __________ from the kitchen, making everyone's mouth water.",
    chinese_question: "新鲜烘焙的面包香味开始从厨房 __________ 出来，让每个人都垂涎欲滴。",
    answers: [
        { option: "A", answer: "emanate", chinese_answer: "散发", chinese_romanization: "sànfā" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "repel", chinese_answer: "驱散", chinese_romanization: "qūsàn" },
        { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emanate' means to issue or spread out from a source." +
        "<br><br>" +
        "(B) 'hide' means to put or keep out of sight." +
        "<br><br>" +
        "(C) 'repel' means to drive or force something back or away." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(A) '散发' 意味着从源头发出或散发。" +
        "<br><br>" +
        "(B) '隐藏' 意味着防止被看到；隐藏。" +
        "<br><br>" +
        "(C) '驱散' 意味着驱赶或逼退某物。" +
        "<br><br>" +
        "(D) '遮掩' 意味着防止被看到；隐藏。"
    },
    {
        id: 6,
        question: "The coach’s encouraging words __________ the team to victory.",
        chinese_question: "教练的鼓励话语 __________ 团队取得了胜利。",
        answers: [
            { option: "A", answer: "spurred", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "B", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "dampened", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spurred' means to encourage or prompt someone to take action or make a greater effort." +
            "<br><br>" +
            "(B) 'hindered' means to create difficulties, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'dampened' means to make less strong or intense." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '激励' 意味着鼓励或促使某人采取行动或更加努力。" +
            "<br><br>" +
            "(B) '阻碍' 意味着制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(C) '减弱' 意味着使强度或程度减弱。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
    question: "The graphic scenes in the horror movie __________ many viewers, leading to complaints.",
    chinese_question: "恐怖电影中的血腥场景 __________ 了许多观众，导致投诉。",
    answers: [
        { option: "A", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "B", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
        { option: "C", answer: "amused", chinese_answer: "使发笑", chinese_romanization: "shǐ fāxiào" },
        { option: "D", answer: "engaged", chinese_answer: "吸引", chinese_romanization: "xīyǐn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repulsed' means to cause someone to feel intense distaste and aversion." +
        "<br><br>" +
        "(A) 'entertained' means to provide someone with amusement or enjoyment." +
        "<br><br>" +
        "(C) 'amused' means to cause someone to find something funny or entertaining." +
        "<br><br>" +
        "(D) 'engaged' means to attract or involve someone's interest or attention.",
    chinese_explanation: "(B) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
        "<br><br>" +
        "(A) '娱乐' 意味着为某人提供娱乐或享受。" +
        "<br><br>" +
        "(C) '使发笑' 意味着让某人觉得有趣或好笑。" +
        "<br><br>" +
        "(D) '吸引' 意味着吸引或涉及某人的兴趣或注意力。"
    },
    {
        id: 8,
    question: "She felt like her parents constantly __________ her for every small mistake she made.",
    chinese_question: "她觉得父母总是因为她犯的每一个小错误而 __________ 她。",
    answers: [
        { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "B", answer: "lambasted", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lambasted' used figuratively means to criticize someone harshly." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'supported' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '严厉批评' 在比喻意义上指严厉地批评某人。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
    question: "She hoped to __________ enough votes to win the election.",
    chinese_question: "她希望能够 __________ 足够的选票来赢得选举。",
    answers: [
        { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'garner' means to gather or collect something, especially information or approval." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'reject' means to dismiss or refuse something." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice something.",
    chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '拒绝' 意味着驳回或拒绝某事物。" +
        "<br><br>" +
        "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 10,
    question: "The pirate began to __________ his cutlass, intimidating his foes.",
    chinese_question: "海盗开始 __________ 他的弯刀，威胁他的敌人。",
    answers: [
        { option: "A", answer: "brandish", chinese_answer: "挥舞", chinese_romanization: "huīwǔ" },
        { option: "B", answer: "drop", chinese_answer: "掉落", chinese_romanization: "diàoluò" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brandish' means to wave or flourish something, especially a weapon, as a threat or in anger or excitement." +
        "<br><br>" + 
        "(B) 'drop' means to let something fall." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'protect' means to keep safe from harm or injury.",
    chinese_explanation: "(A) '挥舞' 意味着挥动或展示某物，尤其是武器，作为威胁或出于愤怒或兴奋。" +
        "<br><br>" + 
        "(B) '掉落' 意味着让某物掉下。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '保护' 意味着使免受伤害或损害。"
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
