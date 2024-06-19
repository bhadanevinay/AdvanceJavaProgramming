document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.getElementById('number-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const message = document.getElementById('message');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    
    
    const questions = {
        1: {
            question: "Which of the following is the superclass for all AWT components?",
            options: ["a) Container", "b) Window", "c) Panel", "d) Component"],
            correct: 3
        },
        2: {
            question: "Which method is used to set the background color of a component?",
            options: ["a) setBackgroundColor(Color c)", "b) setColor(Color c)", "c) setBackground(Color c)", "d) setComponentColor(Color c)"],
            correct: 2
        },
        3: {
            question: "Which method is used to repaint a component?",
            options: ["a) paint()", "b) repaint()", "c) refresh()", "d) update()"],
            correct: 1
        },
        4: {
            question: "What is the role of the `paint(Graphics g)` method in a component?",
            options: ["a) It handles mouse events.", "b) It handles key events.", "c) It is used to draw the component.", "d) It is used to layout the component."],
            correct: 2
        },
        5: {
            question: "Which method can be used to get the width of a component?",
            options: ["a) getSize()", "b) getWidth()", "c) getDimensions()", "d) getBounds()"],
            correct: 1
        },
        6: {
            question: "Which method is called to process mouse events in a component?",
            options: ["a) processMouseEvent(MouseEvent e)", "b) handleMouseEvent(MouseEvent e)", "c) onMouseEvent(MouseEvent e)", "d) triggerMouseEvent(MouseEvent e)"],
            correct: 0
        },
        7: {
            question: "Which method would you use to change the size of a component?",
            options: ["a) setSize(int width, int height)", "b) resize(int width, int height)", "c) setBounds(int width, int height)", "d) setDimensions(int width, int height)"],
            correct: 0
        },
        8: {
            question: "Which method is called to handle key events in a component?",
            options: ["a) handleKeyEvent(KeyEvent e)", "b) processKeyEvent(KeyEvent e)", "c) onKeyEvent(KeyEvent e)", "d) triggerKeyEvent(KeyEvent e)"],
            correct: 1
        },
        9: {
            question: "Which of the following is a container that can contain other components in AWT?",
            options: ["a) Panel", "b) Button", "c) Label", "d) TextField"],
            correct: 0
        },
        10: {
            question: "What method is used to add a component to a container?",
            options: ["a) insert(Component c)", "b) append(Component c)", "c) add(Component c)", "d) attach(Component c)"],
            correct: 2
        },
        11: {
            question: "Which method is used to set the layout manager for a container?",
            options: ["a) setLayoutManager(LayoutManager lm)", "b) setLayout(LayoutManager lm)", "c) configureLayout(LayoutManager lm)", "d) applyLayout(LayoutManager lm)"],
            correct: 1
        },
        12: {
            question: "Which container class can hold components but cannot be displayed directly?",
            options: ["a) Panel", "b) Frame", "c) Container", "d) Window"],
            correct: 2
        },
        13: {
            question: "Which method is used to remove all components from a container?",
            options: ["a) removeAll()", "b) clear()", "c) deleteAll()", "d) purge()"],
            correct: 0
        },
        14: {
            question: "Which of the following is not a direct subclass of Container?",
            options: ["a) Panel", "b) Frame", "c) Window", "d) Button"],
            correct: 3
        },
        15: {
            question: "How can you determine the number of components in a container?",
            options: ["a) getComponentCount()", "b) getComponents()", "c) getSize()", "d) countComponents()"],
            correct: 0
        },
        16: {
            question: "Which method is used to get a component at a specific index in a container?",
            options: ["a) getComponent(int index)", "b) getElement(int index)", "c) getItem(int index)", "d) getWidget(int index)"],
            correct: 0
        },
        17: {
            question: "Which of the following is the superclass for all top-level windows?",
            options: ["a) Panel", "b) Frame", "c) Window", "d) Container"],
            correct: 2
        },
        18: {
            question: "Which method is used to display a window?",
            options: ["a) showWindow()", "b) display()", "c) setVisible(true)", "d) openWindow()"],
            correct: 2
        },
        19: {
            question: "Which method is used to set the size of a window?",
            options: ["a) setBounds(int width, int height)", "b) setSize(int width, int height)", "c) resize(int width, int height)", "d) adjustSize(int width, int height)"],
            correct: 1
        },
        20: {
            question: "What is the default layout manager for a Window?",
            options: ["a) FlowLayout", "b) GridLayout", "c) BorderLayout", "d) CardLayout"],
            correct: 2
        },
        21: {
            question: "Which method is used to close a window programmatically?",
            options: ["a) close()", "b) dispose()", "c) terminate()", "d) shutDown()"],
            correct: 1
        },
        22: {
            question: "Which of the following classes represents a window without borders or controls?",
            options: ["a) Panel", "b) Frame", "c) Dialog", "d) Window"],
            correct: 3
        },
        23: {
            question: "Which method is used to move a window to a new location?",
            options: ["a) setPosition(int x, int y)", "b) moveTo(int x, int y)", "c) setLocation(int x, int y)", "d) relocate(int x, int y)"],
            correct: 2
        },
        24: {
            question: "Which class should be used to create a window that can be modal?",
            options: ["a) Frame", "b) Dialog", "c) Panel", "d) Window"],
            correct: 1
        },
        25: {
            question: "Which method is used to set the title of a Frame?",
            options: ["a) setTitle(String title)", "b) setHeader(String title)", "c) setName(String title)", "d) setCaption(String title)"],
            correct: 0
        },
        26: {
            question: "Which of the following is true about a Frame?",
            options: ["a) It cannot contain other components.", "b) It is always invisible.", "c) It is a top-level window with a title and border.", "d) It cannot be resized."],
            correct: 2
        },
        27: {
            question: "Which method is used to maximize a Frame?",
            options: ["a) maximize()", "b) setExtendedState(Frame.MAXIMIZED_BOTH)", "c) setFullScreen()", "d) expand()"],
            correct: 1
        },
        28: {
            question: "What is the default layout manager for a Frame?",
            options: ["a) FlowLayout", "b) GridLayout", "c) BorderLayout", "d) CardLayout"],
            correct: 2
        },
        29: {
            question: "Which of the following is not a constructor for the Frame class?",
            options: ["a) Frame()", "b) Frame(String title)", "c) Frame(int width, int height)", "d) All of the above are constructors"],
            correct: 2
        },
        30: {
            question: "Which method is used to determine if a Frame is currently visible?",
            options: ["a) isVisible()", "b) isDisplayed()", "c) isShown()", "d) isOpen()"],
            correct: 0
        },
        31: {
            question: "Which method would you use to change the icon of a Frame?",
            options: ["a) setIconImage(Image img)", "b) setIcon(Image img)", "c) setFrameIcon(Image img)", "d) setImageIcon(Image img)"],
            correct: 0
        },
        32: {
            question: "Which event is typically used to handle a Frame's close button action?",
            options: ["a) WindowEvent.WINDOW_CLOSING", "b) FrameEvent.FRAME_CLOSING", "c) ComponentEvent.COMPONENT_CLOSING", "d) ActionEvent.ACTION_CLOSING"],
            correct: 0
        },
        33: {
            question: "Which of the following is true about a Panel?",
            options: ["a) It is a top-level window with a title.", "b) It is a container that can contain other components.", "c) It cannot be added to other containers.", "d) It is always modal."],
            correct: 1
        },
                34: {
        question: "What is the default layout manager for a Panel?",
        options: ["a) FlowLayout", "b) BorderLayout", "c) GridLayout", "d) CardLayout"],
        correct: 0
    },
    35: {
        question: "Which method is used to add a component to a Panel?",
        options: ["a) addComponent(Component c)", "b) insert(Component c)", "c) add(Component c)", "d) attach(Component c)"],
        correct: 2
    },
    36: {
        question: "Which of the following is not a subclass of Panel?",
        options: ["a) Applet", "b) Frame", "c) Canvas", "d) ScrollPane"],
        correct: 1
    },
    37: {
        question: "Which method is used to set the layout manager for a Panel?",
        options: ["a) setLayoutManager(LayoutManager lm)", "b) setLayout(LayoutManager lm)", "c) configureLayout(LayoutManager lm)", "d) applyLayout(LayoutManager lm)"],
        correct: 1
    },
    38: {
        question: "Which of the following classes is used to create a custom drawing area in a Panel?",
        options: ["a) Canvas", "b) Frame", "c) Window", "d) TextArea"],
        correct: 0
    },
    39: {
        question: "Which method is used to remove a specific component from a Panel?",
        options: ["a) remove(Component c)", "b) delete(Component c)", "c) purge(Component c)", "d) erase(Component c)"],
        correct: 0
    },
    40: {
        question: "Which method is used to repaint a Panel?",
        options: ["a) paint()", "b) repaint()", "c) refresh()", "d) update()"],
        correct: 1
    }
};



    

   

    let currentQuestion = 1;

   for (let i = 1; i <= Object.keys(questions).length; i++) {
      
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;
        numberDiv.onclick = () => showQuestion(i);

        numberContainer.appendChild(numberDiv);

        if (i % 10 === 0) {
            const breakLine = document.createElement('br');
            numberContainer.appendChild(breakLine);
        }
    }

    function showQuestion(questionNumber) {
        const question = questions[questionNumber];
        if (question) {
            currentQuestion = questionNumber;
            questionText.textContent = question.question;
            optionsContainer.innerHTML = ''; // Clear previous options
            message.textContent = ''; // Clear previous message
    
            question.options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.className = 'option';
                optionButton.textContent = option;
                optionButton.onclick = () => checkAnswer(questionNumber, index);
    
                optionsContainer.appendChild(optionButton);
            });
    
            // Highlight the current number
            const numbers = document.querySelectorAll('.number');
            numbers.forEach((number, index) => {
                if (index + 1 === questionNumber) {
                    number.classList.add('highlight');
                } else {
                    number.classList.remove('highlight');
                }
            });
        } else {
            questionText.textContent = 'Question not found.';
            optionsContainer.innerHTML = '';
            message.textContent = '';
        }
    }
    
    

    function checkAnswer(questionNumber, selectedOption) {
        const question = questions[questionNumber];
        if (question) {
            if (selectedOption === question.correct) {
                message.textContent = 'Correct!';
                message.style.color = 'green';
            } else {
                message.textContent = `Wrong! Correct Answer is ${question.options[question.correct]}.`;
                message.style.color = 'red';
            }
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 1) {
            showQuestion(currentQuestion - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < Object.keys(questions).length) {
            showQuestion(currentQuestion + 1);
        }
    });

    // Show the first question on page load
    showQuestion(currentQuestion);
});
