import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

interface Blog {
    title: string;
    author: string;
    dateCreated: string;
}

interface BlogComponentProps {
    blog: Blog;
}

const BlogComponent: React.FC<BlogComponentProps> = ({ blog }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        router.push('/blogDetails');
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.title}>{blog.title}</Text>
                <Text style={styles.author}>By: {blog.author}</Text>
                <Text style={styles.date}>Published on: {new Date(blog.dateCreated).toLocaleDateString()}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    author: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#999',
    },
});

export default BlogComponent;