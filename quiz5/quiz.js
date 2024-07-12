// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The explorer's __________ discoveries amazed the scientific community.",
        chinese_question: "探险家 __________ 发现让科学界感到惊讶。",
        answers: [
            { option: "A", answer: "remarkable", chinese_answer: "卓越的", chinese_romanization: "zhuóyuè de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "whimsical", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "D", answer: "clandestine", chinese_answer: "秘密的", chinese_romanization: "mìmì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remarkable' means extraordinary or outstanding." +
            "<br><br>" +
            "(B) 'mundane' means ordinary or commonplace." +
            "<br><br>" +
            "(C) 'whimsical' means playful or fanciful." +
            "<br><br>" +
            "(D) 'clandestine' means secret or concealed.",
        chinese_explanation: "(A) '卓越的' 意味着非凡或杰出。" +
            "<br><br>" +
            "(B) '平凡的' 意味着普通或平淡。" +
            "<br><br>" +
            "(C) '古怪的' 意味着玩味或奇特。" +
            "<br><br>" +
            "(D) '秘密的' 意味着秘密或隐蔽。"
    },
    {
        id: 2,
        question: "After the long and exhausting journey, she felt __________ and could barely summon the energy to unpack her bags.",
        chinese_question: "经过漫长而疲惫的旅程，她感到 __________，几乎没有精力去打开行李。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīngdǎcǎi de" },
            { option: "D", answer: "animated", chinese_answer: "生气勃勃的", chinese_romanization: "shēngqì bóbó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'listless' means lacking energy or enthusiasm." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy." +
            "<br><br>" +
            "(D) 'animated' means full of life or excitement; lively.",
        chinese_explanation: "(C) '无精打采的' 意味着缺乏能量或热情的。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及极大的活动性或活力。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满活力和能量的。" +
            "<br><br>" +
            "(D) '生气勃勃的' 意味着充满活力或兴奋的；活泼的。"
    },
    {
        id: 3,
        question: "Understanding basic math concepts is __________ for mastering more advanced topics in the subject.",
        chinese_question: "理解基本的数学概念是掌握更高级主题的 __________。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "C", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "D", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kě xuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fundamental' means forming a necessary base or core; of central importance." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'unnecessary' means not needed." +
            "<br><br>" +
            "(D) 'optional' means available to be chosen but not obligatory.",
        chinese_explanation: "(C) '基本的' 意味着形成必要的基础或核心；至关重要的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '不必要的' 意味着不需要的。" +
            "<br><br>" +
            "(D) '可选的' 意味着可选择的，但不是强制的。"
    },
    {
        id: 4,
        question: "The __________ dancer struggled to keep up with the graceful movements of her peers.",
        chinese_question: "这位__________的舞者难以跟上她同伴的优雅动作。",
        answers: [
            { option: "A", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "B", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "elegant", chinese_answer: "优美的", chinese_romanization: "yōuměi de" },
            { option: "D", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ungainly' means awkward and clumsy." +
            "<br><br>" +
            "(A) 'graceful' means having or showing grace or elegance." +
            "<br><br>" +
            "(C) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(D) 'agile' means able to move quickly and easily.",
        chinese_explanation: "(B) '笨拙的'一词意味着笨拙和不灵巧的。" +
            "<br><br>" +
            "(A) '优雅的' 意味着表现出优雅或优雅的。" +
            "<br><br>" +
            "(C) '优美的' 意味着外观或举止上令人愉悦地优雅和时尚的。" +
            "<br><br>" +
            "(D) '敏捷的' 意味着能够快速轻松地移动。"
    },
    {
        id: 5,
        question: "His __________ manner and sophisticated speech made him a favorite at social gatherings.",
        chinese_question: "他的 __________ 举止和精致的言谈使他成为社交聚会上的宠儿。",
        answers: [
            { option: "A", answer: "awkward", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "rustic", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "C", answer: "urbane", chinese_answer: "文雅的", chinese_romanization: "wényǎ de" },
            { option: "D", answer: "clumsy", chinese_answer: "笨手笨脚的", chinese_romanization: "bènshǒubènjiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urbane' means suave, courteous, and refined in manner." +
            "<br><br>" +
            "(A) 'awkward' means causing difficulty; hard to deal with." +
            "<br><br>" +
            "(B) 'rustic' means relating to the countryside; rural." +
            "<br><br>" +
            "(D) 'clumsy' means awkward in movement or handling things.",
        chinese_explanation: "(C) '文雅的' 意味着举止文雅、彬彬有礼的。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着造成困难的；难以处理的。" +
            "<br><br>" +
            "(B) '乡村的' 意味着与乡村有关的；乡村的。" +
            "<br><br>" +
            "(D) '笨手笨脚的' 意味着动作笨拙的。"
    },
    {
        id: 6,
        question: "The __________ conditions in the refugee camp were heartbreaking and demanded immediate attention.",
        chinese_question: "难民营的 __________ 条件令人心碎，亟需立即关注。",
        answers: [
            { option: "A", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "B", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "wretched", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" },
            { option: "D", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wretched' means in a very unhappy or unfortunate state." +
            "<br><br>" +
            "(A) 'comfortable' means providing physical ease and relaxation." +
            "<br><br>" +
            "(B) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(C) '悲惨的' 意味着处于非常不幸福或不幸的状态。" +
            "<br><br>" +
            "(A) '舒适的' 意味着提供身体的舒适和放松的。" +
            "<br><br>" +
            "(B) '奢华的' 意味着极其舒适、优雅或愉快的，特别是以涉及巨大的开支。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着给予一种快乐的满足感或享受的。"
    },
    {
        id: 7,
        question: "The operating room must be kept __________ to prevent any infections.",
        chinese_question: "手术室必须保持__________，以防止任何感染。",
        answers: [
            { option: "A", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" },
            { option: "B", answer: "sterile", chinese_answer: "无菌的", chinese_romanization: "wújūn de" },
            { option: "C", answer: "dirty", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "D", answer: "contaminated", chinese_answer: "受污染的", chinese_romanization: "shòu wūrǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sterile' means free from bacteria or other living microorganisms; totally clean." +
            "<br><br>" +
            "(A) 'clean' means free from dirt, marks, or stains." +
            "<br><br>" +
            "(C) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(D) 'contaminated' means having been made impure by exposure to or addition of a poisonous or polluting substance.",
        chinese_explanation: "(B) '无菌的'一词意味着没有细菌或其他活的微生物；完全干净。" +
            "<br><br>" +
            "(A) '干净的' 意味着没有污垢、痕迹或污渍。" +
            "<br><br>" +
            "(C) '肮脏的' 意味着覆盖或标记有不洁物质。" +
            "<br><br>" +
            "(D) '受污染的' 意味着因暴露于有毒或污染物质而变得不纯。"
    },
    {
        id: 8,
        question: "The detective's __________ ability to solve even the most complex cases left everyone in awe.",
        chinese_question: "这位侦探 __________ 的能力能够解决最复杂的案件，让所有人都敬畏不已。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "uncanny", chinese_answer: "神秘", chinese_romanization: "shénmì" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'uncanny' means strange or mysterious, especially in an unsettling way." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(C) '神秘' 意味着奇怪或神秘，尤其是令人不安的方式。" +
            "<br><br>" +
            "(A) '普通' 意味着没有特殊或独特的特征；正常。" +
            "<br><br>" +
            "(B) '平凡' 意味着缺乏兴趣或兴奋；乏味。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够被预测。"
    },
    {
        id: 9,
        question: "Her __________ outlook on life helped her overcome many obstacles with a positive attitude.",
        chinese_question: "她对生活的 __________ 态度帮助她以积极的态度克服了许多障碍。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "sanguine", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshìjísú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanguine' means optimistic or positive, especially in an apparently bad or difficult situation." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity.",
        chinese_explanation: "(C) '乐观的' 意味着在看似糟糕或困难的情况下，仍保持乐观或积极。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '愤世嫉俗的' 意味着认为人们是出于自利而行动的；不信任人类真诚或诚信的。"
    },
    {
        id: 10,
        question: "She approached her studies with __________ dedication, always putting in extra effort.",
        chinese_question: "她以__________的态度对待学习，总是付出额外的努力。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "insincere", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" },
            { option: "C", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'earnest' means showing sincere and intense conviction. Figuratively, it can mean being very committed and serious." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'insincere' means not expressing genuine feelings." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '认真的'一词意味着表现出真诚和强烈的信念。比喻地，它可以表示非常投入和认真。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '不真诚的' 意味着不表达真实感情的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
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
