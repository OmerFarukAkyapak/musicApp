import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#c1a5ba',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    info_conteiner: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    titletext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    },
    details_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    artisttext: {
        fontWeight: 'bold',
    },
    yeartext: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 3,
        borderRadius: 5,
        backgroundColor: 'lightgray',
    },
    soldout_text: {
        paddingHorizontal: 5,
        fontWeight: 'bold',
        color: 'red',
    },
    content_container: {
        flexDirection: 'row',
    }

});
