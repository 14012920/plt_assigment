import React from "react";
import { View, Pressable } from "react-native";
import { Appbar, Text, withTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

type hederProps = {
  title: string;
  cartCount?: number;
  onpressCart?: () => void;
  theme: any;
  type: string;
  goBack?: () => void;
  cartTotal?: number;
};

const Header = ({
  title,
  cartCount,
  onpressCart,
  theme,
  goBack,
  type,
  cartTotal,
}: hederProps) => {
  if (type === "products") {
    return (
      <Appbar.Header>
        <Appbar.Content title={title} />
        <View>
          <Pressable onPress={onpressCart}>
            <Ionicons
              Ionicons
              name="md-cart"
              size={32}
              color={theme.colors.iconColor}
            />
            {cartCount ? (
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#192345",
                  width: 16,
                  height: 16,
                  borderRadius: 15 / 2,
                  right: 1,
                  top: +4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontSize: 8,
                  }}
                >
                  {cartCount}
                </Text>
              </View>
            ) : null}
          </Pressable>
        </View>
      </Appbar.Header>
    );
  } else {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title={title} />
        <View style={{ padding: 4 }}>
          <Text variant="labelLarge">Total:₹{cartTotal}</Text>
        </View>
      </Appbar.Header>
    );
  }
};
export default withTheme(Header);
