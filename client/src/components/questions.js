import React, { Component } from 'react';
import './questions.css';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      fonds: [],
      questions: [
        "Вопрос 1. Является ли для вас важным помогать благотворительным организациям конкретного региона?",
        "Вопрос 2. Если представить, что вам необходимо сразиться с чудищем, то какая философия воина вам ближе?",
        "Вопрос 3. Кому вы симпатизируете больше, популярным и широко известным организациям или тем организациям, которые не так на слуху и и не получают внимания со стороны федеральных СМИ, несмотря на то, что делают хорошую работу?"],
      options: [
        [" Да, для меня важно помогать организациям своего региона",
          " Нет, мне более важна тематика, которой занимается организация",
          " Хочу помогать региональным организациям, которые получают сейчас меньше всего поддержки"],
        [" Пришел, увидел, победил. Потому что для меня важно видеть результат здесь и сейчас",
          "  Я терпеливый человек, могу и подождать. Как сказал Лао Дзы: сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага.",
          " ? промежуточный вариант"],
        [" Пожалуй, я за “народный выбор”, чем организация известнее, тем больше доверия она вызывает",
          " Все равно мы выбираем только из проверенных фондов, поэтому я с удовольствием поддержку организацию, которая совсем не снискала медийной славы, но при этом хорошо делает свою работу",
          " А можно выбрать середнячка?"]],
      counter: 0,
      lastButton: false,
      showFirstPage: true,
      choises: []
    };
    this.handleClickNextButton = this.handleClickNextButton.bind(this);
    this.handleClickLastButton = this.handleClickLastButton.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
  }

  findSelection(field) {
    const values = document.getElementsByName(field);
    for (var i = 0; i < values.length; i++) {
      if (values[i].checked) {
        return parseInt(values[i].value) + 1;
      }
    }
    return 0;
  }

  handleClickNextButton() {
    this.setState(({ choises, counter }) => {
      const copyChoises = choises;
      copyChoises.push(this.findSelection("dzen"));
      counter++;
      return {
        choises: copyChoises,
        counter
      }
    });
  }

  handleClickLastButton() {
    this.setState(({ choises, lastButton }) => {
      const copyChoises = choises;
      copyChoises.push(this.findSelection("dzen"));
      lastButton = true;
      return {
        choises: copyChoises,
        lastButton
      }
    });
  }

  skipQuestion(){
      this.setState(({ choises, counter }) => {
      const copyChoises = choises;
      copyChoises.push(-1);
      counter++;
      return {
        choises: copyChoises,
        counter
      }
    });
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => {
        console.log('data fetched:', data);
      });
  }

  doShowFirstPage()
  {
    return(
     <div className="all-wrapper">
      <p><h1>Как определиться кому помогать?</h1></p><br />
      <p><h3>Выбрать кому помогать может быть сложно, ведь существует много различных проблем, которые мы стремимся решить, много вариантов получателей помощи и много организаций. Мы сделали этот тест, чтобы помочь вам в этом. 
        Если вопрос покажется вам слишком сложным, вы всегда можете нажать “пропустить”. После завершения теста мы предложим вам несколько организаций исходя из ваших ответов. Все они проверены и смогут эффективно распоряжаться вашими средствами.
      </h3></p>
      <button className="btn main-button" onClick={() => this.setState({ showFirstPage:false })}>
        Пройти тест
      </button>
      <button className="btn main-button" onClick={() => this.setState({ lastButton:true, showFirstPage:false })}>
        Мне повезёт!
      </button>
     </div>
    )
  }

  showResults() {
    fetch('/api/customers', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'POST OK' })
    })
      .then(res => res.json())
      .then(data => {
        console.log('data fetched:', data);
      });

    return (
      <div>
        <h2>Results</h2>
        <h1>{
            this.state.choises.length === 0 ?
            "Выводим рандом" : 
            this.state.choises}
        </h1>
      </div>
    )
  }

  render() {
    const showLastButton = (this.state.counter === this.state.options.length - 1);
    return (
     this.state.showFirstPage ?
        this.doShowFirstPage()
        :
        <div className="all-wrapper">
        {
          this.state.lastButton ?
            <div>
              {this.showResults()}
            </div> :
            <div className="qu-answ-wrapper">
              <p className="qu">{this.state.questions[this.state.counter]}</p>
              {this.state.options[this.state.counter].map((question, id) =>
                <p className="answ">
                  <label htmlFor="dzen"></label>
                  <input name="dzen" type="radio" value={id} />
                  {question}</p>
              )}

              <div>
              {
                showLastButton ?
                  <button className="btn main-button" onClick={this.handleClickLastButton}>
                    FINISH!
                    </button> :
                  <div>
                  <button className="btn main-button" onClick={this.handleClickNextButton}>
                    Следующий вопрос {this.state.counter + 1} / {this.state.options.length}
                  </button>
                  <button className="btn main-button" onClick={this.skipQuestion}>
                    Пропустить вопрос
                  </button>
                  </div>
              }
              </div>
            </div>

        }
      </div>
    );
  }
}

export default Questions;
