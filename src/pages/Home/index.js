import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import {Feather} from "@expo/vector-icons"

export default function Home(){
    const [products, setProducts] = useState([
       {
        id: '1',
        name: 'Coca cola',
        price: 19.90
       },
       {
        id: '2',
        name: 'Chocolate',
        price: 6.50
       },
       {
        id: '3',
        name: 'Queijo 500g',
        price: 15
       },
       {
        id: '4',
        name: 'Batata frita',
        price: 23.90
       } ,
       {
        id: '5',
        name: 'Guarana lata',
        price: 6.00
       } 
    ])

    return(
        <SafeAreaView  style={styles.container}>
        <View  style={styles.cartContent}>
            <Text style={styles.title}>Lista de Produtos</Text>
            <TouchableOpacity style={styles.cartButton}>
                <View style={styles.dot}>
                    <Text style={styles.dotText}>3</Text>
                </View>
                <Feather name="shopping-cart" size={30} color="black"/>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14,
    },
    cartContent:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot:{
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText:{
        fontSize: 12
    }
})