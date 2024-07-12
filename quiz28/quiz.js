// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The street is __________ for its high crime rate, causing residents to feel unsafe.",
        chinese_question: "这条街因高犯罪率而 __________，使居民感到不安全。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "notorious", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíng zhāozhù de" },
            { option: "C", answer: "respected", chinese_answer: "受人尊敬的", chinese_romanization: "shòu rén zūnjìng de" },
            { option: "D", answer: "reputable", chinese_answer: "有信誉的", chinese_romanization: "yǒu xìnyù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'notorious' means famous or well-known, typically for some bad quality or deed." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(C) 'respected' means admired by many people." +
            "<br><br>" +
            "(D) 'reputable' means having a good reputation.",
        chinese_explanation: "(B) '臭名昭著的' 意味着以某种坏品质或行为闻名。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人知道的。" +
            "<br><br>" +
            "(C) '受人尊敬的' 意味着受到许多人钦佩的。" +
            "<br><br>" +
            "(D) '有信誉的' 意味着有好名声的。"
    },
    {
        id: 2,
        question: "The horse was __________ and hard to control during the storm.",
        chinese_question: "在暴风雨期间，这匹马变得__________，很难控制。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "B", answer: "skittish", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "D", answer: "brave", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'skittish' means excitable or easily scared." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'brave' means ready to face and endure danger or pain; showing courage.",
        chinese_explanation: "(B) '胆小'一词意味着容易兴奋或受惊。" +
            "<br><br>" +
            "(A) '冷静' 意味着不表现或感到紧张、愤怒或其他强烈的情绪。" +
            "<br><br>" +
            "(C) '懒惰' 意味着不愿工作或使用能量。" +
            "<br><br>" +
            "(D) '勇敢' 意味着准备面对和忍受危险或痛苦；表现出勇气。"
    },
    {
        id: 3,
        question: "The smell of freshly baked cookies was __________ of her grandmother's kitchen, bringing back fond childhood memories.",
        chinese_question: "新烤出炉的饼干味道让她 __________ 奶奶的厨房，带回了美好的童年记忆。",
        answers: [
            { option: "A", answer: "forgetful", chinese_answer: "健忘的", chinese_romanization: "jiànwàng de" },
            { option: "B", answer: "reminiscent", chinese_answer: "使人想起的", chinese_romanization: "shǐ rén xiǎngqǐ de" },
            { option: "C", answer: "unfamiliar", chinese_answer: "不熟悉的", chinese_romanization: "bù shúxī de" },
            { option: "D", answer: "oblivious", chinese_answer: "不在意的", chinese_romanization: "bù zàiyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reminiscent' means tending to remind one of something." +
            "<br><br>" +
            "(A) 'forgetful' means apt or likely not to remember." +
            "<br><br>" +
            "(C) 'unfamiliar' means not known or recognized." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(B) '使人想起的' 意味着让人想起某事。" +
            "<br><br>" +
            "(A) '健忘的' 意味着容易或可能忘记的。" +
            "<br><br>" +
            "(C) '不熟悉的' 意味着不认识的或不熟悉的。" +
            "<br><br>" +
            "(D) '不在意的' 意味着没有意识到或不关心周围发生的事情。"
    },
    {
        id: 4,
        question: "The judge's __________ expression conveyed the seriousness of the trial, making it clear that the matter at hand was of great importance.",
        chinese_question: "法官 __________ 的表情传达了审判的严肃性，明确表明眼前的事情非常重要。",
        answers: [
            { option: "A", answer: "solemn", chinese_answer: "庄严的", chinese_romanization: "zhuāngyán de" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "jovial", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(A) '庄严的' 意味着正式和庄重的；严肃的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着明显地快乐和乐观的。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(D) '友好的' 意味着快乐和友好的。"
    },
    {
        id: 5,
        question: "It is __________ that a person who is afraid of heights would become a pilot.",
        chinese_question: "一个害怕高空的人却成为了飞行员，这很 __________。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "paradoxical", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "C", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradoxical' means seemingly absurd or self-contradictory." +
            "<br><br>" +
            "(A) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(C) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit." +
            "<br><br>" +
            "(D) 'rational' means based on or in accordance with reason or logic.",
        chinese_explanation: "(B) '矛盾的' 意味着看似荒谬或自相矛盾的。" +
            "<br><br>" +
            "(A) '合理的' 意味着符合逻辑规则或正式论证的。" +
            "<br><br>" +
            "(C) '明智的' 意味着根据智慧或审慎选择的；可能有益的。" +
            "<br><br>" +
            "(D) '理性的' 意味着基于或符合理由或逻辑的。"
    },
    {
        id: 6,
        question: "The villain's __________ plot to overthrow the government was thwarted by the heroes.",
        chinese_question: "反派推翻政府的 __________ 阴谋被英雄们挫败了。",
        answers: [
            { option: "A", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "B", answer: "good", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "C", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
            { option: "D", answer: "kind", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nefarious' means (typically of an action or activity) wicked or criminal." +
            "<br><br>" +
            "(A) 'benign' means gentle and kindly." +
            "<br><br>" +
            "(B) 'good' means to be desired or approved of." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(C) '邪恶的' 意味着（通常指行为或活动）邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '良性的' 意味着温和和善良的。" +
            "<br><br>" +
            "(B) '善良的' 意味着被渴望或认可的。" +
            "<br><br>" +
            "(D) '友好的' 意味着有或表现出友好、慷慨和体贴的性格。"
    },
    {
        id: 7,
    question: "The debate turned __________, with both sides fiercely defending their positions.",
    chinese_question: "辩论变得__________，双方都在激烈地捍卫自己的立场。",
    answers: [
        { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "mild", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
        { option: "C", answer: "tame", chinese_answer: "驯服的", chinese_romanization: "xùnfú de" },
        { option: "D", answer: "ferocious", chinese_answer: "凶猛的", chinese_romanization: "xiōngměng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'ferocious' means savagely fierce, cruel, or violent. Figuratively, it can mean being intense and aggressive." +
        "<br><br>" +
        "(A) 'gentle' means mild in temperament or behavior; kind or tender." +
        "<br><br>" +
        "(B) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(C) 'tame' means (of an animal) not dangerous or frightened of people; domesticated.",
    chinese_explanation: "(D) '凶猛的'一词意味着凶猛、残酷或暴力的。比喻地，它可以表示激烈和咄咄逼人的。" +
        "<br><br>" +
        "(A) '温和的' 意味着性格或行为温和的；善良或温柔的。" +
        "<br><br>" +
        "(B) '温柔的' 意味着不严重、严厉或苛刻的。" +
        "<br><br>" +
        "(C) '驯服的' 意味着（动物）不危险或不怕人；驯养的。"
    },
    {
        id: 8,
    question: "The wedding decorations were __________, featuring intricate designs and numerous flowers.",
    chinese_question: "婚礼装饰非常__________，具有复杂的设计和大量的花卉。",
    answers: [
        { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
        { option: "C", answer: "elaborate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
        { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning." +
        "<br><br>" +
        "(A) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
        "<br><br>" +
        "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
    chinese_explanation: "(C) '精致的' 一词意味着涉及许多精心安排的部分或细节；设计和计划详尽且复杂的。" +
        "<br><br>" +
        "(A) '简单的' 意味着容易理解或完成；没有难度的。" +
        "<br><br>" +
        "(B) '朴素的' 意味着没有装饰或精致的；简单或普通的。" +
        "<br><br>" +
        "(D) '基本的' 意味着形成基本的基础或起点的；基本的。"
    },
    {
        id: 9,
        question: "The destruction caused by the hurricane was __________, leaving entire communities in ruins.",
        chinese_question: "飓风造成的破坏是 __________ 的，整个社区都被毁了。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "unimpressive", chinese_answer: "不显眼", chinese_romanization: "bù xiǎnyǎn" },
            { option: "C", answer: "unimaginable", chinese_answer: "难以想象", chinese_romanization: "nányǐ xiǎngxiàng" },
            { option: "D", answer: "forgettable", chinese_answer: "易忘", chinese_romanization: "yìwàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unimaginable' means difficult or impossible to comprehend." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'unimpressive' means not arousing admiration or respect." +
            "<br><br>" +
            "(D) 'forgettable' means easily forgotten.",
        chinese_explanation: "(C) '难以想象' 意味着难以或不可能理解。" +
            "<br><br>" +
            "(A) '次要' 意味着在重要性、严重性或意义上较小。" +
            "<br><br>" +
            "(B) '不显眼' 意味着不引起钦佩或尊重。" +
            "<br><br>" +
            "(D) '易忘' 意味着容易被遗忘。"
    },
    {
        id: 10,
        question: "Her __________ presentation earned her high praise from the judges.",
        chinese_question: "她的 __________ 演讲赢得了评委的高度赞赏。",
        answers: [
            { option: "A", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "unsure", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eloquent' means fluent or persuasive in speaking or writing." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'unsure' means not certain or confident." +
            "<br><br>" +
            "(D) 'hesitant' means lacking decisiveness; uncertain or unwilling to make a decision.",
        chinese_explanation: "(A) '雄辩' 意味着说话或写作流利且有说服力。" +
            "<br><br>" +
            "(B) '笨拙' 意味着在动作或处理事情上笨拙。" +
            "<br><br>" +
            "(C) '不确定' 意味着不确定或不自信。" +
            "<br><br>" +
            "(D) '犹豫' 意味着缺乏决断力；不确定或不愿做出决定。"
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
