// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The bustling city is the __________ of modern living, with its endless energy and activity.",
        chinese_question: "这座繁华的城市是现代生活的 __________，充满了无尽的活力和活动。",
        answers: [
            { option: "A", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
            { option: "B", answer: "embodiment", chinese_answer: "体现", chinese_romanization: "tǐxiàn" },
            { option: "C", answer: "reflection", chinese_answer: "反映", chinese_romanization: "fǎnyìng" },
            { option: "D", answer: "mirage", chinese_answer: "海市蜃楼", chinese_romanization: "hǎishìshènlóu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embodiment' means a tangible or visible form of an idea, quality, or feeling." +
            "<br><br>" +
            "(A) 'illusion' means a deceptive appearance or impression." +
            "<br><br>" +
            "(C) 'reflection' means serious thought or consideration." +
            "<br><br>" +
            "(D) 'mirage' means an optical illusion caused by atmospheric conditions.",
        chinese_explanation: "(B) '体现'一词意味着一种思想、品质或感觉的有形或可见形式。" +
            "<br><br>" +
            "(A) '幻觉' 意味着一种欺骗性的外观或印象。" +
            "<br><br>" +
            "(C) '反映' 意味着认真思考或考虑。" +
            "<br><br>" +
            "(D) '海市蜃楼' 意味着由大气条件引起的光学幻觉。"
    },
    {
        id: 2,
    question: "As a member of the elite club, he had the __________ of exclusive access to the best facilities.",
    chinese_question: "作为精英俱乐部的成员，他拥有使用最佳设施的独家 __________ 。",
    answers: [
        { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
        { option: "B", answer: "disadvantage", chinese_answer: "不利条件", chinese_romanization: "bùlì tiáojiàn" },
        { option: "C", answer: "duty", chinese_answer: "责任", chinese_romanization: "zérèn" },
        { option: "D", answer: "chore", chinese_answer: "家务活", chinese_romanization: "jiāwù huó" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." +
        "<br><br>" +
        "(B) 'disadvantage' means an unfavorable circumstance or condition that reduces the chances of success or effectiveness." +
        "<br><br>" +
        "(C) 'duty' means a moral or legal obligation; a responsibility." +
        "<br><br>" +
        "(D) 'chore' means a routine task, especially a household one.",
    chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" +
        "<br><br>" +
        "(B) '不利条件' 意味着减少成功或有效机会的不利情况或条件。" +
        "<br><br>" +
        "(C) '责任' 意味着道德或法律上的义务；责任。" +
        "<br><br>" +
        "(D) '家务活' 意味着例行任务，特别是家庭任务。"
    },
    {
        id: 3,
     question: "They conducted a __________ to gather opinions on the new policy.",
    chinese_question: "他们进行了 __________，以收集对新政策的意见。",
    answers: [
        { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" },
        { option: "C", answer: "survey", chinese_answer: "调查", chinese_romanization: "diàochá" },
        { option: "D", answer: "party", chinese_answer: "派对", chinese_romanization: "pàiduì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'survey' means a method of gathering information from individuals, usually by asking questions." +
        "<br><br>" +
        "(A) 'celebration' means a social gathering or enjoyable activity to mark a significant or happy day or event." +
        "<br><br>" +
        "(B) 'protest' means a statement or action expressing disapproval of or objection to something." +
        "<br><br>" +
        "(D) 'party' means a social gathering of invited guests, typically involving eating, drinking, and entertainment.",
    chinese_explanation: "(C) '调查' 意味着通过提问从个人那里收集信息的方法。" +
        "<br><br>" +
        "(A) '庆祝' 意味着庆祝重要或快乐日子的社交聚会或愉快活动。" +
        "<br><br>" +
        "(B) '抗议' 意味着表达对某事不满或反对的声明或行动。" +
        "<br><br>" +
        "(D) '派对' 意味着邀请客人的社交聚会，通常包括饮食和娱乐。"
    },
    {
        id: 4,
        question: "Finding her true __________ as a social worker brought her a sense of purpose and satisfaction she had never experienced before.",
        chinese_question: "作为一名社会工作者，找到自己真正的 __________ 给她带来了前所未有的目的感和满足感。",
        answers: [
            { option: "A", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "B", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
            { option: "C", answer: "game", chinese_answer: "游戏", chinese_romanization: "yóuxì" },
            { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
            "<br><br>" +
            "(A) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(C) 'game' means a form of play or sport, especially a competitive one played according to rules." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(B) '职业'一词意味着对特定职业或职业的强烈适应感。" +
            "<br><br>" +
            "(A) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
            "<br><br>" +
            "(C) '游戏' 意味着一种游戏或运动形式，特别是按照规则进行的竞争性游戏。" +
            "<br><br>" +
            "(D) '娱乐' 意味着发现某事有趣的状态或经历。"
    },
    {
        id: 5,
        question: "He lived by the __________ that honesty is the best policy, never compromising his integrity.",
        chinese_question: "他坚守 __________，认为诚实是上策，从不妥协他的诚信。",
        answers: [
            { option: "A", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
            { option: "B", answer: "opinion", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "C", answer: "rule", chinese_answer: "规则", chinese_romanization: "guīzé" },
            { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'principle' means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning." +
            "<br><br>" +
            "(B) 'opinion' means a view or judgment formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(C) 'rule' means one of a set of explicit or understood regulations or principles governing conduct within a particular activity or sphere." +
            "<br><br>" +
            "(D) 'suggestion' means an idea or plan put forward for consideration.",
        chinese_explanation: "(A) '原则' 意味着作为信仰或行为体系或推理链基础的基本真理或命题。" +
            "<br><br>" +
            "(B) '意见' 意味着对某事形成的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(C) '规则' 意味着在特定活动或领域中管理行为的一组明确或公认的规则或原则之一。" +
            "<br><br>" +
            "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 6,
    question: "During the long winter, the villagers faced considerable __________ due to food shortages and harsh weather.",
    chinese_question: "在漫长的冬季，村民们由于食物短缺和恶劣的天气面临相当大的 __________ 。",
    answers: [
        { option: "A", answer: "hardship", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" },
        { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
        { option: "C", answer: "luxury", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
        { option: "D", answer: "relief", chinese_answer: "救济", chinese_romanization: "jiùjì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hardship' means severe suffering or privation." +
        "<br><br>" +
        "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
        "<br><br>" +
        "(C) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
        "<br><br>" +
        "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
    chinese_explanation: "(A) '困苦' 意味着严重的痛苦或贫困。" +
        "<br><br>" +
        "(B) '舒适' 意味着身体的轻松状态，没有疼痛或约束。" +
        "<br><br>" +
        "(C) '奢华' 意味着极度舒适或优雅的状态，尤其是涉及高昂费用时。" +
        "<br><br>" +
        "(D) '救济' 意味着解除焦虑或痛苦后的安慰和放松感觉。"
    },
    {
        id: 7,
        question: "The actor rehearsed his lines until they became part of his __________.",
        chinese_question: "演员反复排练他的台词，直到它们成为他 __________ 的一部分。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "C", answer: "crisis", chinese_answer: "危机", chinese_romanization: "wéijī" },
            { option: "D", answer: "routine", chinese_answer: "例行", chinese_romanization: "lìxíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(B) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(C) 'crisis' means a time of intense difficulty, trouble, or danger.",
        chinese_explanation: "(D) '例行' 意味着定期遵循的一系列行动；固定程序。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(B) '异常' 意味着与标准、正常或预期不一致的事物。" +
            "<br><br>" +
            "(C) '危机' 意味着一种极度困难、麻烦或危险的时期。"
    },
    {
        id: 8,
        question: "Under the __________ of a skilled chef, she learned the intricacies of gourmet cooking.",
        chinese_question: "在一位技艺精湛的厨师的 __________ 下，她学会了美食烹饪的精妙之处。",
        answers: [
            { option: "A", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn" },
            { option: "B", answer: "tutelage", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "oversight", chinese_answer: "监督", chinese_romanization: "jiāndū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tutelage' means protection of or authority over someone; instruction or guidance." +
            "<br><br>" +
            "(A) 'rebellion' means an act of violent or open resistance to an established government or ruler." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(B) '指导' 意味着对某人的保护或权威；指导或引导。" +
            "<br><br>" +
            "(A) '叛乱' 意味着对既定政府或统治者的暴力或公开抵抗。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '监督' 意味着无意中的疏忽或未做某事。"
    },
    {
        id: 9,
    question: "The __________ in the city square could be heard from several blocks away as people celebrated the festival.",
    chinese_question: "人们庆祝节日时，城市广场上的 __________ 几个街区外都能听到。",
    answers: [
        { option: "A", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" },
        { option: "B", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "serenity", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hubbub' means a busy, noisy situation." +
        "<br><br>" +
        "(A) 'solitude' means the state of being alone." +
        "<br><br>" +
        "(C) 'harmony' means agreement or concord." +
        "<br><br>" +
        "(D) 'serenity' means the state of being calm, peaceful, and untroubled.",
    chinese_explanation: "(B) '喧闹' 意味着一个繁忙、吵闹的情况。" +
        "<br><br>" +
        "(A) '孤独' 意味着独处的状态。" +
        "<br><br>" +
        "(C) '和谐' 意味着一致或和谐。" +
        "<br><br>" +
        "(D) '平静' 意味着平静、和平和无忧的状态。"
    },
    {
        id: 10,
    question: "The polished marble __________ of the floor reflected the chandelier's light beautifully.",
    chinese_question: "地板抛光的大理石 __________ 美丽地反射了吊灯的光线。",
    answers: [
        { option: "A", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
        { option: "B", answer: "depth", chinese_answer: "深度", chinese_romanization: "shēndù" },
        { option: "C", answer: "core", chinese_answer: "核心", chinese_romanization: "héxīn" },
        { option: "D", answer: "foundation", chinese_answer: "地基", chinese_romanization: "dìjī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'surface' means the outside part or uppermost layer of something." +
        "<br><br>" +
        "(B) 'depth' means the distance from the top or surface to the bottom of something." +
        "<br><br>" +
        "(C) 'core' means the central or most important part of something." +
        "<br><br>" +
        "(D) 'foundation' means the lowest load-bearing part of a building, typically below ground level.",
    chinese_explanation: "(A) '表面' 意味着某物的外部或最上层。" +
        "<br><br>" +
        "(B) '深度' 意味着从顶部或表面到某物底部的距离。" +
        "<br><br>" +
        "(C) '核心' 意味着某事物的中心或最重要部分。" +
        "<br><br>" +
        "(D) '地基' 意味着建筑物最低的承重部分，通常在地下。"
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
