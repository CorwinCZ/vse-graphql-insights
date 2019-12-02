import React, { Component } from 'react';

import { Deck, Heading, ListItem, List, Slide, Text, Appear, Link, Image } from 'spectacle';

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

export default class Presentation extends Component {
  renderAppearListItem = inputString => (
    <Appear>
      <ListItem>{inputString}</ListItem>
    </Appear>
  );

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
            {this.renderAppearListItem(`Desktop with browser`)}
            {this.renderAppearListItem(`Mobile / tablet`)}
            {this.renderAppearListItem(`IoT device`)}
            {this.renderAppearListItem(`Another server :) `)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Client responsibility
          </Heading>

          <List>
            {this.renderAppearListItem(`How the application looks - UI`)}
            {this.renderAppearListItem(`How is the application used - UX`)}
            {this.renderAppearListItem(`Handle user interaction`)}
            {this.renderAppearListItem(`Provides data and actions on data to user`)}
            {this.renderAppearListItem(`Perform CRUD operations with server`)}
            {this.renderAppearListItem(`Create Read, Update, Delete`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server
          </Heading>
          <Image src={physicalServer} />
          <List>
            {this.renderAppearListItem(`Physical or virtual server`)}
            {this.renderAppearListItem(`Application in container (Docker)`)}
            {this.renderAppearListItem(`Serverless application (AWS Lambda)`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server responsibility
          </Heading>
          <List>
            {this.renderAppearListItem(`Provide CRUD capabilities for clients`)}
            {this.renderAppearListItem(`Handle security & authentication & authorization`)}
            {this.renderAppearListItem(`Handle data operations and storage`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Server and Client
          </Heading>
          <List>
            {this.renderAppearListItem(`Are not directly connected`)}
            {this.renderAppearListItem(`N:M relation`)}
            {this.renderAppearListItem(`One server provides for multiple clients`)}
            {this.renderAppearListItem(`One client consumes data from multiple servers`)}
            {this.renderAppearListItem(`Each has different job`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Communication layer
          </Heading>
          <Image src={networkCommunication} />
          <List>
            {this.renderAppearListItem(`Internet - TCP/IP, sockets`)}
            {this.renderAppearListItem(`Wired connection - USB, serial cables`)}
            {this.renderAppearListItem(`Wireless connection - bluetooth`)}
            {this.renderAppearListItem(`Proprietary protocols / hardware`)}
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
            {this.renderAppearListItem(`Designed on top of TCP/IP protocol`)}
            {this.renderAppearListItem(`Uses HTTP methods - GET, POST, PUT, PATCH, DELETE`)}
            {this.renderAppearListItem(`Oriented around resources`)}
            {this.renderAppearListItem(`
                Designed to provide CRUD capabilities on demand / request
              `)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            REST endpoints examples
          </Heading>

          <List>
            {this.renderAppearListItem(`https://example.com/products`)}
            {this.renderAppearListItem(`https://example.com/products/123`)}
            {this.renderAppearListItem(`
                https://example.com/products?category=awesome&color=pink
              `)}
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
            {this.renderAppearListItem(`Server is in charge of:`)}
            {this.renderAppearListItem(`What data are provided`)}
            {this.renderAppearListItem(`What data can be mutated - content of endpoitns`)}
            {this.renderAppearListItem(`How the client accesses the data - endpoints`)}
            {this.renderAppearListItem(`How the response is shaped`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST client
          </Heading>

          <List>
            {this.renderAppearListItem(`Client consumes REST API using`)}
            {this.renderAppearListItem(`Network calls - fetch, axios`)}
            {this.renderAppearListItem(`Multiple request on single page`)}
            {this.renderAppearListItem(`Doesn't have control over any aspect of response`)}
            {this.renderAppearListItem(`Unless specifically provided by API`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            REST advantages 👍
          </Heading>

          <List>
            {this.renderAppearListItem(`Simple and fast to start building it`)}
            {this.renderAppearListItem(`Widely used - tons of examples, materials, tools`)}
            {this.renderAppearListItem(`Build on top of TCP/IP layer`)}
            {this.renderAppearListItem(`Can be tailor-fitted for a specific client`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            REST disadvantages 👎
          </Heading>

          <List>
            {this.renderAppearListItem(`Locked to TCP/IP protocol`)}
            {this.renderAppearListItem(`Loose specification - each REST API is different`)}
            {this.renderAppearListItem(`Hard to build automated tools`)}
            {this.renderAppearListItem(`Requires multiple endpoints hits to get all data`)}
            {this.renderAppearListItem(`Tight coupling between client and server`)}
            {this.renderAppearListItem(`
                Hard to write documentation => bad quality of documentation
              `)}
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
            {this.renderAppearListItem(`Uses Graph theory`)}
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
            {this.renderAppearListItem(`Describes nodes and relations between them`)}
            {this.renderAppearListItem(`Describes entry points to the graph`)}
            {this.renderAppearListItem(`Provides resulting graph as a API for clients`)}
            {this.renderAppearListItem(`Doesn't care about transfer method`)}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} textColor="secondary">
            DEMO
          </Heading>
          <Link href="https://eu1.prisma.sh/petr-canek-398ab8/interviewme-test/dev" target="_blank">
            Playground
          </Link>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL properties
          </Heading>

          <List>
            {this.renderAppearListItem(`Strongly typed`)}
            {this.renderAppearListItem(`You get only what you asked for`)}
            {this.renderAppearListItem(`Decouples server and client app`)}
            {this.renderAppearListItem(`Open-source with big community`)}
            {this.renderAppearListItem(`Field level errors`)}
            {this.renderAppearListItem(`Subscriptions - real life data`)}
            {this.renderAppearListItem(`Great number of tools`)}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            GraphQL tools
          </Heading>
          <List>
            {this.renderAppearListItem(`Relay / Apollo client`)}
            {this.renderAppearListItem(`Apollo server & graphql-yoga`)}
            {this.renderAppearListItem(`Prisma`)}
            {this.renderAppearListItem(`GraphQL Faker`)}
            {this.renderAppearListItem(`GraphiQL & GraphQL playground`)}
            {this.renderAppearListItem(`GraphQL bindings & schema stitching`)}
            {this.renderAppearListItem(`Editor plugins`)}
            {this.renderAppearListItem(`
                <Link href="https://github.com/chentsulin/awesome-graphql">
                  GitHub - awesome GraphQL
                </Link>
              `)}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Benefits for developers 👍
          </Heading>
          <List>
            {this.renderAppearListItem(`Easier API server development`)}
            {this.renderAppearListItem(`Easier API consumer app development`)}
            {this.renderAppearListItem(`Automatic documentation`)}
            {this.renderAppearListItem(`API introspection and self-discovery`)}
            {this.renderAppearListItem(`Enables rapid prototyping`)}
            {this.renderAppearListItem(`Tools!`)}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Benefits for clients 👍
          </Heading>
          <List>
            {this.renderAppearListItem(`Faster development`)}
            {this.renderAppearListItem(`Smaller network requets`)}
            {this.renderAppearListItem(`Less network requets`)}
            {this.renderAppearListItem(`Less code -> less bugs`)}
            {this.renderAppearListItem(`Happy developers`)}
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Disadvantages of GraphQL 👎
          </Heading>
          <List>
            {this.renderAppearListItem(`Bigger complexity on start`)}
            {this.renderAppearListItem(`More work beforehand`)}
            {this.renderAppearListItem(`Recursive queries`)}
            {this.renderAppearListItem(`File handling requires extra work / libraries`)}
            {this.renderAppearListItem(`No built-in versioning`)}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            What to use?
          </Heading>
          <List>
            {this.renderAppearListItem(`New private API server - GraphQL`)}
            {this.renderAppearListItem(`New public API server - REST + GraphQL`)}
            {this.renderAppearListItem(`Existing REST server - keep using REST and`)}
            {this.renderAppearListItem(`watch for problems - if they occur, consider migration`)}
            {this.renderAppearListItem(`Complex set-up - consult senior`)}
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
          <Link href="https://github.com/CorwinCZ/vse-graphql-insights" taget="_blank">
            https://github.com/CorwinCZ/vse-graphql-insights
          </Link>
          <br />
          <Link href="http://vse-4it445-graphql-insights.surge.sh/" taget="_blank">
            http://vse-4it445-graphql-insights.surge.sh/
          </Link>
        </Slide>
      </Deck>
    );
  }
}
