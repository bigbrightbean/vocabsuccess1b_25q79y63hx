// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new robotic technology mimics human __________, allowing the machines to move in a more lifelike manner.",
        chinese_question: "新的机器人技术模仿人类的 __________，使机器能够以更逼真的方式移动。",
        answers: [
            { option: "A", answer: "locomotion", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "cognition", chinese_answer: "认知", chinese_romanization: "rènzhī" },
            { option: "C", answer: "respiration", chinese_answer: "呼吸", chinese_romanization: "hūxī" },
            { option: "D", answer: "sensation", chinese_answer: "感觉", chinese_romanization: "gǎnjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'locomotion' means the ability to move from one place to another." +
            "<br><br>" +
            "(B) 'cognition' means the mental action or process of acquiring knowledge and understanding through thought, experience, and the senses." +
            "<br><br>" +
            "(C) 'respiration' means the action of breathing." +
            "<br><br>" +
            "(D) 'sensation' means a physical feeling or perception resulting from something that happens to or comes into contact with the body.",
        chinese_explanation: "(A) '运动' 意味着从一个地方移动到另一个地方的能力。" +
            "<br><br>" +
            "(B) '认知' 意味着通过思考、经验和感官获得知识和理解的心理行为或过程。" +
            "<br><br>" +
            "(C) '呼吸' 意味着呼吸的动作。" +
            "<br><br>" +
            "(D) '感觉' 意味着由于发生在身体或与身体接触而产生的物理感觉或感知。"
    },
    {
        id: 2,
        question: "The teacher's __________ for science inspired her students to explore the subject with great interest.",
        chinese_question: "这位老师对科学的 __________ 激发了学生们极大的兴趣去探索这个学科。",
        answers: [
            { option: "A", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "B", answer: "zeal", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zeal' means great energy or enthusiasm in pursuit of a cause or an objective." +
            "<br><br>" +
            "(A) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '热情'一词意味着在追求事业或目标时充满巨大能量或热情。" +
            "<br><br>" +
            "(A) '不情愿' 意味着不愿意或不愿意做某事。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 3,
        question: "The __________ of water in the soil is crucial for the growth of plants, ensuring they have enough moisture.",
        chinese_question: "土壤中水分的 __________ 对植物的生长至关重要，确保它们有足够的水分。",
        answers: [
            { option: "A", answer: "evaporation", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
            { option: "B", answer: "drainage", chinese_answer: "排水", chinese_romanization: "páishuǐ" },
            { option: "C", answer: "erosion", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
            { option: "D", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'retention' means the continued possession, use, or control of something." +
            "<br><br>" +
            "(A) 'evaporation' means the process of turning from liquid into vapor." +
            "<br><br>" +
            "(B) 'drainage' means the action or process of draining something." +
            "<br><br>" +
            "(C) 'erosion' means the process of eroding or being eroded by wind, water, or other natural agents.",
        chinese_explanation: "(D) '保留' 意味着继续持有、使用或控制某物。" +
            "<br><br>" +
            "(A) '蒸发' 意味着从液体变成蒸汽的过程。" +
            "<br><br>" +
            "(B) '排水' 意味着排出某物的动作或过程。" +
            "<br><br>" +
            "(C) '侵蚀' 意味着被风、水或其他自然因素侵蚀或被侵蚀的过程。"
    },
    {
        id: 4,
        question: "He was under the __________ that he could easily climb the mountain without any preparation, despite never having hiked before.",
        chinese_question: "尽管从未有过徒步旅行的经历，他却有 __________，认为自己无需任何准备就能轻松登上山顶。",
        answers: [
            { option: "A", answer: "realization", chinese_answer: "认识", chinese_romanization: "rènshí" },
            { option: "B", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
            { option: "C", answer: "delusion", chinese_answer: "错觉", chinese_romanization: "cuòjué" },
            { option: "D", answer: "perception", chinese_answer: "感觉", chinese_romanization: "gǎnjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'delusion' means a false belief or judgment about external reality." +
            "<br><br>" +
            "(A) 'realization' means the act of becoming fully aware of something as a fact." +
            "<br><br>" +
            "(B) 'illusion' means a thing that is or is likely to be wrongly perceived or interpreted by the senses." +
            "<br><br>" +
            "(D) 'perception' means the ability to see, hear, or become aware of something through the senses.",
        chinese_explanation: "(C) '错觉'一词意味着对外部现实的错误信念或判断。" +
            "<br><br>" +
            "(A) '认识' 意味着充分意识到某事作为事实的行为。" +
            "<br><br>" +
            "(B) '幻觉' 意味着被错误感知或解释的事物。" +
            "<br><br>" +
            "(D) '感觉' 意味着通过感官看到、听到或意识到某事的能力。"
    },
    {
        id: 5,
        question: "The villain’s __________ in the movie made him even more menacing.",
        chinese_question: "电影中反派的 __________ 让他显得更加凶险。",
        answers: [
            { option: "A", answer: "leer", chinese_answer: "奸笑", chinese_romanization: "jiānxiào" },
            { option: "B", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
            { option: "C", answer: "glance", chinese_answer: "一瞥", chinese_romanization: "yīpiē" },
            { option: "D", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'leer' means to look or gaze in an unpleasant, malicious, or lascivious way." +
            "<br><br>" +
            "(B) 'smile' means a pleased, kind, or amused expression." +
            "<br><br>" +
            "(C) 'glance' means to take a brief or hurried look." +
            "<br><br>" +
            "(D) 'laugh' means to make sounds and movements of the face and body that express amusement.",
        chinese_explanation: "(A) '奸笑' 意味着以不愉快、恶意或淫秽的方式看或注视。" +
            "<br><br>" +
            "(B) '微笑' 意味着愉快、友好或感到好笑的表情。" +
            "<br><br>" +
            "(C) '一瞥' 意味着快速或匆忙地看一眼。" +
            "<br><br>" +
            "(D) '笑' 意味着发出声音和面部和身体的动作，表示愉快。"
    },
    {
        id: 6,
        question: "The __________ between the two friends made it hard for them to share personal matters.",
        chinese_question: "两个朋友之间的 __________ 使他们难以分享个人事务。",
        answers: [
            { option: "A", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mistrust' means lack of trust or confidence." +
            "<br><br>" +
            "(A) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." +
            "<br><br>" +
            "(B) 'alliance' means a union or association formed for mutual benefit." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(D) '不信任' 意味着缺乏信任或信心。" +
            "<br><br>" +
            "(A) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" +
            "<br><br>" +
            "(B) '联盟' 意味着为共同利益而形成的联合或协会。" +
            "<br><br>" +
            "(C) '合作' 意味着共同为同一个目标工作。"
    },
    {
        id: 7,
    question: "She only skimmed the __________ of the report and missed the detailed analysis.",
    chinese_question: "她只略读了报告的 __________ ，错过了详细的分析。",
    answers: [
        { option: "A", answer: "content", chinese_answer: "内容", chinese_romanization: "nèiróng" },
        { option: "B", answer: "essence", chinese_answer: "本质", chinese_romanization: "běnzhí" },
        { option: "C", answer: "depth", chinese_answer: "深度", chinese_romanization: "shēndù" },
        { option: "D", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'surface' means the outside part or uppermost layer of something." +
        "<br><br>" +
        "(A) 'content' means the information or topics that are dealt with in a book, document, etc." +
        "<br><br>" +
        "(B) 'essence' means the intrinsic nature or indispensable quality of something." +
        "<br><br>" +
        "(C) 'depth' means the distance from the top or surface to the bottom of something.",
    chinese_explanation: "(D) '表面' 意味着某物的外部或最上层。" +
        "<br><br>" +
        "(A) '内容' 意味着书籍、文件等所处理的信息或主题。" +
        "<br><br>" +
        "(B) '本质' 意味着某物的内在性质或不可或缺的质量。" +
        "<br><br>" +
        "(C) '深度' 意味着从顶部或表面到某物底部的距离。"
    },
    {
        id: 8,
        question: "The artist found new __________ for expressing his creativity, including digital art and multimedia installations.",
        chinese_question: "这位艺术家找到了表达创意的新 __________，包括数字艺术和多媒体装置。",
        answers: [
            { option: "A", answer: "avenues", chinese_answer: "途径", chinese_romanization: "tújìng" },
            { option: "B", answer: "limitations", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "C", answer: "boundaries", chinese_answer: "边界", chinese_romanization: "biānjiè" },
            { option: "D", answer: "impediments", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avenues' figuratively means ways of approaching a problem or making progress toward something." +
            "<br><br>" +
            "(B) 'limitations' means restricting conditions." +
            "<br><br>" +
            "(C) 'boundaries' means limits of a subject or sphere of activity." +
            "<br><br>" +
            "(D) 'impediments' means things that hinder or obstruct.",
        chinese_explanation: "(A) '途径' 在此语境下意指解决问题或取得进展的方法。" +
            "<br><br>" +
            "(B) '限制' 意味着限制条件。" +
            "<br><br>" +
            "(C) '边界' 意味着主题或活动领域的界限。" +
            "<br><br>" +
            "(D) '阻碍' 意味着阻碍或妨碍的事物。"
    },
    {
        id: 9,
        question: "The book captured the __________ of the era, reflecting the hopes and fears of people during that time.",
        chinese_question: "这本书捕捉到了那个时代的 __________，反映了人们当时的希望和恐惧。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
            { option: "D", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(C) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained.",
        chinese_explanation: "(D) '情感'一词意味着对某种情况或事件的看法或态度；意见或感觉。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '厌恶' 意味着强烈的厌恶或不情愿。" +
            "<br><br>" +
            "(C) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。"
    },
    {
        id: 10,
        question: "The mental health facility offered __________ to patients who needed long-term care and protection.",
        chinese_question: "这家心理健康机构为需要长期护理和保护的患者提供 __________。",
        answers: [
            { option: "A", answer: "asylum", chinese_answer: "收容所", chinese_romanization: "shōuróng suǒ" },
            { option: "B", answer: "treatment", chinese_answer: "治疗", chinese_romanization: "zhìliáo" },
            { option: "C", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "medication", chinese_answer: "药物", chinese_romanization: "yàowù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'asylum' means an institution offering shelter and support to people who are mentally ill." +
            "<br><br>" +
            "(B) 'treatment' means medical care given to a patient for an illness or injury." +
            "<br><br>" +
            "(C) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(D) 'medication' means a substance used for medical treatment, especially a medicine or drug.",
        chinese_explanation: "(A) '收容所' 意味着为精神病患者提供庇护和支持的机构。" +
            "<br><br>" +
            "(B) '治疗' 意味着为患者提供的医疗护理。" +
            "<br><br>" +
            "(C) '安慰' 意味着身体舒适和无痛或无约束的状态。" +
            "<br><br>" +
            "(D) '药物' 意味着用于医疗的物质，尤其是药物或药品。"
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
