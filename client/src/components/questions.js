import React, { Component } from 'react';
import './questions.css';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
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
      choises: []
    };
    this.handleClickNextButton = this.handleClickNextButton.bind(this);
    this.handleClickLastButton = this.handleClickLastButton.bind(this);
  }

  findSelection(field) {
    const values = document.getElementsByName(field);
    for (var i = 0; i < values.length; i++) {
      if (values[i].checked) {
        return values[i].value;
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

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
  }

  showResults() {
    return (
      <div>
        <h2>Results</h2>
        <h1>{this.state.choises}</h1>
      </div>
    )
  }

  render() {
    const showLastButton = (this.state.counter === this.state.options.length - 1);
    return (
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

              <div>{
                showLastButton ?
                  <button className="btn main-button" onClick={this.handleClickLastButton}>
                    FINISH!
                    </button> :
                  <button className="btn main-button" onClick={this.handleClickNextButton}>
                    Next question {this.state.counter + 1}
                  </button>}
              </div>
            </div>

        }
      </div>
    );
  }
}

export default Questions;
