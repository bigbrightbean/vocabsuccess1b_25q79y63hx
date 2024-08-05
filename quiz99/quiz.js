// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "During the presentation, she began to __________ when she couldn't remember the next point.",
    chinese_question: "在演讲过程中，当她想不起下一个要点时，她开始 __________。",
    answers: [
        { option: "A", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "B", answer: "excel", chinese_answer: "擅长", chinese_romanization: "shàncháng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flounder' means to struggle mentally; show or feel great confusion." +
        "<br><br>" + 
        "(B) 'excel' means to be exceptionally good at or proficient in an activity or subject." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'entertain' means to provide someone with amusement or enjoyment.",
    chinese_explanation: "(A) '挣扎' 意味着心理上挣扎；表现或感到极大的困惑。" +
        "<br><br>" + 
        "(B) '擅长' 意味着在某个活动或学科上非常出色。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 2,
        question: "The journalist worked hard to __________ the myths surrounding the celebrity's personal life by uncovering the facts and providing evidence to the contrary.",
        chinese_question: "记者努力 __________ 围绕这位名人个人生活的神话，揭示事实并提供相反的证据。",
        answers: [
            { option: "A", answer: "confirm", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "investigate", chinese_answer: "调查", chinese_romanization: "diàochá" },
            { option: "D", answer: "debunk", chinese_answer: "揭穿", chinese_romanization: "jiēchuān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'debunk' means to expose the falseness or hollowness of a myth, idea, or belief." +
            "<br><br>" +
            "(A) 'confirm' means to establish the truth or correctness of something." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of something; hold up." +
            "<br><br>" +
            "(C) 'investigate' means to carry out a systematic or formal inquiry to discover and examine the facts of an issue or case." ,
        chinese_explanation: "(D) '揭穿' 意味着揭露神话、想法或信仰的虚假性或空洞性。" +
            "<br><br>" +
            "(A) '证实' 意味着确定某事的真实性或正确性。" +
            "<br><br>" +
            "(B) '支持' 意味着支撑某物的全部或部分重量。" +
            "<br><br>" +
            "(C) '调查' 意味着进行系统或正式的调查以发现和检查问题或案件的事实。"
    },
    {
        id: 3,
    question: "The king decided to __________ his throne in favor of his younger brother.",
    chinese_question: "国王决定 __________ 他的王位，让给他的弟弟。",
    answers: [
        { option: "A", answer: "claim", chinese_answer: "声称", chinese_romanization: "shēngchēng" },
        { option: "B", answer: "secure", chinese_answer: "保障", chinese_romanization: "bǎozhàng" },
        { option: "C", answer: "cede", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "D", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'cede' means to give up power or territory." +
        "<br><br>" +
        "(A) 'claim' means to state that something is the case, typically without providing evidence or proof." +
        "<br><br>" +
        "(B) 'secure' means to fix or attach something firmly so that it cannot be moved or lost." +
        "<br><br>" +
        "(D) 'retain' means to keep possession of something.",
    chinese_explanation: "(C) '放弃' 意味着放弃权力或领土。" +
        "<br><br>" +
        "(A) '声称' 意味着陈述某事是事实，通常不提供证据或证明。" +
        "<br><br>" +
        "(B) '保障' 意味着牢固地固定或附着某物，以使其不能移动或丢失。" +
        "<br><br>" +
        "(D) '保留' 意味着保留某物。"
    },
    {
        id: 4,
    question: "The unexpected visit from the CEO __________ the employees, who were not prepared to give a presentation.",
    chinese_question: "首席执行官的突然来访让员工感到 __________ ，他们没有准备好进行演示。",
    answers: [
        { option: "A", answer: "disconcerted", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
        { option: "B", answer: "reassured", chinese_answer: "使安心", chinese_romanization: "shǐ ānxīn" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "prepared", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disconcerted' means to disturb the composure of; to unsettle." +
        "<br><br>" + 
        "(B) 'reassured' means to say or do something to remove the doubts and fears of someone." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'prepared' means to make ready for use or consideration.",
    chinese_explanation: "(A) '使不安' 意味着打扰某人的平静；使不安。" +
        "<br><br>" + 
        "(B) '使安心' 意味着说或做某事以消除某人的疑虑和恐惧。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '准备' 意味着为使用或考虑做准备。"
    },
    {
        id: 5,
    question: "The unexpected news of the lottery win completely left her __________, unable to believe her good fortune.",
    chinese_question: "突然的彩票中奖消息让她完全 __________，不敢相信自己的好运。",
    answers: [
        { option: "A", answer: "calming", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "B", answer: "flabbergasted", chinese_answer: "惊讶", chinese_romanization: "jīngyà" },
        { option: "C", answer: "downplaying", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
        { option: "D", answer: "soothing", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'flabbergasted' means to shock or surprise someone greatly." +
        "<br><br>" + 
        "(A) 'calming' means making someone peaceful or quiet." +
        "<br><br>" + 
        "(C) 'downplaying' means to make something seem less important or significant." +
        "<br><br>" + 
        "(D) 'soothing' means gently calming someone or something.",
    chinese_explanation: "(B) '惊讶' 意味着极大地震惊或惊讶某人。" +
        "<br><br>" + 
        "(A) '平静' 意味着使某人或某物平静或安静。" +
        "<br><br>" + 
        "(C) '轻视' 意味着让某件事情显得不那么重要。" +
        "<br><br>" + 
        "(D) '抚慰' 意味着轻轻地安抚某人或某物。"
    },
    {
        id: 6,
    question: "To __________ herself with her new colleagues, she brought homemade cookies to the office.",
    chinese_question: "为了 __________ 自己与新同事的关系，她带了自制的饼干到办公室。",
    answers: [
        { option: "A", answer: "distance", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
        { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ingratiate' means to bring oneself into favor with someone by flattering or trying to please them." +
        "<br><br>" +
        "(A) 'distance' means to make someone or something far off or remote in position or relationship." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
    chinese_explanation: "(B) '讨好' 意味着通过奉承或试图取悦某人使自己受到某人的喜欢。" +
        "<br><br>" +
        "(A) '疏远' 意味着使某人或某物在位置或关系上变得遥远或远离。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 7,
question: "Her parents tried to __________ her from quitting her stable job to pursue her passion for painting.",
chinese_question: "她的父母试图 __________ 她放弃稳定的工作去追求她对绘画的热情。",
answers: [
    { option: "A", answer: "push", chinese_answer: "推", chinese_romanization: "tuī" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
    { option: "D", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
],
correctAnswer: "D",
explanation: "(D) 'dissuade' means to persuade someone not to take a particular course of action, used figuratively here." +
    "<br><br>" +
    "(A) 'push' means to exert force on someone or something in order to move them away from oneself." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'simplify' means to make something simpler or easier to do or understand.",
chinese_explanation: "(D) '劝阻' 意味着说服某人不采取某一特定行动，这里是比喻用法。" +
    "<br><br>" +
    "(A) '推' 意味着施加力量在某人或某物上，以将其移离自己。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
    question: "The counselor was able to __________ the student's anxiety by offering support and understanding.",
    chinese_question: "辅导员通过提供支持和理解来 __________ 学生的焦虑。",
    answers: [
        { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "heighten", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "provoke", chinese_answer: "激起", chinese_romanization: "jīqǐ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" + 
        "(B) 'heighten' means to make or become more intense." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'provoke' means to stimulate or give rise to a reaction or emotion.",
    chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
        "<br><br>" + 
        "(B) '加剧' 意味着变得或使变得更强烈。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '激起' 意味着刺激或引起反应或情感。"
    },
    {
        id: 9,
    question: "She felt uncomfortable when the stranger __________ her on the street asking for directions.",
    chinese_question: "当陌生人在街上 __________ 她询问方向时，她感到不舒服。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "avoided", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "C", answer: "accosted", chinese_answer: "搭讪", chinese_romanization: "dāshàn" },
        { option: "D", answer: "thanked", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'accosted' means to approach and address someone boldly or aggressively." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'avoided' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'thanked' means to express gratitude to someone.",
    chinese_explanation: "(C) '搭讪' 意味着大胆或攻击性地接近并与某人交谈。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '避开' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(D) '感谢' 意味着对某人表示感激。"
    },
    {
        id: 10,
    question: "The wine was left to __________ in the cellar for several years, enhancing its flavor.",
    chinese_question: "这瓶酒被放在地窖里 __________ 了几年，味道更加醇厚。",
    answers: [
        { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
        { option: "B", answer: "spoil", chinese_answer: "变质", chinese_romanization: "biànzhì" },
        { option: "C", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" },
        { option: "D", answer: "freeze", chinese_answer: "冷冻", chinese_romanization: "lěngdòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mature' means to develop fully in body or mind." +
        "<br><br>" + 
        "(B) 'spoil' means to diminish or destroy the value or quality of something." +
        "<br><br>" + 
        "(C) 'dilute' means to make a liquid thinner or weaker by adding water or another solvent to it." +
        "<br><br>" + 
        "(D) 'freeze' means to turn or be turned into ice or another solid as a result of extreme cold.",
    chinese_explanation: "(A) '成熟' 意味着身体或心理上的完全发展。" +
        "<br><br>" + 
        "(B) '变质' 意味着减少或破坏某物的价值或质量。" +
        "<br><br>" + 
        "(C) '稀释' 意味着通过加水或其他溶剂使液体变稀或变弱。" +
        "<br><br>" + 
        "(D) '冷冻' 意味着因极冷而变成或被变成冰或其他固体。"
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
