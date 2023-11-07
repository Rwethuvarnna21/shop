import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native';


const Loginapi = ({ route }) => {
    const { item } = route.params;
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {/* <TouchableOpacity onPress={()=>navigation.navigate('homepage')}> */}
                <Text style={{ color: 'black', fontSize: 13 }}>{item?.PostOffice[0].Name}</Text>
                <View style={{ borderWidth: 2, borderColor: 'red' }} />
                {/* <TouchableOpacity onPress={() => navigation.navigate('homepage')}> */}
                    <Text style={{ color: 'blue', fontsize: 14 }}>{item?.PostOffice[0].District}</Text>
                    <View style={{ borderWidth: 2, borderColor: 'red' }} />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('details',{item})}> */}
                        <Text style={{ color: 'blue', fontsize: 14 }}>{item?.PostOffice[0].Division}</Text>
                    {/* </TouchableOpacity> */}
                {/* </TouchableOpacity> */}

            </View>
        </View>
    )
}

export default Loginapi;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'skyblue',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:'34%',
        width: '100%',
        height: '63%',
    },
    box: {
        borderWidth: 67,
        borderColor: 'white',
        // width:'100%',



    },
})