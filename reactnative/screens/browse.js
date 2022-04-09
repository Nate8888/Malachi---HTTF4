import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { colors } from '../styles/global'

const Browse = () => {
    const doshAmazon = require('../assets/sample-dosh/amazon.png')
    const doshApple = require('../assets/sample-dosh/apple.png')
    const doshDisneyPlus = require('../assets/sample-dosh/disney-plus.jpeg')
    const doshDunkinDonuts = require('../assets/sample-dosh/dunkin-donuts.jpeg')
    const doshGNC = require('../assets/sample-dosh/gnc.png')
    const doshPizzaHut = require('../assets/sample-dosh/pizza-hut.jpeg')

    const ecoBrew = require("../assets/sample-dosh/eco-brewery.png")
    const ecoImperfect = require("../assets/sample-dosh/eco-imperfect.png")
    const ecoMarket = require("../assets/sample-dosh/eco-market.png")
    const ecoMeat = require("../assets/sample-dosh/eco-meat.png")
    const ecoPatagonia = require("../assets/sample-dosh/eco-patagonia.png")
    const ecoPaw = require("../assets/sample-dosh/eco-paw.png")
    const ecoSeventh = require("../assets/sample-dosh/eco-seventh.png")
    const ecoSwim = require("../assets/sample-dosh/eco-swim.png")
    const ecoWild = require("../assets/sample-dosh/eco-wild.png")

    return (
        <ScrollView style={styles.browseContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Browse</Text>
            </View>
            <View style={styles.browse}>
                <View style={styles.row1}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoBrew} />
                        </View>
                        <Text style={styles.cardTitle}>New Belgium Brewery</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>500</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.appleCardImage} source={ecoImperfect} />
                        </View>
                        <Text style={styles.cardTitle}>Imperfect Foods</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>630</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row2}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoMarket} />
                        </View>
                        <Text style={styles.cardTitle}>Misfits Market</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>90</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoMeat} />
                        </View>
                        <Text style={styles.cardTitle}>Beyond Meat</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>189</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row3}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoPatagonia} />
                        </View>
                        <Text style={styles.cardTitle}>Patagonia</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>212</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoPaw} />
                        </View>
                        <Text style={styles.cardTitle}>West Paw</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>120</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row4}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoSeventh} />
                        </View>
                        <Text style={styles.cardTitle}>Seventh Generation</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>110</Text> points
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoSwim} />
                        </View>
                        <Text style={styles.cardTitle}>A'ray Swim</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>90</Text> points
                        </Text>
                    </View>
                </View>
                <View style={styles.row5}>
                    <View style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image style={styles.cardImage} source={ecoWild} />
                        </View>
                        <Text style={styles.cardTitle}>Wild Comestics</Text>
                        <Text style={styles.cardDesc}>
                            <Text style={styles.cardTag}>120</Text> points
                        </Text>
                    </View>
                </View>
                <Text style={styles.soon}>Many more coming soon...</Text>
            </View>
        </ScrollView>
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
    row4: {
        display: 'flex',
        flexDirection: 'row',
    },
    row5: {
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
        textAlign: 'center',
        marginTop: 20
    }
})

export default Browse
