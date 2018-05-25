/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {
    Navigation,
    Scene,
    Router,
    Modal
} from 'react-native-router-flux';
import IOS from './src/ios';
import Android from './src/android'
import Web from './src/web'
import TabIcon from './src/TabIcon'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Modal>
                    <Scene key="root" tabBarPosition="bottom" tabs>
                        <Scene hideBackImage
                               key="IOS"
                               title="苹果"
                               component={IOS}
                               icon={TabIcon}
                               Image={require('./src/image/ios.png')}
                               selectedImage={require('./src/image/ios_active.png')}
                        />

                        <Scene hideBackImage
                               key="Web"
                               component={Web}
                               title="web"
                               icon={TabIcon}
                               Image={require('./src/image/web.png')}
                               showLabel = {false}
                               selectedImage={require('./src/image/web_active.png')}
                        />

                        <Scene hideBackImage
                               key="Android"
                               component={Android}
                               title="安卓"
                               icon={TabIcon}
                               Image={require('./src/image/android.png')}
                               hideNavBar={true}  //隐藏导航栏
                               selectedImage={require('./src/image/android_active.png')}
                        />
                    </Scene>
                </Modal>
            </Router>
        );
    }

}

const styles = StyleSheet.create({
    tabbarContainer: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        overflow: 'visible'

    },
    tabIconItem: {
        flex: 1,
        height: 56,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'transparent',
        overflow: 'visible'
    },
    tabIconImage: {
        width: 60,
        height: 60,
        overflow: 'visible'

    },
});
