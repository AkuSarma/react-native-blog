import React from 'react';
import { useRouter } from 'expo-router';
import BlogDetails from '../components/BlogDetails';

const blogData = {
    title: 'Sample Blog Title',
    content: 'This is the content of the sample blog.',
    author: 'John Doe',
    date: 'October 10, 2023'
};

const BlogDetailsPage: React.FC = () => {
    const router = useRouter();

    return (
        <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', padding: '40px 20px' }}>
            <button onClick={() => router.back()} style={{ marginBottom: '20px' }}>Back</button>
            <BlogDetails {...blogData} />
        </div>
    );
};

export default BlogDetailsPage;