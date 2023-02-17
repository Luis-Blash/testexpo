import { Button, Text, View } from "react-native";
import { pathRoute } from "../navigator";

export const ScreenHome = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenSelectPets);
  };
  return (
    <View>
      <View>
        <Text>ScreenHome</Text>
        <Button title="Pets" onPress={goNavigate} />
      </View>
    </View>
  );
};
