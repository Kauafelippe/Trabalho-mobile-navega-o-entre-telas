
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>IFC Ibirama</Text>
            <View style={styles.botao}>
                <Button
                    title='Detalhes IFC'
                    color="#3a6604"
                    onPress={function () { navigation.navigate('SegundaTela') }}
                /></View>
            <View style={styles.botao}>
                <Button
                    title='Escolher Curso'
                    color="#3a6604"
                    onPress={function () { navigation.navigate('TelaEscolherCurso') }}
                />
            </View>
        </View>
    )
}

function SegundaTela({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>O Instituto Federal Catarinense (IFC) foi criado pela Lei Federal nº 11.892, de 29 de dezembro de 2008, e teve origem na integração das escolas agrotécnicas de Concórdia, Rio do Sul e Sombrio e dos colégios agrícolas de Araquari e Camboriú, que eram vinculados à Universidade Federal de Santa Catarina.</Text>
            <Image
                style={styles.img}
                source={require('./assets/images/ifc.png')}
            />
            <View style={styles.botao}>
                <Button style={styles.botao}
                    title='Voltar'
                    color="#3a6604"
                    onPress={function () { navigation.goBack() }}
                />
            </View>
        </View>
    )
}

function TelaEscolherCurso({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolher um Curso</Text>
            <View style={styles.botao2}>
                <Button
                    title='Informática'
                    color="black"
                    onPress={function () {
                        navigation.navigate('TelaCursos', {
                            nome: "Informatica",
                            descricao: "O técnico em Informática Integrado ao Ensino Médio prepara o aluno para atuar de maneira consciente e responsável, com foco em desenvolvimento de programas de computador, seguindo as especificações e paradigmas da lógica e das linguagens de programação."
                        })
                    }}
                />
            </View>
            <View style={styles.botao2}>
                <Button
                    title='Vestuario'
                    color="black"
                    onPress={function () {
                        navigation.navigate('TelaCursos', {
                            nome: "Vestuario",
                            descricao: "O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços."
                        })
                    }}
                />
            </View>
            <View style={styles.botao2}>
                <Button
                    title='Administração'
                    color="black"
                    onPress={function () {
                        navigation.navigate('TelaCursos', {
                            nome: "Administração",
                            descricao: "O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho. Assim, o profissional Técnico em Administração pode atuar nas instituições públicas, privadas e do terceiro setor que demandem atividades de gestão, trabalhando especialmente no suporte e apoio nos mais diversos setores."
                            //matéria, professor e imagem
                        })
                    }}
                />
            </View>
            <View style={styles.botao}>
                <Button style={styles.botao}
                    title='Voltar'
                    color="#3a6604"
                    onPress={function () { navigation.goBack() }}
                />
            </View>
        </View>

    )
}

function TelaCursos({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{route.params.nome}</Text>
            <Text style={styles.alinhamneto}>{route.params.descricao}</Text>
            <View style={styles.botao}>
                <Button style={styles.botao}
                    title='Voltar'
                    color="#3a6604"
                    onPress={function () {
                        navigation.goBack()
                    }}
                />
            </View>
            <View style={styles.botao}>
                <Button
                    title='Voltar para o inicio'
                    color="#3a6604"
                    onPress={function () { navigation.navigate('IFC') }}
                />
            </View>
            

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
                />
                <PilhaTelas.Screen
                    name="SegundaTela"
                    component={SegundaTela}
                    options={{ title: "Institudo Federal catarinense" }}
                />
                <PilhaTelas.Screen
                    name="TelaEscolherCurso"
                    component={TelaEscolherCurso}
                    options={{ title: "Escolher Cursos" }}
                />
                <PilhaTelas.Screen
                    name="TelaCursos"
                    component={TelaCursos}
                    options={{ title: "Cursos" }}
                />
            </PilhaTelas.Navigator>
        </NavigationContainer>
    );
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
        margin: '8%',
        fontSize: 20,
        textAlign: 'center'
    },
    botao: {
        margin: "3%"
    },
    botao2: {
        margin: "1.5%"
    },
    img: {
        width: "98%",
        height: 300,
        margin: 10
    },
    alinhamneto: {
        flex: 1,
        width: '80%',
        fontSize: 16,
        textAlign: 'justify'

    }
});