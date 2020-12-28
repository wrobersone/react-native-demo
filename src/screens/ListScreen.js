import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', key: '1', age: 20 },
        { name: 'Friend #2', key: '2', age: 21 },
        { name: 'Friend #3', key: '3', age: 22 },
        { name: 'Friend #4', key: '4', age: 23 },
        { name: 'Friend #5', key: '5', age: 24 },
        { name: 'Friend #6', key: '6', age: 25 },
        { name: 'Friend #7', key: '7', age: 26 },
        { name: 'Friend #8', key: '8', age: 27 }
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name} 
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;