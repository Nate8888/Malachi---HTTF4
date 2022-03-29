import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native';

// Any custom components
import Header from './shared/header'
import BottomTabsNavigator from './shared/bottom-tabs-navigator'
import { colors } from './styles/global'

const getFonts = () => {
	return Font.loadAsync({
        'roboto-black': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
        'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'roboto-thin': require('./assets/fonts/Roboto/Roboto-Thin.ttf'),
	});
}

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

	return (
		<SafeAreaView style={styles.appSafeArea}>
			<Header />
			<BottomTabsNavigator
				style={styles.bottomTabsNavigator}
			/>
		</SafeAreaView>
	)

    // if (fontsLoaded) {
    //     console.log('font loaded')
	// 	return (
    //         <View style={styles.container}>
    //             <Header />
    //             <BottomTabsNavigator
	// 				style={styles.bottomTabsNavigator}
	// 				openCloseCreatePlanModal={openCloseCreatePlanModal}
	// 			/>
	//
				// <Modal style={styles.modal} isVisible={createPlanModalVisible}>
	            //     <CreatePlan closeModal={openCloseCreatePlanModal} />
	            // </Modal>
    //         </View>
    //     )
	// } else {
    //     console.log('font not loaded')
	// 	return (
	// 		<AppLoading
	// 			startAsync={getFonts}
	// 			onFinish={() => setFontsLoaded(true)}
	// 			onError={console.warn}
	// 		/>
	// 	)
	// }
}

const styles = StyleSheet.create({
    appSafeArea: {
        flex: 1,
        backgroundColor: colors.f,
        justifyContent: 'center'
    },
    bottomTabsNavigator: {
        position: 'absolute',
        bottom: 0,
    }
});
