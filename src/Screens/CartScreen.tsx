import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../Redux/Actions/CartAction";
import { Avatar, Appbar, Text, List, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Cart } from "../Redux/ActionsType/CartActionType";
import Header from "../Components/Header";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartData = useSelector((state: any) => state?.cart);
  const renderItem = ({ item }: { item: Cart }) => {
    return (
      <List.Item
        style={{
          borderWidth: 0.5,
          borderColor: "gray",
          padding: 3,
          marginVertical: 3,
          marginHorizontal: 8,
        }}
        title={item?.name}
        description={() => (
          <View>
            <Text variant="bodyMedium">{`Price: ₹${item?.price}`}</Text>
            <Text variant="bodyMedium">{`Color:${item?.colour}`}</Text>
          </View>
        )}
        left={() => <Avatar.Image size={100} source={{ uri: item?.img }} />}
        right={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              icon="minus"
              mode="contained-tonal"
              iconColor={"black"}
              size={20}
              accessibilityLabel="remove-cart"
              onPress={() => dispatch(removeToCart(item))}
            />
            <Text style={{ marginHorizontal: 1 }}>{item?.qty}</Text>
            <IconButton
              icon="plus"
              mode="contained-tonal"
              iconColor={"black"}
              size={20}
              accessibilityLabel="add-cart"
              onPress={() => dispatch(addToCart(item))}
            />
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        cartTotal={cartData.cartTotal.toFixed(2)}
        title="CART"
        type={"cart"}
        goBack={() => navigation.goBack()}
      />

      {cartData.cart.length ? (
        <FlatList
          testID="flatlist"
          data={cartData.cart}
          extraData={cartData.cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ marginTop: 10, paddingBottom: 30 }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 5, width: "100%" }} />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Cart is Empty</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#ffff",
  },
});
