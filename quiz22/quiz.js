// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After years of conflict, the two friends finally __________ and started talking again.",
        chinese_question: "经过多年的冲突，这两位朋友终于 __________，开始重新交谈。",
        answers: [
            { option: "A", answer: "argued", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "reconciled", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "C", answer: "disputed", chinese_answer: "争议", chinese_romanization: "zhēngyì" },
            { option: "D", answer: "quarreled", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reconciled' means restored friendly relations between." +
            "<br><br>" +
            "(A) 'argued' means exchanged or expressed diverging or opposite views." +
            "<br><br>" +
            "(C) 'disputed' means argued about (something); discussed heatedly." +
            "<br><br>" +
            "(D) 'quarreled' means had an angry argument or disagreement.",
        chinese_explanation: "(B) '和解' 意味着恢复友好关系。" +
            "<br><br>" +
            "(A) '争论' 意味着交换或表达不同或相反的观点。" +
            "<br><br>" +
            "(C) '争议' 意味着对（某事）争论；激烈讨论。" +
            "<br><br>" +
            "(D) '争吵' 意味着有愤怒的争论或分歧。"
    },
    {
        id: 2,
        question: "The restaurant's __________ lighting and decor created a cozy and inviting ambiance.",
        chinese_question: "餐厅的 __________ 照明和装饰营造了一种舒适和温馨的氛围。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺眼的", chinese_romanization: "cìyǎn de" },
            { option: "B", answer: "atmospheric", chinese_answer: "有氛围的", chinese_romanization: "yǒu fēnwéi de" },
            { option: "C", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "D", answer: "dull", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'atmospheric' means creating a distinctive mood or feeling." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring." +
            "<br><br>" +
            "(C) 'bright' means giving out or reflecting a lot of light." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '有氛围的' 意味着创造出独特的情绪或感觉的。" +
            "<br><br>" +
            "(A) '刺眼的' 意味着不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(C) '明亮的' 意味着发出或反射很多光的。" +
            "<br><br>" +
            "(D) '单调的' 意味着缺乏兴趣或激动的。"
    },
    {
        id: 3,
        question: "The resemblance between the twins was so __________ that even their closest friends had trouble telling them apart.",
        chinese_question: "这对双胞胎的相似程度如此 __________，以至于他们最亲近的朋友都很难分辨他们。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "uncanny", chinese_answer: "神秘的", chinese_romanization: "shénmì de" },
            { option: "C", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" },
            { option: "D", answer: "banal", chinese_answer: "陈腐的", chinese_romanization: "chénfǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'uncanny' means strange or mysterious, especially in an unsettling way." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'familiar' means well known from long or close association." +
            "<br><br>" +
            "(D) 'banal' means so lacking in originality as to be obvious and boring.",
        chinese_explanation: "(B) '神秘的' 意味着奇怪或神秘的，尤其是以一种令人不安的方式。" +
            "<br><br>" +
            "(A) '平凡的' 意味着缺乏兴趣或兴奋；无聊的。" +
            "<br><br>" +
            "(C) '熟悉的' 意味着因长期或密切联系而闻名的。" +
            "<br><br>" +
            "(D) '陈腐的' 意味着缺乏原创性，以至于明显和无聊的。"
    },
    {
        id: 4,
        question: "The __________ throne, adorned with gold and jewels, stood at the center of the grand hall.",
        chinese_question: "那座 __________ 的王座，镶嵌着黄金和珠宝，屹立在宏伟大厅的中央。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "regal", chinese_answer: "王室的", chinese_romanization: "wángshì de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'regal' means resembling, or fit for a monarch, especially in being magnificent or dignified." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '王室的' 意味着类似于或适合君主的，尤其是宏伟或庄严的。" +
            "<br><br>" +
            "(A) '朴素的' 意味着不装饰或不精致的；性格简单或普通的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成；没有难度的。"
    },
    {
        id: 5,
    question: "The __________ landscape was dotted with farms, barns, and open fields as far as the eye could see.",
    chinese_question: "__________ 景观点缀着农场、谷仓和一望无际的开阔田野。",
    answers: [
        { option: "A", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
        { option: "B", answer: "suburban", chinese_answer: "郊区的", chinese_romanization: "jiāoqū de" },
        { option: "C", answer: "metropolitan", chinese_answer: "大都市的", chinese_romanization: "dà dūshì de" },
        { option: "D", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'rural' means relating to, or characteristic of the countryside rather than the town." +
        "<br><br>" +
        "(A) 'urban' means relating to, or characteristic of a city or town." +
        "<br><br>" +
        "(B) 'suburban' means relating to or characteristic of a suburb." +
        "<br><br>" +
        "(C) 'metropolitan' means relating to or denoting a metropolis, often inclusive of its surrounding areas.",
    chinese_explanation: "(D) '乡村的' 意味着与乡村而不是城镇相关或具有乡村特点的。" +
        "<br><br>" +
        "(A) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
        "<br><br>" +
        "(B) '郊区的' 意味着与郊区相关或具有郊区特点的。" +
        "<br><br>" +
        "(C) '大都市的' 意味着与大都市相关或表示大都市的，通常包括其周围地区。"
    },
    {
        id: 6,
        question: "His __________ comments during the meeting made it clear that he was not interested in further discussion.",
        chinese_question: "他在会议上的 __________ 评论表明他对进一步讨论不感兴趣。",
        answers: [
            { option: "A", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "B", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
            { option: "C", answer: "terse", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "D", answer: "explanatory", chinese_answer: "解释的", chinese_romanization: "jiěshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(A) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(B) 'comprehensive' means complete; including all or nearly all elements or aspects of something." +
            "<br><br>" +
            "(D) 'explanatory' means serving to explain something.",
        chinese_explanation: "(C) '简短的' 意味着用词节省；突然的。" +
            "<br><br>" +
            "(A) '详细的' 意味着有很多细节或事实；表现出对细节的关注。" +
            "<br><br>" +
            "(B) '全面的' 意味着完整的；包括某事物的所有或几乎所有元素或方面的。" +
            "<br><br>" +
            "(D) '解释的' 意味着用于解释某事的。"
    },
    {
        id: 7,
        question: "The birds sang a __________ melody that filled the morning air with harmony.",
        chinese_question: "鸟儿们唱着 __________ 的旋律，让早晨的空气充满了和谐。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "B", answer: "tuneful", chinese_answer: "悦耳", chinese_romanization: "yuè'ěr" },
            { option: "C", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "D", answer: "cacophonous", chinese_answer: "杂音", chinese_romanization: "záyīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tuneful' means having a pleasant, musical sound." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous; harsh and jarring because of a lack of harmony." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'cacophonous' means involving or producing a harsh, discordant mixture of sounds.",
        chinese_explanation: "(B) '悦耳' 意味着具有令人愉快的音乐声音。" +
            "<br><br>" +
            "(A) '不和谐' 意味着不一致或不协调；由于缺乏和谐而刺耳。" +
            "<br><br>" +
            "(C) '刺耳' 意味着对感官不愉快的粗糙或刺耳的声音。" +
            "<br><br>" +
            "(D) '杂音' 意味着产生或涉及刺耳、不和谐的声音混合。"
    },
    {
        id: 8,
    question: "The artist's use of __________ colors created a delicate and refined effect in the painting.",
    chinese_question: "艺术家使用 __________ 色彩在画中创造了一种细腻而精致的效果。",
    answers: [
        { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
        { option: "B", answer: "garish", chinese_answer: "花哨的", chinese_romanization: "huāshào de" },
        { option: "C", answer: "vivid", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
        { option: "D", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'subtle' means delicate or precise as to be difficult to analyze or describe." +
        "<br><br>" +
        "(A) 'bold' means showing an ability to take risks; confident and courageous." +
        "<br><br>" +
        "(B) 'garish' means obtrusively bright and showy." +
        "<br><br>" +
        "(C) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
    chinese_explanation: "(D) '微妙的' 意味着细腻或精确，以至于难以分析或描述的。" +
        "<br><br>" +
        "(A) '大胆的' 意味着表现出冒险的能力；自信和勇敢的。" +
        "<br><br>" +
        "(B) '花哨的' 意味着过于明亮和显眼的。" +
        "<br><br>" +
        "(C) '生动的' 意味着产生强烈的感觉或清晰、强烈的图像的。"
    },
    {
        id: 9,
        question: "The hotel room offered a __________ view of the entire city, stretching out for miles.",
        chinese_question: "酒店房间提供了 __________ 的全市景观，延绵数英里。",
        answers: [
            { option: "A", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "panoramic", chinese_answer: "全景的", chinese_romanization: "quánjǐng de" },
            { option: "D", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panoramic' means with a wide view surrounding the observer; sweeping." +
            "<br><br>" +
            "(A) 'narrow' means of small width in relation to length." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'restricted' means limited in extent, number, scope, or action.",
        chinese_explanation: "(C) '全景的' 意味着观察者周围的广阔视野；广阔的。" +
            "<br><br>" +
            "(A) '狭窄的' 意味着宽度相对于长度较小的。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(D) '受限的' 意味着在范围、数量、范围或行动上受到限制的。"
    },
    {
        id: 10,
        question: "He became __________ as he waited for the results of his medical tests, unable to sit still.",
        chinese_question: "等待体检结果时，他变得 __________，无法静坐。",
        answers: [
            { option: "A", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "C", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "D", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nervous' means easily agitated or alarmed; tending to be anxious; highly strung." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'composed' means having one's feelings and expression under control; calm.",
        chinese_explanation: "(A) '紧张的' 意味着容易激动或惊慌的；倾向于焦虑的；高度紧张的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(C) '冷静的' 意味着不表现或感觉紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(D) '镇定的' 意味着情感和表情在控制之下的；冷静的。"
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
