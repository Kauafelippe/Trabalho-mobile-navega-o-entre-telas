
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

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
                    onPress={function () { navigation.navigate('TelaEscolherCurso') }} />
            </View>
        </View>
    )
}

function SegundaTela({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Descrição IFC Campus Ibirama</Text>
            {/* Descrição do IFC Ibirama  */}
            <Text style={styles.alinhamento}>O Instituto Federal Catarinense (IFC) - Campus Ibirama oferece uma variedade de cursos técnicos, de graduação e pós-graduação, com destaque para áreas como Administração, Informática, Vestuário e Design de Moda. A instituição valoriza a pesquisa, a extensão e a inovação, promovendo eventos e projetos que visam o desenvolvimento acadêmico e profissional dos alunos. Além disso, o campus proporciona um ambiente de ensino inclusivo e acessível, contribuindo para o crescimento educacional e socioeconômico da região.</Text>
            <Image
                style={styles.img}
                source={require('./assets/images/ifc-entrada.jpg')} />
            <View style={styles.botao}>
                <Button style={styles.botao}
                    title='Voltar'
                    color="#3a6604"
                    onPress={function () { navigation.goBack() }} />
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
                            nome: "Informática",
                            image: require('./assets/images/logo_info.jpg'),
                            descricao: "O técnico em Informática Integrado ao Ensino Médio prepara o aluno para atuar de maneira consciente e responsável, com foco em desenvolvimento de programas de computador, seguindo as especificações e paradigmas da lógica e das linguagens de programação.",
                            tabelaCabecalho: ['Professor', 'Email', 'Matéria'],
                            tabelaDado: [
                                ['Bruno Anselmo Guilhen', 'bruno.guilhen@ifc.edu.br', 'Informática'],
                                ['Eduardo Stahnke', 'eduardo.stahnke@ifc.edu.br', 'Informática'],
                                ['Juliane Martinez Galiano', 'juliane.galiano@ifc.edu.br', 'Informática'],
                                ['Rodrigo Ramos Nogueira', 'rodrigo.nogueira@ifc.edu.br', 'Informática'],
                                ['Tiago Funk', 'tiago.funk@ifc.edu.br', 'Informática']
                            ]
                        })
                    }} />
            </View>
            <View style={styles.botao2}>
                <Button
                    title='Vestuário'
                    color="black"
                    onPress={function () {
                        navigation.navigate('TelaCursos', {
                            nome: "Vestuário",
                            image: require('./assets/images/logo_vest.jpg'),
                            descricao: "O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços.",
                            tabelaCabecalho: ['Professor', 'Email', 'Matéria'],
                            tabelaDado: [
                                ['Ana Silvia de Lima Vielmo', 'ana.vielmo@ifc.edu.br', 'Vestuário/Moda'],
                                ['Francisleth Pereira Battisti', 'francisleth.battisti@ifc.edu.br', 'Vestuário/Moda'],
                                ['Isabela Dal-Bó Falchetti', 'isabela.dalbo@ifc.edu.br', 'Vestuário/Moda'],
                                ['Lariane Davila Borges de Oliveira', 'lariane.oliveira@ifc.edu.br', 'Vestuário/Moda'],
                                ['Márcio Monticelli Albani', 'marcio.albani@ifc.edu.br', 'Vestuário/Moda']
                                ['Jonathan Gurgel de Lima', 'jonathan.lima@ifc.edu.br', 'Vestuário/Moda']
                            ]
                        })
                    }} />
            </View>
            <View style={styles.botao2}>
                <Button
                    title='Administração'
                    color="black"
                    onPress={function () {
                        navigation.navigate('TelaCursos', {
                            nome: "Administração",
                            image: require('./assets/images/logo_adm.jpg'),
                            descricao: "O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho. Assim, o profissional Técnico em Administração pode atuar nas instituições públicas, privadas e do terceiro setor que demandem atividades de gestão, trabalhando especialmente no suporte e apoio nos mais diversos setores.",
                            tabelaCabecalho: ['Professor', 'Email', 'Matéria'],
                            tabelaDado: [
                                ['André Luiz Kopelke', 'andre.kopelke@ifc.edu.br', 'Administração'],
                                ['Jeter Lang', 'jeter.lang@ifc.edu.br', 'Administração'],
                                ['Paulo Roberto Silveira Machado', 'paulo.machado@ifc.edu.br', 'Administração'],
                                ['Thiago Souza Araújo', 'thiago.araujo@ifc.edu.br', 'Administração']
                            ]
                        })
                    }} />
            </View>
            <View style={styles.botao}>
                <Button style={styles.botao}
                    title='Voltar'
                    color="#3a6604"
                    onPress={function () { navigation.goBack() }} />
            </View>
        </View>
    )
}

function TelaCursos({ route, navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container2}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.titulo}>{route.params.nome}</Text>
                    <Image style={styles.imagem} source={route.params.image} />
                    <Text style={styles.alinhamento}>{route.params.descricao}</Text>

                    <Table style={styles.tabela}>
                        <Row data={route.params.tabelaCabecalho} style={styles.head} textStyle={styles.text} />
                        <Rows data={route.params.tabelaDado} textStyle={styles.text} />
                    </Table>

                    <View style={styles.botao}>
                        <Button style={styles.botao3}
                            title='Voltar'
                            color="#3a6604"
                            onPress={function () {
                                navigation.goBack()
                            }} />
                    </View>
                    <View style={styles.botao3}>
                        <Button
                            title='Voltar para o início'
                            color="#3a6604"
                            onPress={function () { navigation.navigate('IFC') }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
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
                    options={{ title: "Institudo Federal catarinense" }} />
                <PilhaTelas.Screen
                    name="SegundaTela"
                    component={SegundaTela}
                    options={{ title: "Institudo Federal catarinense" }} />
                <PilhaTelas.Screen
                    name="TelaEscolherCurso"
                    component={TelaEscolherCurso}
                    options={{ title: "Escolher Cursos" }} />
                <PilhaTelas.Screen
                    name="TelaCursos"
                    component={TelaCursos}
                    options={{ title: "Cursos" }} />
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
    container2: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
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
    botao3: {
        margin: "3%"
    },
    img: {
        width: "98%",
        height: 300,
        margin: 10
    },
    alinhamento: {
        flex: 1,
        width: '95%',
        fontSize: 16,
        textAlign: 'justify'
    },
    imagem: {
        width: '98%',
        height: 250
    },
    scrollView: {
        marginHorizontal: 10,

    },
    tabela: {
        marginTop: 15,
        width: "98%"
    },
    head: {
        height: 40,
        backgroundColor: '#E8FBE6'
    },
    text: {
        margin: 6,
        textAlign: 'center',
        fontSize: 14
    }
});