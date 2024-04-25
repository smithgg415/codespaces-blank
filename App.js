import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: "#D3D3D3", height:"100%" }}>
      {/*topBar*/}
      <View style={{ backgroundColor: "green", width: "100%", height: 50, display: "flex", flexDirection: "row" }}>
        {/*Texto no topBar*/}
        <View style={{ display: "flex", flexDirection: "row", top: 10, left: 10 }}>
          <Text style={{ color: "white", fontSize: 20 }}>Hoje</Text>
          <Icon name="arrow-down" size={15} style={{ color: "#fff", marginLeft: 10, top: 5 }} />
        </View>
        {/*Icones no topBar*/}
        <View style={{ display: "flex", flexDirection: "row", position: "absolute", right: 15, top: 10 }}>
          <Icon name="arrow-left" size={25} style={{ color: "white", marginRight: 30 }} />
          <Icon name="arrow-right" size={25} color="#fff" />
        </View>
      </View>
      {/*subTopBar* com texto*/}
      <View style={{ display: "flex", flexDirection: "row", position: "absolute", right: 10, top: 64 }}>
        <Text style={{ color: "#79827F" }}>EXPLORAR PLANOS ALIMENTARES</Text>
        <Icon name="arrow-down" size={15} style={{ color: "#79827F", marginLeft: 10, }} />
      </View>

      {/*linha representativa*/}
      <View style={{ width: "100%", height: 1, backgroundColor: "#79827F", top: 50 }}></View>

      {/*Informações diárias sobre calorias*/}
      <View style={{ top: 1, left: 15, flexDirection: "row", display: "flex", position:"relative" }}>
        <Icon name="square" size={55} style={{ color: "orange" }} />
        <View style={{ left: 10, top: 5 }}>
          <Text style={{ fontSize: 16, marginBottom: 7 }}>Calorias Restantes</Text>
          <Text style={{ fontSize: 16 }}>Calorias Consumidas</Text>
        </View>
      </View>


      <View style={{ width: "90%", borderRadius: 15 }}></View>
      <View></View>
      <View></View>
      <View></View>
    </ScrollView>
  );
}