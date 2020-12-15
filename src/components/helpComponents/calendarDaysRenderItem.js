import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class CalendarDaysRenderItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={{ borderWidth: 1 }}>
                <Text> { item.title } </Text>
            </TouchableOpacity>
        )
    }
}
