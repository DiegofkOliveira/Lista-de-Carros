import { useState } from "react";
import { Pressable, ScrollView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function ItemCarro({ ano, marca, modelo }) {
    return (
        <View style={styles.Item}>
            <Text style={styles.Ano}>{ano}</Text>
            <Text style={styles.Texto}>{marca} - {modelo}</Text>
        </View>
    )
}

function ListaCarros() {
   const [listaCarros, setListaCarros] = useState(carros)

  function handleFiltro(marca) {   
    const filtro = filtraCarroMarca(marca)

    setListaCarros(filtro);
  }

  function handleLimparFiltro() {
    setListaCarros(carros);
  }

function filtraCarroMarca(marca) {

    const resultado = carros.filter(
        (carro) => carro.marca === marca
    );
    
    return resultado;
}
  return (
    <View style={styles.Container}>
      <View style={styles.Buttons}>
        <Pressable onPress={() => handleFiltro("Fiat")} style={styles.Button}>
          <Text style={styles.TextButton}>Fiat</Text>
        </Pressable>
        <Pressable onPress={() => handleFiltro("GM")} style={styles.Button}>
          <Text style={styles.TextButton}>GM</Text>
        </Pressable>
        <Pressable onPress={() => handleFiltro("Ford")} style={styles.Button}>
          <Text style={styles.TextButton}>Ford</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleLimparFiltro} style={styles.CleanButton}>
        <Text style={styles.TextButton}>Limpar filtro</Text>
      </Pressable>
      <ScrollView>
        {
          listaCarros.map((carro, index) => {
            return (
              <ItemCarro 
                ano={carro.anoFabricacao} 
                marca={carro.marca} 
                modelo={carro.modelo} 
                key={index} 
              />
            )})
        }
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista de Carros" component={ListaCarros} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    Container : {
        padding: 10,
    },
    Buttons : {
        flexDirection: "row",
        width: '100%',
        marginBottom: 10,
        marginLeft: -10,
    },  
    Button : {
        width: '29.8%',
        backgroundColor: '#257cc0',
        padding: 12,
        marginHorizontal: 10,
    },
    CleanButton : {
        width: '100%',
        backgroundColor: '#257cc0',
        padding: 12,
        marginBottom: 10,
    },
    TextButton : {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
     Item : {
        flexDirection: 'row',
        marginBottom: 10,
    },
    Ano : {
        backgroundColor: '#1693f4',
        color: '#ffffff',
        padding: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    }, 
    Texto : {
        width: '90%',
        padding: 10,
        flexWrap: 'wrap',

        textAlignVertical: 'center',
        color: '#ffffff',
        backgroundColor: '#257cc0',
    } 
});

export { App as default };
