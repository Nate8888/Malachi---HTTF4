import React, { useState, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { defaults, colors } from '../styles/global'

const CreatePlan = (props) => {
    const Prod1 = require('../assets/sample-products/tv-samsung.jpeg')
    const Prod2 = require('../assets/sample-products/paris.jpeg')
    const Prod3 = require('../assets/sample-products/concert.png')
    const closeIcon = require('../assets/close.png')

    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([
        {
            name: 'Samsung 4K Smart 42-inch TV ',
            price: '$409.19',
            upToCashback: '200',
            image: Prod1
        },
        {
            name: '2 Weeks in Paris for 2',
            price: '$2,300.98',
            upToCashback: '420',
            image: Prod2
        },
        {
            name: 'Hamilton Tour Ticket for 1',
            price: '$250.00',
            upToCashback: '190',
            image: Prod3
        }
    ])
    const [matchedProducts, setMatchedProducts] = useState(products)

    const handleSearchTextChange = (query) => {
        console.log(query)
        if (query) {
            let matched = products.filter(p => {
    			return p && p.name.toLowerCase().match(query.toLowerCase()) && true;
    		});
            setMatchedProducts(matched)
        }else {
            setMatchedProducts(products)
        }

        setSearchText(query)
    }

    // Rendering products
    let productsToRender = matchedProducts.map((p, ix) => (
        <View style={styles.productContainer} key={ix}>
            <View style={styles.productCol1}>
                <Image source={p.image} style={styles.productImage} />
            </View>
            <View style={styles.productCol2}>
                <Text style={styles.name}>{p.name}</Text>
                <Text style={styles.upToCashback}>Up to {p.upToCashback} points</Text>
                <Text style={styles.price}>{p.price}</Text>
            </View>
        </View>
    ))

    // In case there are no matches for the user's product query
    if (!productsToRender || (productsToRender && productsToRender.length == 0)) {
        productsToRender = (
            <Text style={styles.noMatchesText}>
                Nothing was found <Entypo name="emoji-sad" size={14} color={colors.d} />
            </Text>
        )
    }

    return (
        <View style={styles.createPlanContainer}>
            <View style={styles.modal}>
                <TouchableOpacity onPress={props.closeModal} style={styles.closeButtonTouchable}>
                    <Image source={closeIcon} style={styles.closeButton} />
                </TouchableOpacity>
                <Text style={styles.createPlanTitle}>Let's create a plan</Text>
                <Text style={styles.whatis}>What is a plan?</Text>
                <View style={styles.productsContainer}>
                    <TextInput
                        style={styles.search}
                        value={searchText}
                        onChangeText={handleSearchTextChange}
                        placeholder="Search for a product, concert, or trip"
                    />
                    <View style={styles.products}>
                        {productsToRender}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    createPlanContainer: {
        flex: 1,
        paddingTop: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: defaults.borderRadiusModal
    },
    modal: {
        backgroundColor: colors.w,
        position: 'relative',
        flex: 1,
        borderRadius: defaults.borderRadiusModal,
        width: '100%',
        padding: 16
    },
    closeButtonTouchable: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 999
    },
    closeButton: {
        width: 12,
        height: 12
    },
    createPlanTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: colors.d
    },
    whatis: {
        color: colors.g
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: defaults.borderRadiusInput,
        backgroundColor: colors.w,
        padding: 6,
        shadowColor: colors.sc,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, /* for android */
        marginTop: 7
    },
    productCol1: {
        marginRight: 6
    },
    productCol2: {
        // marginRight: 4
    },
    productImage: {
        borderRadius: defaults.borderRadiusInput,
        width: 50,
        height: 50
    },
    name: {
        fontWeight: '800',
    },
    upToCashback: {
        color: colors.g
    },
    price: {
        marginTop: 4
    },
    productsContainer: {

    },
    search: {
        width: '100%',
        borderRadius: defaults.borderRadiusInput,
        borderWidth: 1,
        borderColor: colors.d,
        padding: 8,
        marginTop: 10
    },
    products: {

    },
    noMatchesText: {
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CreatePlan
