import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: "100%",

        backgroundColor: "#353432",
      }}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 300, height: 300, backgroundColor: "black" }}
        />
      ) : (
        <Image style={{ width: 300, height: 300, backgroundColor: "black" }} />
      )}

      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: 300,
          height: 40,
          backgroundColor: "#9A159A",
          borderRadius: 10,

          marginTop: 10,
        }}
        onPress={pickImage}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
            UPLOAD
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: 300,
          height: 40,
          backgroundColor: "#9A159A",
          borderRadius: 10,

          marginTop: 10,
        }}
        onPress={deleteImage}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
            DELETE
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: 300,
          height: 40,
          backgroundColor: "#9A159A",
          borderRadius: 10,

          marginTop: 10,
        }}
        onPress={pickImage}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
            PREDICT
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
