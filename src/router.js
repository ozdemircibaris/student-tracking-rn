import React, { Component } from 'react';
import { Router, Stack, Scene  } from 'react-native-router-flux';
import Index from './components/pages';

export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <Stack
                    hideNavBar
                    key='root'>
                    {/* <Stack key='auth'>
                        <Scene
                            key='signIn' />
                        <Scene
                            key='siginUp' />
                    </Stack> */}
                    <Stack initial key='main'>
                        <Scene
                            key='index'
                            component={Index} />
                    </Stack>
                </Stack>
            </Router>
        )
    }
}
