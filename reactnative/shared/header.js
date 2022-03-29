import React, { useState } from 'react'
import PanGestureHandler from 'react-native-gesture-handler'
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, GestureRecognizer } from 'react-native'

import UserProfile from '../screens/user-profile'
import { defaults, colors } from '../styles/global'
// @todo: Substitute for Modal from 'react-native' since that's the native one.
// import Modal from 'modal-enhanced-react-native-web'; // Works nicely on the web
// Modal reference (for the native one):

const Header = () => {
    const [userProfileModalVisible, setUserProfileModalVisible] = useState(false)

    const mLogo = require('../assets/m-logo.png')
    const sampleUser = require('../assets/sample-user.png')

    const openCloseMyProfile = () => {
        setUserProfileModalVisible(!userProfileModalVisible)
    }

    const handleGesture = () => {

    }

    return (
        <View style={styles.headerContainer}>
            <Image source={mLogo} style={styles.headerLogo} />
            <TouchableOpacity onPress={openCloseMyProfile} style={styles.userProfileImageTouchable}>
                <Image source={sampleUser} style={styles.userProfileImage} />
			</TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={userProfileModalVisible}
                onRequestClose={() => setUserProfileModalVisible(!userProfileModalVisible)}
            >
                <UserProfile closeModal={openCloseMyProfile} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.w,
    },
    modal: {
		borderRadius: defaults.borderRadiusModal
	},
    headerLogo: {
        width: 45,
        height: 20
    },
    userProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
    }
})

export default Header
