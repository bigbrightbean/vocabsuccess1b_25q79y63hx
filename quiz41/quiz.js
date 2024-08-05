// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The athlete is in __________ physical condition, ready to compete at the highest level.",
        chinese_question: "这位运动员处于 __________ 的身体状态，准备在最高水平上竞争。",
        answers: [
            { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "poor", chinese_answer: "差", chinese_romanization: "chà" },
            { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "D", answer: "subpar", chinese_answer: "平庸", chinese_romanization: "píngyōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'peak' means the best or most effective condition." +
            "<br><br>" +
            "(B) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(C) 'average' means having qualities that are seen as typical of the middle of a range of qualities." +
            "<br><br>" +
            "(D) 'subpar' means below an average level.",
        chinese_explanation: "(A) '顶峰' 意味着最佳或最有效的状态。" +
            "<br><br>" +
            "(B) '差' 意味着缺乏足够的钱来维持社会中被认为舒适或正常的标准。" +
            "<br><br>" +
            "(C) '平均' 意味着具有典型中等水平的品质。" +
            "<br><br>" +
            "(D) '平庸' 意味着低于平均水平。"
    },
    {
        id: 2,
        question: "Her __________ personality made her the life of every party.",
        chinese_question: "她 __________ 的个性让她成为每个聚会的灵魂。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '精力充沛' 意味着表现出或涉及大量活动或活力。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有表现出兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或别人做的事情，而没有积极的反应或抵抗。"
    },
    {
        id: 3,
        question: "The __________ task of cleaning up after the festival took several days to complete.",
        chinese_question: "清理节日后的 __________ 任务花了几天时间才完成。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "quick", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
            { option: "C", answer: "gargantuan", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gargantuan' means enormous." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'quick' means done, proceeding, or occurring with promptness or rapidity." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '巨大的' 意味着非常大的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "(B) '快速的' 意味着迅速进行或发生的。" +
            "<br><br>" +
            "(D) '容易的' 意味着不费力地完成的；呈现出很少的困难。"
    },
    {
        id: 4,
        question: "Her __________ nature made her a perfect fit for the role of a radio host, engaging listeners with ease.",
        chinese_question: "她 __________ 的性格使她非常适合担任电台主持人，轻松地吸引听众。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "B", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "C", answer: "voluble", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "D", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'voluble' means speaking or spoken incessantly and fluently." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'taciturn' means reserved or uncommunicative in speech." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(C) '健谈的' 意味着不停地和流利地说话或被说的。" +
            "<br><br>" +
            "(A) '安静的' 意味着发出很少或没有噪音的。" +
            "<br><br>" +
            "(B) '沉默寡言的' 意味着在言语上保留或不爱说话的。" +
            "<br><br>" +
            "(D) '矜持的' 意味着慢于透露情感或意见的。"
    },
    {
        id: 5,
        question: "Despite his significant achievements, he remained __________ and never boasted about his success.",
        chinese_question: "尽管他取得了显著成就，他仍然 __________，从不夸耀自己的成功。",
        answers: [
            { option: "A", answer: "arrogant", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "B", answer: "boastful", chinese_answer: "自夸的", chinese_romanization: "zìkuā de" },
            { option: "C", answer: "unassuming", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "pretentious", chinese_answer: "做作的", chinese_romanization: "zuòzuò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unassuming' means not pretentious or arrogant; modest." +
            "<br><br>" +
            "(A) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(B) 'boastful' means showing excessive pride and self-satisfaction in one's achievements, possessions, or abilities." +
            "<br><br>" +
            "(D) 'pretentious' means attempting to impress by affecting greater importance or merit than is actually possessed.",
        chinese_explanation: "(C) '谦逊的' 意味着不自命不凡或傲慢；谦虚的。" +
            "<br><br>" +
            "(A) '傲慢的' 意味着对自己的重要性或能力有夸大的感觉。" +
            "<br><br>" +
            "(B) '自夸的' 意味着对自己的成就、财产或能力表现出过度的自豪和自满。" +
            "<br><br>" +
            "(D) '做作的' 意味着试图通过影响更大的重要性或优点来给人留下深刻印象，而实际上并没有这些优点。"
    },
    {
        id: 6,
        question: "The guide's __________ explanation of the rules made it easy for everyone to understand and follow, because it was clear and to the point.",
        chinese_question: "导游对规则的 __________ 解释使每个人都容易理解和遵守，因为它清晰明了。",
        answers: [
            { option: "A", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "B", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "C", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "D", answer: "perplexing", chinese_answer: "令人费解的", chinese_romanization: "lìng rén fèijiě de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'succinct' means briefly and clearly expressed." +
            "<br><br>" +
            "(A) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(B) 'confusing' means bewildering or perplexing." +
            "<br><br>" +
            "(D) 'perplexing' means completely baffling; very puzzling.",
        chinese_explanation: "(C) '简洁的' 意味着简短而清楚地表达。" +
            "<br><br>" +
            "(A) '详细的' 意味着有很多细节或事实；表现出对细节的关注。" +
            "<br><br>" +
            "(B) '令人困惑的' 意味着令人困惑或困扰的。" +
            "<br><br>" +
            "(D) '令人费解的' 意味着完全令人困惑的；非常令人困惑的。"
    },
    {
        id: 7,
        question: "The __________ road construction project will help to alleviate traffic congestion in the city.",
        chinese_question: "__________ 道路建设项目将有助于缓解城市交通拥堵。",
        answers: [
            { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
            { option: "B", answer: "widening", chinese_answer: "拓宽的", chinese_romanization: "tuòkuān de" },
            { option: "C", answer: "shortening", chinese_answer: "缩短的", chinese_romanization: "suōduǎn de" },
            { option: "D", answer: "restricting", chinese_answer: "限制的", chinese_romanization: "xiànzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'widening' means increasing the width of something." +
            "<br><br>" +
            "(A) 'narrowing' means becoming less wide." +
            "<br><br>" +
            "(C) 'shortening' means making or becoming shorter." +
            "<br><br>" +
            "(D) 'restricting' means limiting the extent, amount, or scope of something.",
        chinese_explanation: "(B) '拓宽的' 意味着增加某物的宽度。" +
            "<br><br>" +
            "(A) '缩小的' 意味着变得不那么宽的。" +
            "<br><br>" +
            "(C) '缩短的' 意味着使或变短的。" +
            "<br><br>" +
            "(D) '限制的' 意味着限制某物的范围、数量或范围的。"
    },
    {
        id: 8,
        question: "The project required a __________ amount of effort and resources to complete successfully.",
        chinese_question: "这个项目需要 __________ 的努力和资源才能成功完成。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "B", answer: "moderate", chinese_answer: "适度", chinese_romanization: "shìdù" },
            { option: "C", answer: "tremendous", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tremendous' means very great in amount, scale, or intensity." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(C) '巨大' 意味着数量、规模或强度非常大。" +
            "<br><br>" +
            "(A) '微不足道' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '适度' 意味着数量、强度、质量或程度适中。" +
            "<br><br>" +
            "(D) '最小' 意味着最少的数量、数量或程度。"
    },
    {
        id: 9,
        question: "Despite her __________ demeanour, she managed to deliver an excellent presentation that impressed everyone.",
        chinese_question: "尽管她的举止 __________，但她还是设法做了一场出色的演讲，给所有人留下了深刻印象。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
            { option: "B", answer: "fearless", chinese_answer: "无畏的", chinese_romanization: "wúwèi de" },
            { option: "C", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "D", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(B) 'fearless' means lacking fear." +
            "<br><br>" +
            "(C) 'bold' means showing a willingness to take risks; confident and courageous." +
            "<br><br>" +
            "(D) 'assertive' means having or showing a confident and forceful personality.",
        chinese_explanation: "(A) '胆怯的' 意味着缺乏勇气或信心的；容易受到惊吓的。" +
            "<br><br>" +
            "(B) '无畏的' 意味着没有恐惧的。" +
            "<br><br>" +
            "(C) '大胆的' 意味着愿意冒险的；自信和勇敢的。" +
            "<br><br>" +
            "(D) '自信的' 意味着具有或表现出自信和强有力的个性。"
    },
    {
        id: 10,
        question: "The __________ information in the report made it longer than necessary and harder to read.",
        chinese_question: "报告中的 __________ 信息使其比必要的更长且更难阅读。",
        answers: [
            { option: "A", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "B", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'redundant' means not or no longer needed or useful; superfluous." +
            "<br><br>" +
            "(A) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered.",
        chinese_explanation: "(D) '多余的' 意味着不或不再需要或有用的；多余的。" +
            "<br><br>" +
            "(A) '必要的' 意味着绝对必要的；非常重要的。" +
            "<br><br>" +
            "(B) '简洁的' 意味着清楚地用少量文字提供大量信息的；简短但全面的。" +
            "<br><br>" +
            "(C) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。"
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
