import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function ViewEventRNScreen({ route, navigation }) {

    const { eventId } = route.params;
    const { source, name, venue, date, desc } = route.params;

    return (
        <View style={{flex: 1, marginTop: Constants.statusBarHeight, backgroundColor: 'rgba(231,90,124,0.5)'}}>
            <View style={{flex: 0.12, elevation: 2, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 2}}>
                {/*Style 1*/}
                <TouchableOpacity style={{marginHorizontal: -8, padding: 4}} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        color='rgba(44,54,63,0.85)'
                        size={24}
                    />
                </TouchableOpacity>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', position: 'absolute', right: 58, paddingHorizontal: 10}}>
                    <Text style={{fontSize: 14, fontFamily: 'Medium', paddingVertical: 1, color: 'rgba(44,54,63,0.85)'}}>Smoke and Mirrors</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Light', paddingVertical: 1, color: 'rgba(44,54,63,0.85)'}}>Organizer</Text>
                </View>

                <Image source={source} style={{resizeMode: 'cover', width: 48, height: 48, borderRadius: 10}} />

                {/*Style 2*/}
                {/* <Image source={source} style={{resizeMode: 'cover', width: 48, height: 48, borderRadius: 10}} />

                <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', position: 'absolute', left: 58, paddingHorizontal: 10}}>
                    <Text style={{fontSize: 14, fontFamily: 'Medium', paddingVertical: 1}}>Smoke and Mirrors</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Light', paddingVertical: 1}}>Organizer</Text>
                </View>
                
                <TouchableOpacity style={{marginHorizontal: 2}}>
                    <FontAwesomeIcon 
                        icon={faShare}
                        color='rgba(44,54,63,0.85)'
                        size={24}
                    />
                </TouchableOpacity> */}
            </View>

            <View style={{flex: 0.44, elevation: 2, backgroundColor: 'white', paddingHorizontal: 12, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                <Text adjustsFontSizeToFit allowFontScaling numberOfLines={2} style={{flex:0.26, color: 'rgba(44,54,63,0.85)', fontFamily: 'Bold', fontSize: 26}}>
                    {name}
                </Text>

                <Text adjustsFontSizeToFit allowFontScaling numberOfLines={6} style={{flex:0.44, color: 'rgba(44,54,63,0.85)', fontFamily: 'Regular', fontSize: 15, paddingVertical: 6, paddingBottom: 10}}>
                    {desc}
                </Text>

                <View style={{flex:0.3, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, alignItems: 'center', paddingTop: 0, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faClock}
                            size={34}
                            color='rgba(44,54,63,0.85)'
                        />
                        <View style={{flexDirection: 'column', paddingLeft: 4}}>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 16, letterSpacing: 0.5 }}>
                                1800
                            </Text>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 11}}>
                                HOURS
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faCalendarAlt}
                            size={34}
                            color='rgba(44,54,63,0.85)'
                        />
                        <View style={{flexDirection: 'column', paddingLeft: 4}}>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 13}}>
                                Mon, 31
                            </Text>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 13}}>
                                August
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faRupeeSign}
                            size={34}
                            color='rgba(44,54,63,0.85)'
                        />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 13}}>
                                Cost
                            </Text>
                            <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Medium', fontSize: 14}}>
                                FREE
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flex: 0.24, elevation: 1, top: -45, backgroundColor: 'white',  overflow: 'hidden', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'space-evenly'}}>                
                <View style={{flex: 0.72, flexDirection: 'row', paddingTop: 40, alignItems: 'center', paddingHorizontal: 12 }}>
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <View style={{backgroundColor: 'rgba(44,54,63,0.2)', width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3}}>
                        <Text style={{color: 'rgba(44,54,63,0.85)', fontFamily: 'Regular'}}>+4</Text>
                    </View>
                    <Text style={{fontFamily: 'Regular', marginHorizontal: 3, color: 'rgba(44,54,63,0.85)'}}>Members</Text>
                </View>

                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: 'rgba(231,90,124,1)', width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3}}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            size={16}
                            color='rgba(44,54,63,0.85)'
                        />
                    </TouchableOpacity>
                    
                    <Text style={{fontFamily: 'Medium', marginHorizontal: 3}}>
                        Join Event
                    </Text>
                </View> */}

                <TouchableOpacity style={{flex: 0.28, backgroundColor: 'rgba(44,54,63,0.2)', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'rgba(231,90,124,1)', fontFamily: 'SemiBold', fontSize: 16}}>
                        Join Event
                    </Text>
                </TouchableOpacity>                
            </View>
            
            <View style={{ flexDirection: 'row', paddingHorizontal: 12, flex: 0.2, top: -24, justifyContent: 'space-around', alignItems: 'center' }}>
                <View 
                    style={{
                        overflow: 'hidden',
                        borderRadius: 10,
                    }}
                >
                <MapView
                    style={{
                        bottom: 0,
                        height: 140,
                        width: Dimensions.get('window').width * 0.55                   
                    }}
                    
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                </View>
                <Image source={source} style={{resizeMode: 'cover', width: Dimensions.get('window').width * 0.32, height: 140, borderRadius: 10}}/>
            </View>
            
        </View>
        // <View style={styles.viewEventContainer}>
        //     <Text>{`${source}`}</Text>
        //     <Text style={{color: 'rgba(44,54,63,0.85)'}}>{name}</Text>
        //     <Text>{eventId}</Text>
        //     <Text>{venue}</Text>
        //     <Text>{date}</Text>
        //     <Text>{JSON.stringify(route)}</Text>
        // </View>
    );
}

export default ViewEventRNScreen;

const styles = StyleSheet.create({
    viewEventContainer: {
        padding: 10,
        marginTop: 20,
        justifyContent: 'flex-start',
    },
});