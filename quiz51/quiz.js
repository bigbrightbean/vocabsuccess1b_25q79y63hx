// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ criticism from her boss made her reconsider her career choices.",
        chinese_question: "老板的 __________ 批评使她重新考虑她的职业选择。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "mild", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "D", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(C) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving.",
        chinese_explanation: "(A) '严厉的' 意味着不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(B) '温和的' 意味着有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(C) '轻微的' 意味着不严重、严重或苛刻。" +
            "<br><br>" +
            "(D) '理解的' 意味着同情地意识到他人的感受；宽容和宽恕。"
    },
    {
        id: 2,
        question: "At the party, John was the most __________ person, chatting with everyone and making new friends easily.",
        chinese_question: "在派对上，约翰是最 __________ 的人，和每个人聊天，并很容易结交新朋友。",
        answers: [
            { option: "A", answer: "introverted", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
            { option: "B", answer: "extroverted", chinese_answer: "外向", chinese_romanization: "wàixiàng" },
            { option: "C", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" },
            { option: "D", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extroverted' means outgoing, socially confident, and energetic." +
            "<br><br>" +
            "(A) 'introverted' means shy, reserved, and focused inward." +
            "<br><br>" +
            "(C) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '外向' 意味着外向、社交自信和精力充沛。" +
            "<br><br>" +
            "(A) '内向' 意味着害羞、矜持和内向。" +
            "<br><br>" +
            "(C) '害羞' 意味着在他人面前表现出紧张或胆怯。" +
            "<br><br>" +
            "(D) '矜持' 意味着慢于表达情感或意见。"
    },
    {
        id: 3,
        question: "The __________ amount of rainfall did little to alleviate the drought conditions.",
        chinese_question: "微不足道的降雨量对缓解干旱条件几乎没有什么作用。",
        answers: [
            { option: "A", answer: "considerable", chinese_answer: "可观", chinese_romanization: "kěguān" },
            { option: "B", answer: "minimal", chinese_answer: "最低限度", chinese_romanization: "zuìdī xiàndù" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "sufficient", chinese_answer: "充足", chinese_romanization: "chōngzú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(A) 'considerable' means notably large in size, amount, or extent." +
            "<br><br>" +
            "(B) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'sufficient' means enough; adequate.",
        chinese_explanation: "(C) '微不足道' 意味着小到不值得考虑。" +
            "<br><br>" +
            "(A) '可观' 意味着数量或程度显著大。" +
            "<br><br>" +
            "(B) '最低限度' 意味着最小量、数量或程度。" +
            "<br><br>" +
            "(D) '充足' 意味着足够的。"
    },
    {
        id: 4,
        question: "She was a __________ individual, constantly working towards her goals with unwavering determination and energy.",
        chinese_question: "她是一个 __________ 的人，始终以坚定的决心和活力朝着自己的目标努力。",
        answers: [
            { option: "A", answer: "driven", chinese_answer: "有动力的", chinese_romanization: "yǒu dònglì de" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'driven' means being highly motivated to achieve something." +
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '有动力的' 意味着高度积极主动去实现某事。" +
            "<br><br>" +
            "(B) '懒惰的' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(D) '无动于衷的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "The scientist made an __________ discovery that changed the course of history.",
        chinese_question: "这位科学家做出了一个 __________ 的发现，改变了历史的进程。",
        answers: [
            { option: "A", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(A) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '非凡的' 意味着非常不寻常或显著的。" +
            "<br><br>" +
            "(A) '平凡的' 意味着没有特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着太小或不重要而不值得考虑。"
    },
    {
        id: 6,
        question: "The actor's __________ of fans waited eagerly outside the theater, hoping to catch a glimpse of their idol.",
        chinese_question: "这位演员的 __________ 粉丝在剧院外急切地等待，希望能看到他们的偶像。",
        answers: [
            { option: "A", answer: "couple", chinese_answer: "一对", chinese_romanization: "yīduì" },
            { option: "B", answer: "legion", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "C", answer: "handful", chinese_answer: "少数", chinese_romanization: "shǎoshù" },
            { option: "D", answer: "single", chinese_answer: "单个", chinese_romanization: "dāngè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'legion' means a vast multitude or a large number." +
            "<br><br>" +
            "(A) 'couple' means two individuals of the same sort considered together." +
            "<br><br>" +
            "(C) 'handful' means a small number or amount." +
            "<br><br>" +
            "(D) 'single' means only one.",
        chinese_explanation: "(B) '大量'一词意味着数量庞大或众多。" +
            "<br><br>" +
            "(A) '一对' 意味着两个同类的个体一起考虑。" +
            "<br><br>" +
            "(C) '少数' 意味着数量少。" +
            "<br><br>" +
            "(D) '单个' 意味着只有一个。"
    },
    {
        id: 7,
        question: "The lawyer's __________ presentation in court, with flawless arguments and precise evidence, won the case for her client.",
        chinese_question: "律师在法庭上 __________ 的陈述，凭借无懈可击的论点和精确的证据，为她的客户赢得了案件。",
        answers: [
            { option: "A", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "B", answer: "inferior", chinese_answer: "较差的", chinese_romanization: "jiàochà de" },
            { option: "C", answer: "subpar", chinese_answer: "不达标的", chinese_romanization: "bù dábiaō de" },
            { option: "D", answer: "impeccable", chinese_answer: "无懈可击的", chinese_romanization: "wúxièkějī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impeccable' means in accordance with the highest standards; faultless." +
            "<br><br>" +
            "(A) 'flawed' means having imperfections." +
            "<br><br>" +
            "(B) 'inferior' means lower in quality or value." +
            "<br><br>" +
            "(C) 'subpar' means below an average level.",
        chinese_explanation: "(D) '无懈可击的' 意味着符合最高标准；完美无缺的。" +
            "<br><br>" +
            "(A) '有缺陷的' 意味着有瑕疵的。" +
            "<br><br>" +
            "(B) '较差的' 意味着质量或价值较低的。" +
            "<br><br>" +
            "(C) '不达标的' 意味着低于平均水平的。"
    },
    {
        id: 8,
        question: "The museum's __________ exhibit, with its perfectly preserved artifacts and spotless display cases, attracted visitors from all over the world.",
        chinese_question: "博物馆的 __________ 展览，以完美保存的文物和一尘不染的展示柜，吸引了来自世界各地的游客。",
        answers: [
            { option: "A", answer: "tarnished", chinese_answer: "失去光泽的", chinese_romanization: "shīqù guāngzé de" },
            { option: "B", answer: "blemished", chinese_answer: "有瑕疵的", chinese_romanization: "yǒu xiácī de" },
            { option: "C", answer: "defiled", chinese_answer: "被玷污的", chinese_romanization: "bèi diànwū de" },
            { option: "D", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wúxiá de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(A) 'tarnished' means having lost its shine, typically as a result of exposure to air or moisture." +
            "<br><br>" +
            "(B) 'blemished' means having a small mark or flaw that spoils the appearance of something." +
            "<br><br>" +
            "(C) 'defiled' means having been made dirty or impure.",
        chinese_explanation: "(D) '完美无瑕的' 意味着非常干净、整洁。" +
            "<br><br>" +
            "(A) '失去光泽的' 意味着由于暴露在空气或湿气中而失去光泽。" +
            "<br><br>" +
            "(B) '有瑕疵的' 意味着有一个小的标记或缺陷，破坏了某物的外观。" +
            "<br><br>" +
            "(C) '被玷污的' 意味着被弄脏或不纯。"
    },
    {
        id: 9,
        question: "The president's __________ speech marked the beginning of her term in office.",
        chinese_question: "总统的__________演讲标志着她的任期开始。",
        answers: [
            { option: "A", answer: "inaugural", chinese_answer: "就职", chinese_romanization: "jiùzhí" },
            { option: "B", answer: "concluding", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "redundant", chinese_answer: "多余", chinese_romanization: "duōyú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inaugural' means marking the beginning of an institution, activity, or period of office." +
            "<br><br>" +
            "(B) 'concluding' means bringing something to an end." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'redundant' means not or no longer needed or useful.",
        chinese_explanation: "(A) '就职'一词意味着标志着一个机构、活动或任期的开始。" +
            "<br><br>" +
            "(B) '结束' 意味着结束某事。" +
            "<br><br>" +
            "(C) '平凡' 意味着缺乏兴趣或兴奋；沉闷。" +
            "<br><br>" +
            "(D) '多余' 意味着不再需要或不再有用。"
    },
    {
        id: 10,
    question: "The researcher conducted a __________ study, examining every detail meticulously.",
    chinese_question: "研究人员进行了 __________ 的研究，仔细检查了每一个细节。",
    answers: [
        { option: "A", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
        { option: "B", answer: "hasty", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
        { option: "C", answer: "incomplete", chinese_answer: "不完整", chinese_romanization: "bù wánzhěng" },
        { option: "D", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'thorough' means complete with regard to every detail; not superficial or partial." +
        "<br><br>" +
        "(A) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(B) 'hasty' means done with excessive speed or urgency; hurried." +
        "<br><br>" +
        "(C) 'incomplete' means not having all the necessary or appropriate parts.",
    chinese_explanation: "(D) '彻底' 意味着每一个细节都完成的；不肤浅或部分。" +
        "<br><br>" +
        "(A) '肤浅' 意味着存在于或发生在表面。" +
        "<br><br>" +
        "(B) '匆忙' 意味着以过快或紧急的速度完成；仓促。" +
        "<br><br>" +
        "(C) '不完整' 意味着没有所有必要或适当的部分。"
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
