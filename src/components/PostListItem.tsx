import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { Post } from "@models/Post";

interface PostProps {
	post: Post;
}

const PostListItem = ({ post }: PostProps) => {
	return (
		<View className="bg-white flex-1">
			{/* Header */}
			<View className="p-2 flex-row items-center gap-2">
				<Image src={post.user.image_url} className="w-[42] aspect-square rounded-full" />
				<Text className="font-semibold">{post.user.username}</Text>
			</View>

			{/* Image */}
			<Image src={post.image_url} className="w-full aspect-[4/3]" />

			{/* Footer */}
			<View className="px-4 py-2 flex-row gap-4">
				<FontAwesome name="heart-o" size={24} />
				<FontAwesome name="comment-o" size={24} />
				<FontAwesome name="send-o" size={24} />

				<FontAwesome name="bookmark-o" size={24} className="ml-auto" />
			</View>
		</View>
	);
};

export default PostListItem;