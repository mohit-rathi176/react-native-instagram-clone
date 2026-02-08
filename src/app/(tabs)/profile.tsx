import { Button, Text } from "react-native";
import { supabase } from "~/src/lib/supabase";

const Profile = () => {
  const logout = () => {
    supabase.auth.signOut();
  };

  return <Button title="Sign out" onPress={logout} />;
};

export default Profile;
