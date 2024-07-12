// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In her first __________ to bake a cake, she forgot to add sugar.",
        chinese_question: "在她第一次 __________ 烤蛋糕时，她忘记加糖了。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "victory", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" },
            { option: "D", answer: "attempt", chinese_answer: "尝试", chinese_romanization: "chángshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'attempt' means an effort to achieve or complete a difficult task or action." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'victory' means an act of defeating an enemy or opponent in a battle, game, or other competition." +
            "<br><br>" +
            "(C) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
        chinese_explanation: "(D) '尝试' 意味着努力完成一项困难的任务或行动。" +
            "<br><br>" +
            "(A) '成功' 意味着实现目标或目的。" +
            "<br><br>" +
            "(B) '胜利' 意味着在战斗、比赛或其他竞争中击败敌人或对手的行为。" +
            "<br><br>" +
            "(C) '成就' 意味着通过努力、勇气或技巧成功完成的事情。"
    },
    {
        id: 2,
        question: "The new tax law was seen as an unfair __________ on the working class, who were already struggling to make ends meet.",
        chinese_question: "新税法被认为是对工人阶级的不公平 __________，他们已经在努力维持生计。",
        answers: [
            { option: "A", answer: "relief", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "imposition", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
            { option: "C", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imposition' means the action or process of imposing something, especially a burden or obligation." +
            "<br><br>" +
            "(A) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'reward' means a thing given in recognition of one's service, effort, or achievement.",
        chinese_explanation: "(B) '强加'一词意味着施加某物的行动或过程，尤其是负担或义务。" +
            "<br><br>" +
            "(A) '缓解' 意味着在焦虑或痛苦得到缓解后的安心和放松。" +
            "<br><br>" +
            "(C) '利益' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(D) '奖励' 意味着为表彰某人的服务、努力或成就而给予的事物。"
    },
    {
        id: 3,
        question: "Without solid evidence, the detective’s theory remained a __________, one that needed more facts to be proven.",
        chinese_question: "没有确凿的证据，这位侦探的理论仍然只是一个 __________，需要更多的事实来证明。",
        answers: [
            { option: "A", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
            { option: "C", answer: "conjecture", chinese_answer: "推测", chinese_romanization: "tuīcè" },
            { option: "D", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conjecture' means an opinion or conclusion formed on the basis of incomplete information." +
            "<br><br>" +
            "(A) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(B) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(D) 'reality' means the state of things as they actually exist.",
        chinese_explanation: "(C) '推测'一词意味着在不完全信息的基础上形成的意见或结论。" +
            "<br><br>" +
            "(A)'事实' 意味着已知或被证明是真实的事情。" +
            "<br><br>" +
            "(B)'确定性' 意味着对某事是事实的坚定信念。" +
            "<br><br>" +
            "(D)'现实' 意味着事物的实际存在状态。"
    },
    {
        id: 4,
        question: "The orchestra paused for a brief __________ before continuing with the next movement.",
        chinese_question: "乐队在继续下一个乐章之前暂停了一个简短的 __________。",
        answers: [
            { option: "A", answer: "interlude", chinese_answer: "间奏", chinese_romanization: "jiānzòu" },
            { option: "B", answer: "finale", chinese_answer: "终曲", chinese_romanization: "zhōngqǔ" },
            { option: "C", answer: "overture", chinese_answer: "序曲", chinese_romanization: "xùqǔ" },
            { option: "D", answer: "refrain", chinese_answer: "副歌", chinese_romanization: "fùgē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interlude' means a short period of time between parts of a play, concert, or other performance." +
            "<br><br>" +
            "(B) 'finale' means the last part of a piece of music, a performance, or a public event." +
            "<br><br>" +
            "(C) 'overture' means an orchestral piece at the beginning of an opera, play, etc." +
            "<br><br>" +
            "(D) 'refrain' means a repeated line or number of lines in a poem or song.",
        chinese_explanation: "(A) '间奏'一词意味着戏剧、音乐会或其他表演部分之间的短暂时间。" +
            "<br><br>" +
            "(B) '终曲' 意味着一首音乐、表演或公共事件的最后部分。" +
            "<br><br>" +
            "(C) '序曲' 意味着歌剧、戏剧等开始时的管弦乐曲。" +
            "<br><br>" +
            "(D) '副歌' 意味着诗歌或歌曲中重复的一行或多行。"
    },
    {
        id: 5,
        question: "During the debate, she presented a strong __________ that effectively challenged her opponent’s points.",
        chinese_question: "在辩论中，她提出了有力的 __________ 有效地挑战了对手的观点。",
        answers: [
            { option: "A", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "B", answer: "counterargument", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "concession", chinese_answer: "让步", chinese_romanization: "ràngbù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'counterargument' means an argument or set of reasons put forward to oppose an idea or theory developed in another argument." +
            "<br><br>" +
            "(A) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'concession' means a thing that is granted, especially in response to demands.",
        chinese_explanation: "(B) '反驳'一词意味着为反对在另一争论中提出的观点或理论而提出的论点或理由。" +
            "<br><br>" +
            "(A) '同意' 意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '让步' 意味着特别是在回应要求时授予的东西。"
    },
    {
        id: 6,
        question: "The team appreciated his __________ of sending out inspirational quotes every Monday, as it set a positive tone for the week.",
        chinese_question: "团队很欣赏他每周一发送励志名言的 __________，因为这为一周定下了积极的基调。",
        answers: [
            { option: "A", answer: "quirk", chinese_answer: "怪癖", chinese_romanization: "guàipǐ" },
            { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "oversight", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quirk' figuratively means a peculiar behavioral habit." +
            "<br><br>" +
            "(B) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(C) 'oversight' means an unintentional failure to notice or do something." +
            "<br><br>" +
            "(D) 'complaint' means a statement that something is unsatisfactory or unacceptable.",
        chinese_explanation: "(A) '怪癖' 在此语境下意指一种奇特的行为习惯。" +
            "<br><br>" +
            "(B) '错误' 意味着一种误导或错误的行动或判断。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能注意到或做某事的无意之失。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事不满意或不可接受的陈述。"
    },
    {
        id: 7,
        question: "The marketplace was a __________ of sounds, smells, and sights, making it a feast for the senses.",
        chinese_question: "市场是一个充满声音、气味和景象的 __________，让人感官得到极大的享受。",
        answers: [
            { option: "A", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "kaleidoscope", chinese_answer: "万花筒", chinese_romanization: "wànhuātǒng" },
            { option: "C", answer: "mixture", chinese_answer: "混合物", chinese_romanization: "hùnhéwù" },
            { option: "D", answer: "combination", chinese_answer: "组合", chinese_romanization: "zǔhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kaleidoscope' means a constantly changing pattern or sequence of elements." +
            "<br><br>" +
            "(A) 'confusion' means a lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'mixture' means a combination of different things in which the components are individually distinct." +
            "<br><br>" +
            "(D) 'combination' means a joining or merging of different parts or qualities.",
        chinese_explanation: "(B) '万花筒'一词意味着不断变化的元素或序列的图案。" +
            "<br><br>" +
            "(A) '混乱' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(C) '混合物' 意味着不同事物的组合，其中的成分是各自独立的。" +
            "<br><br>" +
            "(D) '组合' 意味着不同部分或品质的结合或合并。"
    },
    {
        id: 8,
        question: "The __________ of the report took several hours due to its detailed content.",
        chinese_question: "由于内容详细， __________ 报告花费了几个小时。",
        answers: [
            { option: "A", answer: "perusal", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
            { option: "B", answer: "summary", chinese_answer: "摘要", chinese_romanization: "zhāiyào" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perusal' means the action of reading or examining something thoroughly." +
            "<br><br>" +
            "(B) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(C) 'neglect' means failure to care for properly." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(A) '阅读'一词意味着彻底阅读或检查某事的行为。" +
            "<br><br>" +
            "(B) '摘要' 意味着对某事主要点的简要陈述或叙述。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许某人离开的行为。"
    },
    {
        id: 9,
        question: "After the betrayal, there was a deep __________ between the former partners.",
        chinese_question: "背叛之后，前伙伴之间有了深深的 __________。",
        answers: [
            { option: "A", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" },
            { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mistrust' means lack of trust or confidence." +
            "<br><br>" +
            "(A) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." +
            "<br><br>" +
            "(B) 'alliance' means a union or association formed for mutual benefit." +
            "<br><br>" +
            "(D) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(C) “不信任” 意味着缺乏信任或信心。" +
            "<br><br>" +
            "(A) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" +
            "<br><br>" +
            "(B) '联盟' 意味着为共同利益而形成的联合或协会。" +
            "<br><br>" +
            "(D) '合作' 意味着共同为同一个目标工作。"
    },
    {
        id: 10,
        question: "The belief that the Earth was the center of the universe was once a widely accepted __________.",
        chinese_question: "地球是宇宙中心的信念曾是广泛接受的 __________。",
        answers: [
            { option: "A", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "B", answer: "dogma", chinese_answer: "教条", chinese_romanization: "jiàotiáo" },
            { option: "C", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "assumption", chinese_answer: "假定", chinese_romanization: "jiǎdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dogma' means a principle or set of principles laid down by an authority as incontrovertibly true." +
            "<br><br>" +
            "(A) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(C) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(D) 'assumption' means a thing that is accepted as true or as certain to happen, without proof.",
        chinese_explanation: "(B) '教条' 意味着权威规定的不可辩驳的原则或原则集。" +
            "<br><br>" +
            "(A) '理论' 意味着一种假设或一套思想体系，意在解释某事物。" +
            "<br><br>" +
            "(C) '假设' 意味着在有限证据基础上提出的假设或解释，作为进一步调查的起点。" +
            "<br><br>" +
            "(D) '假定' 意味着一种被接受为真的或肯定会发生的事物，但没有证据。"
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
