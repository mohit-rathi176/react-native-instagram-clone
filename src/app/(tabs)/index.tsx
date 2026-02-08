import { FlatList } from "react-native"
import posts from '~/assets/data/posts.json';
import PostListItem from "~/src/components/PostListItem";

const Feed = () => {
	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <PostListItem post={item} />}
			contentContainerStyle={{ gap: 10 }}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default Feed;