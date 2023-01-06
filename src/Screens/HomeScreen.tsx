import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/CartAction";
import { getProducts } from "../Redux/Actions/ProductsAction";
import {
  Button,
  Card,
  Text,
  ActivityIndicator,
  Appbar,
  useTheme,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Product } from "../Redux/ActionsType/ProductsActionsType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import ProductCard from "../Components/Product";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const data = useSelector((state: any) => state.products?.products);
  const cart = useSelector((state: any) => state?.cart);

  useEffect(() => {
    dispatch(getProducts() as any);
  }, []);

  const onPressCart = () => navigation.navigate("Cart");

  return (
    <View style={styles.container}>
      <Header
        type="products"
        cartCount={cart?.cartCount}
        title="PRODUCTS"
        onpressCart={onPressCart}
      />
      {data.length ? (
        <FlatList
          data={data}
          extraData={data}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPressAdd={() => dispatch(addToCart(item))}
            />
          )}
          contentContainerStyle={{ marginTop: 10, paddingBottom: 30 }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 10, width: "100%" }} />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator animating={true} color={"#235743"} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
