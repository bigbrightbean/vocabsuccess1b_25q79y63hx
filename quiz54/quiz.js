// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The factory was shut down because it failed to achieve __________ with the safety regulations.",
        chinese_question: "工厂被关闭是因为未能达到安全法规的 __________。",
        answers: [
            { option: "A", answer: "defiance", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "indifference", chinese_answer: "漠视", chinese_romanization: "mòshì" },
            { option: "D", answer: "compliance", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compliance' means adherence to rules or standards." +
            "<br><br>" +
            "(A) 'defiance' means open resistance." +
            "<br><br>" +
            "(B) 'negligence' means failure to take proper care." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest or concern.",
        chinese_explanation: "(D) '遵守' 意味着遵循规则或标准。" +
            "<br><br>" +
            "(A) '违抗' 意味着公开抵抗。" +
            "<br><br>" +
            "(B) '疏忽' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(C) '漠视' 意味着缺乏兴趣或关心。"
    },
    {
        id: 2,
    question: "The professor compiled a __________ of the most influential research papers, including summaries, analyses, and historical contexts.",
    chinese_question: "教授编写了一本 __________ ，收录了最具影响力的研究论文，包括摘要、分析和历史背景。",
    answers: [
        { option: "A", answer: "fragment", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
        { option: "B", answer: "excerpt", chinese_answer: "摘录", chinese_romanization: "zhāilù" },
        { option: "C", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
        { option: "D", answer: "compendium", chinese_answer: "汇编", chinese_romanization: "huìbiān" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'compendium' means a collection of concise but detailed information about a particular subject, often in the form of a book." +
        "<br><br>" +
        "(A) 'fragment' means a small part broken off or detached." +
        "<br><br>" +
        "(B) 'excerpt' means a short extract from a film, broadcast, or piece of music or writing." +
        "<br><br>" +
        "(C) 'portion' means a part of a whole.",
    chinese_explanation: "(D) '汇编' 是指有关特定主题的简明但详细的信息集合，通常以书籍的形式存在。" +
        "<br><br>" +
        "(A) '碎片' 是指破碎或分离的小部分。" +
        "<br><br>" +
        "(B) '摘录' 是指电影、广播或音乐或文字作品的简短摘录。" +
        "<br><br>" +
        "(C) '部分' 是指整体的一部分。"
    },
    {
        id: 3,
    question: "Despite the negative __________, she continued to work diligently on her project.",
    chinese_question: "尽管有负面的 __________ ，她继续勤奋地工作在她的项目上。",
    answers: [
        { option: "A", answer: "remarks", chinese_answer: "评论", chinese_romanization: "pínglùn" },
        { option: "B", answer: "praises", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "accolades", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
        { option: "D", answer: "approvals", chinese_answer: "批准", chinese_romanization: "pīzhǔn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remarks' means spoken statements or comments." +
        "<br><br>" +
        "(B) 'praises' means the expression of approval or admiration for someone or something." +
        "<br><br>" +
        "(C) 'accolades' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
        "<br><br>" +
        "(D) 'approvals' means the belief that something or someone is good or acceptable.",
    chinese_explanation: "(A) '评论' 意味着口头的陈述或评论。" +
        "<br><br>" +
        "(B) '赞美' 意味着对某人或某物表示赞同或钦佩。" +
        "<br><br>" +
        "(C) '荣誉' 意味着作为特别荣誉或作为优点的承认授予的奖励或特权。" +
        "<br><br>" +
        "(D) '批准' 意味着相信某事或某人是好的或可以接受的。"
    },
    {
        id: 4,
        question: "The soldiers faced extreme __________ in the harsh conditions of the battlefield.",
        chinese_question: "士兵们在战场的恶劣条件下面临极端的 __________ 。",
        answers: [
            { option: "A", answer: "luxury", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
            { option: "B", answer: "safety", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "C", answer: "ease", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
            { option: "D", answer: "hardship", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hardship' means severe suffering or privation." +
            "<br><br>" +
            "(A) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
            "<br><br>" +
            "(B) 'safety' means the condition of being protected from or unlikely to cause danger, risk, or injury." +
            "<br><br>" +
            "(C) 'ease' means absence of difficulty or effort.",
        chinese_explanation: "(D) '困苦' 意味着严重的痛苦或贫困。" +
            "<br><br>" +
            "(A) '奢华' 意味着极度舒适或优雅的状态，尤其是涉及高昂费用时。" +
            "<br><br>" +
            "(B) '安全' 意味着被保护免受或不太可能造成危险、风险或伤害的状态。" +
            "<br><br>" +
            "(C) '轻松' 意味着没有困难或努力。"
    },
    {
        id: 5,
    question: "The documentary had a profound __________ on viewers, raising awareness about environmental issues.",
    chinese_question: "这部纪录片对观众产生了深远的 __________ ，提高了对环境问题的认识。",
    answers: [
        { option: "A", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "C", answer: "entertainment", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
        { option: "D", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impact' means the strong effect or influence that something has on a situation or person." +
        "<br><br>" +
        "(B) 'confusion' means lack of understanding; uncertainty." +
        "<br><br>" +
        "(C) 'entertainment' means the action of providing or being provided with amusement or enjoyment." +
        "<br><br>" +
        "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
    chinese_explanation: "(A) '影响' 意味着某物对情况或人的强烈效果或影响。" +
        "<br><br>" +
        "(B) '困惑' 意味着缺乏理解；不确定。" +
        "<br><br>" +
        "(C) '娱乐' 意味着提供或被提供娱乐或享受的行动。" +
        "<br><br>" +
        "(D) '分心' 意味着阻止某人全神贯注于某事的事物。"
    },
    {
        id: 6,
        question: "The __________ of the bees was a soothing background noise in the garden.",
        chinese_question: "蜜蜂的 __________ 声是花园里令人舒缓的背景音。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "drone", chinese_answer: "嗡嗡声", chinese_romanization: "wēngwēng shēng" },
            { option: "C", answer: "laughter", chinese_answer: "笑声", chinese_romanization: "xiàoshēng" },
            { option: "D", answer: "shout", chinese_answer: "喊叫", chinese_romanization: "hǎnjiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'drone' means a continuous low humming sound." +
            "<br><br>" +
            "(A) 'silence' means the absence of sound." +
            "<br><br>" +
            "(C) 'laughter' means the action or sound of laughing." +
            "<br><br>" +
            "(D) 'shout' means to utter a loud call or cry.",
        chinese_explanation: "(B) “嗡嗡声” 意味着持续的低沉嗡嗡声。" +
            "<br><br>" +
            "(A) '安静' 意味着没有声音。" +
            "<br><br>" +
            "(C) '笑声' 意味着笑的动作或声音。" +
            "<br><br>" +
            "(D) '喊叫' 意味着发出大声的呼喊或叫声。"
    },
    {
        id: 7,
        question: "After hours of hiking, the travelers enjoyed a peaceful __________ at the mountain's summit, taking in the breathtaking views.",
        chinese_question: "经过几个小时的徒步旅行，旅行者们在山顶享受了一个平静的 __________，欣赏着令人叹为观止的景色。",
        answers: [
            { option: "A", answer: "respite", chinese_answer: "喘息", chinese_romanization: "chuǎnxī" },
            { option: "B", answer: "interlude", chinese_answer: "间奏", chinese_romanization: "jiānzòu" },
            { option: "C", answer: "struggle", chinese_answer: "奋斗", chinese_romanization: "fèndòu" },
            { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'interlude' means a break or pause between two periods of activity." +
            "<br><br>" +
            "(A) 'respite' means a short period of rest or relief from something difficult or unpleasant." +
            "<br><br>" +
            "(C) 'struggle' means a forceful or violent effort to get free of restraint or resist attack." +
            "<br><br>" +
            "(D) 'challenge' means a task or situation that tests someone's abilities.",
        chinese_explanation: "(B) '间奏'一词意味着两段活动之间的休息或暂停。" +
            "<br><br>" +
            "(A) '喘息' 意味着从困难或不愉快的事情中得到的短暂休息。" +
            "<br><br>" +
            "(C) '奋斗' 意味着摆脱束缚或抵抗攻击的强力努力。" +
            "<br><br>" +
            "(D) '挑战' 意味着测试某人能力的任务或情况。"
    },
    {
        id: 8,
        question: "Following the environmental disaster, there was an international __________ on seafood from the affected region.",
        chinese_question: "在环境灾难发生后，受影响地区的海产品遭到了国际 __________。",
        answers: [
            { option: "A", answer: "embargo", chinese_answer: "禁运", chinese_romanization: "jìnyùn" },
            { option: "B", answer: "exemption", chinese_answer: "豁免", chinese_romanization: "huòmiǎn" },
            { option: "C", answer: "expansion", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "D", answer: "expedition", chinese_answer: "远征", chinese_romanization: "yuǎnzhēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'embargo' means an official ban on trade or other commercial activity with a particular country." +
            "<br><br>" +
            "(B) 'exemption' means the process of freeing or state of being free from an obligation or liability imposed on others." +
            "<br><br>" +
            "(C) 'expansion' means the action of becoming larger or more extensive." +
            "<br><br>" +
            "(D) 'expedition' means a journey undertaken by a group of people with a particular purpose.",
        chinese_explanation: "(A) '禁运' 意味着对与特定国家进行贸易或其他商业活动的官方禁令。" +
            "<br><br>" +
            "(B) '豁免' 意味着使免除他人所承担的义务或责任的过程或状态。" +
            "<br><br>" +
            "(C) '扩展' 意味着变大或更广泛的行动。" +
            "<br><br>" +
            "(D) '远征' 意味着一群人为特定目的进行的旅行。"
    },
    {
        id: 9,
        question: "The negotiations reached an __________ when neither side could agree on the terms.",
        chinese_question: "谈判陷入了 __________，因为双方无法就条款达成一致。",
        answers: [
            { option: "A", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "B", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
            { option: "C", answer: "impasse", chinese_answer: "僵局", chinese_romanization: "jiāngjú" },
            { option: "D", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impasse' means a situation in which no progress is possible, especially because of disagreement." +
            "<br><br>" +
            "(A) 'agreement' means a negotiated and typically legally binding arrangement between parties." +
            "<br><br>" +
            "(B) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
            "<br><br>" +
            "(D) 'consensus' means general agreement.",
        chinese_explanation: "(C) '僵局'一词意味着由于分歧而无法取得进展的情况。" +
            "<br><br>" +
            "(A) '协议' 意味着各方之间协商并通常具有法律约束力的安排。" +
            "<br><br>" +
            "(B) '突破' 意味着突然、戏剧性和重要的发现或发展。" +
            "<br><br>" +
            "(D) '共识' 意味着普遍的同意。"
    },
    {
        id: 10,
    question: "Her __________ in negotiating the deal ensured that both parties were satisfied with the outcome.",
    chinese_question: "她在谈判交易中的 __________ 确保了双方都对结果感到满意。",
    answers: [
        { option: "A", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
        { option: "B", answer: "ineptitude", chinese_answer: "无能", chinese_romanization: "wúnéng" },
        { option: "C", answer: "finesse", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
        { option: "D", answer: "insouciance", chinese_answer: "漫不经心", chinese_romanization: "mànbùjīngxīn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'finesse' means intricate and refined delicacy; skillful handling of a situation." +
        "<br><br>" +
        "(A) 'clumsiness' means lacking skill or grace." +
        "<br><br>" +
        "(B) 'ineptitude' means lack of skill or ability." +
        "<br><br>" +
        "(D) 'insouciance' means casual lack of concern; indifference.",
    chinese_explanation: "(C) '技巧'一词意味着复杂而精细的技巧；巧妙处理情况。" +
        "<br><br>" +
        "(A) '笨拙' 意味着缺乏技巧或优雅。" +
        "<br><br>" +
        "(B) '无能' 意味着缺乏技能或能力。" +
        "<br><br>" +
        "(D) '漫不经心' 意味着漫不经心的态度；漠不关心。"
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
