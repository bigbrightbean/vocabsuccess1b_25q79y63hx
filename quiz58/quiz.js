// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The workers showed __________ during the strike, standing together to demand better wages and working conditions.",
        chinese_question: "工人在罢工期间表现出 __________，共同要求更高的工资和更好的工作条件。",
        answers: [
            { option: "A", answer: "solidarity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "B", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "C", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solidarity' means unity or agreement of feeling or action, especially among individuals with a common interest; mutual support within a group." +
            "<br><br>" +
            "(B) 'division' means the action of separating something into parts or the process of being separated." +
            "<br><br>" +
            "(C) 'discord' means disagreement between people." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(A) '团结' 意味着特别是具有共同利益的个人之间的感情或行动的一致性；群体内部的相互支持。" +
            "<br><br>" +
            "(B) '分裂' 意味着将某物分成部分的动作或被分开的过程。" +
            "<br><br>" +
            "(C) '不和' 意味着人们之间的分歧。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论，通常是持久的。"
    },
    {
        id: 2,
        question: "The __________ of traditional gender roles in the play provided a fresh perspective on the dynamics between men and women.",
        chinese_question: "戏剧中传统性别角色的 __________ 提供了一个关于男女关系动态的新视角。",
        answers: [
            { option: "A", answer: "reinforcement", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "B", answer: "inversion", chinese_answer: "颠倒", chinese_romanization: "diāndǎo" },
            { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "preservation", chinese_answer: "保留", chinese_romanization: "bǎoliú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inversion' means the action of inverting something or the state of being inverted, often referring to a reversal of normal order." +
            "<br><br>" +
            "(A) 'reinforcement' means the action or process of reinforcing or strengthening." +
            "<br><br>" +
            "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'preservation' means the action of preserving something.",
        chinese_explanation: "(B) '颠倒'一词意味着倒转某物的动作或状态，通常指正常顺序的颠倒。" +
            "<br><br>" +
            "(A) '加强' 意味着加强或强化的动作或过程。" +
            "<br><br>" +
            "(C) '拒绝' 意味着拒绝提议、想法等。" +
            "<br><br>" +
            "(D) '保留' 意味着保存某物的动作。"
    },
    {
        id: 3,
        question: "The __________ of the lion's attack was both terrifying and awe-inspiring to the onlookers.",
        chinese_question: "狮子攻击的 __________ 既令旁观者感到恐惧又令人敬畏。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "ferocity", chinese_answer: "凶猛", chinese_romanization: "xiōngměng" },
            { option: "C", answer: "friendliness", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "D", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ferocity' means the state or quality of being ferocious; fierceness." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'friendliness' means the quality of being friendly; affability." +
            "<br><br>" +
            "(D) 'timidity' means lack of courage or confidence.",
        chinese_explanation: "(B) '凶猛'一词意味着凶猛的状态或品质；激烈。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(C) '友好' 意味着友好的品质；和蔼可亲。" +
            "<br><br>" +
            "(D) '胆怯' 意味着缺乏勇气或信心。"
    },
    {
        id: 4,
        question: "She looked at the messy room with __________, feeling it was beneath her to clean it up.",
        chinese_question: "她以 __________ 的眼神看着凌乱的房间，觉得打扫它是件很低贱的事。",
        answers: [
            { option: "A", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "B", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
            "<br><br>" +
            "(B) 'approval' means the belief that someone or something is good or acceptable." +
            "<br><br>" +
            "(C) 'curiosity' means a strong desire to know or learn something." +
            "<br><br>" +
            "(D) 'admiration' means respect and warm approval.",
        chinese_explanation: "(A) '鄙视' 意味着认为某人或某物不值得考虑或尊重的感觉；蔑视。" +
            "<br><br>" +
            "(B) '赞同' 意味着相信某人或某事是好的或可以接受的。" +
            "<br><br>" +
            "(C) '好奇' 意味着强烈的求知欲。" +
            "<br><br>" +
            "(D) '钦佩' 意味着尊重和热情的认可。"
    },
    {
        id: 5,
        question: "Even though he was annoyed by his neighbour's loud music, he showed remarkable __________ and didn't complain.",
        chinese_question: "尽管他对邻居的大声音乐感到恼火，但他表现出非凡的 __________，没有抱怨。",
        answers: [
            { option: "A", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bù nàifán" },
            { option: "B", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "C", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "D", answer: "forbearance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forbearance' means patient self-control; restraint and tolerance." +
            "<br><br>" +
            "(A) 'impatience' means the tendency to be quickly irritated or provoked." +
            "<br><br>" +
            "(B) 'anger' means a strong feeling of annoyance, displeasure, or hostility." +
            "<br><br>" +
            "(C) 'frustration' means the feeling of being upset or annoyed as a result of being unable to change or achieve something.",
        chinese_explanation: "(D) '忍耐'一词意味着有耐心的自我控制；克制和宽容。" +
            "<br><br>" +
            "(A) '不耐烦' 意味着容易迅速被激怒或激怒的倾向。" +
            "<br><br>" +
            "(B) '愤怒' 意味着强烈的恼怒、不满或敌意。" +
            "<br><br>" +
            "(C) '挫折' 意味着因无法改变或实现某事而感到沮丧或恼火的感觉。"
    },
    {
        id: 6,
        question: "Despite his usual preference for poetry, he appreciated the simplicity and clarity of the __________ used in the article.",
        chinese_question: "尽管他通常偏爱诗歌，但他还是欣赏文章中使用的 __________ 的简单和清晰。",
        answers: [
            { option: "A", answer: "rhyme", chinese_answer: "押韵", chinese_romanization: "yāyùn" },
            { option: "B", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
            { option: "C", answer: "verse", chinese_answer: "诗", chinese_romanization: "shī" },
            { option: "D", answer: "alliteration", chinese_answer: "头韵", chinese_romanization: "tóuyùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prose' means written or spoken language in its ordinary form, without metrical structure." +
            "<br><br>" +
            "(A) 'rhyme' means correspondence of sound between words or the endings of words." +
            "<br><br>" +
            "(C) 'verse' means writing arranged with a metrical rhythm, typically having a rhyme." +
            "<br><br>" +
            "(D) 'alliteration' means the occurrence of the same letter or sound at the beginning of adjacent or closely connected words.",
        chinese_explanation: "(B) '散文'一词意味着以普通形式书写或口头表达的语言，没有韵律结构。" +
            "<br><br>" +
            "(A) '押韵' 意味着词之间或词尾之间的声音对应。" +
            "<br><br>" +
            "(C) '诗' 意味着按韵律节奏安排的写作，通常有押韵。" +
            "<br><br>" +
            "(D) '头韵' 意味着相邻或紧密相连的词的开头出现相同的字母或声音。"
    },
    {
        id: 7,
        question: "His loud __________ echoed through the room, drawing everyone's attention.",
        chinese_question: "他的响亮的 __________ 回荡在房间里，引起了所有人的注意。",
        answers: [
            { option: "A", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "B", answer: "sigh", chinese_answer: "叹息", chinese_romanization: "tànxī" },
            { option: "C", answer: "murmur", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" },
            { option: "D", answer: "guffaw", chinese_answer: "哄笑", chinese_romanization: "hōngxiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'guffaw' means a loud and boisterous laugh." +
            "<br><br>" +
            "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords." +
            "<br><br>" +
            "(B) 'sigh' means to emit a long, deep, audible breath expressing sadness, relief, or weariness." +
            "<br><br>" +
            "(C) 'murmur' means to say something in a low, soft, or indistinct voice.",
        chinese_explanation: "(D) '哄笑' 意味着响亮而欢闹的笑声。" +
            "<br><br>" +
            "(A) '低语' 意味着用气音非常轻声地说话。" +
            "<br><br>" +
            "(B) '叹息' 意味着发出长而深的声音，表达悲伤、宽慰或疲倦。" +
            "<br><br>" +
            "(C) '低声说' 意味着用低沉、柔和或模糊的声音说话。"
    },
    {
        id: 8,
        question: "The zoo's new __________ featured exotic animals from all over the world.",
        chinese_question: "动物园的新 __________ 展出了来自世界各地的奇异动物。",
        answers: [
            { option: "A", answer: "collection", chinese_answer: "收藏", chinese_romanization: "shōucáng" },
            { option: "B", answer: "menagerie", chinese_answer: "动物园", chinese_romanization: "dòngwùyuán" },
            { option: "C", answer: "habitat", chinese_answer: "栖息地", chinese_romanization: "qīxīdì" },
            { option: "D", answer: "enclosure", chinese_answer: "围场", chinese_romanization: "wéichǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'menagerie' means a collection of wild animals kept in captivity for exhibition." +
            "<br><br>" +
            "(A) 'collection' means a group of things or people." +
            "<br><br>" +
            "(C) 'habitat' means the natural home or environment of an animal, plant, or other organism." +
            "<br><br>" +
            "(D) 'enclosure' means an area that is sealed off with an artificial or natural barrier.",
        chinese_explanation: "(B) '动物园'一词意味着为展览而圈养的野生动物的收藏。" +
            "<br><br>" +
            "(A) '收藏' 意味着一组物品或人。" +
            "<br><br>" +
            "(C) '栖息地' 意味着动物、植物或其他生物的自然家园或环境。" +
            "<br><br>" +
            "(D) '围场' 意味着用人工或自然屏障封闭的区域。"
    },
    {
        id: 9,
        question: "Under her mentor's __________, she developed the skills necessary to become a successful artist.",
        chinese_question: "在她导师的 __________ 下，她培养了成为成功艺术家所需的技能。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "tutelage", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" },
            { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tutelage' means protection of or authority over someone; instruction or guidance." +
            "<br><br>" +
            "(A) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(C) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(D) 'defiance' means open resistance or bold disobedience.",
        chinese_explanation: "(B) '指导' 意味着对某人的保护或权威；指导或引导。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(C) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(D) '反抗' 意味着公开抵抗或大胆不服从。"
    },
    {
        id: 10,
        question: "The CEO’s __________ within the industry was evident when she easily secured funding for the new project.",
        chinese_question: "这位首席执行官在行业内的 __________ 显而易见，她轻松地为新项目获得了资金。",
        answers: [
            { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
            { option: "B", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "C", answer: "anonymity", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
            { option: "D", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clout' means influence or power, especially in politics or business." +
            "<br><br>" +
            "(B) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(C) 'anonymity' means the condition of being anonymous." +
            "<br><br>" +
            "(D) 'modesty' means the quality or state of being unassuming in the estimation of one's abilities.",
        chinese_explanation: "(A) '影响力' 意味着特别是在政治或商业中的影响力或权力。" +
            "<br><br>" +
            "(B) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '匿名' 意味着匿名的状态。" +
            "<br><br>" +
            "(D) '谦虚' 意味着在估计自己的能力时表现出的谦逊品质。"
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
