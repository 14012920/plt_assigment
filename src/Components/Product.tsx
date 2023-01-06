import React from "react";
import { Button, Text, withTheme, Card } from "react-native-paper";
import { Product } from "../Redux/ActionsType/ProductsActionsType";

const ProductCard = ({
  item,
  onPressAdd,
}: {
  item: Product;
  theme: any;
  onPressAdd: any;
}) => {
  return (
    <Card style={{ marginHorizontal: 10 }}>
      <Card.Content style={{ borderRadius: 0 }}>
        <Card.Cover
          source={{ uri: item?.img }}
          style={{ resizeMode: "contain" }}
        />
        <Text variant="titleLarge">{item?.name}</Text>
        <Text variant="headlineSmall">{`Price:${item?.price}`}</Text>
        <Text variant="bodyMedium">{`Color:${item?.colour}`}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPressAdd} accessibilityHint="add-cart-button">
          ADD+
        </Button>
      </Card.Actions>
    </Card>
  );
};
export default withTheme(ProductCard);
