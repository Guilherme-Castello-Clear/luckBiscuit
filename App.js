import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: 'Abra o biscoto para revelar sua frase da sorte',
      img: require('./src/biscoito.png')
    };

    this.frases = [
      "Grandes conquistas exigem grandes esforços. Continue avançando!",
      "Acredite em si mesmo e você será capaz de alcançar tudo o que deseja.",
      "As dificuldades de hoje são os degraus para o sucesso de amanhã.",
      "A vida é uma jornada de aprendizado. Aproveite cada momento para crescer e evoluir.",
      "A sorte estará sempre ao seu lado quando você seguir o seu coração com sinceridade."
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito(){
    let randomNum = Math.floor(Math.random() * this.frases.length )
    this.setState({
      img: require('./src/biscoitoAberto.png'),
      textoFrase: this.frases[randomNum],
    })
  }

  render(){
    return(
      <View style={styles.container}>
          <Image 
            source={this.state.img}
            style={styles.img}  
          />
          <Text style={styles.textFrase}>" {this.state.textoFrase} "</Text>


          <TouchableOpacity style={styles.botao} onPress={() => this.quebraBiscoito()}>
            <View style={styles.btnArea}>
              <Text style={styles.btnText}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 250,
    height: 250
  },
  textFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App