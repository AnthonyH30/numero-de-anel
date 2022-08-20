import { Component } from 'react';
import './App.css';
import imagem from "./img/imagem.svg"

export default class App extends Component{

  state={
    numero: '',
    result: 'O numero do seu dedo é:'
  }

  handleChange = (e) => {
    this.setState({
      numero: parseFloat(e.target.value)
    })
  }

  showResultKey = (e) => {
    if (e.key === "Enter"){
      if(this.state.numero >= 7.50){
        this.setState({
          result: `O numero do seu dedo é: 35`,
        })
      }else if(this.state.numero < 7.50 && this.state.numero >= 7.40){
        this.setState({
          result: `O numero do seu dedo é: 34`,
          numero: ''
        })
      }else if(this.state.numero < 7.40 && this.state.numero >= 7.30){
        this.setState({
          result: `O numero do seu dedo é: 33`,
          numero: ''
        })
      }else if(this.state.numero < 7.30 && this.state.numero >= 7.20){
        this.setState({
          result: `O numero do seu dedo é: 32`,
          numero: ''
        })
      }else if(this.state.numero < 7.20 && this.state.numero >= 7.10){
        this.setState({
          result: `O numero do seu dedo é: 31`,
          numero: ''
        })
      }else if(this.state.numero < 7.10 && this.state.numero >= 7){
        this.setState({
          result: `O numero do seu dedo é: 30`,
          numero: ''
        })
      }else if(this.state.numero < 7 && this.state.numero >= 6.90){
        this.setState({
          result: `O numero do seu dedo é: 29`,
          numero: ''
        })
      }else if(this.state.numero < 6.90 && this.state.numero >= 6.80){
        this.setState({
          result: `O numero do seu dedo é: 28`,
          numero: ''
        })
      }else if(this.state.numero < 6.80 && this.state.numero >= 6.70){
        this.setState({
          result: `O numero do seu dedo é: 27`,
          numero: ''
        })
      }else if(this.state.numero < 6.70 && this.state.numero >= 6.60){
        this.setState({
          result: `O numero do seu dedo é: 26`,
          numero: ''
        })
      }else if(this.state.numero < 6.60 && this.state.numero >= 6.50){
        this.setState({
          result: `O numero do seu dedo é: 25`,
          numero: ''
        })
      }else if(this.state.numero < 6.50 && this.state.numero >= 6.40){
        this.setState({
          result: `O numero do seu dedo é: 24`,
          numero: ''
        })
      }else if(this.state.numero < 6.40 && this.state.numero >= 6.30){
        this.setState({
          result: `O numero do seu dedo é: 23`,
          numero: ''
        })
      }else if(this.state.numero < 6.30 && this.state.numero >= 6.20){
        this.setState({
          result: `O numero do seu dedo é: 22`,
          numero: ''
        })
      }else if(this.state.numero < 6.20 && this.state.numero >= 6.10){
        this.setState({
          result: `O numero do seu dedo é: 21`,
          numero: ''
        })
      }else if(this.state.numero < 6.10 && this.state.numero >= 6){
        this.setState({
          result: `O numero do seu dedo é: 20`,
          numero: ''
        })
      }else if(this.state.numero < 6 && this.state.numero >= 5.90){
        this.setState({
          result: `O numero do seu dedo é: 19`,
          numero: ''
        })
      }else if(this.state.numero < 5.90 && this.state.numero >= 5.80){
        this.setState({
          result: `O numero do seu dedo é: 18`,
          numero: ''
        })
      }else if(this.state.numero < 5.80 && this.state.numero >= 5.70){
        this.setState({
          result: `O numero do seu dedo é: 17`,
          numero: ''
        })
      }else if(this.state.numero < 5.70 && this.state.numero >= 5.60){
        this.setState({
          result: `O numero do seu dedo é: 16`,
          numero: ''
        })
      }else if(this.state.numero < 5.60 && this.state.numero >= 5.50){
        this.setState({
          result: `O numero do seu dedo é: 15`,
          numero: ''
        })
      }else if(this.state.numero < 5.50 && this.state.numero >= 5.40){
        this.setState({
          result: `O numero do seu dedo é: 14`,
          numero: ''
        })
      }else if(this.state.numero < 5.40 && this.state.numero >= 5.30){
        this.setState({
          result: `O numero do seu dedo é: 13`,
          numero: ''
        })
      }else if(this.state.numero < 5.30 && this.state.numero >= 5.20){
        this.setState({
          result: `O numero do seu dedo é: 12`,
          numero: ''
        })
      }else if(this.state.numero < 5.20 && this.state.numero >= 5.10){
        this.setState({
          result: `O numero do seu dedo é: 11`,
          numero: ''
        })
      }else if(this.state.numero < 5.10 && this.state.numero > 0){
        this.setState({
          result: `O numero do seu dedo é: 10`,
          numero: ''
        })
      }
    }
  };

  showResult = () => {
    if(this.state.numero >= 7.50){
      this.setState({
        result: `O numero do seu dedo é: 35`,
        numero: ''
      })
    }else if(this.state.numero < 7.50 && this.state.numero >= 7.40){
      this.setState({
        result: `O numero do seu dedo é: 34`,
        numero: ''
      })
    }else if(this.state.numero < 7.40 && this.state.numero >= 7.30){
      this.setState({
        result: `O numero do seu dedo é: 33`,
        numero: ''
      })
    }else if(this.state.numero < 7.30 && this.state.numero >= 7.20){
      this.setState({
        result: `O numero do seu dedo é: 32`,
        numero: ''
      })
    }else if(this.state.numero < 7.20 && this.state.numero >= 7.10){
      this.setState({
        result: `O numero do seu dedo é: 31`,
        numero: ''
      })
    }else if(this.state.numero < 7.10 && this.state.numero >= 7){
      this.setState({
        result: `O numero do seu dedo é: 30`,
        numero: ''
      })
    }else if(this.state.numero < 7 && this.state.numero >= 6.90){
      this.setState({
        result: `O numero do seu dedo é: 29`,
        numero: ''
      })
    }else if(this.state.numero < 6.90 && this.state.numero >= 6.80){
      this.setState({
        result: `O numero do seu dedo é: 28`,
        numero: ''
      })
    }else if(this.state.numero < 6.80 && this.state.numero >= 6.70){
      this.setState({
        result: `O numero do seu dedo é: 27`,
        numero: ''
      })
    }else if(this.state.numero < 6.70 && this.state.numero >= 6.60){
      this.setState({
        result: `O numero do seu dedo é: 26`,
        numero: ''
      })
    }else if(this.state.numero < 6.60 && this.state.numero >= 6.50){
      this.setState({
        result: `O numero do seu dedo é: 25`,
        numero: ''
      })
    }else if(this.state.numero < 6.50 && this.state.numero >= 6.40){
      this.setState({
        result: `O numero do seu dedo é: 24`,
        numero: ''
      })
    }else if(this.state.numero < 6.40 && this.state.numero >= 6.30){
      this.setState({
        result: `O numero do seu dedo é: 23`,
        numero: ''
      })
    }else if(this.state.numero < 6.30 && this.state.numero >= 6.20){
      this.setState({
        result: `O numero do seu dedo é: 22`,
        numero: ''
      })
    }else if(this.state.numero < 6.20 && this.state.numero >= 6.10){
      this.setState({
        result: `O numero do seu dedo é: 21`,
        numero: ''
      })
    }else if(this.state.numero < 6.10 && this.state.numero >= 6){
      this.setState({
        result: `O numero do seu dedo é: 20`,
        numero: ''
      })
    }else if(this.state.numero < 6 && this.state.numero >= 5.90){
      this.setState({
        result: `O numero do seu dedo é: 19`,
        numero: ''
      })
    }else if(this.state.numero < 5.90 && this.state.numero >= 5.80){
      this.setState({
        result: `O numero do seu dedo é: 18`,
        numero: ''
      })
    }else if(this.state.numero < 5.80 && this.state.numero >= 5.70){
      this.setState({
        result: `O numero do seu dedo é: 17`,
        numero: ''
      })
    }else if(this.state.numero < 5.70 && this.state.numero >= 5.60){
      this.setState({
        result: `O numero do seu dedo é: 16`,
        numero: ''
      })
    }else if(this.state.numero < 5.60 && this.state.numero >= 5.50){
      this.setState({
        result: `O numero do seu dedo é: 15`,
        numero: ''
      })
    }else if(this.state.numero < 5.50 && this.state.numero >= 5.40){
      this.setState({
        result: `O numero do seu dedo é: 14`,
        numero: ''
      })
    }else if(this.state.numero < 5.40 && this.state.numero >= 5.30){
      this.setState({
        result: `O numero do seu dedo é: 13`,
        numero: ''
      })
    }else if(this.state.numero < 5.30 && this.state.numero >= 5.20){
      this.setState({
        result: `O numero do seu dedo é: 12`,
        numero: ''
      })
    }else if(this.state.numero < 5.20 && this.state.numero >= 5.10){
      this.setState({
        result: `O numero do seu dedo é: 11`,
        numero: ''
      })
    }else if(this.state.numero < 5.10 && this.state.numero > 0){
      this.setState({
        result: `O numero do seu dedo é: 10`,
        numero: ''
      })
    }
  }

  render(){
    return(
      <div className='container'>
        <aside className='content'>
          <h1>Descubra a numeração do seu dedo!</h1>
          <label htmlFor="number">Numero do dedo em cm</label>
          <div className='input-and-button'>
            <input id='number' type="number" onChange={this.handleChange} onKeyPress={this.showResultKey} value={this.state.numero} />
            <button onClick={this.showResult}>Calcular</button>
          </div>
          <h3 className='result'>{this.state.result}</h3>
        </aside>
        <figure className='image-container'>
          <img className='imagem' src={imagem} alt="duas mãos com anéis de casamento" />
        </figure>
      </div>
    )
  }

}