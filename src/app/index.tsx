import { Text } from "@/design/typography";
import { View } from "@/design/view";
import { StatusBar } from "expo-status-bar";

export default function Home() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>Open up index.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
