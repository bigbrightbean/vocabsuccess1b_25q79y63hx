// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The journalist cited a reliable __________ for the information in her article.",
    chinese_question: "记者引用了一个可靠的 __________ 作为她文章中的信息来源。",
    answers: [
        { option: "A", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" },
        { option: "B", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "C", answer: "result", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "D", answer: "summary", chinese_answer: "概要", chinese_romanization: "gàiyào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'source' means a place, person, or thing from which something comes or can be obtained." +
        "<br><br>" +
        "(B) 'outcome' means the way a thing turns out; a consequence." +
        "<br><br>" +
        "(C) 'result' means a thing that is caused or produced by something else." +
        "<br><br>" +
        "(D) 'summary' means a brief statement or account of the main points of something.",
    chinese_explanation: "(A) '来源' 意味着某物来自或可以从中获得的地方、人物或事物。" +
        "<br><br>" +
        "(B) '结果' 意味着事情的结果；后果。" +
        "<br><br>" +
        "(C) '结果' 意味着由某事引起或产生的东西。" +
        "<br><br>" +
        "(D) '概要' 意味着对某事的要点进行简要陈述或说明。"
    },
    {
        id: 2,
        question: "The __________ artist created a masterpiece that was praised by critics and adored by the public.",
        chinese_question: "这位 __________ 的艺术家创作了一件杰作，受到了评论家的称赞和公众的喜爱。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "consummate", chinese_answer: "完美", chinese_romanization: "wánměi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(D) '完美'一词意味着显示出高度的技能和天赋；完整或完美。" +
            "<br><br>" +
            "(A) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
            "<br><br>" +
            "(B) '笨拙' 意味着在移动或处理事物时笨拙。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 3,
    question: "The engineer quickly found a __________ to fix the broken machine.",
    chinese_question: "工程师很快找到了修理坏机器的 __________。",
    answers: [
        { option: "A", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
        { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "issue", chinese_answer: "议题", chinese_romanization: "yìtí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(A) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." +
        "<br><br>" +
        "(C) 'mistake' means an action or judgment that is misguided or wrong." +
        "<br><br>" +
        "(D) 'issue' means an important topic or problem for debate or discussion.",
    chinese_explanation: "(B) '解决方案' 意味着解决问题或处理困难情况的方法。" +
        "<br><br>" +
        "(A) '问题' 意味着被认为是不受欢迎或有害且需要处理和克服的事项或情况。" +
        "<br><br>" +
        "(C) '错误' 意味着误导或错误的行为或判断。" +
        "<br><br>" +
        "(D) '议题' 意味着需要讨论或讨论的重要话题或问题。"
    },
    {
        id: 4,
        question: "The museum's latest __________ includes several rare paintings from the 19th century.",
        chinese_question: "博物馆最新的 __________ 包括几幅19世纪的稀有画作。",
        answers: [
            { option: "A", answer: "acquisition", chinese_answer: "收藏", chinese_romanization: "shōucáng" },
            { option: "B", answer: "loan", chinese_answer: "借款", chinese_romanization: "jièkuǎn" },
            { option: "C", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
            { option: "D", answer: "loss", chinese_answer: "损失", chinese_romanization: "sǔnshī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' means the act of obtaining or gaining possession, especially in the context of a museum or collection." +
            "<br><br>" +
            "(B) 'loan' means a thing that is borrowed, especially a sum of money that is expected to be paid back with interest." +
            "<br><br>" +
            "(C) 'sale' means the exchange of a commodity for money; the action of selling something." +
            "<br><br>" +
            "(D) 'loss' means the fact or process of losing something or someone.",
        chinese_explanation: "(A) '收藏' 意味着获取或获得所有权的行为，特别是在博物馆或收藏方面。" +
            "<br><br>" +
            "(B) '借款' 意味着借来的东西，尤其是一笔预期会连本带息偿还的钱。" +
            "<br><br>" +
            "(C) '销售' 意味着用金钱交换商品的行为；销售某物的行为。" +
            "<br><br>" +
            "(D) '损失' 意味着失去某物或某人的事实或过程。"
    },
    {
        id: 5,
        question: "The council's decision was final and not subject to __________, despite the public outcry.",
        chinese_question: "尽管公众强烈抗议，委员会的决定是最终决定，不接受 __________。",
        answers: [
            { option: "A", answer: "reconsideration", chinese_answer: "重新考虑", chinese_romanization: "chóngxīn kǎolǜ" },
            { option: "B", answer: "endorsement", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "implementation", chinese_answer: "实施", chinese_romanization: "shíshī" },
            { option: "D", answer: "execution", chinese_answer: "执行", chinese_romanization: "zhíxíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reconsideration' means the action of considering something again or differently." +
            "<br><br>" +
            "(B) 'endorsement' means an act of giving one's public approval or support to someone or something." +
            "<br><br>" +
            "(C) 'implementation' means the process of putting a decision or plan into effect." +
            "<br><br>" +
            "(D) 'execution' means the carrying out of a plan, order, or course of action.",
        chinese_explanation: "(A) '重新考虑' 意味着再次或以不同方式考虑某事的行为。" +
            "<br><br>" +
            "(B) '支持' 意味着公开同意或支持某人或某事的行为。" +
            "<br><br>" +
            "(C) '实施' 意味着将决定或计划付诸实施的过程。" +
            "<br><br>" +
            "(D) '执行' 意味着计划、命令或行动过程的实施。"
    },
    {
        id: 6,
        question: "The spy was executed for his __________, having betrayed his country to its enemies.",
        chinese_question: "这名间谍因他的 __________ 被处决，因为他背叛了自己的国家并与敌人勾结。",
        answers: [
            { option: "A", answer: "loyalty", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "B", answer: "treachery", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
            { option: "C", answer: "bravery", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'treachery' means betrayal of trust; deceptive action or nature." +
            "<br><br>" +
            "(A) 'loyalty' means a strong feeling of support or allegiance." +
            "<br><br>" +
            "(C) 'bravery' means courageous behavior or character." +
            "<br><br>" +
            "(D) 'integrity' means the quality of being honest and having strong moral principles.",
        chinese_explanation: "(B) '背叛'一词意味着背叛信任；欺骗行为或性质。" +
            "<br><br>" +
            "(A) '忠诚' 意味着强烈的支持或忠诚感。" +
            "<br><br>" +
            "(C) '勇敢' 意味着勇敢的行为或性格。" +
            "<br><br>" +
            "(D) '正直' 意味着诚实并具有强烈道德原则的品质。"
    },
    {
        id: 7,
    question: "The __________ of rainfall this year has caused a drought in the region.",
    chinese_question: "今年的 __________ 降雨导致了该地区的干旱。",
    answers: [
        { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "B", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
        { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lack' means the state of being without or not having enough of something." +
        "<br><br>" +
        "(A) 'abundance' means a very large quantity of something." +
        "<br><br>" +
        "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
        "<br><br>" +
        "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
    chinese_explanation: "(B) '缺乏' 意味着没有或不足够某物的状态。" +
        "<br><br>" +
        "(A) '丰富' 意味着大量的某物。" +
        "<br><br>" +
        "(C) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
        "<br><br>" +
        "(D) '过量' 意味着超过必要、允许或理想的数量。"
    },
    {
        id: 8,
    question: "Being able to attend the international conference was a __________ that not everyone could enjoy.",
    chinese_question: "能够参加国际会议是并非每个人都能享受的 __________ 。",
    answers: [
        { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
        { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "C", answer: "requirement", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "D", answer: "task", chinese_answer: "任务", chinese_romanization: "rènwù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." +
        "<br><br>" +
        "(B) 'burden' means a load, typically a heavy one." +
        "<br><br>" +
        "(C) 'requirement' means a thing that is needed or wanted." +
        "<br><br>" +
        "(D) 'task' means a piece of work to be done or undertaken.",
    chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" +
        "<br><br>" +
        "(B) '负担' 意味着通常是沉重的负荷。" +
        "<br><br>" +
        "(C) '要求' 意味着需要或想要的东西。" +
        "<br><br>" +
        "(D) '任务' 意味着要完成或承担的工作。"
    },
    {
        id: 9,
        question: "The __________ of winter brought heavy snowfall and freezing temperatures to the region.",
        chinese_question: "冬季的 __________ 给该地区带来了大雪和冰冻的气温。",
        answers: [
            { option: "A", answer: "onset", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "conclusion", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'onset' means the beginning or start of something, especially something unpleasant." +
            "<br><br>" +
            "(B) 'conclusion' means the end or finish of an event, process, or text." +
            "<br><br>" +
            "(C) 'peak' means the highest point, either of a physical object or a situation." +
            "<br><br>" +
            "(D) 'delay' means the action of delaying or being delayed.",
        chinese_explanation: "(A) '开始' 意味着某事的开始，尤其是某些不愉快的事情的开始。" +
            "<br><br>" +
            "(B) '结束' 意味着事件、过程或文本的结束或完成。" +
            "<br><br>" +
            "(C) '顶峰' 意味着物理对象或情况的最高点。" +
            "<br><br>" +
            "(D) '延迟' 意味着延迟或被延迟的行动。"
    },
    {
        id: 10,
        question: "The family gathering was filled with __________ as relatives clashed over how to divide the inheritance.",
        chinese_question: "家庭聚会充满了 __________，因为亲戚们在如何分配遗产的问题上发生了冲突。",
        answers: [
            { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
            { option: "B", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "C", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discord' means disagreement between people." +
            "<br><br>" +
            "(B) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(C) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'consensus' means general agreement.",
        chinese_explanation: "(A) '不和' 意味着人们之间的意见不一致。" +
            "<br><br>" +
            "(B) '和平' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过参加愉快的社交活动来纪念一个重要事件或场合的行为。" +
            "<br><br>" +
            "(D) '共识' 意味着普遍的意见一致。"
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
