// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The new professor's impressive __________ included degrees from top universities and numerous published papers.",
    chinese_question: "新教授令人印象深刻的 __________ 包括来自顶尖大学的学位和众多发表的论文。",
    answers: [
        { option: "A", answer: "credentials", chinese_answer: "资历", chinese_romanization: "zīlì" },
        { option: "B", answer: "criticisms", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "C", answer: "speculations", chinese_answer: "推测", chinese_romanization: "tuīcè" },
        { option: "D", answer: "grievances", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'credentials' means qualifications or achievements." +
        "<br><br>" +
        "(B) 'criticisms' means disapproving judgments or evaluations." +
        "<br><br>" +
        "(C) 'speculations' means guesses or theories." +
        "<br><br>" +
        "(D) 'grievances' means complaints or resentments.",
    chinese_explanation: "(A) '资历' 意味着资格或成就。" +
        "<br><br>" +
        "(B) '批评' 意味着不赞成的判断或评价。" +
        "<br><br>" +
        "(C) '推测' 意味着猜测或理论。" +
        "<br><br>" +
        "(D) '抱怨' 意味着投诉或怨恨。"
    },
    {
        id: 2,
    question: "The __________ had a strong sense of community and often organized local events.",
    chinese_question: "__________ 有很强的社区意识，经常组织当地活动。",
    answers: [
        { option: "A", answer: "visitors", chinese_answer: "访客", chinese_romanization: "fǎngkè" },
        { option: "B", answer: "tourists", chinese_answer: "游客", chinese_romanization: "yóukè" },
        { option: "C", answer: "passersby", chinese_answer: "路人", chinese_romanization: "lùrén" },
        { option: "D", answer: "residents", chinese_answer: "居民", chinese_romanization: "jūmín" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'residents' means people who live somewhere permanently or on a long-term basis." +
        "<br><br>" +
        "(A) 'visitors' means people who visit a person or place." +
        "<br><br>" +
        "(B) 'tourists' means people who are traveling or visiting a place for pleasure." +
        "<br><br>" +
        "(C) 'passersby' means people who happen to be going past something, especially on foot.",
    chinese_explanation: "(D) '居民' 意味着长期或永久居住在某地的人。" +
        "<br><br>" +
        "(A) '访客' 意味着访问某人或某地的人。" +
        "<br><br>" +
        "(B) '游客' 意味着为娱乐而旅行或参观某地的人。" +
        "<br><br>" +
        "(C) '路人' 意味着碰巧路过某物的人，特别是步行。"
    },
    {
        id: 3,
    question: "The conference __________ ensured that all the speakers had the equipment they needed.",
    chinese_question: "会议的 __________ 确保所有发言人都有他们需要的设备。",
    answers: [
        { option: "A", answer: "host", chinese_answer: "主办方", chinese_romanization: "zhǔbàn fāng" },
        { option: "B", answer: "attendee", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" },
        { option: "C", answer: "participant", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" },
        { option: "D", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'host' means a person responsible for organizing and running an event." +
        "<br><br>" +
        "(B) 'attendee' means a person who is present at an event, meeting, or function." +
        "<br><br>" +
        "(C) 'participant' means a person who takes part in something." +
        "<br><br>" +
        "(D) 'observer' means a person who watches or notices something.",
    chinese_explanation: "(A) '主办方' 意味着负责组织和运行活动的人。" +
        "<br><br>" +
        "(B) '参与者' 意味着出席活动、会议或功能的人。" +
        "<br><br>" +
        "(C) '参与者' 意味着参与某事的人。" +
        "<br><br>" +
        "(D) '观察者' 意味着观察或注意某事的人。"
    },
    {
        id: 4,
        question: "In __________ to her grandmother's wishes, she decided to pursue a career in medicine instead of music.",
        chinese_question: "出于对祖母的 __________，她决定追求医学事业而不是音乐。",
        answers: [
            { option: "A", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "B", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "disrespect", chinese_answer: "不敬", chinese_romanization: "bùjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deference' means humble submission and respect." +
            "<br><br>" +
            "(A) 'defiance' means open resistance; bold disobedience." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent." +
            "<br><br>" +
            "(D) 'disrespect' means lack of respect or courtesy.",
        chinese_explanation: "(B) '尊重'一词意味着谦卑的服从和尊敬。" +
            "<br><br>" +
            "(A) '反抗' 意味着公开抵抗；大胆的不服从。" +
            "<br><br>" +
            "(C) '反对' 意味着抵抗或异议。" +
            "<br><br>" +
            "(D) '不敬' 意味着缺乏尊重或礼貌。"
    },
    {
        id: 5,
        question: "The hero of the story is the __________ of courage and selflessness.",
        chinese_question: "故事中的英雄是勇气和无私的 __________。",
        answers: [
            { option: "A", answer: "portrayal", chinese_answer: "描绘", chinese_romanization: "miáohuì" },
            { option: "B", answer: "representation", chinese_answer: "代表", chinese_romanization: "dàibiǎo" },
            { option: "C", answer: "depiction", chinese_answer: "描述", chinese_romanization: "miáoshù" },
            { option: "D", answer: "embodiment", chinese_answer: "体现", chinese_romanization: "tǐxiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'embodiment' means a tangible or visible form of an idea, quality, or feeling." +
            "<br><br>" +
            "(A) 'portrayal' means the act of depicting someone or something." +
            "<br><br>" +
            "(B) 'representation' means the action of speaking or acting on behalf of someone." +
            "<br><br>" +
            "(C) 'depiction' means the action of depicting something.",
        chinese_explanation: "(D) '体现'一词意味着一种思想、品质或感觉的有形或可见形式。" +
            "<br><br>" +
            "(A) '描绘' 意味着描绘某人或某物的行为。" +
            "<br><br>" +
            "(B) '代表' 意味着代表某人的行动。" +
            "<br><br>" +
            "(C) '描述' 意味着描绘某物的行为。"
    },
    {
        id: 6,
    question: "The surgeon skillfully reattached the patient's severed __________ after the accident.",
    chinese_question: "事故后，外科医生熟练地重新接上了患者断掉的 __________ 。",
    answers: [
        { option: "A", answer: "limb", chinese_answer: "肢体", chinese_romanization: "zhītǐ" },
        { option: "B", answer: "ear", chinese_answer: "耳朵", chinese_romanization: "ěrduǒ" },
        { option: "C", answer: "nose", chinese_answer: "鼻子", chinese_romanization: "bízi" },
        { option: "D", answer: "hair", chinese_answer: "头发", chinese_romanization: "tóufǎ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'limb' means an arm or leg of a person or four-legged animal, or a bird's wing." +
        "<br><br>" +
        "(B) 'ear' means the organ of hearing and balance in humans and other vertebrates." +
        "<br><br>" +
        "(C) 'nose' means the part projecting above the mouth on the face of a person or animal, containing the nostrils and used for breathing and smelling." +
        "<br><br>" +
        "(D) 'hair' means any of the fine threadlike strands growing from the skin of humans, mammals, and some other animals.",
    chinese_explanation: "(A) '肢体' 意味着人的胳膊或腿，四足动物的腿，或鸟的翅膀。" +
        "<br><br>" +
        "(B) '耳朵' 意味着人类和其他脊椎动物的听觉和平衡器官。" +
        "<br><br>" +
        "(C) '鼻子' 意味着在人或动物脸上嘴巴上方突出的部分，包含鼻孔，用于呼吸和嗅觉。" +
        "<br><br>" +
        "(D) '头发' 意味着从人类、哺乳动物和其他一些动物的皮肤上长出的细长线状的任何一个。"
    },
    {
        id: 7,
    question: "He dedicated a significant __________ of his time to volunteering at the local shelter.",
    chinese_question: "他将大量时间 __________ 投入到当地收容所的志愿服务中。",
    answers: [
        { option: "A", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
        { option: "B", answer: "fraction", chinese_answer: "片段", chinese_romanization: "piànduàn" },
        { option: "C", answer: "piece", chinese_answer: "一块", chinese_romanization: "yī kuài" },
        { option: "D", answer: "element", chinese_answer: "元素", chinese_romanization: "yuánsù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'portion' means a part of a whole." +
        "<br><br>" +
        "(B) 'fraction' means a small part or item forming a piece of a whole." +
        "<br><br>" +
        "(C) 'piece' means a portion of an object or of material, produced by cutting, tearing, or breaking the whole." +
        "<br><br>" +
        "(D) 'element' means a part or aspect of something abstract, especially one that is essential or characteristic.",
    chinese_explanation: "(A) '部分' 意味着整体的一部分。" +
        "<br><br>" +
        "(B) '片段' 意味着构成整体的一小部分或项目。" +
        "<br><br>" +
        "(C) '一块' 意味着通过切割、撕裂或打破整体而产生的一部分物体或材料。" +
        "<br><br>" +
        "(D) '元素' 意味着某物的一个部分或方面，尤指一个基本的或典型的。"
    },
    {
        id: 8,
    question: "She has a busy __________ filled with meetings and appointments.",
    chinese_question: "她有一个繁忙的 __________，充满了会议和预约。",
    answers: [
        { option: "A", answer: "agenda", chinese_answer: "议程", chinese_romanization: "yìchéng" },
        { option: "B", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiān biǎo" },
        { option: "C", answer: "whim", chinese_answer: "突发奇想", chinese_romanization: "tūfāqíxiǎng" },
        { option: "D", answer: "surprise", chinese_answer: "惊喜", chinese_romanization: "jīngxǐ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
        "<br><br>" +
        "(A) 'agenda' means a list of items to be discussed at a formal meeting." +
        "<br><br>" +
        "(C) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
        "<br><br>" +
        "(D) 'surprise' means an unexpected or astonishing event, fact, or thing.",
    chinese_explanation: "(B) '时间表' 意味着计划执行的过程或程序，列出预定的事件和时间。" +
        "<br><br>" +
        "(A) '议程' 意味着正式会议上要讨论的项目列表。" +
        "<br><br>" +
        "(C) '突发奇想' 意味着突然的欲望或改变主意，尤其是异常或无法解释的。" +
        "<br><br>" +
        "(D) '惊喜' 意味着意外或惊人的事件、事实或事物。"
    },
    {
        id: 9,
        question: "The students submitted a __________ to extend the library hours during finals week.",
        chinese_question: "学生们提交了 __________ ，要求在期末考试周延长图书馆的开放时间。",
        answers: [
            { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" },
            { option: "C", answer: "offer", chinese_answer: "提议", chinese_romanization: "tíyì" },
            { option: "D", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'request' means an act of asking politely or formally for something." +
            "<br><br>" +
            "(A) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(B) 'assertion' means a confident and forceful statement of fact or belief." +
            "<br><br>" +
            "(C) 'offer' means to present or proffer something for someone to accept or reject as desired.",
        chinese_explanation: "(D) '请求' 意味着礼貌或正式地要求某事。" +
            "<br><br>" +
            "(A) '拒绝' 意味着驳回或拒绝提议、想法等。" +
            "<br><br>" +
            "(B) '断言' 意味着自信和有力的事实或信念陈述。" +
            "<br><br>" +
            "(C) '提议' 意味着提出或提供某物供某人接受或拒绝。"
    },
    {
        id: 10,
        question: "To his __________, he realized he had forgotten to save the document before the computer crashed.",
        chinese_question: "令他 __________ 的是，他意识到在电脑崩溃之前他忘记保存文件了。",
        answers: [
            { option: "A", answer: "dismay", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dismay' means distress caused by something unexpected." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(A) '沮丧' 意味着因意外的事情引起的忧虑。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(C) '放松' 意味着在解除焦虑或痛苦后的安心和放松感。" +
            "<br><br>" +
            "(D) '娱乐' 意味着发现某事有趣的状态或经历。"
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
