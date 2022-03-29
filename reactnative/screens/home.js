import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles, colors, defaults } from '../styles/global'

const Home = () => {
    const [user, setUser] = useState({
		displayName: 'Kate',
		plansBalance: 640
	})

    const absIcon1 = require('../assets/abstract-icon1.svg')
    const absIcon2 = require('../assets/abstract-icon2.svg')
    const absIcon3 = require('../assets/abstract-icon3.svg')

    const getGreetingsBasedOnTime = () => {
		const date = new Date();
		const hour = date.getHours();

        const displayName = user && user.displayName ? user.displayName : 'darling'

		if (hour >= 0 && hour <= 13) {
			return `Good morning, ${displayName} ⛅`;
		}else if (hour > 13 && hour <= 18){
			return `Good afternoon, ${displayName} 👋`;
		}else {
			return `Good evening, ${displayName} 🌙`;
		}
	}

    const greetings = getGreetingsBasedOnTime()

    return (
            <ScrollView style={styles.homeScrollView}>
                <View style={styles.greetings}>
                    <Text style={styles.greetingsTitle}>{greetings}</Text>
                    <Text style={styles.welcomeBack}>Welcome back!</Text>
                </View>
                <View style={styles.eBalanceCard}>
                    <Text style={styles.balanceType}>e-balance</Text>
                    <Text style={styles.eBalance}>$400.95</Text>
                    <View style={styles.iIconWrapper}>
                        <Text style={styles.iIcon}>i</Text>
                    </View>
                </View>
                <View style={styles.breakdownContainer}>
                    <Text style={styles.breakdownTitle}>Breakdown of your <Text style={defaults.makeMeHulk}>expenses</Text></Text>
                    <View style={styles.breakdown}>
                        <View style={styles.breakdownThumbnail}>
                            <View style={styles.firstColumn}>
                                <AntDesign style={styles.breakdownIcon} name="shoppingcart" size={22} color={colors.w} />
                                <Text style={styles.breakdownType}>Groceries</Text>
                            </View>
                            <Text style={styles.breakdownPrice}>$70</Text>
                        </View>
                        <View style={styles.breakdownThumbnail}>
                            <View style={styles.firstColumn}>
                                <FontAwesome5 style={styles.breakdownIcon} name="laugh-beam" size={22} color={colors.w} />
                                <Text style={styles.breakdownType}>Entertainment</Text>
                            </View>
                            <Text style={styles.breakdownPrice}>$100.56</Text>
                        </View>
                        <View style={styles.breakdownThumbnail}>
                            <View style={styles.firstColumn}>
                                <Feather style={styles.breakdownIcon} name="more-horizontal" size={22} color={colors.w} />
                                <Text style={styles.breakdownType}>Miscellaneous</Text>
                            </View>
                            <Text style={styles.breakdownPrice}>$25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.recentTransactionsContainer}>
                    <Text style={styles.recentTransactionsTitle}>Latest transactions</Text>
                    <View style={styles.recentTransactions}>
                        <View style={styles.transaction}>
                            <View style={styles.transactionFirstRow}>
                                <View style={styles.transactionr1c1}>
                                    <View style={styles.dollarWrapper}>
                                        <Text style={styles.dollar}>$</Text>
                                    </View>
                                    <Text style={styles.transactionName}>Publix</Text>
                                </View>
                                <Text style={styles.transactionPrice}>$32.07</Text>
                            </View>
                            <Text style={styles.transactionDate}>March, 24th 2022</Text>
                        </View>
                        <View style={styles.transaction}>
                            <View style={styles.transactionFirstRow}>
                                <View style={styles.transactionr1c1}>
                                    <View style={styles.dollarWrapper}>
                                        <Text style={styles.dollar}>$</Text>
                                    </View>
                                    <Text style={styles.transactionName}>4K Samsung TV</Text>
                                </View>
                                <Text style={styles.transactionPrice}>$399.99</Text>
                            </View>
                            <Text style={styles.transactionDate}>March, 22nd 2022</Text>
                        </View>
                        <View style={styles.transaction}>
                            <View style={styles.transactionFirstRow}>
                                <View style={styles.transactionr1c1}>
                                    <View style={styles.dollarWrapper}>
                                        <Text style={styles.dollar}>$</Text>
                                    </View>
                                    <Text style={styles.transactionName}>Dunkin'</Text>
                                </View>
                                <Text style={styles.transactionPrice}>$12.58</Text>
                            </View>
                            <Text style={styles.transactionDate}>March, 1st 2022</Text>
                        </View>
                        <View style={styles.transaction}>
                            <View style={styles.transactionFirstRow}>
                                <View style={styles.transactionr1c1}>
                                    <View style={styles.dollarWrapper}>
                                        <Text style={styles.dollar}>$</Text>
                                    </View>
                                    <Text style={styles.transactionName}>McDonald's</Text>
                                </View>
                                <Text style={styles.transactionPrice}>$23.19</Text>
                            </View>
                            <Text style={styles.transactionDate}>October, 10th 2021</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
    )
}

// <Text style={styles.balanceType}>Your balance after your plan requirements and recurring expences</Text>

const styles = StyleSheet.create({
    homeScrollView: {
        paddingHorizontal: 16,
        flex: 1,
		backgroundColor: colors.w
    },
	greetings: {
		width: "100%",
		paddingVertical: 20
	},
	greetingsTitle: {
        fontSize: 28,
        fontWeight: "200",
        color: colors.d
	},
	welcomeBack: {
        fontSize: 28,
        fontWeight: "800",
        marginTop: 2,
        color: colors.d
	},
    eBalanceCard: {
        borderRadius: 8,
        backgroundColor: colors.w,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.bg,
        shadowColor: colors.sc,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.65,
        shadowRadius: 20,
        elevation: 5, /* for android */
        position: 'relative'
    },
    iIconWrapper: {
        width: 20,
        height: 20,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.sc,
        borderWidth: 2,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    iIcon: {
        color: colors.sc,
        fontWeight: '800',
    },
    balanceType: {
        fontWeight: '200',
    },
    eBalance: {
        fontSize: 30,
        fontWeight: '800',
        marginTop: 6
    },
    breakdownContainer: {
        marginTop: 20,
    },
    breakdown: {
        backgroundColor: colors.d,
        borderRadius: 8,
        shadowColor: colors.sc,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, /* for android */
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    breakdownTitle: {
        color: colors.d,
        fontWeight: '800',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 14
    },
    breakdownThumbnail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    firstColumn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    breakdownPrice: {
        color: colors.w,
        fontWeight: '800',
    },
    breakdownIcon: {
        color: colors.w,
        padding: 5,
        marginRight: 8,
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    breakdownType: {
        color: colors.w
    },
    recentTransactionsContainer: {
        marginTop: 20
    },
    recentTransactionsTitle: {
        color: colors.d,
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 14,
        marginTop: 20,
    },
    transaction: {
        borderBottomWidth: 1,
        borderBottomColor: colors.sc,
        paddingBottom: 6,
        marginBottom: 8
    },
    transactionFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    transactionr1c1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dollarWrapper: {
        backgroundColor: colors.d,
        width: 15,
        height: 15,
        borderRadius: 15/2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dollar: {
        fontSize: 10,
        color: colors.w
    },
    transactionName: {
        marginLeft: 15
    },
    transactionPrice: {

    },
    transactionDate: {
        marginTop: 3,
        marginLeft: 30,
    },
})

export default Home
