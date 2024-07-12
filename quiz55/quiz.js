// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The poet's verses were marked by gentle __________, creating a rhythmic flow that was pleasing to the ear.",
    chinese_question: "诗人的诗句以温和的 __________ 为特点，创造出一种悦耳的节奏。",
    answers: [
        { option: "A", answer: "cadences", chinese_answer: "韵律", chinese_romanization: "yùnlǜ" },
        { option: "B", answer: "interruptions", chinese_answer: "中断", chinese_romanization: "zhōngduàn" },
        { option: "C", answer: "dissonances", chinese_answer: "不和谐音", chinese_romanization: "bù héxié yīn" },
        { option: "D", answer: "clashes", chinese_answer: "冲突", chinese_romanization: "chōngtū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cadences' means the rhythmic flow of a sequence of sounds or words." +
        "<br><br>" +
        "(B) 'interruptions' means something that breaks the continuity of something." +
        "<br><br>" +
        "(C) 'dissonances' means a lack of harmony among musical notes." +
        "<br><br>" +
        "(D) 'clashes' means a violent confrontation.",
    chinese_explanation: "(A) '韵律' 意味着声音或词语序列的节奏流动。" +
        "<br><br>" +
        "(B) '中断' 意味着打破某事物的连续性。" +
        "<br><br>" +
        "(C) '不和谐音' 意味着音乐音符之间缺乏和谐。" +
        "<br><br>" +
        "(D) '冲突' 意味着暴力对抗。"
    },
    {
        id: 2,
        question: "As a __________, she focused on finding practical solutions to problems rather than getting bogged down in theoretical discussions.",
        chinese_question: "作为一个 __________，她专注于寻找实际解决问题的方法，而不是陷入理论讨论中。",
        answers: [
            { option: "A", answer: "dreamer", chinese_answer: "梦想家", chinese_romanization: "mèngxiǎngjiā" },
            { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
            { option: "C", answer: "idealist", chinese_answer: "理想主义者", chinese_romanization: "lǐxiǎng zhǔyì zhě" },
            { option: "D", answer: "visionary", chinese_answer: "有远见的人", chinese_romanization: "yǒu yuǎnjiàn de rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
            "<br><br>" +
            "(A) 'dreamer' means a person who spends a lot of time thinking about or planning enjoyable events that are not likely to happen." +
            "<br><br>" +
            "(C) 'idealist' means a person who is guided more by ideals than by practical considerations." +
            "<br><br>" +
            "(D) 'visionary' means a person with original ideas about what the future will or could be like.",
        chinese_explanation: "(B) '实用主义者'一词意味着一个更多地受到实际考虑而不是理想指导的人。" +
            "<br><br>" +
            "(A) '梦想家' 意味着一个花很多时间思考或计划不太可能发生的愉快事件的人。" +
            "<br><br>" +
            "(C) '理想主义者' 意味着一个更多地受到理想而不是实际考虑指导的人。" +
            "<br><br>" +
            "(D) '有远见的人' 意味着对未来将会或可能会是什么样子有独特想法的人。"
    },
    {
        id: 3,
        question: "After winning the lottery, he experienced an unexpected __________ that allowed him to pay off his debts and travel the world.",
        chinese_question: "中彩票后，他经历了一次意外的 __________，这使他能够还清债务并环游世界。",
        answers: [
            { option: "A", answer: "windfall", chinese_answer: "意外之财", chinese_romanization: "yìwài zhī cái" },
            { option: "B", answer: "expense", chinese_answer: "花费", chinese_romanization: "huāfèi" },
            { option: "C", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "D", answer: "debt", chinese_answer: "债务", chinese_romanization: "zhàiwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'windfall' means a large amount of money that is won or received unexpectedly." +
            "<br><br>" +
            "(B) 'expense' means the cost required for something; the money spent on something." +
            "<br><br>" +
            "(C) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(D) 'debt' means something, typically money, that is owed or due.",
        chinese_explanation: "(A) '意外之财'一词意味着意外获得的大笔钱。" +
            "<br><br>" +
            "(B) '花费' 意味着某事所需的费用；为某事花的钱。" +
            "<br><br>" +
            "(C) '负担' 意味着负荷，通常是沉重的。" +
            "<br><br>" +
            "(D) '债务' 意味着欠或应付的钱。"
    },
    {
        id: 4,
        question: "The crowd's __________ for the concert was palpable, with everyone cheering and singing along.",
        chinese_question: "观众对音乐会的 __________ 是显而易见的，每个人都在欢呼和一起唱歌。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fervour' means intense and passionate feeling." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '热情'一词意味着强烈而热情的感觉。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前的暂停动作。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 5,
        question: "The violinist's __________ skill left the audience in awe, as her performance was flawless.",
        chinese_question: "这位小提琴家的 __________ 技艺让观众惊叹不已，她的表演无懈可击。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "业余", chinese_romanization: "yèyú" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "consummate", chinese_answer: "完美", chinese_romanization: "wánměi" },
            { option: "D", answer: "unskilled", chinese_answer: "无技能", chinese_romanization: "wú jìnéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
            "<br><br>" +
            "(A) 'amateur' means engaging or engaged in without payment; non-professional." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(D) 'unskilled' means lacking skill; not having or requiring special skill or training.",
        chinese_explanation: "(C) '完美'一词意味着显示出高度的技能和天赋；完整或完美。" +
            "<br><br>" +
            "(A) '业余' 意味着不支付报酬的；非专业的。" +
            "<br><br>" +
            "(B) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
            "<br><br>" +
            "(D) '无技能' 意味着缺乏技能；没有或不需要特别技能或培训。"
    },
    {
        id: 6,
        question: "Skipping meals can be a __________ to your overall health and energy levels.",
        chinese_question: "不吃饭会对你的整体健康和能量水平造成 __________。",
        answers: [
            { option: "A", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
            { option: "B", answer: "detriment", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
            { option: "C", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
            { option: "D", answer: "gain", chinese_answer: "增益", chinese_romanization: "zēngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'detriment' means a cause of harm or damage." +
            "<br><br>" +
            "(A) 'asset' means a useful or valuable thing, person, or quality." +
            "<br><br>" +
            "(C) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'gain' means an increase in wealth or resources.",
        chinese_explanation: "(B) '损害'一词意味着造成伤害或损害的原因。" +
            "<br><br>" +
            "(A) '资产' 意味着有用或有价值的事物、人物或品质。" +
            "<br><br>" +
            "(C) '益处' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(D) '增益' 意味着财富或资源的增加。"
    },
    {
        id: 7,
        question: "The __________ between the two singers' voices made the duet hard to listen to.",
        chinese_question: "两位歌手声音之间的 __________ 使得二重唱难以聆听。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "melody", chinese_answer: "旋律", chinese_romanization: "xuánlǜ" },
            { option: "C", answer: "dissonance", chinese_answer: "不和谐音", chinese_romanization: "bù héxié yīn" },
            { option: "D", answer: "resonance", chinese_answer: "共鸣", chinese_romanization: "gòngmíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissonance' means a lack of harmony among musical notes." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(B) 'melody' means a sequence of single notes that is musically satisfying." +
            "<br><br>" +
            "(D) 'resonance' means the quality in a sound of being deep, full, and reverberating.",
        chinese_explanation: "(C) '不和谐音'一词意味着音乐音符之间缺乏和谐。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发声的音乐音符的组合产生令人愉悦的效果。" +
            "<br><br>" +
            "(B) '旋律' 意味着一连串单一音符，具有音乐上的满足感。" +
            "<br><br>" +
            "(D) '共鸣' 意味着声音深沉、饱满和回响的质量。"
    },
    {
        id: 8,
        question: "He handled the delicate situation with great __________, avoiding any potential conflicts.",
        chinese_question: "他巧妙地处理了这个微妙的情况，避免了任何潜在的冲突。",
        answers: [
            { option: "A", answer: "insensitivity", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "finesse", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
            { option: "C", answer: "roughness", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "D", answer: "bluntness", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'finesse' means intricate and refined delicacy; skillful handling of a situation." +
            "<br><br>" +
            "(A) 'insensitivity' means lack of concern for others' feelings." +
            "<br><br>" +
            "(C) 'roughness' means lacking smoothness or gentleness." +
            "<br><br>" +
            "(D) 'bluntness' means uncompromisingly forthright.",
        chinese_explanation: "(B) '技巧'一词意味着复杂而精细的技巧；巧妙处理情况。" +
            "<br><br>" +
            "(A) '迟钝' 意味着对他人感受的缺乏关心。" +
            "<br><br>" +
            "(C) '粗糙' 意味着缺乏光滑或温柔。" +
            "<br><br>" +
            "(D) '直率' 意味着毫不妥协地直率。"
    },
    {
        id: 9,
        question: "The abandoned house fell into __________, with trash and debris scattered everywhere.",
        chinese_question: "这座废弃的房子陷入了 __________，到处都是垃圾和废墟。",
        answers: [
            { option: "A", answer: "cleanliness", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "B", answer: "squalour", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
            { option: "C", answer: "luxury", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
            { option: "D", answer: "orderliness", chinese_answer: "整洁", chinese_romanization: "zhěngjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'squalor' means a state of being extremely dirty and unpleasant, especially as a result of poverty or neglect." +
            "<br><br>" +
            "(A) 'cleanliness' means the state of being clean." +
            "<br><br>" +
            "(C) 'luxury' means great comfort and extravagant living." +
            "<br><br>" +
            "(D) 'orderliness' means the quality of being arranged neatly or systematically.",
        chinese_explanation: "(B) '肮脏'一词意味着极度肮脏和不愉快的状态，尤其是由于贫穷或忽视所致。" +
            "<br><br>" +
            "(A) '清洁' 意味着干净的状态。" +
            "<br><br>" +
            "(C) '奢华' 意味着极大的舒适和奢侈的生活。" +
            "<br><br>" +
            "(D) '整洁' 意味着整齐或系统地排列的品质。"
    },
    {
        id: 10,
        question: "Winning the scholarship was a __________ for her, allowing her to attend the college of her dreams without financial stress.",
        chinese_question: "赢得奖学金对她来说是一个 __________，让她在没有经济压力的情况下上了梦想中的大学。",
        answers: [
            { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "B", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "C", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "windfall", chinese_answer: "意外之财", chinese_romanization: "yìwài zhī cái" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'windfall' means a large amount of money or other benefits that are won or received unexpectedly." +
            "<br><br>" +
            "(A) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(B) 'setback' means a reversal or check in progress." +
            "<br><br>" +
            "(C) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(D) '意外之财'一词意味着意外获得的大笔钱或其他利益。" +
            "<br><br>" +
            "(A) '负担' 意味着负荷，通常是沉重的。" +
            "<br><br>" +
            "(B) '挫折' 意味着进展中的逆转或检查。" +
            "<br><br>" +
            "(C) '阻碍' 意味着对某事或某人提供阻力、延迟或阻碍的事物。"
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
