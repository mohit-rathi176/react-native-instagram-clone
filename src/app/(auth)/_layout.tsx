import { Redirect, Stack } from "expo-router";
import { useAuth } from "~/src/providers/AuthProvider";

const AuthLayout = () => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Redirect href="/(tabs)" />
	} else {
		return <Stack />
	}
};

export default AuthLayout;