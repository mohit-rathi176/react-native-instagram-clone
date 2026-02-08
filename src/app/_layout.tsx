import { Stack } from "expo-router";
import "~/global.css";
import AuthProvider from "../providers/AuthProvider";

const RootLayout = () => {
	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }} />;
		</AuthProvider>
	);
};

export default RootLayout;