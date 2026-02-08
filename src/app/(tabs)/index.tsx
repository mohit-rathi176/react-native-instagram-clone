import { FlatList } from "react-native"
import posts from '~/assets/data/posts.json';
import PostListItem from "~/src/components/PostListItem";

const Feed = () => {
	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <PostListItem post={item} />}
			contentContainerStyle={{ paddingVertical: 10, gap: 10, maxWidth: 512, width: '100%', marginHorizontal: 'auto' }}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default Feed;