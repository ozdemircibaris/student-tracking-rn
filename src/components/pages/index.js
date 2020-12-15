import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchProgram } from '../../actions/indexAction';
import { PhoneHeight } from '../config/env';
import CalendarDaysRenderItem from '../helpComponents/calendarDaysRenderItem';
import CalendarWeeksRenderItem from '../helpComponents/calendarWeeksRenderItem';
import CalendarTimesRenderItem from '../helpComponents/calendarTimesRenderItem';

const calendar = [
    { id: '1', title: '1. Hafta' },
    { id: '2', title: '2. Hafta' },
    { id: '3', title: '3. Hafta' },
    { id: '4', title: '4. Hafta' },
    { id: '5', title: '5. Hafta' },
    { id: '6', title: '6. Hafta' },
]

const days = [
    { id: '1', title: 'Pazartesi' },
    { id: '2', title: 'Salı' },
    { id: '3', title: 'Çarşamba' },
    { id: '4', title: 'Perşembe' },
    { id: '5', title: 'Cuma' },
    { id: '6', title: 'Cumartesi' },
    { id: '7', title: 'Pazar' },
]

class Index extends Component {
    componentWillMount() {
        this.props.fetchProgram()
    }
    render() {
        const { minutes } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    horizontal
                    data={calendar}
                    style={{
                        maxHeight: PhoneHeight * 0.08
                    }}
                    bounces={false}
                    renderItem={({ item }) => <CalendarWeeksRenderItem item={item} />} />
                <FlatList
                    keyExtractor={item => item.id}
                    horizontal
                    style={{
                        maxHeight: PhoneHeight * 0.08
                    }}
                    data={days}
                    bounces={false}
                    renderItem={({ item }) => <CalendarDaysRenderItem item={item} />} />
                <FlatList
                    keyExtractor={item => item.id}
                    data={minutes}
                    bounces={false}
                    renderItem={({ item }) => <CalendarTimesRenderItem item={item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const mapStateToProps = state => {
    const { minutes } = state.IndexReducer;
    return {
        minutes
    }
}

export default connect(
    mapStateToProps,
    {
        fetchProgram
    }
)(Index)