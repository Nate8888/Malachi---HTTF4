import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';

import { colors } from '../styles/global'

const Browse = () => {
    const doshAmazon = require('../assets/sample-dosh/amazon.png')
    const doshApple = require('../assets/sample-dosh/apple.png')
    const doshDisneyPlus = require('../assets/sample-dosh/disney-plus.jpeg')
    const doshDunkinDonuts = require('../assets/sample-dosh/dunkin-donuts.jpeg')
    const doshGNC = require('../assets/sample-dosh/gnc.png')
    const doshPizzaHut = require('../assets/sample-dosh/pizza-hut.jpeg')

    return (
        <View style={styles.browseContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Browse</Text>
            </View>
            <View style={styles.browse}>
                <View style={styles.row1}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={doshAmazon} />
                        </View>
                        <Text style={styles.cardTitle}>Amazon</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>500</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.appleCardImage} source={doshApple} />
                        </View>
                        <Text style={styles.cardTitle}>Apple</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>630</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row2}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={doshDisneyPlus} />
                        </View>
                        <Text style={styles.cardTitle}>Disney Plus</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>90</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={doshDunkinDonuts} />
                        </View>
                        <Text style={styles.cardTitle}>Dunkin Donuts</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>189</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row3}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={doshGNC} />
                        </View>
                        <Text style={styles.cardTitle}>GNC</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>212</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={doshPizzaHut} />
                        </View>
                        <Text style={styles.cardTitle}>Pizza Hut</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>120</Text> points
                        </Text>
                    </View>
                </View>
                <Text style={styles.soon}>Many more coming soon...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    browseContainer: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#fff'
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
    row1: {
        display: 'flex',
        flexDirection: 'row',
    },
    row2: {
        display: 'flex',
        flexDirection: 'row',
    },
    row3: {
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.sc,
        width: '48%',
        padding: 15,
        margin: 4
    },
    cardImageWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 8,
        width: '100%',
        height: 100,
    },
    cardImage: {
        width: 120,
        height: 60,
    },
    appleCardImage: {
        width: 120,
        height: 80,
    },
    cardTitle: {
        color: colors.d,
        fontWeight: '700',
        marginTop: 4
    },
    cardDesc: {
        fontWeight: '200',
        marginTop: 4
    },
    cardTag: {
        fontWeight: '700',
        backgroundColor: colors.g,
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius: 6,
        color: colors.w
    },
    soon: {
        textAlign: 'center'
    }
})

export default Browse
