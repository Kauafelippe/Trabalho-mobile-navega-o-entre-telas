
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>IFC Ibirama</Text>
            <Button
                title='Detalhes IFC'
                color="#3a6604"
                onPress={function () { navigation.navigate('Detalhes') }}
            />
            <Button
                title='Escolher Curso'
                color="#3a6604"
                onPress={function () { navigation.navigate('TelaEscolherCursos') }}
            />
        </View>
    )
}

export default function App() {

    return (
        <NavigationContainer>
            <PilhaTelas.Navigator initialRouteName='IFC'>
                <PilhaTelas.Screen
                    name="IFC"
                    component={PrimeiraTela}
                    options={{ title: "Institudo Federal catarinense" }}
                /></PilhaTelas.Navigator>
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
        marginTop: '50%',
        fontSize: 20,
    }
});