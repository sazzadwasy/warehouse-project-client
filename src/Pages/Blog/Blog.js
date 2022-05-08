import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog-info mt-2 mb-4'>
            <h1 className='text-center mb-4'>Blog Questions Answers</h1>
            <p className='fw-bold'>Difference between javaScrit and nodejs?</p>
            <p>Ans : Nodejs is a JS runtime environment that lets Javascript to be run on the server-side. It is cross-platform, and it thus allows the JS code to run outside any browser easily. There are various modules in NodeJS, and it is mainly utilised in the process of web development.
                Javascript is a scripting language, but JS is basically the ECMA script's updated version. Javascript is mainly utilised in making the HTML web pages more dynamic and interactive. It is a high-level language, and it makes use of the Oops concept. Yet, it is based primarily on the concept of prototype inheritance.
            </p>
            <br />
            <br />
            <p className='fw-bold'>Difference between Sql vs noSql?</p>
            <p>Ans : There are a lot of databases used today in the industry. Some are SQL databases, some are NoSQL databases. The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.
                Some Difference between Sql and NoSql are-1.Sql Databases are categorized as Relational Database Management System 1.NoSQL databases are categorized as Non-relational or distributed database system, 2.SQL databases have fixed or static or predefined schema 2.NoSQL databases have dynamic schema, 3.SQL databases display data in form of tables so it is known as table-based database 3.NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores etc
            </p>
            <br />
            <br />
            <p className='fw-bold'>What is the purpose of Json web token(jwt) and how does it work?</p>
            <p>Ans :A JSON web token (JWT) is a URL-safe method of transferring claims between two parties. The JWT encodes the claims in JavaScript object notation and optionally provides space for a signature or full encryption. The JWT proposed standard has started to see wider adoption with frameworks like OAuth 2.0 and standards like OpenID connect leveraging JWTs.
                By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key.
            </p>
        </div>
    );
};

export default Blog;