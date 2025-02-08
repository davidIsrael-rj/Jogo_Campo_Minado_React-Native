import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import params from "./params";
import Field from "./components/Field";
import Flag from "./components/Flag";

export default class App extends Component {

    minesAmount =()=>{
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return MathCeil(cols * rows * params.difficultLevel)
    }

    createState =()=>{
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
    }

    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.welcome}>Campo Minado</Text>
                    <Text style={styles.instructions}>Tamanho da grade:
                        {params.getRowsAmount()}x{params.getColumnsAmount()}
                    </Text>
                    
                    <Field/>
                    <Field opened/>
                    <Field opened nearMines={1}/>
                    <Field opened nearMines={2}/>
                    <Field opened nearMines={3}/>
                    <Field opened nearMines={6}/>
                    <Field mined/>
                    <Field mined opened/>
                    <Field mined opened exploded/>
                    <Field flagged/>
                    <Field flagged opened/>
                    <Flag />
                    <Flag bigger />

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
        justifyContent:"space-around",
        alignItems: "center",
        padding: 10
    },
    welcome: {
        fontSize: 20,
        textAling: 'center',
        margin: 10,
    },
})