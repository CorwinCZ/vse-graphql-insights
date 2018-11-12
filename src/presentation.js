import React, { Component } from 'react';

import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Link,
  Image,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import clientServerModel from './assets/client-server-model.png';
import physicalServer from './assets/physical-server.jpg';
import graphqlLogo from './assets/graphql-logo.png';
import graphTheory from './assets/graph-theory.png';
import restResponse from './assets/rest-response.png';
import networkCommunication from './assets/network-communication.jpeg';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    quarternary: '#CECECE', // Gray
    tertiary: '#03A9FC', // Blue
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

// TODO - delete this. TODO TODO TODO TODO

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            GraphQL insights
          </Heading>
          <Text textColor="tertiary" size={1}>
            Petr Čaněk
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            {`Client ↔️ Server`}
          </Heading>
          <Image src={clientServerModel} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Client
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Desktop with browser</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Mobile / tablet</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>IoT device</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Another server :) </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Client responsibility
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>How the application looks - UI</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>How is the application used - UX</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Handle user interaction</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Provides data and actions on data to user
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Perform CRUD operations with server</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Create Read, Update, Delete</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server
          </Heading>
          <Image src={physicalServer} />
          <List>
            <Appear>
              <ListItem size={30}>Physical or virtual server</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Application in container (Docker)</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Serverless application (AWS Lambda)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server responsibility
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>
                Provide CRUD capabilities for clients
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Handle security & authentication & authorization
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Handle data operations and storage</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server and Client
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Are not directly connected</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>N:M relation</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                One server provides for multiple clients
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                One client consumes data from multiple servers
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Each has different job</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Communication layer
          </Heading>
          <Image src={networkCommunication} />
          <List>
            <Appear>
              <ListItem size={30}>Internet - TCP/IP, sockets</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Wired connection - USB, serial cables
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Wireless connection - bluetooth</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Proprietary protocols / hardware</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST API
          </Heading>
          <Heading size={5} textColor="tertiary">
            Representational state transfer
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Designed on top of TCP/IP protocol</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Uses HTTP methods - GET, POST, PUT, PATCH, DELETE
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Oriented around resources</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Designed to provide CRUD capabilities on demand / request
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            REST endpoints examples
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>https://example.com/products</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>https://example.com/products/123</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                https://example.com/products?category=awesome&color=pink
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor="tertiary">
            https://example.com/products
          </Heading>

          <Image src={restResponse} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST server
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Server is in charge of:</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>What data are provided</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                What data can be mutated - content of endpoitns
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                How the client accesses the data - endpoints
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>How the response is shaped</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST client
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Client consumes REST API using</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Network calls - fetch, axios</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Multiple request on single page</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Doesn't have control over any aspect of response
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Unless specifically provided by API</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST advantages 👍
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>
                Simple and fast to start building it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Widely used - tons of examples, materials, tools
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Build on top of TCP/IP layer</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Can be tailor-fitted for a specific client
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            REST disadvantages 👎
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Locked to TCP/IP protocol</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Loose specification - each REST API is different
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Hard to build automated tools</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Requires multiple endpoints hits to get all data
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Tight coupling between client and server
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Hard to write documentation => bad quality of documentation
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={graphqlLogo} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="secondary">
            GraphQL is
          </Heading>
          <Appear>
            <Heading size={4} textColor="tertiary">
              Alternative to REST
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="tertiary">
              on steroids 💪
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="secondary">
            GraphQL is
          </Heading>
          <Appear>
            <Heading size={4} textColor="tertiary">
              Another way how to build API
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Uses Graph theory</ListItem>
            </Appear>
            <Appear>
              <Image src={graphTheory} />
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL server
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>
                Describes nodes and relations between them
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Describes entry points to the graph</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Provides resulting graph as a API for clients
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Doesn't care about transfer method</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} textColor="secondary">
            DEMO
          </Heading>
          <Link
            href="https://eu1.prisma.sh/petr-canek-398ab8/interviewme-test/dev"
            target="_blank"
          >
            Playground
          </Link>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL properties
          </Heading>

          <List>
            <Appear>
              <ListItem size={30}>Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>You get only what you asked for</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Decouples server and client app</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Open-source with big community</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Field level errors</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Subscriptions - real life data</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Great number of tools</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL tools
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Relay / Apollo client</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Apollo server & graphql-yoga</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Prisma</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphQL Faker</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphiQL & GraphQL playground</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphQL bindings & schema stitching</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Editor plugins</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Link href="https://github.com/chentsulin/awesome-graphql">
                  GitHub - awesome GraphQL
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Benefits for developers 👍
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Easier API server development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Easier API consumer app development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Automatic documentation</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                API introspection and self-discovery
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Enables rapid prototyping</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Tools!</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Benefits for clients 👍
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Faster development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Smaller network requets</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Less network requets</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Less code -> less bugs</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Happy developers</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Disadvantages of GraphQL 👎
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Bigger complexity on start</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>More work beforehand</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Recursive queries</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                File handling requires extra work / libraries
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>No built-in versioning</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            What to use?
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>New private API server - GraphQL</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                New public API server - REST + GraphQL
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Existing REST server - keep using REST and
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                watch for problems - if they occur, consider migration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Complex set-up - consult senior</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Q&A
          </Heading>
          <Heading size={6} textColor="tertiary">
            Thank you for attention :)
          </Heading>
          <br />
          <Link
            href="https://github.com/CorwinCZ/vse-graphql-insights"
            taget="_blank"
          >
            https://github.com/CorwinCZ/vse-graphql-insights
          </Link>
          <br />
          <Link
            href="http://vse-4it445-graphql-insights.surge.sh/"
            taget="_blank"
          >
            http://vse-4it445-graphql-insights.surge.sh/
          </Link>
        </Slide>
      </Deck>
    );
  }
}
