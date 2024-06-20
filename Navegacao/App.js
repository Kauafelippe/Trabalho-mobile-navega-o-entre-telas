
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>IFC Ibirama</Text>
            <Button
                title='IFC Ibirama'
                color="green"
                onPress={function () { navigation.navigate('Detalhes') }}
            />
            <Button
                title='Escolher Cusro'
                color="yellow"
                onPress={function () { navigation.navigate('TelaEscolherCursos') }}
            />
        </View>
    )
}

export default function App() {

    return (
        <NavigationContainer>
            <PilhaTelas.Navigator initialRouteName='PrimeiraTela'>
                <PilhaTelas.Screen
                    name="PrimeiraTela"
                    component={PrimeiraTela}
                    options={{ title: "Tela inicial" }}
                />    </PilhaTelas.Navigator>
        </NavigationContainer>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        width: '100%'
    },
    titulo: {
        marginTop: '10%',
        fontSize: 20
    }
});