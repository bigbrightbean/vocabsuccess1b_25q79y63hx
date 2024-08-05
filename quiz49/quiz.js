// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ dream is to become a renowned artist.",
        chinese_question: "她的__________梦想是成为一名著名艺术家。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'fleeting' means lasting for a very short time.",
        chinese_explanation: "(B) '最终的'一词意味着在一个过程结束时或发生的；最终的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '次要的' 意味着在重要性、严重性或重要性上较小的。" +
            "<br><br>" +
            "(D) '短暂的' 意味着持续时间非常短的。"
    },
    {
        id: 2,
        question: "She was very __________, always finding ways to save money without compromising on quality.",
        chinese_question: "她非常 __________，总是找到节省钱的方法而不影响质量。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(B) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(C) '节俭的' 意味着谨慎使用金钱和其他资源，不浪费的。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着在花钱或使用资源上缺乏节制的。" +
            "<br><br>" +
            "(B) '浪费的' 意味着不小心、奢侈或无目的地使用或消耗有价值的东西。" +
            "<br><br>" +
            "(D) '奢华的' 意味着富丽堂皇、豪华或奢侈的。"
    },
    {
        id: 3,
        question: "His __________ attitude towards teamwork made it difficult for the group to complete the project successfully.",
        chinese_question: "他对团队合作的 __________ 态度使小组难以成功完成项目。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(C) '有问题的' 意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '合作的' 意味着在实现共同目标方面相互帮助的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(D) '和谐的' 意味着形成一个愉快或一致的整体的。"
    },
    {
        id: 4,
        question: "After winning the debate, he wore a __________ expression, clearly pleased with himself and not hiding his satisfaction.",
        chinese_question: "在赢得辩论之后，他露出了一副 __________ 的表情，显然对自己感到满意，毫不掩饰他的满足。",
        answers: [
            { option: "A", answer: "smug", chinese_answer: "洋洋得意的", chinese_romanization: "yángyáng déyì de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "embarrassed", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'smug' means having or showing an excessive pride in oneself or one's achievements." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'embarrassed' means feeling or showing embarrassment.",
        chinese_explanation: "(A) '洋洋得意的' 意味着对自己或自己的成就表现出过度的自豪。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己的重要性表现出谦虚或低估。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就表现出不自以为是或适度的。" +
            "<br><br>" +
            "(D) '尴尬的' 意味着感到或表现出尴尬。"
    },
    {
        id: 5,
        question: "The artist's latest exhibition received __________ reviews from critics, who praised its originality and creativity.",
        chinese_question: "这位艺术家的最新展览得到了评论家的 __________ 评论，他们称赞其原创性和创造力。",
        answers: [
            { option: "A", answer: "scathing", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" },
            { option: "B", answer: "glowing", chinese_answer: "热烈的", chinese_romanization: "rèliè de" },
            { option: "C", answer: "tepid", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "D", answer: "dismissive", chinese_answer: "轻蔑的", chinese_romanization: "qīngmiè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glowing' means highly positive or enthusiastic." +
            "<br><br>" +
            "(A) 'scathing' means severely critical." +
            "<br><br>" +
            "(C) 'tepid' means lukewarm or showing little enthusiasm." +
            "<br><br>" +
            "(D) 'dismissive' means showing that something is unworthy of consideration.",
        chinese_explanation: "(B) '热烈的' 意味着高度积极或热情的。" +
            "<br><br>" +
            "(A) '尖刻的' 意味着严厉批评的。" +
            "<br><br>" +
            "(C) '冷淡的' 意味着不冷不热的或缺乏热情的。" +
            "<br><br>" +
            "(D) '轻蔑的' 意味着认为某事不值得考虑的。"
    },
    {
        id: 6,
        question: "Her __________ personality, always engaging with others and guiding conversations effortlessly, made her a natural leader in social settings.",
        chinese_question: "她 __________ 的性格，总是与他人互动并轻松引导对话，使她在社交场合中自然成为领导者。",
        answers: [
            { option: "A", answer: "introverted", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
            { option: "B", answer: "extroverted", chinese_answer: "外向", chinese_romanization: "wàixiàng" },
            { option: "C", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extroverted' means outgoing, socially confident, and energetic." +
            "<br><br>" +
            "(A) 'introverted' means shy, reserved, and focused inward." +
            "<br><br>" +
            "(C) 'timid' means showing a lack of courage or confidence." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(B) '外向' 意味着外向、社交自信和精力充沛。" +
            "<br><br>" +
            "(A) '内向' 意味着害羞、矜持和内向。" +
            "<br><br>" +
            "(C) '胆小' 意味着缺乏勇气或信心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事，而没有积极回应或反抗。"
    },
    {
        id: 7,
        question: "The __________ river current made it difficult for the swimmers to reach the shore.",
        chinese_question: "快速的河流使游泳者很难到达岸边。",
        answers: [
            { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
            { option: "D", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'swift' means moving very fast." +
            "<br><br>" +
            "(A) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(B) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(C) '快速的' 意味着移动非常快。" +
            "<br><br>" +
            "(A) '温和的' 意味着具有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着移动或操作或设计为只能以低速移动；不快或快。" +
            "<br><br>" +
            "(D) '稳定的' 意味着牢固地固定、支持或平衡；不摇晃或移动。"
    },
    {
        id: 8,
        question: "His __________ sense of humor often left people unsure whether to laugh or be offended.",
        chinese_question: "他的__________幽默感经常让人们不确定是该笑还是该生气。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "wry", chinese_answer: "挖苦的", chinese_romanization: "wākǔ de" },
            { option: "C", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "D", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wry' means using or expressing dry, especially mocking, humor." +
            "<br><br>" +
            "(A) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(B) '挖苦的'一词意味着使用或表达干涩的，尤其是嘲讽的幽默。" +
            "<br><br>" +
            "(A) '严肃的' 意味着性格或举止庄重或深思的。" +
            "<br><br>" +
            "(C) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '直接的' 意味着简单易行或易于理解的。"
    },
    {
        id: 9,
        question: "The scientist received an award for her __________ contributions to medical research.",
        chinese_question: "这位科学家因其对医学研究的 __________ 贡献而获奖。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "D", answer: "outstanding", chinese_answer: "杰出", chinese_romanization: "jiéchū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'outstanding' means exceptionally good or impressive." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(D) '杰出' 意味着特别好或令人印象深刻。" +
            "<br><br>" +
            "(A) '微不足道' 意味着太小或不重要而不值得考虑。" +
            "<br><br>" +
            "(B) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '次要' 意味着重要性、严重性或意义较小。"
    },
    {
        id: 10,
    question: "The __________ inventor was known for his unusual gadgets and unconventional ideas.",
    chinese_question: "那位 __________ 的发明家以他不寻常的小工具和非传统的想法而闻名。",
    answers: [
        { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "B", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
        { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "D", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
        "<br><br>" +
        "(A) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(B) 'average' means typical or normal." +
        "<br><br>" +
        "(C) 'typical' means having the distinctive qualities of a particular type of person or thing.",
    chinese_explanation: "(D) '古怪的' 意味着（一个人或他们的行为）不寻常和略微奇怪的。" +
        "<br><br>" +
        "(A) '普通的' 意味着没有特别或独特特征的；正常的。" +
        "<br><br>" +
        "(B) '平均的' 意味着典型的或正常的。" +
        "<br><br>" +
        "(C) '典型的' 意味着具有某种类型的人或事物的独特特征的。"
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
