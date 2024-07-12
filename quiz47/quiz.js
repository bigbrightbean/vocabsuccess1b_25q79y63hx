// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The view from the mountaintop was absolutely __________, leaving everyone speechless with its breathtaking beauty.",
        chinese_question: "山顶的景色真是 __________，以其令人叹为观止的美景让所有人都说不出话来。",
        answers: [
            { option: "A", answer: "stunning", chinese_answer: "令人惊叹的", chinese_romanization: "lìng rén jīngtàn de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "unimpressive", chinese_answer: "不令人印象深刻的", chinese_romanization: "bù lìng rén yìnxiàng shēnkè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stunning' means extremely impressive or attractive." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'unimpressive' means not particularly special, interesting, or remarkable.",
        chinese_explanation: "(A) '令人惊叹的' 意味着极其令人印象深刻或吸引人的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '乏味的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '不令人印象深刻的' 意味着没有特别之处、有趣或显著的。"
    },
    {
        id: 2,
    question: "Her __________ skills allowed her to learn new languages quickly and easily.",
    chinese_question: "她的__________技能使她能够快速轻松地学习新语言。",
    answers: [
        { option: "A", answer: "mathematical", chinese_answer: "数学的", chinese_romanization: "shùxué de" },
        { option: "B", answer: "linguistic", chinese_answer: "语言的", chinese_romanization: "yǔyán de" },
        { option: "C", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" },
        { option: "D", answer: "artistic", chinese_answer: "艺术的", chinese_romanization: "yìshù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'linguistic' means relating to language or linguistics." +
        "<br><br>" +
        "(A) 'mathematical' means relating to mathematics." +
        "<br><br>" +
        "(C) 'scientific' means based on or characterized by the methods and principles of science." +
        "<br><br>" +
        "(D) 'artistic' means having or revealing natural creative skill.",
    chinese_explanation: "(B) '语言的' 一词意味着与语言或语言学有关。" +
        "<br><br>" +
        "(A) '数学的' 意味着与数学有关。" +
        "<br><br>" +
        "(C) '科学的' 意味着基于或以科学的方法和原则为特征。" +
        "<br><br>" +
        "(D) '艺术的' 意味着具有或揭示自然创造技能。"
    },
    {
        id: 3,
        question: "His __________ actions during the crisis earned him a medal of honour.",
        chinese_question: "他在危机中的 __________ 行动为他赢得了一枚荣誉勋章。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "C", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heroic' means showing great bravery." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(C) 'selfish' means lacking consideration for others." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '英勇的' 意味着表现出极大的勇敢。" +
            "<br><br>" +
            "(A) '胆小的' 意味着缺乏勇气。" +
            "<br><br>" +
            "(C) '自私的' 意味着缺乏对他人的考虑。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 4,
        question: "His __________ grip on the steering wheel showed he was tired from the long drive.",
        chinese_question: "他在方向盘上的 __________ 握力显示出他因长时间驾驶而疲劳。",
        answers: [
            { option: "A", answer: "firm", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "C", answer: "limp", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limp' means lacking strength or energy; weak." +
            "<br><br>" +
            "(A) 'firm' means having a solid, almost unyielding surface or structure." +
            "<br><br>" +
            "(B) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(D) 'energetic' means showing or involving great activity or vitality.",
        chinese_explanation: "(C) '无力的' 意味着缺乏力量或能量；虚弱的。" +
            "<br><br>" +
            "(A) '坚定的' 意味着具有坚固、几乎不屈服的表面或结构。" +
            "<br><br>" +
            "(B) '强壮的' 意味着有能力移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(D) '充满活力的' 意味着显示或涉及很大的活动或活力。"
    },
    {
        id: 5,
    question: "The __________ elephant moved slowly through the dense jungle, its massive body making each step deliberate and heavy.",
    chinese_question: "那头 __________ 的大象缓慢地穿过茂密的丛林，它庞大的身体使每一步都显得沉重。",
    answers: [
        { option: "A", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
        { option: "B", answer: "light", chinese_answer: "轻盈的", chinese_romanization: "qīngyíng de" },
        { option: "C", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" },
        { option: "D", answer: "ponderous", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'ponderous' means slow and clumsy because of great weight." +
        "<br><br>" +
        "(A) 'graceful' means having or showing grace or elegance." +
        "<br><br>" +
        "(B) 'light' means of little weight; not heavy." +
        "<br><br>" +
        "(C) 'agile' means able to move quickly and easily.",
    chinese_explanation: "(D) '笨重的' 意味着因体重大而缓慢和笨拙。" +
        "<br><br>" +
        "(A) '优雅的' 意味着表现出优雅或优美。" +
        "<br><br>" +
        "(B) '轻盈的' 意味着重量轻；不重。" +
        "<br><br>" +
        "(C) '敏捷的' 意味着能够快速和轻松地移动。"
    },
    {
        id: 6,
        question: "His __________ personality often overshadowed the contributions of his quieter colleagues.",
        chinese_question: "他 __________ 的个性常常掩盖了他那些较安静同事的贡献。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "B", answer: "dominant", chinese_answer: "主导", chinese_romanization: "zhǔdǎo" },
            { option: "C", answer: "meek", chinese_answer: "温顺", chinese_romanization: "wēnshùn" },
            { option: "D", answer: "reserved", chinese_answer: "内向", chinese_romanization: "nèixiàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dominant' means commanding, controlling, or prevailing over others." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens without active response." +
            "<br><br>" +
            "(C) 'meek' means quiet, gentle, and easily imposed on." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '主导' 意味着指挥、控制或压倒他人。" +
            "<br><br>" +
            "(A) '被动' 意味着接受或允许发生的事情而没有积极的回应。" +
            "<br><br>" +
            "(C) '温顺' 意味着安静、温柔、容易被强加。" +
            "<br><br>" +
            "(D) '内向' 意味着慢于透露情感或意见。"
    },
    {
        id: 7,
        question: "The chef prepared a __________ dish with a perfect blend of spices, creating a rich and satisfying flavor that delighted all the guests.",
        chinese_question: "厨师准备了一道 __________ 的菜，完美地混合了各种香料，创造出一种浓郁而令人满足的味道，让所有客人都感到高兴。",
        answers: [
            { option: "A", answer: "savoury", chinese_answer: "咸味的", chinese_romanization: "xiánwèi de" },
            { option: "B", answer: "sweet", chinese_answer: "甜的", chinese_romanization: "tián de" },
            { option: "C", answer: "bland", chinese_answer: "清淡的", chinese_romanization: "qīngdàn de" },
            { option: "D", answer: "sour", chinese_answer: "酸的", chinese_romanization: "suān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'savoury' means (of food) belonging to the category that is salty or spicy rather than sweet." +
            "<br><br>" +
            "(B) 'sweet' means having the pleasant taste characteristic of sugar or honey." +
            "<br><br>" +
            "(C) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'sour' means having an acid taste like lemon or vinegar.",
        chinese_explanation: "(A) '咸味的' 意味着（食物）属于咸或辣而不是甜的类别。" +
            "<br><br>" +
            "(B) '甜的' 意味着具有糖或蜂蜜特有的愉快味道。" +
            "<br><br>" +
            "(C) '清淡的' 意味着缺乏强烈特征或特点，因此无趣的。" +
            "<br><br>" +
            "(D) '酸的' 意味着具有像柠檬或醋一样的酸味。"
    },
    {
        id: 8,
        question: "After losing the game, he sat in the corner with a __________ expression, refusing to talk to anyone.",
        chinese_question: "比赛输了后，他带着 __________ 的表情坐在角落里，拒绝和任何人说话。",
        answers: [
            { option: "A", answer: "gleeful", chinese_answer: "欢快的", chinese_romanization: "huānkuài de" },
            { option: "B", answer: "pleased", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "C", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" },
            { option: "D", answer: "sulky", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmèn bù lè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sulky' means morose, bad-tempered, and resentful; refusing to be cooperative or cheerful." +
            "<br><br>" +
            "(A) 'gleeful' means exuberantly or triumphantly joyful." +
            "<br><br>" +
            "(B) 'pleased' means feeling or showing pleasure and satisfaction." +
            "<br><br>" +
            "(C) 'jubilant' means feeling or expressing great happiness and triumph.",
        chinese_explanation: "(D) '闷闷不乐的' 意味着忧郁的、脾气暴躁的和愤恨的；拒绝合作或愉快的。" +
            "<br><br>" +
            "(A) '欢快的' 意味着充满欢喜或胜利的快乐。" +
            "<br><br>" +
            "(B) '满意的' 意味着感到或表现出愉悦和满意。" +
            "<br><br>" +
            "(C) '欢腾的' 意味着感到或表达极大的幸福和胜利。"
    },
    {
        id: 9,
        question: "The passing of the torch during the ceremony is __________ of the continuity of the Olympic spirit.",
        chinese_question: "仪式上火炬的传递是奥林匹克精神延续的 __________ 象征。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "symbolic", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'symbolic' means serving as a symbol." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(B) 'unimportant' means lacking in importance or significance." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '象征性的' 意味着作为象征的。" +
            "<br><br>" +
            "(A) '字面的' 意味着以其通常或最基本的意义理解词语，没有隐喻或寓言的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着缺乏重要性或意义的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 10,
        question: "Her __________ business acumen helped the company increase its profits significantly.",
        chinese_question: "她那__________的商业头脑帮助公司显著增加了利润。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
            { option: "B", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "C", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "D", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'shrewd' means having or showing sharp powers of judgment; astute." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'gullible' means easily persuaded to believe something; credulous.",
        chinese_explanation: "(C) '精明的'一词意味着具有或表现出敏锐的判断力；精明的。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好的判断力或判断；不明智的。" +
            "<br><br>" +
            "(B) '天真的' 意味着表现出缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(D) '轻信的' 意味着容易被说服相信某事的；轻信的。"
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
