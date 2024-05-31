class Button {
    #text;
    #border;
    #color;
    #background;

    constructor({text, border, color, background}) {
      this.#text = text;
      this.#border = border;
      this.#color = color;
      this.#background = background;
    }
  
    render() {
      const button = document.createElement('button');
      button.innerText = this.#text;
      button.style.border = this.#border;
      button.style.color = this.#color;
      button.style.background = this.#background;
      
        button.addEventListener('click', () => {
            console.log(`Кнопка ` + this.#text + ` натиснута. Колір кнопки -` + this.#background);
        });
  
      document.body.appendChild(button);
    }

    getText() {
        return this.#text;
    }

    getBorder() {
        return this.#border;
    }

    getColor() {
        return this.#color;
    }

    getBackground() {
        return this.#background;
    }

  }
  
  class RoundedButton extends Button {
    #borderRadius;
    constructor({text, border, color, background, borderRadius}) {
      super({text, border, color, background});
      this.#borderRadius = borderRadius;
    }

    dropShadow(button) {
        button.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    }
  
    render() {
      const button = document.createElement('button');
      button.innerText = this.getText();
      button.style.border = this.getBorder();
      button.style.color = this.getColor();
      button.style.background = this.getBackground();
      button.style.borderRadius = this.#borderRadius;
  
      button.addEventListener('click', () => {
        console.log(`Кнопка ` + this.getText() + ` натиснута. Колір кнопки - ` + this.getBackground());
      });
  
      button.addEventListener('mouseover', () => {
        this.dropShadow(button);
      });
  
      button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
      });
  
      document.body.appendChild(button);
    }
  }
  
  const button1 = new Button({ text: 'Button 1', border: '1px solid black', color: 'white', background: 'blue' });
  const button2 = new Button({ text: 'Button 2', border: '1px solid black', color: 'white', background: 'green' });
  const button3 = new Button({ text: 'Button 3', border: '1px solid black', color: 'white', background: 'red' });
  
  button1.render();
  button2.render();
  button3.render();
  
  const roundedButton1 = new RoundedButton({ text: 'Rounded 1', border: '1px solid black', color: 'white', background: 'blue', borderRadius: '10px' });
  const roundedButton2 = new RoundedButton({ text: 'Rounded 2', border: '1px solid black', color: 'white', background: 'green', borderRadius: '20px' });
  const roundedButton3 = new RoundedButton({ text: 'Rounded 3', border: '1px solid black', color: 'white', background: 'red', borderRadius: '30px' });
  
  roundedButton1.render();
  roundedButton2.render();
  roundedButton3.render();
  