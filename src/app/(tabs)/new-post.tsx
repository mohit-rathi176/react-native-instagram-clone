import { useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const NewPost = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-4 items-center flex-1">
      {/* Image picker */}
      {image && (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-[3/4] rounded-lg shadow-md"
        />
      )}

      <Text className="text-blue-500 font-semibold my-4" onPress={pickImage}>
        {image ? 'Change' : 'Choose'}
      </Text>

      {/* Text input for caption */}
      <TextInput
        className="w-full p-2"
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="What's on your mind?"
      />

      {/* Button */}
      <Pressable className="p-2 w-full absolute bottom-4 bg-blue-500 rounded-md">
        <Text className="text-white font-semibold text-center text-lg">
          Share
        </Text>
      </Pressable>
    </View>
  );
};

export default NewPost;
