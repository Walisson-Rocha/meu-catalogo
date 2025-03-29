import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const listaFilmes = [
    {
      "nome": "A Doce Vida",
      "ano": 1960,
      "diretor": "Federico Fellini",
      "tipo": "Drama",
      "capa": "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg"
    },
    {
      "nome": "Psicose",
      "ano": 1960,
      "diretor": "Alfred Hitchcock",
      "tipo": "Terror",
      "capa": "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg"
    },
    {
      "nome": "O Beijo da Mulher Aranha",
      "ano": 1985,
      "diretor": "Hector Babenco",
      "tipo": "Drama",
      "capa": "https://i.pinimg.com/236x/f3/e3/3f/f3e33fdd1dfae7368226acf14fac51ee.jpg"
    },
    {
      "nome": "Poltergeist - O Fenômeno",
      "ano": 1982,
      "diretor": "Tobe Hooper",
      "tipo": "Terror",
      "capa": "https://i.pinimg.com/236x/e2/5e/0f/e25e0f9e904895e5365b8ca7aa991076.jpg"
    }
  ];

 
  const listaSeries = [
    {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg"
    },
    {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg"
    },
    {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg"
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes e Séries</Text>

    
      <Text style={styles.sectionTitle}>Filmes</Text>
      <ScrollView style={styles.scrollView}>
        {listaFilmes.map((filme, index) => (
          <Filme
            key={index}
            nome={filme.nome}
            ano={filme.ano}
            diretor={filme.diretor}
            tipo={filme.tipo}
            capa={filme.capa}
          />
        ))}
      </ScrollView>

    
      <Text style={styles.sectionTitle}>Séries</Text>
      <ScrollView style={styles.scrollView}>
        {listaSeries.map((serie, index) => (
          <Serie
            key={index}
            nome={serie.nome}
            ano={serie.ano}
            diretor={serie.diretor}
            temporadas={serie.temporadas}
            capa={serie.capa}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 330,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  cardText: {
    marginVertical: 2,
  },
});


export const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.cardTitle}>{nome}</Text>
      <Text style={styles.cardText}>Ano: {ano}</Text>
      <Text style={styles.cardText}>Diretor: {diretor}</Text>
      <Text style={styles.cardText}>Gênero: {tipo}</Text>
    </View>
  );
};


export const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.cardTitle}>{nome}</Text>
      <Text style={styles.cardText}>Ano: {ano}</Text>
      <Text style={styles.cardText}>Diretor: {diretor}</Text>
      <Text style={styles.cardText}>Temporadas: {temporadas}</Text>
    </View>
  );
};
