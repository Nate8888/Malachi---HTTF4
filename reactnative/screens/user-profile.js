import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { defaults, colors } from '../styles/global'

const UserProfile = (props) => {
    const sampleUser = require('../assets/sample-user.png')
    const closeIcon = require('../assets/close.png')

    const changeProfileImage = () => {

    }

    const linkBankAccount = () => {

    }

    const getReferralLink = () => {

    }

    return (
        <View style={styles.userProfileContainer}>
            <View style={styles.modal}>
                <TouchableOpacity onPress={props.closeModal} style={styles.closeButtonTouchable}>
                    <Image source={closeIcon} style={styles.closeButton} />
                </TouchableOpacity>

                <View style={styles.profileHeader}>
                    <TouchableOpacity onPress={changeProfileImage} style={styles.userProfileImageTouchable}>
                        <Image source={sampleUser} style={styles.userProfileImage} />
        			</TouchableOpacity>

                    <View style={styles.textInfo}>
                        <Text style={styles.displayName}>Kate Letterman</Text>
                        <Text style={styles.uni}>University of Central Florida</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={linkBankAccount}
                    style={styles.linkBankBtn}
                >
                    <Text style={styles.linkBankText}>Link my bank account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={getReferralLink}
                    style={styles.getReferralLinkBtn}
                >
                    <Text style={styles.getReferralText}>Invite a friend</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userProfileContainer: {
        paddingHorizontal: 32,
        paddingTop: 32,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: defaults.borderRadiusModal
    },
    modal: {
        backgroundColor: colors.w,
        position: 'relative',
        flex: 1,
        width: '120%',
        borderRadius: defaults.borderRadiusModal,
        padding: 16
    },
    closeButtonTouchable: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    closeButton: {
        width: 12,
        height: 12
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 36
    },
    displayName: {
        color: colors.d,
        fontWeight: '900',
        fontSize: 16
    },
    uni: {
        color: colors.d,
        fontWeight: '200',
        fontSize: 14
    },
    userProfileImageTouchable: {
        borderRadius: 60/2,
        marginRight: 10
    },
    userProfileImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2
    },
    linkBankBtn: {
        borderRadius: defaults.borderRadiusInput,
        height: 32,
        backgroundColor: colors.bg,
        marginTop: 12,
        padding: 6,
        display: 'flex',
        justifyContent: 'center'
    },
    linkBankText: {
        color: colors.d,
    },
    getReferralLinkBtn: {
        borderRadius: defaults.borderRadiusInput,
        height: 32,
        backgroundColor: colors.g,
        marginTop: 12,
        padding: 6,
        display: 'flex',
        justifyContent: 'center'
    },
    getReferralText: {
        color: colors.w
    }
})

export default UserProfile
