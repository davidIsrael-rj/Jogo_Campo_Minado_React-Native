import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import params from "./params";
import Field from "./components/Field";

export default class App extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.welcome}>Campo Minado</Text>
                    <Text style={styles.instructions}>Tamanho da grade:
                        {params.getRowsAmount()}x{params.getColumnsAmount()}
                    </Text>
                    <Field/>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5fcff",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    welcome:{
        fontSize: 20,
        textAling:'center',
        margin:10,
    },
})