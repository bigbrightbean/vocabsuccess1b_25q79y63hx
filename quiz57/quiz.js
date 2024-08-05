// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He discovered his __________ in teaching after working in various fields, realizing his passion for educating others.",
        chinese_question: "在从事多个领域的工作后，他在教学中发现了自己的 __________，意识到自己对教育他人的热情。",
        answers: [
            { option: "A", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "B", answer: "game", chinese_answer: "游戏", chinese_romanization: "yóuxì" },
            { option: "C", answer: "diversion", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
            { option: "D", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
            "<br><br>" +
            "(A) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(B) 'game' means a form of play or sport, especially a competitive one played according to rules." +
            "<br><br>" +
            "(C) 'diversion' means an activity that diverts the mind from tedious or serious concerns; a recreation or pastime.",
        chinese_explanation: "(D) '职业'一词意味着对特定职业或职业的强烈适应感。" +
            "<br><br>" +
            "(A) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
            "<br><br>" +
            "(B) '游戏' 意味着一种游戏或运动形式，特别是按照规则进行的竞争性游戏。" +
            "<br><br>" +
            "(C) '消遣' 意味着将注意力从乏味或严肃问题中转移出去的活动；一种娱乐或消遣。"
    },
    {
        id: 2,
        question: "The __________ of his knowledge in various subjects impressed everyone at the conference.",
        chinese_question: "他在各个学科上 __________ 的知识让会议上的所有人都印象深刻。",
        answers: [
            { option: "A", answer: "depth", chinese_answer: "深度", chinese_romanization: "shēndù" },
            { option: "B", answer: "height", chinese_answer: "高度", chinese_romanization: "gāodù" },
            { option: "C", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
            { option: "D", answer: "breadth", chinese_answer: "广度", chinese_romanization: "guǎngdù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'breadth' means the distance or measurement from side to side of something; width, or the extent of something." +
            "<br><br>" +
            "(A) 'depth' means the distance from the top or surface to the bottom of something." +
            "<br><br>" +
            "(B) 'height' means the measurement from base to top or (of a standing person) from head to foot." +
            "<br><br>" +
            "(C) 'length' means the measurement or extent of something from end to end.",
        chinese_explanation: "(D) '广度' 意味着某物从一侧到另一侧的距离或测量；宽度，或某物的范围。" +
            "<br><br>" +
            "(A) '深度' 意味着从顶部或表面到底部的距离。" +
            "<br><br>" +
            "(B) '高度' 意味着从底部到顶部的测量或（站立的人）从头到脚的测量。" +
            "<br><br>" +
            "(C) '长度' 意味着从一端到另一端的测量或范围。"
    },
    {
        id: 3,
        question: "The community came together in __________ after the natural disaster, helping each other rebuild their lives.",
        chinese_question: "自然灾害后，社区团结在一起，相互帮助重建生活。",
        answers: [
            { option: "A", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "solidarity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'solidarity' means unity or agreement of feeling or action, especially among individuals with a common interest; mutual support within a group." +
            "<br><br>" +
            "(A) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'solitude' means the state or situation of being alone.",
        chinese_explanation: "(B) '团结' 意味着特别是具有共同利益的个人之间的感情或行动的一致性；群体内部的相互支持。" +
            "<br><br>" +
            "(A) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '孤独' 意味着独处的状态或情况。"
    },
    {
        id: 4,
        question: "The scientist explained the __________ of gravity to the students, making the complex concept easier to understand.",
        chinese_question: "科学家向学生解释了重力的 __________，使复杂的概念更容易理解。",
        answers: [
            { option: "A", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
            { option: "B", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "C", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "experiment", chinese_answer: "实验", chinese_romanization: "shíyàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'principle' means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning." +
            "<br><br>" +
            "(B) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(C) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(D) 'experiment' means a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact.",
        chinese_explanation: "(A) '原则' 意味着作为信仰或行为体系或推理链基础的基本真理或命题。" +
            "<br><br>" +
            "(B) '理论' 意味着解释某事的一种假设或系统的观点。" +
            "<br><br>" +
            "(C) '假设' 意味着基于有限证据的假设或提出的解释，作为进一步调查的起点。" +
            "<br><br>" +
            "(D) '实验' 意味着进行科学程序以发现、验证假设或证明已知事实。"
    },
    {
        id: 5,
        question: "The sudden __________ of the storm caught everyone by surprise, causing widespread damage.",
        chinese_question: "暴风雨的突然 __________ 让所有人措手不及，造成了广泛的破坏。",
        answers: [
            { option: "A", answer: "onset", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "relief", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "aftermath", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "D", answer: "recovery", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'onset' means the beginning or start of something, especially something unpleasant." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'aftermath' means the consequences or aftereffects of a significant unpleasant event." +
            "<br><br>" +
            "(D) 'recovery' means a return to a normal state of health, mind, or strength.",
        chinese_explanation: "(A) '开始' 意味着某事的开始，尤其是某些不愉快的事情的开始。" +
            "<br><br>" +
            "(B) '缓解' 意味着在解除焦虑或痛苦后的安心和放松感。" +
            "<br><br>" +
            "(C) '后果' 意味着重大不愉快事件的后果或影响。" +
            "<br><br>" +
            "(D) '恢复' 意味着恢复到健康、心灵或力量的正常状态。"
    },
    {
        id: 6,
        question: "The health drink is made from natural __________ such as fruits, vegetables, and herbs.",
        chinese_question: "这种健康饮料由水果、蔬菜和草药等天然 __________ 制成。",
        answers: [
            { option: "A", answer: "constituent", chinese_answer: "成分", chinese_romanization: "chéngfèn" },
            { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "detractor", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "D", answer: "distortion", chinese_answer: "变形", chinese_romanization: "biànxíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'constituent' means a component part of something." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'detractor' means a person who disparages someone or something." +
            "<br><br>" +
            "(D) 'distortion' means the action of distorting or the state of being distorted.",
        chinese_explanation: "(A) '成分'一词意味着某物的组成部分。" +
            "<br><br>" +
            "(B) '分心' 意味着阻止某人全神贯注于其他事物的东西。" +
            "<br><br>" +
            "(C) '批评者' 意味着贬低某人或某事的人。" +
            "<br><br>" +
            "(D) '变形' 意味着扭曲的动作或状态。"
    },
    {
        id: 7,
        question: "The athlete's __________ on the field made her the star player of the team, admired by fans and teammates.",
        chinese_question: "这位运动员在赛场上的 __________ 使她成为球队的明星球员，受到球迷和队友的钦佩。",
        answers: [
            { option: "A", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "B", answer: "timidity", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
            "<br><br>" +
            "(A) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(B) 'timidity' means lack of courage or confidence." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(C) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
            "<br><br>" +
            "(A) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(B) '胆小' 意味着缺乏勇气或信心。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 8,
        question: "The film is a loving __________ to the classic movies of the 1950s.",
        chinese_question: "这部电影是对20世纪50年代经典电影的深情 __________。",
        answers: [
            { option: "A", answer: "parody", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "B", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
            { option: "C", answer: "satire", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'homage' means special honor or respect shown publicly." +
            "<br><br>" +
            "(A) 'parody' means an imitation of the style of a particular writer, artist, or genre with deliberate exaggeration for comic effect." +
            "<br><br>" +
            "(C) 'satire' means the use of humor, irony, or ridicule to criticize people's stupidity or vices." +
            "<br><br>" +
            "(D) 'disregard' means lack of consideration or attention to something.",
        chinese_explanation: "(B) '致敬' 意味着公开展示的特别荣誉或尊重。" +
            "<br><br>" +
            "(A) '模仿' 意味着故意夸张模仿特定作家、艺术家或流派的风格以达到喜剧效果。" +
            "<br><br>" +
            "(C) '讽刺' 意味着使用幽默、讽刺或嘲笑来批评人们的愚蠢或恶习。" +
            "<br><br>" +
            "(D) '忽视' 意味着对某事缺乏考虑或关注。"
    },
    {
        id: 9,
        question: "The musician waited for the conductor's __________ to start playing his part.",
        chinese_question: "音乐家等待指挥的 __________ 才开始演奏他的部分。",
        answers: [
            { option: "A", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
            { option: "B", answer: "cue", chinese_answer: "提示", chinese_romanization: "tíshì" },
            { option: "C", answer: "direction", chinese_answer: "指示", chinese_romanization: "zhǐshì" },
            { option: "D", answer: "instruction", chinese_answer: "指令", chinese_romanization: "zhǐlìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cue' means a signal for someone to enter or begin their speech or action." +
            "<br><br>" +
            "(A) 'signal' means a gesture, action, or sound that is used to convey information or instructions." +
            "<br><br>" +
            "(C) 'direction' means a course along which someone or something moves." +
            "<br><br>" +
            "(D) 'instruction' means detailed information telling how something should be done.",
        chinese_explanation: "(B) '提示'一词意味着某人进入或开始讲话或行动的信号。" +
            "<br><br>" +
            "(A) '信号' 意味着用于传递信息或指示的手势、动作或声音。" +
            "<br><br>" +
            "(C) '指示' 意味着某人或某物移动的方向。" +
            "<br><br>" +
            "(D) '指令' 意味着告诉某事应该如何完成的详细信息。"
    },
    {
        id: 10,
        question: "The ambassador served as a __________ between the two countries, facilitating communication and cooperation.",
        chinese_question: "大使充当了两国之间的 __________，促进了沟通与合作。",
        answers: [
            { option: "A", answer: "manager", chinese_answer: "经理", chinese_romanization: "jīnglǐ" },
            { option: "B", answer: "liaison", chinese_answer: "联络员", chinese_romanization: "liánluòyuán" },
            { option: "C", answer: "representative", chinese_answer: "代表", chinese_romanization: "dàibiǎo" },
            { option: "D", answer: "coordinator", chinese_answer: "协调员", chinese_romanization: "xiétiáoyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." +
            "<br><br>" +
            "(A) 'manager' means a person responsible for controlling or administering an organization or group of staff." +
            "<br><br>" +
            "(C) 'representative' means a person chosen or appointed to act or speak for another or others." +
            "<br><br>" +
            "(D) 'coordinator' means a person whose job is to organize events or activities and to negotiate with others to ensure they work together effectively.",
        chinese_explanation: "(B) '联络员'一词意味着促进人或组织之间紧密工作关系的沟通或合作。" +
            "<br><br>" +
            "(A) '经理' 意味着负责控制或管理一个组织或一群员工的人。" +
            "<br><br>" +
            "(C) '代表' 意味着被选中或任命为他人或他人行事或讲话的人。" +
            "<br><br>" +
            "(D) '协调员' 意味着其工作是组织活动或事件并与他人协商以确保他们有效合作的人。"
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
