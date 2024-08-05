// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She carried a rabbit's foot as a __________ charm to ward off bad luck.",
        chinese_question: "她带着一只兔子脚作为 __________ 的护身符以避开厄运。",
        answers: [
            { option: "A", answer: "superstitious", chinese_answer: "迷信的", chinese_romanization: "míxìn de" },
            { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "C", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "analytical", chinese_answer: "分析的", chinese_romanization: "fēnxī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'superstitious' means having beliefs based on superstition rather than reason or knowledge." +
            "<br><br>" +
            "(B) 'realistic' means having a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(D) 'analytical' means relating to or using analysis or logical reasoning.",
        chinese_explanation: "(A) '迷信的' 意味着基于迷信而不是理性或知识的信念。" +
            "<br><br>" +
            "(B) '现实的' 意味着对可以实现或预期的事情有一个明智和实际的想法。" +
            "<br><br>" +
            "(C) '事实的' 意味着关心实际情况。" +
            "<br><br>" +
            "(D) '分析的' 意味着使用分析或逻辑推理。"
    },
    {
        id: 2,
    question: "He gave an __________ speech about the importance of community service, speaking with genuine passion and conviction.",
    chinese_question: "他发表了一篇关于社区服务重要性的__________演讲，讲话时充满了真诚的热情和信念。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "B", answer: "insincere", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'earnest' means showing sincere and intense conviction." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(B) 'insincere' means not expressing genuine feelings." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(D) '认真的' 一词意味着表现出真诚和强烈的信念。" +
        "<br><br>" +
        "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(B) '不真诚的' 意味着不表达真实感情的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 3,
        question: "The company's __________ policies ensure that all employees feel valued and included.",
        chinese_question: "公司的__________政策确保所有员工都感到被重视和被包含在内。",
        answers: [
            { option: "A", answer: "exclusive", chinese_answer: "排他的", chinese_romanization: "páitā de" },
            { option: "B", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "C", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "D", answer: "discriminatory", chinese_answer: "歧视的", chinese_romanization: "qíshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inclusive' means not excluding any of the parties or groups involved in something." +
            "<br><br>" +
            "(A) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(C) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(D) 'discriminatory' means making or showing an unfair or prejudicial distinction between different categories of people or things.",
        chinese_explanation: "(B) '包容的'一词意味着不排除任何参与某事的方或群体的。" +
            "<br><br>" +
            "(A) '排他的' 意味着排除或不承认其他事物。" +
            "<br><br>" +
            "(C) '有偏见的' 意味着对某人或某事不公平地有偏见的。" +
            "<br><br>" +
            "(D) '歧视的' 意味着在不同类别的人或事物之间做出不公平或有偏见的区分。"
    },
    {
        id: 4,
        question: "The club charged a __________ fee for membership, making it affordable for everyone.",
        chinese_question: "俱乐部收取 __________ 的会员费，使得每个人都负担得起。",
        answers: [
            { option: "A", answer: "exorbitant", chinese_answer: "高昂的", chinese_romanization: "gāoáng de" },
            { option: "B", answer: "high", chinese_answer: "高的", chinese_romanization: "gāo de" },
            { option: "C", answer: "nominal", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "D", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nominal' means (of a price or amount of money) very small; far below the real value or cost." +
            "<br><br>" +
            "(A) 'exorbitant' means (of a price or amount charged) unreasonably high." +
            "<br><br>" +
            "(B) 'high' means of great vertical extent." +
            "<br><br>" +
            "(D) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(C) '象征性的' 意味着（指价格或金额）非常小的；远低于实际价值或成本。" +
            "<br><br>" +
            "(A) '高昂的' 意味着（指价格或收费）过高的。" +
            "<br><br>" +
            "(B) '高的' 意味着垂直高度大的。" +
            "<br><br>" +
            "(D) '大量的' 意味着相当重要、大小或价值的。"
    },
    {
        id: 5,
        question: "The __________ garden provided a peaceful escape from the noise of the city.",
        chinese_question: "这座 __________ 的花园提供了一个远离城市喧嚣的宁静之地。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "bustling", chinese_answer: "繁忙的", chinese_romanization: "fánmáng de" },
            { option: "C", answer: "tranquil", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'bustling' means full of energetic and noisy activity." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '宁静的' 意味着没有干扰；平静的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '繁忙的' 意味着充满活力和嘈杂活动的。" +
            "<br><br>" +
            "(D) '吵闹的' 意味着制造或习惯制造很多噪音的。"
    },
    {
        id: 6,
        question: "His __________ outlook on life made it difficult for him to see the positive side of any situation.",
        chinese_question: "他对生活的 __________ 观点使他难以看到任何情况的积极一面。",
        answers: [
            { option: "A", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "D", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(A) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'hopeful' means feeling or inspiring optimism about a future event.",
        chinese_explanation: "(C) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情将会发生。" +
            "<br><br>" +
            "(A) '乐观的' 意味着对未来充满希望和信心的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(D) '有希望的' 意味着对未来事件感到或激发乐观的。"
    },
    {
        id: 7,
        question: "The __________ beaches of the island attracted many tourists looking for untouched natural beauty.",
        chinese_question: "岛上的__________海滩吸引了许多寻求未受破坏自然美景的游客。",
        answers: [
            { option: "A", answer: "polluted", chinese_answer: "污染的", chinese_romanization: "wūrǎn de" },
            { option: "B", answer: "dirty", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "C", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "D", answer: "contaminated", chinese_answer: "受污染的", chinese_romanization: "shòu wūrǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pristine' means in its original condition; unspoiled." +
            "<br><br>" +
            "(A) 'polluted' means contaminated with harmful or poisonous substances." +
            "<br><br>" +
            "(B) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(D) 'contaminated' means made impure by exposure to or addition of a poisonous or polluting substance.",
        chinese_explanation: "(C) '原始的'一词意味着处于原始状态的；未受破坏的。" +
            "<br><br>" +
            "(A) '污染的' 意味着被有害或有毒物质污染的。" +
            "<br><br>" +
            "(B) '肮脏的' 意味着被不干净的物质覆盖或标记的。" +
            "<br><br>" +
            "(D) '受污染的' 意味着因暴露于或添加有毒或污染物而变得不纯的。"
    },
    {
        id: 8,
    question: "Her __________ remarks during the meeting kept everyone entertained and engaged.",
    chinese_question: "她在会议上的 __________ 评论让每个人都感到娱乐和投入。",
    answers: [
        { option: "A", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "B", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "C", answer: "boring", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
        { option: "D", answer: "witty", chinese_answer: "机智的", chinese_romanization: "jīzhì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'witty' means very clever and funny." +
        "<br><br>" +
        "(A) 'dull' means not interesting or exciting." +
        "<br><br>" +
        "(B) 'serious' means not joking, focused, or thoughtful." +
        "<br><br>" +
        "(C) 'boring' means not fun or interesting.",
    chinese_explanation: "(D) '机智的' 意味着非常聪明和有趣。" +
        "<br><br>" +
        "(A) '无聊的' 意味着不有趣或不令人兴奋。" +
        "<br><br>" +
        "(B) '严肃的' 意味着不开玩笑，专注或深思的。" +
        "<br><br>" +
        "(C) '乏味的' 意味着不有趣的。"
    },
    {
        id: 9,
        question: "The jazz band's __________ rhythm created a lively and unexpected beat that captivated the audience.",
        chinese_question: "爵士乐队的 __________ 节奏创造出一种生动而出人意料的节拍，吸引了观众。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "syncopated", chinese_answer: "切分的", chinese_romanization: "qiēfēn de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'syncopated' means characterized by displaced beats or accents in music, creating unexpected rhythms." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(B) '切分的' 意味着音乐中的节拍或重音被移位，创造出意外的节奏。" +
            "<br><br>" +
            "(A) '单调的' 意味着乏味、冗长和重复的；缺乏变化和兴趣的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着牢固固定的；不摇晃或移动的。"
    },
    {
        id: 10,
    question: "His __________ behavior at the formal dinner embarrassed his friends, as he spoke loudly and chewed with his mouth open.",
    chinese_question: "他在正式晚宴上的 __________ 行为让他的朋友们感到尴尬，因为他说话大声并且张着嘴咀嚼。",
    answers: [
        { option: "A", answer: "refined", chinese_answer: "精致", chinese_romanization: "jīngzhì" },
        { option: "B", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
        { option: "C", answer: "cultured", chinese_answer: "有教养", chinese_romanization: "yǒu jiàoyǎng" },
        { option: "D", answer: "uncouth", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'uncouth' means lacking good manners, refinement, or grace." +
        "<br><br>" +
        "(A) 'refined' means with impurities or unwanted elements having been removed by processing." +
        "<br><br>" +
        "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
        "<br><br>" +
        "(C) 'cultured' means characterized by refined taste and manners and good education.",
    chinese_explanation: "(D) '粗鲁' 意味着缺乏良好的礼仪、修养或优雅。" +
        "<br><br>" +
        "(A) '精致' 意味着通过加工去除了杂质或不需要的元素。" +
        "<br><br>" +
        "(B) '礼貌' 意味着表现出尊重和体贴他人的行为。" +
        "<br><br>" +
        "(C) '有教养' 意味着以精致的品味、礼仪和良好的教育为特征。"
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
