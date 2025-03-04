import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BlogDetailsProps {
    title: string;
    author: string;
    content: string;
    date: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ title, author, content, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>By {author} on {date}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        maxWidth: 800,
        marginHorizontal: 'auto',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    author: {
        color: '#555',
        fontStyle: 'italic',
        marginVertical: 10,
    },
    content: {
        marginTop: 20,
        lineHeight: 1.6,
    },
});

export default BlogDetails;