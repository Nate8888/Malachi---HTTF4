import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import CreatePlan from './create-plan'

import { colors } from '../styles/global'

const MyPlans = (props) => {
    const sampleUser = require('../assets/sample-user.png')
    const sampleUser2 = require('../assets/sample-user2.png')

    const [createPlanModalVisible, setCreatePlanModalVisible] = useState(false)

	const openCloseCreatePlanModal = () => {
		console.log("clicking openCloseCreatePlanModal")
        setCreatePlanModalVisible(!createPlanModalVisible)
    }

    console.log(createPlanModalVisible)

    return (
        <View style={styles.myPlansContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>My Plans</Text>
            </View>
            <View style={styles.myPlans}>
                <View style={styles.plan}>
                    <View style={styles.planc1}>
                        <View style={styles.planc1left}>
                            <Text style={styles.planTitle}>Trip to New York!</Text>
                            <View style={styles.planFooter}>
                                <Image style={styles.createdBy} source={sampleUser} />
                            </View>
                        </View>
                        <View style={styles.planc1right}>
                            <Text style={styles.percent}>87%</Text>
                        </View>
                    </View>
                    <View style={styles.progressContainer}>
                        <View style={styles.progress}></View>
                    </View>
                </View>

                <View style={styles.plan}>
                    <View style={styles.planc1}>
                        <View style={styles.planc1left}>
                            <Text style={styles.planTitle}>New TV for my dorm</Text>
                            <View style={styles.planFooter}>
                                <Image style={styles.createdBy} source={sampleUser} />
                            </View>
                        </View>
                        <View style={styles.planc1right}>
                            <Text style={styles.percent}>28%</Text>
                        </View>
                    </View>
                    <View style={styles.progressContainer}>
                        <View style={styles.progress2}></View>
                    </View>
                </View>

                <View style={styles.plan}>
                    <View style={styles.planc1}>
                        <View style={styles.planc1left}>
                            <Text style={styles.planTitle}>Hamilton Tickets 🎉</Text>
                            <View style={styles.planFooter}>
                                <Image style={styles.createdBy} source={sampleUser} />
                                <Image style={styles.createdBy} source={sampleUser2} />
                            </View>
                        </View>
                        <View style={styles.planc1right}>
                            <Text style={styles.percent}>53%</Text>
                        </View>
                    </View>
                    <View style={styles.progressContainer}>
                        <View style={styles.progress3}></View>
                    </View>
                </View>

                <TouchableOpacity style={styles.planCreate} onPress={openCloseCreatePlanModal}>
                    <Text style={styles.planCreateTitle}>New plan</Text>
                </TouchableOpacity>
            </View>
            {createPlanModalVisible && (
				<Modal
					animationType="slide"
	                transparent={true}
	                isVisible={createPlanModalVisible}
	                onRequestClose={openCloseCreatePlanModal}
				>
					<CreatePlan closeModal={openCloseCreatePlanModal} />
				</Modal>
			)}
        </View>
    )
}

const styles = StyleSheet.create({
    myPlansContainer: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: colors.w
    },
    header: {
		width: '100%',
		paddingVertical: 20
	},
    title: {
		fontSize: 32,
        fontWeight: '900',
        color: colors.d
	},
    myPlans: {
        display: 'flex'
    },
    plan: {
        borderRadius: 8,
        backgroundColor: colors.w,
        height: 80,
        shadowColor: colors.sc,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.65,
        shadowRadius: 12,
        elevation: 5, /* for android */
        display: 'flex',
        justifyContent: 'center',
        padding: 12,
        position: 'relative',
        marginBottom: 10
    },
    planCreate: {
        height: 80,
        borderRadius: 8,
        backgroundColor: colors.bg,
        borderRadius: 8, // to make dashed borders appear
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        textAlign: 'center'
    },
    planTitle: {
        color: colors.d,
        fontWeight: '800',
        fontSize: 16
    },
    planCreateTitle: {
        color: colors.d,
        fontWeight: '800',
    },
    planc1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    planc1left: {

    },
    planc1right: {

    },
    percent: {
        fontWeight: '800',
        fontSize: 14,
        color: colors.g
    },
    progressContainer: {
        width: '100%',
        height: 10,
        backgroundColor: colors.bg,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    progress: {
        width: '87%',
        height: 10,
        backgroundColor: colors.g,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    progress2: {
        width: '28%',
        height: 10,
        backgroundColor: colors.g,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    progress3: {
        width: '63%',
        height: 10,
        backgroundColor: colors.g,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    planFooter: {
        display: 'flex',
        flexDirection: 'row',
    },
    createdBy: {
        width: 16,
        height: 16,
        borderRadius: 16/2,
        marginTop: 6,
        marginRight: 6
    },
})

export default MyPlans
