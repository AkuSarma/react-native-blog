import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useRouter } from 'expo-router';
import BlogComponent from '../components/BlogComponent';

const generateRandomBlogs = (num: number) => {
    const blogs = [];
    for (let i = 0; i < num; i++) {
        blogs.push({
            id: i,
            author: `Author ${i + 1}`,
            dateCreated: new Date().toISOString(),
            title: `Blog Title ${i + 1}`
        });
    }
    return blogs;
};

const Home = () => {
    const router = useRouter();
    const blogs = generateRandomBlogs(10);

    return (
        <ScrollView style={styles.container}>
            {blogs.map(blog => (
                <BlogComponent key={blog.id} blog={blog} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default Home;