import React from 'react';

interface BlogDetailsProps {
    title: string;
    author: string;
    content: string;
    date: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ title, author, content, date }) => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>{title}</h1>
            <p style={{ color: '#555', fontStyle: 'italic' }}>By {author} on {date}</p>
            <div style={{ marginTop: '20px', lineHeight: '1.6' }}>{content}</div>
        </div>
    );
};

export default BlogDetails;