import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default props => {
    return (
        <>
            <SafeAreaView style={styles.App}>
                <Text>Campo Minado</Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: "center",
        alignItems: "center",
        padding:20
    }
})