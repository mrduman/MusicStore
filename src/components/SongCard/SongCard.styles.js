import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container : {
        padding:10,
        flexDirection : 'row',
        
    },
    image : {
        width:100,
        height:100,
        borderRadius :50,
    },
    inner_container : {
        flex :1,
        padding:10,
        justifyContent:'center', 
        

    },
    title : {
        fontWeight:'bold',
        fontSize :27
    },
    info_container : {
        flexDirection:'row',
        flex :1,
        alignItems :'center',
      
    },
    year : {
        fontSize:12,
        marginLeft :10,
        color :'gray',
        fontWeight:'bold',
    },
    soldout_container : {
        borderWidth :1,
        borderColor : 'red',
        padding :5, 
        borderRadius :5,
        borderEndWidth:1,
        borderTopWidth:2,
        borderWidth:5,
        backgroundColor:'black'
        
    },
    content_container : {
        flexDirection : 'row',
        

    },
    soldout_title : {
        color :'red',
        fontSize:13
    },
    album : {
        borderWidth :1,
        borderColor:'purple',
        padding:5,
        borderRadius:5,
        fontSize:13,
        width:120,
        top:2,
        fontWeight:'500',
        textAlign:'left'
        
        

        
    },
    album_container: {
        flex:1,
        
       
    }
})