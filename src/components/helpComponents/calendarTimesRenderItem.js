import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class CalendarTimesRenderItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={{ backgroundColor: item.reserved == true ? 'green':'red', flexDirection: 'row' }}>
                <Text> { item.time } </Text>
                <Text> { item.lesson } </Text>
            </TouchableOpacity>
        )
    }
}
