import { Module } from '../core/module'

export class QuizModule extends Module {
  constructor() {
    super('quiz', 'Пройти тест')
  }

  trigger() {
    const quizData = [
      {
        question:
          'Какой cамый популярный язык программирования в 2019 году? (по версии "GitHub")',
        a: 'Java',
        b: 'Python',
        c: 'C#',
        d: 'JavaScript',
        correct: 'd',
      },
      {
        question: 'Что такое "HTML"?',
        a: 'Язык гипертекстовой разметки',
        b: 'Четыре больших буквы',
        c: 'Каскадная таблица стилей',
        d: 'Как отсюда выйти?',
        correct: 'a',
      },
      {
        question: 'Создатель языка программирования "JavaScript"',
        a: 'Билл Гейтс',
        b: 'Владилен Минин',
        c: 'Брендан Эйх',
        d: 'Эйс Вентура',
        correct: 'c',
      },
      {
        question: 'В каком году создали язык JavaScript?',
        a: '2001',
        b: '1995',
        c: '1999',
        d: 'И создал Господь на третий день...',
        correct: 'b',
      },
      {
        question: 'Основой HTML-документа являются?',
        a: 'Теги',
        b: 'Скрипты',
        c: 'Шлюзы',
        d: 'Ничего из вышеперечисленного',
        correct: 'a',
      },
      {
        question: 'Что такое "DOM"?',
        a: 'Document Object Model',
        b: 'Место где тепло и кот',
        c: 'Сборщик модулей',
        d: 'Ничего из вышеперечисленного',
        correct: 'a',
      },
    ]

    let otherModule = document.querySelector('.module')
    if (otherModule) {
      otherModule.remove()
    }
    let moduleContainer = document.createElement('div')
    moduleContainer.className = 'module'

    const quizContainer = document.createElement('div')
    quizContainer.className = 'quizContainer'

    const quizModule = document.createElement('div')
    quizModule.className = 'quizModule'

    const questionText = document.createElement('h2')
    questionText.id = 'question'
    questionText.textContent = 'Текст вопроса'

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Отправить ответ'

    const answerListUl = document.createElement('ul')

    const answerItem = (inputId, labelId, htmlFor) => {
      const answerLi = document.createElement('li')

      const answerInput = document.createElement('input')
      answerInput.type = 'radio'
      answerInput.id = inputId
      answerInput.name = 'answer'
      answerInput.className = 'answer'

      const answerLabel = document.createElement('label')
      answerLabel.htmlFor = htmlFor
      answerLabel.id = labelId
      answerLabel.textContent = 'question'

      answerLi.append(answerInput, answerLabel)
      return answerLi
    }

    document.body.append(moduleContainer)
    moduleContainer.append(quizContainer)
    quizContainer.append(quizModule)
    quizModule.append(questionText, answerListUl, submitButton)
    answerListUl.append(
      answerItem('a', 'a_text', 'a'),
      answerItem('b', 'b_text', 'b'),
      answerItem('c', 'c_text', 'c'),
      answerItem('d', 'd_text', 'd')
    )
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.querySelector('#question')
    const a_text = document.querySelector('#a_text')
    const b_text = document.querySelector('#b_text')
    const c_text = document.querySelector('#c_text')
    const d_text = document.querySelector('#d_text')

    let currentQuiz = 0
    let score = 0

    loadQuiz()
    function loadQuiz() {
      deselectAnswers()

      const currentQuizData = quizData[currentQuiz]
      questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
      c_text.innerText = currentQuizData.c
      d_text.innerText = currentQuizData.d
    }

    function getSelected() {
      let answer = undefined

      answerEls.forEach((el) => {
        if (el.checked) {
          answer = el.id
        }
      })
      return answer
    }

    function deselectAnswers() {
      answerEls.forEach((el) => {
        el.checked = false
      })
    }

    submitButton.addEventListener('click', () => {
      const answer = getSelected()

      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
          loadQuiz()
        } else {
          quizModule.innerHTML = `<h2>У вас ${score} правильных ответов из ${quizData.length}</h2>`
        }
      }
    })
  }
}
