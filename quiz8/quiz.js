// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ path through the forest twisted and turned, making it a challenging hike.",
        chinese_question: "穿过森林的__________小径曲折蜿蜒，使徒步旅行充满挑战。",
        answers: [
            { option: "A", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
            { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "serpentine", chinese_answer: "曲折的", chinese_romanization: "qūzhé de" },
            { option: "D", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serpentine' means of or like a serpent or snake; winding and twisting like a snake." +
            "<br><br>" +
            "(A) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(B) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(D) 'linear' means arranged in or extending along a straight or nearly straight line.",
        chinese_explanation: "(C) '曲折的'一词意味着像蛇或蛇一样的；像蛇一样蜿蜒和扭曲的。" +
            "<br><br>" +
            "(A) '直的' 意味着只朝一个方向延伸或移动；没有弯曲或弯曲的。" +
            "<br><br>" +
            "(B) '直接的' 意味着通过最短的方式从一个地方延伸或移动到另一个地方，没有改变方向或停下来。" +
            "<br><br>" +
            "(D) '线性的' 意味着排列在或沿着一条直线或近乎直线延伸的。"
    },
    {
        id: 2,
    question: "Her __________ concern was the well-being of her children, above all else.",
    chinese_question: "她的 __________ 关注是她孩子的福祉，高于一切。",
    answers: [
        { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "B", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "C", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
        { option: "D", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'paramount' means more important than anything else; supreme." +
        "<br><br>" +
        "(A) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(B) 'insignificant' means too small or unimportant to be worth considering." +
        "<br><br>" +
        "(C) 'minimal' means of a minimum amount, quantity, or degree.",
    chinese_explanation: "(D) '最重要的' 意味着比其他任何事情都重要；至高无上的。" +
        "<br><br>" +
        "(A) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(B) '微不足道的' 意味着太小或不重要，不值得考虑的。" +
        "<br><br>" +
        "(C) '最小的' 意味着最小的数量、数量或程度。"
    },
    {
        id: 3,
        question: "Her __________ attitude toward deadlines caused her to miss several important submissions.",
        chinese_question: "她对截止日期的 __________ 态度导致她错过了几次重要的提交。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" },
            { option: "B", answer: "conscientious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "C", answer: "slovenly", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" },
            { option: "D", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slovenly' means careless, excessively casual." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'conscientious' means wishing to do what is right, especially to do one's work or duty well and thoroughly." +
            "<br><br>" +
            "(D) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role.",
        chinese_explanation: "(C) '懒散的' 意味着粗心的，过于随意的。" +
            "<br><br>" +
            "(A) '专心的' 意味着密切关注某事。" +
            "<br><br>" +
            "(B) '认真的' 意味着希望做正确的事，特别是做好和彻底地完成工作或职责。" +
            "<br><br>" +
            "(D) '负责的' 意味着有义务做某事，或作为工作或角色的一部分对某人有控制或照顾。"
    },
    {
        id: 4,
        question: "The __________ art gallery owner often used elaborate words to impress his clients.",
        chinese_question: "那位 __________ 的画廊老板经常使用复杂的词汇来打动客户。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "unassuming", chinese_answer: "不装腔作势的", chinese_romanization: "bù zhuāngqiāng zuòshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(B) '自命不凡的' 意味着试图通过表现出比实际拥有的更大的重要性、才能、文化等来给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '不装腔作势的' 意味着不自负或傲慢的；谦虚的。"
    },
    {
        id: 5,
        question: "The __________ goods needed to be stored in a refrigerator to prevent spoilage.",
        chinese_question: "这些 __________ 的货物需要存放在冰箱里以防变质。",
        answers: [
            { option: "A", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" },
            { option: "B", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "C", answer: "perishable", chinese_answer: "易腐的", chinese_romanization: "yì fǔ de" },
            { option: "D", answer: "non-perishable", chinese_answer: "不易腐烂的", chinese_romanization: "bù yì fǔlàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perishable' means likely to decay or go bad quickly." +
            "<br><br>" +
            "(A) 'durable' means able to withstand wear, pressure, or damage; hard-wearing." +
            "<br><br>" +
            "(B) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(D) 'non-perishable' means not likely to decay or go bad quickly.",
        chinese_explanation: "(C) '易腐的' 意味着可能很快腐烂或变质的。" +
            "<br><br>" +
            "(A) '耐用的' 意味着能够经受磨损、压力或损坏的；耐用的。" +
            "<br><br>" +
            "(B) '持久的' 意味着持久的或能够长时间持续的。" +
            "<br><br>" +
            "(D) '不易腐烂的' 意味着不太可能腐烂或变质的。"
    },
    {
        id: 6,
        question: "The scientist introduced a __________ approach to solving the complex problem, which no one had considered before.",
        chinese_question: "这位科学家提出了一种__________的方法来解决这个复杂的问题，这是前所未有的。",
        answers: [
            { option: "A", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "novel", chinese_answer: "新颖的", chinese_romanization: "xīnyǐng de" },
            { option: "D", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'novel' means new or unusual in an interesting way." +
            "<br><br>" +
            "(A) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(B) 'outdated' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(C) '新颖的'一词意味着新的或不寻常的，且有趣的。" +
            "<br><br>" +
            "(A) '传统的' 意味着作为传统一部分存在或作为传统一部分存在的；长久建立的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '常规的' 意味着基于或符合通常所做的或相信的。"
    },
    {
        id: 7,
        question: "Her daily routine was quite __________, filled with repetitive tasks and little excitement.",
        chinese_question: "她的日常生活非常__________，充满了重复的任务和很少的兴奋。",
        answers: [
            { option: "A", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "B", answer: "thrilling", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rén xīn de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(A) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(B) 'thrilling' means causing excitement and pleasure; exhilarating." +
            "<br><br>" +
            "(D) 'unique' means being the only one of its kind; unlike anything else.",
        chinese_explanation: "(C) '平凡的'一词意味着缺乏兴趣或兴奋的；无聊的。" +
            "<br><br>" +
            "(A) '非凡的' 意味着非常不寻常或非凡的。" +
            "<br><br>" +
            "(B) '激动人心的' 意味着引起兴奋和愉快的；令人振奋的。" +
            "<br><br>" +
            "(D) '独特的' 意味着独一无二的；与其他任何事物不同的。"
    },
    {
        id: 8,
        question: "The night sky was filled with a __________ of stars, each one twinkling brightly.",
        chinese_question: "夜空中布满了__________的星星，每一颗都闪闪发光。",
        answers: [
            { option: "A", answer: "few", chinese_answer: "几颗", chinese_romanization: "jǐ kē" },
            { option: "B", answer: "couple", chinese_answer: "两颗", chinese_romanization: "liǎng kē" },
            { option: "C", answer: "myriad", chinese_answer: "无数的", chinese_romanization: "wúshù de" },
            { option: "D", answer: "handful", chinese_answer: "一把", chinese_romanization: "yī bǎ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'myriad' means a countless or extremely great number." +
            "<br><br>" +
            "(A) 'few' means a small number of." +
            "<br><br>" +
            "(B) 'couple' means two individuals of the same sort considered together." +
            "<br><br>" +
            "(D) 'handful' means a small number or amount.",
        chinese_explanation: "(C) '无数的'一词意味着无数的或极多的数量。" +
            "<br><br>" +
            "(A) '几颗' 意味着少量的。" +
            "<br><br>" +
            "(B) '两颗' 意味着两个人或两物一起考虑。" +
            "<br><br>" +
            "(D) '一把' 意味着少量的。"
    },
    {
        id: 9,
        question: "The villain's __________ plot to take over the city was so intricate and cruel that it left everyone in fear and disbelief.",
        chinese_question: "反派 __________ 的计划要接管这座城市，计划如此复杂和残酷，使每个人都感到恐惧和难以置信。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "C", answer: "fiendish", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
            { option: "D", answer: "innocent", chinese_answer: "无辜的", chinese_romanization: "wúgū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fiendish' means extremely cruel or unpleasant; devilish." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'innocent' means not guilty of a crime or offense; harmless.",
        chinese_explanation: "(C) '恶毒的' 意味着极其残酷或不愉快的；邪恶的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '善良的' 意味着有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(D) '无辜的' 意味着无罪的；无害的。"
    },
    {
        id: 10,
    question: "The protagonist was a __________ being, facing the same fears and challenges as any other human.",
    chinese_question: "主角是一个__________的存在，面临着与其他人类相同的恐惧和挑战。",
    answers: [
        { option: "A", answer: "immortal", chinese_answer: "不朽的", chinese_romanization: "bùxiǔ de" },
        { option: "B", answer: "divine", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
        { option: "C", answer: "mortal", chinese_answer: "凡人的", chinese_romanization: "fánrén de" },
        { option: "D", answer: "eternal", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mortal' means subject to death." +
        "<br><br>" +
        "(A) 'immortal' means living forever; never dying or decaying." +
        "<br><br>" +
        "(B) 'divine' means of, from, or like God or a god." +
        "<br><br>" +
        "(D) 'eternal' means lasting or existing forever; without end.",
    chinese_explanation: "(C) '凡人的' 一词意味着会死亡的。" +
        "<br><br>" +
        "(A) '不朽的' 意味着永远活着的；永不死或腐烂的。" +
        "<br><br>" +
        "(B) '神圣的' 意味着像上帝或神的。" +
        "<br><br>" +
        "(D) '永恒的' 意味着永远存在的；没有尽头的。"
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
