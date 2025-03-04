import React from "react";
import { useRouter } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
import BlogDetails from "../components/BlogDetails";

const blogData = {
  title: "Sample Blog Title",
  content: "This is the content of the sample blog.",
  author: "John Doe",
  date: "October 10, 2023",
};

const BlogDetailsPage: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <BlogDetails {...blogData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    padding: 20,
  },
});

export default BlogDetailsPage;
